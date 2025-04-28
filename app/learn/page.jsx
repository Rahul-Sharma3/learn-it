"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { motion } from "framer-motion";
import {
  Lightbulb,
  Target,
  BarChart,
  Compass,
  BookOpen,
  Users,
  UserCheck,
  LineChart,
  Shield,
  FileText,
  GraduationCap,
  Rocket,
  Award,
} from "lucide-react";

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5 }
};

const stagger = {
  animate: {
    transition: {
      staggerChildren: 0.1
    }
  }
};

export default function LearnMorePage() {
  return (
    <div className="container mx-auto px-4 py-16 space-y-16">
      {/* Hero Section */}
      <motion.section 
        className="text-center space-y-6"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h1 className="text-5xl font-bold md:text-6xl gradient-title animate-gradient">Learn More</h1>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
          Discover how Career Guide can help shape your professional journey
        </p>
      </motion.section>

      {/* About Section */}
      <motion.section 
        className="space-y-6 relative"
        variants={fadeInUp}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
      >
        <div className="absolute -z-10 w-[400px] h-[400px] bg-primary/5 rounded-full blur-3xl left-0 transform -translate-x-1/2"></div>
        <h2 className="text-3xl font-bold flex items-center gap-2">
          <Lightbulb className="h-8 w-8 text-primary" />
          About Career Guide
        </h2>
        <p className="text-lg text-muted-foreground">
          Career Guide is your trusted platform for discovering the right career path based on your skills, 
          interests, and aspirations. Whether you're a student planning your future or a professional looking 
          for a new direction, our application provides the guidance, tools, and resources to help you make 
          informed career decisions.
        </p>
      </motion.section>

      {/* Mission Section */}
      <motion.section 
        className="space-y-6"
        variants={fadeInUp}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
      >
        <h2 className="text-3xl font-bold flex items-center gap-2">
          <Target className="h-8 w-8 text-primary" />
          Our Mission
        </h2>
        <p className="text-lg text-muted-foreground">
          Our mission is to empower individuals by providing accurate career insights, expert advice, and 
          personalized recommendations. We believe everyone deserves access to the knowledge and support 
          needed to build a fulfilling and successful career.
        </p>
      </motion.section>

      {/* What We Offer Section */}
      <motion.section 
        className="space-y-8"
        variants={stagger}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
      >
        <h2 className="text-3xl font-bold flex items-center gap-2">
          <Award className="h-8 w-8 text-primary" />
          What We Offer
        </h2>
        <motion.div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6" variants={stagger}>
          <motion.div variants={fadeInUp}>
            <Card className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <GraduationCap className="h-5 w-5 text-primary group-hover:scale-110 transition-transform" />
                  Career Assessment Tools
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Understand your strengths, interests, and potential career matches through personalized 
                  quizzes and evaluations.
                </p>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div variants={fadeInUp}>
            <Card className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Compass className="h-5 w-5 text-primary group-hover:scale-110 transition-transform" />
                  Career Pathways Information
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Explore detailed information about various career options, required skills, expected 
                  salaries, educational requirements, and future opportunities.
                </p>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div variants={fadeInUp}>
            <Card className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <BarChart className="h-5 w-5 text-primary group-hover:scale-110 transition-transform" />
                  Personalized Recommendations
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Get tailored career suggestions based on your profile and preferences.
                </p>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div variants={fadeInUp}>
            <Card className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <BookOpen className="h-5 w-5 text-primary group-hover:scale-110 transition-transform" />
                  Learning Resources
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Access articles, guides, and tips on career development, resume building, interview 
                  preparation, and more.
                </p>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div variants={fadeInUp}>
            <Card className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Users className="h-5 w-5 text-primary group-hover:scale-110 transition-transform" />
                  Expert Support
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Connect with mentors and career coaches for additional guidance and support.
                </p>
              </CardContent>
            </Card>
          </motion.div>
        </motion.div>
      </motion.section>

      {/* Why Choose Us Section */}
      <motion.section 
        className="space-y-8"
        variants={stagger}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
      >
        <h2 className="text-3xl font-bold flex items-center gap-2">
          <UserCheck className="h-8 w-8 text-primary" />
          Why Choose Us?
        </h2>
        <motion.div className="grid grid-cols-1 md:grid-cols-2 gap-6" variants={stagger}>
          {[
            {
              icon: UserCheck,
              title: "User-Centric Approach",
              description: "We focus on your personal growth and career goals."
            },
            {
              icon: LineChart,
              title: "Up-to-Date Information",
              description: "Our career database is continuously updated with the latest industry trends."
            },
            {
              icon: Target,
              title: "Personalization",
              description: "Every career suggestion and resource is tailored to your unique profile."
            },
            {
              icon: Shield,
              title: "Privacy & Trust",
              description: "Your information is secure and confidential."
            }
          ].map((item, index) => (
            <motion.div key={index} variants={fadeInUp}>
              <Card className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <item.icon className="h-5 w-5 text-primary group-hover:scale-110 transition-transform" />
                    {item.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{item.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </motion.section>

      {/* How It Works Section */}
      <motion.section 
        className="space-y-8"
        variants={stagger}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
      >
        <h2 className="text-3xl font-bold flex items-center gap-2">
          <FileText className="h-8 w-8 text-primary" />
          How It Works
        </h2>
        <motion.div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6" variants={stagger}>
          {[
            {
              step: "1",
              title: "Create Your Profile",
              description: "Tell us about your interests, skills, and career goals.",
              icon: UserCheck
            },
            {
              step: "2",
              title: "Take the Assessment",
              description: "Complete a simple career quiz or survey.",
              icon: FileText
            },
            {
              step: "3",
              title: "Explore Careers",
              description: "Discover suggested career paths tailored for you.",
              icon: Compass
            },
            {
              step: "4",
              title: "Get Resources & Support",
              description: "Learn how to achieve your career ambitions with our resources and expert guidance.",
              icon: Rocket
            },
          ].map((item) => (
            <motion.div key={item.step} variants={fadeInUp}>
              <Card className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                <CardHeader>
                  <CardDescription className="text-lg font-bold flex items-center gap-2">
                    <item.icon className="h-5 w-5 text-primary group-hover:scale-110 transition-transform" />
                    Step {item.step}
                  </CardDescription>
                  <CardTitle>{item.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{item.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </motion.section>

      {/* CTA Section */}
      <motion.section 
        className="text-center space-y-6 py-16 relative"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
      >
        <div className="absolute -z-10 w-[600px] h-[600px] bg-primary/5 rounded-full blur-3xl left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2"></div>
        <h2 className="text-4xl font-bold gradient-title animate-gradient">Ready to Begin?</h2>
        <p className="text-xl text-muted-foreground">
          Start your journey toward a successful career today.
        </p>
        <motion.div 
          className="flex justify-center gap-4"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <Link href="/dashboard">
            <Button size="lg" className="px-8 bg-gradient-to-r from-primary to-primary/80 hover:opacity-90">
              Get Started
            </Button>
          </Link>
        </motion.div>
      </motion.section>
    </div>
  );
} 