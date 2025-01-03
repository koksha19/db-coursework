import { defineUserConfig } from "vuepress";
import theme from "./theme.js";
import MarkdownItPlantuml from 'markdown-it-plantuml';

export default defineUserConfig({
  // Замінити на назву свого репозиторія
  base: "/db-coursework/",

  lang: "en-US",
  // Замінити на назву свого проєкту
  title: "Тема: Система управління відкритими даними",
  description: "Лабораторна робота 6 Берези Лева. Група ІМ-32",

  theme,

  extendsMarkdown: md =>{
    md.use(MarkdownItPlantuml);
  },
});