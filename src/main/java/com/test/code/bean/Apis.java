package com.test.code.bean;

import lombok.Data;

import java.util.List;

/**
 * @author xiao hu
 * @Date 2025/12/30
 */
@Data
public class Apis {
    private String name;
    private List<Urls> apis;

    @Data
    public static class Urls {
        private String url;
        private String type;
    }
}
