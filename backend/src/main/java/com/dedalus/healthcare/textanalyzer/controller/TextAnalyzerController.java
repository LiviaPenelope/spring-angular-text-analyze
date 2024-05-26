package com.dedalus.healthcare.textanalyzer.controller;

import com.dedalus.healthcare.textanalyzer.service.TextAnalyzerService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import java.util.Map;

@RestController
public class TextAnalyzerController {

    @Autowired
    private TextAnalyzerService textAnalyzerService;

    @GetMapping("/analyze")
    public Map<String, Integer> analyzeText(@RequestParam String type, @RequestParam String text) {
        return textAnalyzerService.analyzeText(type, text);
    }
}
