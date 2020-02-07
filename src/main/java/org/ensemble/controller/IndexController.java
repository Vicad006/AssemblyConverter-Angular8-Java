package org.ensemble.controller;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

/**
 * Created by oluwaseun on 07/02/2020.
 */
@Controller
public class IndexController {

    @RequestMapping(value = "/**/{[path:[^\\.]*}")
    public String redirect() {

        return "forward:/";
    }

}
