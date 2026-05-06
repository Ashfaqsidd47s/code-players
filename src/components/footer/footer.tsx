"use client";

import type React from "react";
import { useState } from "react";

import { Mail, MapPin, Phone } from "lucide-react";
import { FaGithub, FaHeart, FaLinkedin } from "react-icons/fa";
import { MdEmail, MdSend } from "react-icons/md";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import { Textarea } from "@/components/ui/textarea";

import { AnimatedCopyText } from "./animate-copy-text";
import { AnimatedTextLink } from "./animate-text-link";

const connections = [
    {
        name: "GitHub",
        href: "https://github.com/Ashfaqsidd47s",
        username: "Ashfaqsidd47s",
        icon: FaGithub,
    },
    {
        name: "LinkedIn",
        username: "Mohammad ashfaq",
        href: "https://www.linkedin.com/in/codeplayerashfaq/",
        icon: FaLinkedin,
    },
];

export default function ModernFooter() {
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        subject: "",
        message: "",
    });

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);

        // Simulate form submission
        await new Promise((resolve) => setTimeout(resolve, 2000));

        // Reset form
        setFormData({ name: "", email: "", subject: "", message: "" });
        setIsSubmitting(false);

        // You would typically send the email here
        console.log("Form submitted:", formData);
    };

    const handleInputChange = (field: string, value: string) => {
        setFormData((prev) => ({ ...prev, [field]: value }));
    };

    return (
        <footer className="bg-background border-border border-t">
            <div className="relative container mx-auto px-6 py-16">
                {/* Main Footer Content */}
                <div className="flex flex-col gap-12 p-4 md:flex-row md:justify-between lg:gap-20">
                    {/* Brand Section */}
                    <div className="lg:col-span-3">
                        <div className="mb-6">
                            <h3 className="text-foreground mb-2 text-2xl font-bold">
                                Mohammad Ashfaq
                            </h3>
                            <p className="text-muted-foreground max-w-md text-lg leading-relaxed">
                                Creative developer crafting digital experiences
                                that blend innovative design with cutting-edge
                                technology.
                            </p>
                        </div>

                        <div className="mb-6 flex items-center gap-4">
                            <Badge
                                variant="secondary"
                                className="bg-primary/10 text-primary hover:bg-primary/20"
                            >
                                Available for work
                            </Badge>
                            <Badge
                                variant="outline"
                                className="bg-background text-foreground"
                            >
                                Remote friendly
                            </Badge>
                        </div>

                        {/* Contact Modal Trigger */}
                        <Dialog>
                            <DialogTrigger asChild>
                                <Button className="bg-primary text-primary-foreground hover:bg-primary/90 w-full">
                                    <MdEmail className="mr-2 h-4 w-4" />
                                    Send Message
                                </Button>
                            </DialogTrigger>
                            <DialogContent className="bg-background border-border sm:max-w-[500px]">
                                <DialogHeader>
                                    <DialogTitle className="text-foreground">
                                        Get in Touch
                                    </DialogTitle>
                                    <DialogDescription className="text-muted-foreground">
                                        Have a project in mind? Let&apos;s
                                        discuss how we can work together.
                                    </DialogDescription>
                                </DialogHeader>

                                <form
                                    onSubmit={handleSubmit}
                                    className="mt-6 space-y-6"
                                >
                                    <div className="grid grid-cols-2 gap-4">
                                        <div className="space-y-2">
                                            <Label
                                                htmlFor="name"
                                                className="text-foreground"
                                            >
                                                Name
                                            </Label>
                                            <Input
                                                id="name"
                                                placeholder="Your name"
                                                value={formData.name}
                                                onChange={(e) =>
                                                    handleInputChange(
                                                        "name",
                                                        e.target.value
                                                    )
                                                }
                                                required
                                                className="bg-background border-border text-foreground placeholder:text-muted-foreground"
                                            />
                                        </div>
                                        <div className="space-y-2">
                                            <Label
                                                htmlFor="email"
                                                className="text-foreground"
                                            >
                                                Email
                                            </Label>
                                            <Input
                                                id="email"
                                                type="email"
                                                placeholder="your@email.com"
                                                value={formData.email}
                                                onChange={(e) =>
                                                    handleInputChange(
                                                        "email",
                                                        e.target.value
                                                    )
                                                }
                                                required
                                                className="bg-background border-border text-foreground placeholder:text-muted-foreground"
                                            />
                                        </div>
                                    </div>

                                    <div className="space-y-2">
                                        <Label
                                            htmlFor="subject"
                                            className="text-foreground"
                                        >
                                            Subject
                                        </Label>
                                        <Input
                                            id="subject"
                                            placeholder="Project inquiry"
                                            value={formData.subject}
                                            onChange={(e) =>
                                                handleInputChange(
                                                    "subject",
                                                    e.target.value
                                                )
                                            }
                                            required
                                            className="bg-background border-border text-foreground placeholder:text-muted-foreground"
                                        />
                                    </div>

                                    <div className="space-y-2">
                                        <Label
                                            htmlFor="message"
                                            className="text-foreground"
                                        >
                                            Message
                                        </Label>
                                        <Textarea
                                            id="message"
                                            placeholder="Tell me about your project..."
                                            rows={4}
                                            value={formData.message}
                                            onChange={(e) =>
                                                handleInputChange(
                                                    "message",
                                                    e.target.value
                                                )
                                            }
                                            required
                                            className="bg-background border-border text-foreground placeholder:text-muted-foreground resize-none"
                                        />
                                    </div>

                                    <Button
                                        type="submit"
                                        disabled={isSubmitting}
                                        className="bg-primary text-primary-foreground hover:bg-primary/90 w-full"
                                    >
                                        {isSubmitting ? (
                                            <>
                                                <div className="border-primary-foreground/30 border-t-primary-foreground mr-2 h-4 w-4 animate-spin rounded-full border-2" />
                                                Sending...
                                            </>
                                        ) : (
                                            <>
                                                <MdSend className="mr-2 h-4 w-4" />
                                                Send Message
                                            </>
                                        )}
                                    </Button>
                                </form>
                            </DialogContent>
                        </Dialog>
                        <div className="text-muted-foreground mt-4 space-y-3 text-sm">
                            <AnimatedCopyText
                                text="Dehradun, India"
                                icon={MapPin}
                            />
                        </div>
                    </div>

                    {/* Navigation */}

                    {/* Connect */}
                    <div className="flex h-full min-w-[300px] flex-col justify-between lg:col-span-2">
                        <h4 className="text-foreground mb-6 font-semibold">
                            Connect
                        </h4>
                        <div className="mb-8 space-y-5">
                            {connections.map((social) => (
                                <AnimatedTextLink
                                    key={social.name}
                                    href={social.href}
                                    icon={social.icon}
                                    primaryText={social.name}
                                    secondaryText={social.username}
                                />
                            ))}
                            <AnimatedCopyText
                                text="ashfaqsidd47@gmail.com"
                                icon={Mail}
                            />
                            <AnimatedCopyText
                                text="+91 74560 33975"
                                icon={Phone}
                            />
                        </div>
                    </div>
                </div>

                <Separator className="bg-border" />

                {/* Bottom Section */}
                <div className="flex flex-col items-center justify-between gap-4 pt-8 md:flex-row">
                    <div className="text-muted-foreground flex items-center gap-2 text-sm">
                        <span>
                            © {new Date().getFullYear()} Mohammad Ashfaq. Made
                            with
                        </span>
                        <FaHeart className="h-4 w-4 fill-current text-red-500" />
                        <span>in India</span>
                    </div>

                    <div className="flex items-center gap-6 text-sm">
                        <Button
                            className="text-muted-foreground hover:text-foreground transition-colors duration-200"
                        >
                            Privacy Policy
                        </Button>
                        <Button
                            className="text-muted-foreground hover:text-foreground transition-colors duration-200"
                        >
                            Terms of Service
                        </Button>
                    </div>
                </div>

                {/* Background text  */}
                <div className="pointer-events-none absolute inset-0 flex items-center justify-center overflow-hidden pb-24">
                    <div className="flex flex-col items-center justify-center">
                        <span className="text-muted-foreground/5 text-6xl leading-none font-bold whitespace-nowrap select-none md:text-7xl lg:text-8xl">
                            {"LET'S"}
                        </span>
                        <span className="text-primary/5 text-6xl leading-none font-bold whitespace-nowrap select-none md:text-7xl lg:text-8xl">
                            {"CONNECT"}
                        </span>
                    </div>
                </div>
            </div>
        </footer>
    );
}
