package com.test.code.utils;

import com.alibaba.fastjson2.JSON;
import com.alibaba.fastjson2.JSONArray;
import com.alibaba.fastjson2.JSONObject;
import com.alibaba.fastjson2.JSONWriter;


import java.io.*;
import java.net.URISyntaxException;
import java.net.URL;
import java.nio.charset.StandardCharsets;
import java.util.List;

/**
 * @author xiao hu
 * @Date 2025/12/30
 */
public class JsonMergeUtil {
    public static final String SITES_PATH = "sites";
    public static final List<String> MERGE_FOLDERS = List.of("lives", "parses", "ijk", "rules", "flags", "doh", "ads");

    public static void merge() {
        ClassLoader classLoader = JsonMergeUtil.class.getClassLoader();

        System.out.println("开始合并json文件....");
        System.out.println("==> step1: 合并 sites");
        JSONArray sites = mergeSites(classLoader);
        System.out.println("<== step1: sites 合并完成");


        URL structureUrl = classLoader.getResource("structure.json");
        if (structureUrl == null) {
            System.out.println("无法找到结构文件: structure.json");
            return;
        }
        JSONObject structureJson = JSON.parseObject(structureUrl);
        structureJson.put("sites", sites);

        int step = 2;
        for (String mergeFolder : MERGE_FOLDERS) {
            System.out.println("==> step" + step + ": 合并 " + mergeFolder);
            JSONArray jsonArray = generalMerge(classLoader, mergeFolder);
            structureJson.put(mergeFolder, jsonArray);
            System.out.println("<== step" + step + ": " + mergeFolder + " 合并完成");
            step++;
        }

        // 写出到 "temp/merge.json"
        try (FileOutputStream outputStream = new FileOutputStream( "main.json")
        ) {
            JSON.writeTo(outputStream, structureJson, JSONWriter.Feature.PrettyFormat);
        } catch (IOException e) {
            throw new RuntimeException(e);
        }
    }

    public static File[] getFiles(ClassLoader classLoader, String resourcePath) {
        URL resourceUrl = classLoader.getResource(resourcePath);
        if (resourceUrl == null) {
            throw new RuntimeException("无法找到资源目录: " + resourcePath);
        }
        File resourceDir;
        try {
            resourceDir = new File(resourceUrl.toURI());
        } catch (URISyntaxException e) {
            throw new RuntimeException("无法将资源目录转换为URI: " + resourcePath);
        }

        File[] files = resourceDir.listFiles();
        if (files == null) {
            System.out.println(resourcePath + "目录下没有文件");
            return null;
        }
        return files;
    }

    public static JSONArray mergeSites(ClassLoader classLoader) {
        File[] files = getFiles(classLoader, SITES_PATH);

        if (files == null) {
            return null;
        }
        JSONArray jsonArray = new JSONArray();
        for (File file : files) {
            if (!file.getName().toLowerCase().endsWith(".json")) {
                continue;
            }
            try (FileInputStream fileInputStream = new FileInputStream(file)) {
                JSONObject jsonObject = JSON.parseObject(fileInputStream, StandardCharsets.UTF_8);
                JSONArray temp = siteSet(jsonObject);
                if (temp != null && !temp.isEmpty()) {
                    jsonArray.addAll(temp);
                }
            } catch (IOException e) {
                throw new RuntimeException(e);
            }
        }
        return jsonArray;
    }

    public static JSONArray siteSet(JSONObject jsonObject) {
        if (jsonObject == null) {
            return null;
        }
        String jar = jsonObject.getString("jar");
        JSONArray sites = jsonObject.getJSONArray("sites");
        if (sites == null) {
            return null;
        }
        for (JSONObject siteJson : sites.toList(JSONObject.class)) {
            String siteJar = siteJson.getString("jar");
            String api = siteJson.getString("api");
            if (api != null && api.startsWith("csp_") && (siteJar == null || siteJar.isEmpty())) {
                siteJson.put("jar", jar);
            }
        }
        return sites;
    }

    public static JSONArray generalMerge(ClassLoader classLoader, String resourcePath) {
        File[] files = getFiles(classLoader, resourcePath);
        if (files == null) {
            return null;
        }
        JSONArray jsonArray = new JSONArray();
        for (File file : files) {
            if (!file.getName().toLowerCase().endsWith(".json")) {
                continue;
            }
            try (FileInputStream fileInputStream = new FileInputStream(file)) {
                jsonArray.addAll(JSON.parseArray(fileInputStream));
            } catch (IOException e) {
                throw new RuntimeException(e);
            }
        }
        return jsonArray;
    }
}

