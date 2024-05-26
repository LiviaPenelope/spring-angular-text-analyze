package com.dedalus.healthcare.textanalyzer.service;

import org.springframework.stereotype.Service;

import java.util.HashMap;
import java.util.Map;

@Service
public class TextAnalyzerService {

    public Map<String, Integer> analyzeText(String type, String text) {
        Map<String, Integer> result = new HashMap<>();
        char[] chars = text.toCharArray();

        if (type.equalsIgnoreCase("vowels")) {
            for (char c : chars) {
                if ("AEIOUaeiou".indexOf(c) != -1) {
                    result.put(String.valueOf(c).toUpperCase(), result.getOrDefault(String.valueOf(c).toUpperCase(), 0) + 1);
                }
            }
        } else if (type.equalsIgnoreCase("consonants")) {
            for (char c : chars) {
                if (Character.isLetter(c) && "AEIOUaeiou".indexOf(c) == -1) {
                    result.put(String.valueOf(c).toUpperCase(), result.getOrDefault(String.valueOf(c).toUpperCase(), 0) + 1);
                }
            }
        }

        return result;
    }
}
