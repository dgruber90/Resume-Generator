const jsPDF=require("jspdf")["jsPDF"],{AddEducation,AddExperience,AddHeader,AddSummary,AddTopSkills}=require("./utils.js");function ResumePDF(e){var e=SetDocConfig(e),{header:t,summary:i,top_skills:n,experience:d,education:o}=e["content"],r=new jsPDF({unit:"in"});return r.setLineWidth(.005),AddHeader(r,e,t),AddSummary(r,e,i),AddTopSkills(r,e,n),AddExperience(r,e,d),AddEducation(r,e,o),r}function SetDocConfig(e){return{margins:{top:1,left:1,right:1,bottom:1},pageSize:{width:8.25,height:11.75},fontConfig:{titleSize:16,textSize:11},sectionTitleSpacing:.4,sectionTextSpacing:.3,sectionEndSpacing:.2,currentY:0,content:e}}module.exports={ResumePDF:ResumePDF};