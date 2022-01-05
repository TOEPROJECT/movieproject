package com.example.backend.Service;

import javax.mail.Message;
import javax.mail.internet.InternetAddress;
import javax.mail.internet.MimeMessage;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.PropertySource;
import org.springframework.mail.MailException;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.mail.javamail.MimeMessagePreparator;
import org.springframework.stereotype.Component;

@Component
@PropertySource("classpath:email.properties")
public class MailService { 
    Logger logger = LoggerFactory.getLogger(MailService.class);

    @Autowired
    JavaMailSender javaMailSender;

    public boolean sendMail(String to, String subject, String content) {
        MimeMessagePreparator preparator = new MimeMessagePreparator() {
            public void prepare(MimeMessage mimeMessage) throws Exception {
                mimeMessage.setRecipient(Message.RecipientType.TO, new InternetAddress(to));
                mimeMessage.setSubject(subject);
                mimeMessage.setText(content, "utf-8", "html");
            }
        };

        try {
            javaMailSender.send(preparator);
            return true;
        } catch (MailException me) {
            logger.error("MailException", me);
            return false;
        }
    }
}//메일 전송을 위한 Method 선언