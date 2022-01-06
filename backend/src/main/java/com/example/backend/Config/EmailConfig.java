package com.example.backend.config;

import java.util.Properties;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.context.annotation.PropertySource;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.mail.javamail.JavaMailSenderImpl;

@Configuration
@PropertySource("classpath:email.properties")
public class EmailConfig {
	//properties 내의 저장된 값들을 지정
    @Value("${mail.smtp.port}")
    private int port;
    @Value("${mail.smtp.socketFactory.port}")
    private int socketPort;
    @Value("${mail.smtp.auth}")
    private boolean auth;
    @Value("${mail.smtp.starttls.enable}")
    private boolean starttls;
    @Value("${mail.smtp.starttls.required}")
    private boolean startlls_required;
    @Value("${mail.smtp.socketFactory.fallback}")
    private boolean fallback;
    @Value("${AdminMail.id}")
    private String id;
    @Value("${AdminMail.password}")
    private String password;

	 @Bean
	 public JavaMailSender javaMailService() {
	       JavaMailSenderImpl javaMailSender = new JavaMailSenderImpl();
	       javaMailSender.setHost("smtp.gmail.com"); //메일을 보내는 주체? 지정
	       javaMailSender.setUsername(id); //메일을 보내는 계정의 아이디;
	       javaMailSender.setPassword(password); //메일을 보내는 계정의 비밀번호
	       javaMailSender.setPort(port); //포트 설정
	       javaMailSender.setJavaMailProperties(getMailProperties());
	       javaMailSender.setDefaultEncoding("UTF-8");
	       return javaMailSender;
	 }
	 private Properties getMailProperties()
		{
			Properties pt = new Properties();
			pt.put("mail.smtp.socketFactory.port", socketPort); 
			pt.put("mail.smtp.auth", auth);
		    pt.put("mail.smtp.starttls.enable", starttls); 
		    pt.put("mail.smtp.starttls.required", startlls_required);
		    pt.put("mail.smtp.socketFactory.fallback",fallback);
		    pt.put("mail.smtp.socketFactory.class", "javax.net.ssl.SSLSocketFactory");
			return pt;
		}
}
