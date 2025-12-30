package com.test.code;

import com.test.code.utils.JsonMergeUtil;

import java.util.List;
import java.util.Scanner;

/**
 * @author xiao hu
 * @Date 2025/12/30
 */
public class MergeMain {


    public static void main(String[] args) {
        System.out.println("""
                请选择要使用的功能:
                1. json合并
                2. api请求
                3. 整理api""");

        Scanner sc = new Scanner(System.in);
        switch (sc.nextInt()) {
            case 1 -> JsonMergeUtil.merge();
            case 2 -> System.out.println("api请求功能");
            case 3 -> System.out.println("整理api功能");
            default -> System.out.println("请输入正确的选项");
        }
    }

}
