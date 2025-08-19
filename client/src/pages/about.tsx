import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import talhaImg from "@/assets/talha.png";

import {
  Users,
  Target,
  Heart,
  Code,
  Zap,
  Shield,
  Globe,
  Award,
} from "lucide-react";
import { Link } from "wouter";

export default function About() {
  const team = [
    {
      name: "Talha Arshad",
      role: "Founder & CEO",
      bio: "Software Engineer and Web Developer with 3+ years of experience in web development.",
      image: talhaImg,
    },
    {
      name: "Waleed",
      role: "Lead Developer",
      bio: "Full-stack expert passionate about creating intuitive developer experiences.",
      image:
        "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=400&h=400&fit=crop&crop=face",
    },
    {
      name: "Mike Rodriguez",
      role: "Product Designer",
      bio: "UX designer focused on accessibility and beautiful, functional interfaces.",
      image:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face",
    },
  ];

  const values = [
    {
      icon: Code,
      title: "Developer-First",
      description:
        "Every feature is built with developers in mind, focusing on efficiency and ease of use.",
    },
    {
      icon: Zap,
      title: "Performance",
      description:
        "Lightning-fast processing with real-time feedback for the best user experience.",
    },
    {
      icon: Shield,
      title: "Reliability",
      description:
        "Robust validation and error handling ensure your JSON is always properly formatted.",
    },
    {
      icon: Globe,
      title: "Accessibility",
      description:
        "Built with web standards and accessibility in mind, usable by everyone.",
    },
  ];

  const stats = [
    { label: "JSON Prompts Generated", value: "500K+" },
    { label: "Happy Developers", value: "25K+" },
    { label: "Countries Served", value: "120+" },
    { label: "Uptime", value: "99.9%" },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
          <div className="text-center">
            <Badge variant="outline" className="mb-4">
              About Our Mission
            </Badge>
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
              Simplifying JSON Creation
              <span className="text-blue-600"> for Developers</span>
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-600 max-w-3xl mx-auto">
              We believe that converting natural language to structured data
              should be effortless. Our tool bridges the gap between human
              communication and machine-readable formats, empowering developers
              to work more efficiently.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <Link href="/">
                <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
                  Try Our Tool
                </Button>
              </Link>
              <Link href="/blog">
                <Button variant="outline" size="lg">
                  Read Our Story
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-blue-600">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="text-3xl font-bold text-white sm:text-4xl">
                  {stat.value}
                </div>
                <div className="mt-2 text-sm text-blue-100">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Our Core Values
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              The principles that guide everything we build
            </p>
          </div>
          <div className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
            {values.map((value) => (
              <Card
                key={value.title}
                className="text-center border-0 shadow-sm"
              >
                <CardContent className="p-6">
                  <div className="mx-auto w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                    <value.icon className="w-6 h-6 text-blue-600" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    {value.title}
                  </h3>
                  <p className="text-sm text-gray-600">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="bg-white py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Meet Our Team
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              The passionate people behind JSON Converter
            </p>
          </div>
          <div className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-3">
            {team.map((member) => (
              <Card
                key={member.name}
                className="text-center border-0 shadow-sm"
              >
                <CardContent className="p-6">
                  <img
                    className="mx-auto h-24 w-24 rounded-full object-cover mb-4"
                    src={member.image}
                    alt={member.name}
                  />
                  <h3 className="text-lg font-semibold text-gray-900">
                    {member.name}
                  </h3>
                  <p className="text-blue-600 font-medium mb-3">
                    {member.role}
                  </p>
                  <p className="text-sm text-gray-600">{member.bio}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-16 lg:grid-cols-2 lg:gap-24 items-center">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Target className="w-6 h-6 text-blue-600" />
                <Badge variant="outline">Our Mission</Badge>
              </div>
              <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl mb-6">
                Making Data Structures Easy for Everyone
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                We started JSON Converter because we experienced firsthand the
                frustration of manually converting natural language requirements
                into structured data formats. What should take seconds was
                taking minutes or even hours.
              </p>
              <p className="text-lg text-gray-600 mb-8">
                Today, we're proud to serve thousands of developers worldwide,
                helping them transform ideas into structured JSON with just a
                few clicks. Our tool has generated over 500,000 JSON prompts and
                saved countless hours of development time.
              </p>
              <div className="flex items-center gap-4">
                <div className="flex items-center gap-2">
                  <Heart className="w-5 h-5 text-red-500" />
                  <span className="text-sm text-gray-600">Made with love</span>
                </div>
                <div className="flex items-center gap-2">
                  <Award className="w-5 h-5 text-yellow-500" />
                  <span className="text-sm text-gray-600">
                    Trusted by developers
                  </span>
                </div>
              </div>
            </div>
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=600&h=400&fit=crop"
                alt="Team collaboration"
                className="rounded-lg shadow-lg"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-blue-600/20 to-purple-600/20 rounded-lg"></div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-blue-600">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Ready to Transform Your Workflow?
            </h2>
            <p className="mt-4 text-lg text-blue-100">
              Join thousands of developers who trust JSON Converter for their
              daily work.
            </p>
            <div className="mt-8 flex items-center justify-center gap-4">
              <Link href="/">
                <Button
                  size="lg"
                  variant="secondary"
                  className="hover:bg-white hover:text-blue-600">
                  Start Converting Now
                </Button>
              </Link>
              <Link href="/blog">
                <Button
                  size="lg"
                  variant="outline"
                  className="text-black border-black hover:bg-white hover:text-blue-600"
                >
                  Read Our Blog
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
