import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { sendEmail } from "./emailService";

export async function registerRoutes(app: Express): Promise<Server> {
  // Contact form submission endpoint
  app.post("/api/contact", async (req, res) => {
    try {
      const { name, email, subject, message } = req.body;
      
      // Validate required fields
      if (!name || !email || !message) {
        return res.status(400).json({ 
          success: false, 
          message: "Please provide name, email, and message" 
        });
      }
      
      // Send the email notification
      await sendEmail({
        name,
        email,
        subject: subject || "New contact form submission",
        message
      });
      
      // Return success response
      return res.status(200).json({ 
        success: true, 
        message: "Your message has been sent successfully" 
      });
    } catch (error) {
      console.error("Error sending contact form:", error);
      return res.status(500).json({ 
        success: false, 
        message: "Failed to send message. Please try again later."
      });
    }
  });

  const httpServer = createServer(app);

  return httpServer;
}
