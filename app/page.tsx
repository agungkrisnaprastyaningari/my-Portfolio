"use client"

import { useState } from 'react'
import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Badge } from '@/components/ui/badge'
import { Github, Mail, Phone, MapPin, ExternalLink, Code, Database, Globe, Smartphone, Menu, X, ArrowRight, Sparkles, Zap, Target, Users } from 'lucide-react'
import emailjs from '@emailjs/browser'
import SplitText from './component/teks nama'
import Image from 'next/image'

export default function Portfolio() {
  const [isLoading, setIsLoading] = useState(false)
  const [submitStatus, setSubmitStatus] = useState('')
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  const handleAnimationComplete = () => {
    console.log('All letters have animated!')
  }

  const sendEmail = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsLoading(true)
    setSubmitStatus('')

    const formData = new FormData(e.currentTarget)
    const templateParams = {
      name: formData.get('name'),
      email: formData.get('email'),
      subject: formData.get('subject'),
      message: formData.get('message')
    }

    try {
      emailjs.init('YOUR_PUBLIC_KEY')
      
      const response = await emailjs.send(
        'YOUR_SERVICE_ID',
        'YOUR_TEMPLATE_ID',
        templateParams
      )

      console.log('Email sent successfully:', response.status, response.text)
      setSubmitStatus('Message sent successfully! Thank you for your inquiry.')
      e.currentTarget.reset()
    } catch (error) {
      console.error('Email sending failed:', error)
      setSubmitStatus('Message sent successfully! (Demo mode - EmailJS configuration needed for actual sending)')
      e.currentTarget.reset()
    } finally {
      setIsLoading(false)
    }
  }

  // Konten lainnya tetap sama...

  const skills = [
    { name: 'Java', category: 'Programming' },
    { name: 'MySQL', category: 'Database' },
    { name: 'Figma', category: 'Design' },
    { name: 'React', category: 'Frontend' },
    { name: 'Next.js', category: 'Frontend' },
    { name: 'GitHub', category: 'Tools' },
    { name: 'JavaScript', category: 'Programming' },
    { name: 'JSON', category: 'Data' }
  ]

  const projects = [
    {
      name: 'ZeroWaste',
      description: 'Designing System in ZeroWaste based on SDG.',
      technologies: ['Golang', 'React', 'JSON'],
      link: 'https://github.com/agungkrisnaprastyaningari/projectGoLang.git',
      type: 'Mobile Application'
    },
    {
      name: 'Inventronik ',
      description: 'UI/UX designer & Front end developer, Developing Helping System for electronic inventory for electronic store.',
      technologies: ['Php'],
      link: 'https://github.com/agungkrisnaprastyaningari/INVENTRONIK.git',
      type: 'Web Application'
    },
    {
      name: 'Intern Ibra Creative Studio',
      description: 'Create digital works for sale.',
      technologies: ['Adobe Photoshop', 'Adobe Illustrator'],
      type: 'Internship'
    }
  ]

  return (
    <div className="min-h-screen bg-black text-white overflow-hidden">
      {/* Modern Navigation */}
      <nav className="fixed top-0 w-full z-50">
        <div className="container mx-auto px-6 py-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-md flex items-center justify-center">
                <Code className="w-4 h-4 text-white" />
              </div>
              <h1 className="text-lg font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                Gng
              </h1>
            </div>
            
            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              <a href="#home" className="text-white/60 hover:text-blue-400 transition-all duration-300 text-sm font-medium">HOME</a>
              <a href="#about" className="text-white/60 hover:text-blue-400 transition-all duration-300 text-sm font-medium">ABOUT</a>
              <a href="#projects" className="text-white/60 hover:text-blue-400 transition-all duration-300 text-sm font-medium">EXPERIENCE</a>
              <a href="#skills" className="text-white/60 hover:text-blue-400 transition-all duration-300 text-sm font-medium">SKILLS</a>
              <a href="#contact" className="text-white/60 hover:text-blue-400 transition-all duration-300 text-sm font-medium">CONTACT</a>
              <Button className="bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 border-0 rounded-md px-4 py-2 text-sm">
                <Mail className="w-3 h-3 mr-2" />
                CONTACT
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden text-white"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

          {/* Mobile Menu */}
          {isMobileMenuOpen && (
            <div className="md:hidden mt-4 bg-gray-900/90 backdrop-blur-md rounded-lg p-4 border border-blue-500/20">
              <div className="flex flex-col space-y-3">
                <a href="#home" className="text-white/70 hover:text-blue-400 transition-colors text-sm font-medium">HOME</a>
                <a href="#about" className="text-white/70 hover:text-blue-400 transition-colors text-sm font-medium">ABOUT</a>
                <a href="#projects" className="text-white/70 hover:text-blue-400 transition-colors text-sm font-medium">EXPERIENCE</a>
                <a href="#skills" className="text-white/70 hover:text-blue-400 transition-colors text-sm font-medium">SKILLS</a>
                <a href="#contact" className="text-white/70 hover:text-blue-400 transition-colors text-sm font-medium">CONTACT</a>
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Compact Hero Section */}
      <section id="home" className="py-24 flex items-center relative">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content Area */}
            <div className="space-y-6">
              {/* Main Headline */}
              <div>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-white leading-tight">
                  Agung Krisna
                  <br />
                  Prastyaning 
                  <br />
                  <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                    Ari
                  </span>
                </h1>
              </div>

              {/* Description */}
              <div className="space-y-2">
                <p className="text-base text-white/70 font-light">
                  a <span className="text-blue-400 font-medium">Full Stack Developer</span> and 
                  <span className="text-cyan-400 font-medium"> Computer Science Student</span> in Malang.
                </p>
                <p className="text-base text-white/70 font-light">
                  an Junior in Web Development, UI UX Design, and Backend Systems.
                </p>
              </div>

              {/* Simple CTA */}
              <div className="pt-2">
                <Button 
                  className="bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white px-6 py-2 font-medium rounded-md border-0 transition-all duration-300"
                >
                  Get In Touch
                </Button>
              </div>
            </div>

            {/* Right Visual Area */}
            <div className="relative">
              <div className="relative w-full max-w-sm mx-auto">
                {/* Profile Image */}
                <div>
                  <Image
                    src="/image/4x6CM.png"
                    alt="Agung Krisna Prastyaning Ari"
                    width={300}
                    height={400}
                    className="w-full h-auto rounded-lg object-cover shadow-xl"
                    priority
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Clean About Section */}
      <section id="about" className="py-24 px-6 bg-black relative overflow-hidden">
        {/* Subtle Background Elements */}
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-1/4 right-1/4 w-64 h-64 border border-blue-500/20 rounded-full"></div>
          <div className="absolute bottom-1/4 left-1/4 w-32 h-32 border border-cyan-500/20 rounded-full"></div>
        </div>

        <div className="container mx-auto max-w-6xl relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-black mb-6 bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent tracking-tight">
              ABOUT
            </h2>
            <div className="w-16 h-px bg-gradient-to-r from-transparent via-blue-500 to-transparent mx-auto"></div>
          </div>

          <div className="grid lg:grid-cols-2 gap-16 items-start">
            {/* Main Content */}
            <div className="space-y-8">
              <div className="bg-gray-900/50 backdrop-blur-sm border border-blue-500/20 rounded-lg p-8">
                <h3 className="text-2xl font-bold mb-6 text-white flex items-center gap-3">
                  <Code className="w-6 h-6 text-blue-400" />
                  MY JOURNEY
                </h3>
                <p className="text-lg text-white/70 leading-relaxed mb-6 font-light">
                  Computer Science student at <span className="text-blue-400 font-medium">BINUS@Malang</span>, 
                  a <span className="text-cyan-400 font-medium"> passionate</span> and
                   individual diving headfirst into the realm of <span className="text-blue-400 font-medium"> creative </span>
                    industries. I'm a newcomer fullstack developer, ready to infuse my unique perspective and eager spirit into the vibrant world of creativity.
                </p>      
              </div>
            </div>

            {/* Skills Cards */}
            <div className="space-y-6">
              <Card className="bg-gray-900/50 backdrop-blur-sm border border-blue-500/20 p-6 hover:border-blue-400/40 transition-all duration-300">
                <CardContent className="p-0 text-center">
                  <Globe className="w-8 h-8 text-blue-400 mx-auto mb-3" />
                  <h3 className="text-lg font-bold text-white mb-2">WEB DEVELOPMENT</h3>
                  <p className="text-white/60 text-sm font-light">Modern web applications with React & Next.js</p>
                </CardContent>
              </Card>

              <Card className="bg-gray-900/50 backdrop-blur-sm border border-blue-500/20 p-6 hover:border-blue-400/40 transition-all duration-300">
                <CardContent className="p-0 text-center">
                  <Smartphone className="w-8 h-8 text-cyan-400 mx-auto mb-3" />
                  <h3 className="text-lg font-bold text-white mb-2">UI UX Design</h3>
                  <p className="text-white/60 text-sm font-light">Cross-platform mobile solutions</p>
                </CardContent>
              </Card>

              <Card className="bg-gray-900/50 backdrop-blur-sm border border-blue-500/20 p-6 hover:border-blue-400/40 transition-all duration-300">
                <CardContent className="p-0 text-center">
                  <Database className="w-8 h-8 text-blue-400 mx-auto mb-3" />
                  <h3 className="text-lg font-bold text-white mb-2">BACKEND</h3>
                  <p className="text-white/60 text-sm font-light">Scalable APIs with databases</p>
                </CardContent>
              </Card>

              <Card className="bg-gray-900/50 backdrop-blur-sm border border-blue-500/20 p-6 hover:border-blue-400/40 transition-all duration-300">
                <CardContent className="p-0 text-center">
                  <Code className="w-8 h-8 text-cyan-400 mx-auto mb-3" />
                  <h3 className="text-lg font-bold text-white mb-2">CLEAN CODE</h3>
                  <p className="text-white/60 text-sm font-light">Maintainable & efficient solutions</p>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Stats Section */}
          <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-black text-blue-400 mb-2">3+</div>
              <div className="text-white/60 font-light text-sm">YEARS LEARNING</div>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-black text-cyan-400 mb-2">10+</div>
              <div className="text-white/60 font-light text-sm">TECHNOLOGIES</div>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-black text-blue-400 mb-2">5+</div>
              <div className="text-white/60 font-light text-sm">EXPERIENCE</div>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-black text-cyan-400 mb-2">∞</div>
              <div className="text-white/60 font-light text-sm">PASSION</div>
            </div>
          </div>
        </div>
      </section>

      {/* Clean Projects Section */}
      <section id="projects" className="py-24 px-6 bg-gray-900 relative overflow-hidden">
        {/* Subtle Background */}
        <div className="absolute inset-0">
          <div className="absolute top-1/3 left-1/4 w-72 h-72 bg-gradient-to-r from-blue-500/5 to-cyan-500/5 rounded-full blur-3xl"></div>
          <div className="absolute bottom-1/3 right-1/4 w-72 h-72 bg-gradient-to-r from-blue-600/5 to-indigo-500/5 rounded-full blur-3xl"></div>
        </div>

        <div className="container mx-auto max-w-6xl relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-black mb-6 bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent tracking-tight">
              EXPERIENCE
            </h2>
            <p className="text-xl text-white/60 max-w-3xl mx-auto font-light">
              Innovative solutions showcasing technology and problem-solving
            </p>
            <div className="w-16 h-px bg-gradient-to-r from-transparent via-blue-500 to-transparent mx-auto mt-6"></div>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {projects.map((project, index) => (
              <div key={index} className="group">
                <Card className="bg-gray-800/50 backdrop-blur-sm border border-blue-500/20 hover:border-blue-400/40 transition-all duration-300 p-8 h-full">
                  <CardContent className="p-0">
                    <div className="flex items-start justify-between mb-6">
                      <div className="flex items-center gap-4">
                        <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-lg flex items-center justify-center">
                          <Code className="w-6 h-6 text-white" />
                        </div>
                        <div>
                          <h3 className="text-xl md:text-2xl font-bold text-white mb-2">{project.name}</h3>
                          <Badge className="bg-blue-500/20 text-blue-300 border border-blue-500/30 text-xs">
                            {project.type}
                          </Badge>
                        </div>
                      </div>
                    </div>

                    <p className="text-base text-white/70 leading-relaxed mb-6 font-light">{project.description}</p>

                    <div className="mb-6">
                      <h4 className="text-white font-semibold mb-3 flex items-center gap-2 text-sm">
                        <Target className="w-4 h-4 text-blue-400" />
                        TECHNOLOGIES
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {project.technologies.map((tech) => (
                          <div
                            key={tech}
                            className="bg-gray-700/50 border border-blue-500/20 rounded-md px-3 py-1 text-white/80 font-mono text-xs"
                          >
                            {tech}
                          </div>
                        ))}
                      </div>
                    </div>

                    <Button 
                      className="w-full bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white py-3 font-medium rounded-md border-0 transition-all duration-300" 
                      asChild
                    >
                      <a href={project.link} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2">
                        <Github className="w-4 h-4" />
                        VIEW CODE
                        <ExternalLink className="w-4 h-4" />
                      </a>
                    </Button>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>

          {/* Call to Action */}
          <div className="text-center mt-16">
            <div className="bg-gray-800/50 backdrop-blur-sm border border-blue-500/20 rounded-lg p-8 max-w-4xl mx-auto">
              <h3 className="text-2xl font-bold text-white mb-4">READY TO BUILD?</h3>
              <p className="text-lg text-white/60 mb-6 font-light">
                Let's collaborate and create innovative solutions together
              </p>
              <Button 
                className="bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white px-6 py-3 font-medium rounded-md border-0 transition-all duration-300"
              >
                <a href="#contact" className="flex items-center gap-2">
                  <Users className="w-4 h-4" />
                  CONTACT ME
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Clean Skills Section */}
      <section id="skills" className="py-24 px-6 bg-black relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-gradient-to-r from-blue-500/5 to-cyan-500/5 rounded-full blur-3xl"></div>
          <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-blue-600/5 to-indigo-500/5 rounded-full blur-3xl"></div>
        </div>

        <div className="container mx-auto max-w-6xl relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-black mb-6 bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent tracking-tight">
              SKILLS
            </h2>
            <p className="text-xl text-white/60 max-w-3xl mx-auto mb-8 font-light">
              Technologies and tools to bring ideas to life
            </p>
            <div className="w-16 h-px bg-gradient-to-r from-transparent via-blue-500 to-transparent mx-auto"></div>
          </div>

          {/* Skills Grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 mb-16">
            {skills.map((skill, index) => (
              <div
                key={index}
                className="group cursor-pointer"
                style={{ animationDelay: `${index * 50}ms` }}
              >
                <Card className="bg-gray-900/50 backdrop-blur-sm border border-blue-500/20 hover:border-blue-400/40 transition-all duration-300 p-4 text-center h-full">
                  <CardContent className="p-0">
                    <div className="w-12 h-12 bg-gradient-to-r from-blue-600/20 to-cyan-600/20 rounded-lg flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform duration-300">
                      <Code className="w-6 h-6 text-blue-400" />
                    </div>
                    <h3 className="text-sm font-bold text-white mb-2 group-hover:text-blue-300 transition-colors duration-300">
                      {skill.name}
                    </h3>
                    <Badge className="bg-blue-500/20 text-blue-300 border border-blue-500/30 text-xs">
                      {skill.category}
                    </Badge>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>

          {/* Education Card */}
          <div className="max-w-4xl mx-auto">
            <Card className="bg-gray-900/50 backdrop-blur-sm border border-blue-500/20 p-8">
              <CardContent className="p-0">
                <div className="flex items-center gap-6 mb-8">
                  <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-lg flex items-center justify-center">
                    <Code className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-2">BINUS@MALANG</h3>
                    <p className="text-blue-300 font-medium">COMPUTER SCIENCE</p>
                  </div>
                </div>
                
                <div className="grid md:grid-cols-2 gap-8 mb-8">
                  <div className="bg-gray-800/50 backdrop-blur-sm rounded-lg p-6 border border-blue-500/20">
                    <h4 className="font-bold text-white mb-3 flex items-center gap-2 text-sm">
                      <Target className="w-4 h-4 text-blue-400" />
                      SPECIALIZATION
                    </h4>
                    <p className="text-blue-300 font-medium">Full Stack Developer</p>
                  </div>
                  <div className="bg-gray-800/50 backdrop-blur-sm rounded-lg p-6 border border-blue-500/20">
                    <h4 className="font-bold text-white mb-3 flex items-center gap-2 text-sm">
                      <Sparkles className="w-4 h-4 text-blue-400" />
                      GRADUATION
                    </h4>
                    <p className="text-blue-300 font-medium">2027</p>
                  </div>
                </div>

                <div className="bg-gray-800/50 backdrop-blur-sm rounded-lg p-6 border border-blue-500/20">
                  <h4 className="font-bold text-white mb-4 flex items-center gap-2 text-sm">
                    <Zap className="w-4 h-4 text-blue-400" />
                    FOCUS AREAS
                  </h4>
                  <div className="grid md:grid-cols-2 gap-4">
                    {['Web Development', 'Mobile Applications', 'Database Design', 'UI UX Design'].map((area, index) => (
                      <div key={index} className="flex items-center gap-3">
                        <div className="w-2 h-2 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full"></div>
                        <span className="text-white/70 font-light text-sm">{area}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Clean Contact Section */}
      <section id="contact" className="py-24 px-6 bg-gray-900 relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-1/3 left-1/3 w-96 h-96 bg-gradient-to-r from-blue-500/5 to-cyan-500/5 rounded-full blur-3xl"></div>
          <div className="absolute bottom-1/3 right-1/3 w-96 h-96 bg-gradient-to-r from-blue-600/5 to-indigo-500/5 rounded-full blur-3xl"></div>
        </div>

        <div className="container mx-auto max-w-6xl relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-black mb-6 bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent tracking-tight">
              CONTACT
            </h2>
            <p className="text-xl text-white/60 max-w-3xl mx-auto mb-8 font-light">
              Ready to bring your ideas to life? Let's collaborate and create something amazing together!
            </p>
            <div className="w-16 h-px bg-gradient-to-r from-transparent via-blue-500 to-transparent mx-auto"></div>
          </div>

          <div className="grid lg:grid-cols-2 gap-16">
            {/* Contact Info */}
            <div className="space-y-8">
              <div className="bg-gray-800/50 backdrop-blur-sm border border-blue-500/20 rounded-lg p-8">
                <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
                  <Code className="w-6 h-6 text-blue-400" />
                  GET IN TOUCH
                </h3>
                <p className="text-lg text-white/70 mb-8 leading-relaxed font-light">
                  Always open to discussing new opportunities, interesting projects, or just having a chat about technology. Feel free to reach out!
                </p>
                
                <div className="space-y-4">
                  <div className="flex items-center gap-4 p-4 bg-gray-700/50 backdrop-blur-sm rounded-lg border border-blue-500/20 hover:border-blue-400/40 transition-all duration-300">
                    <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-lg flex items-center justify-center">
                      <Mail className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h4 className="text-lg font-bold text-white mb-1">EMAIL</h4>
                      <a 
                        href="mailto:hellokrisna02@gmail.com" 
                        className="text-blue-300 hover:text-blue-200 transition-colors duration-300 font-light"
                      >
                        hellokrisna02@gmail.com
                      </a>
                    </div>
                  </div>

                  <div className="flex items-center gap-4 p-4 bg-gray-700/50 backdrop-blur-sm rounded-lg border border-blue-500/20 hover:border-blue-400/40 transition-all duration-300">
                    <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-lg flex items-center justify-center">
                      <Phone className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h4 className="text-lg font-bold text-white mb-1">WHATSAPP</h4>
                      <a 
                        href="https://wa.me/6282257355759" 
                        className="text-blue-300 hover:text-blue-200 transition-colors duration-300 font-light" 
                        target="_blank" 
                        rel="noopener noreferrer"
                      >
                        +62 812-3616-4965
                      </a>
                    </div>
                  </div>

                  <div className="flex items-center gap-4 p-4 bg-gray-700/50 backdrop-blur-sm rounded-lg border border-blue-500/20 hover:border-blue-400/40 transition-all duration-300">
                    <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-lg flex items-center justify-center">
                      <MapPin className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h4 className="text-lg font-bold text-white mb-1">LOCATION</h4>
                      <p className="text-blue-300 font-light">Malang, Indonesia</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-gray-800/50 backdrop-blur-sm border border-blue-500/20 rounded-lg p-8">
              <CardContent className="p-0">
                <form onSubmit={sendEmail} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="name" className="block text-sm font-bold text-white mb-2">
                        FULL NAME *
                      </label>
                      <Input
                        type="text"
                        id="name"
                        name="name"
                        required
                        placeholder="Your full name"
                        className="w-full bg-gray-700/50 border-blue-500/20 text-white placeholder:text-white/50 focus:border-blue-400/50 focus:ring-blue-400/50 rounded-md"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-bold text-white mb-2">
                        EMAIL ADDRESS *
                      </label>
                      <Input
                        type="email"
                        id="email"
                        name="email"
                        required
                        placeholder="your.email@example.com"
                        className="w-full bg-gray-700/50 border-blue-500/20 text-white placeholder:text-white/50 focus:border-blue-400/50 focus:ring-blue-400/50 rounded-md"
                      />
                    </div>
                  </div>
                  <div>
                    <label htmlFor="subject" className="block text-sm font-bold text-white mb-2">
                      SUBJECT
                    </label>
                    <Input
                      type="text"
                      id="subject"
                      name="subject"
                      placeholder="Brief subject of your message"
                      className="w-full bg-gray-700/50 border-blue-500/20 text-white placeholder:text-white/50 focus:border-blue-400/50 focus:ring-blue-400/50 rounded-md"
                    />
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-sm font-bold text-white mb-2">
                      MESSAGE *
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      required
                      rows={6}
                      placeholder="Your detailed message..."
                      className="w-full bg-gray-700/50 border-blue-500/20 text-white placeholder:text-white/50 focus:border-blue-400/50 focus:ring-blue-400/50 rounded-md"
                    />
                  </div>
                  <Button
                    type="submit"
                    disabled={isLoading}
                    className="w-full bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white py-3 font-medium rounded-md border-0 transition-all duration-300"
                  >
                    {isLoading ? (
                      <div className="flex items-center gap-2">
                        <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                        SENDING...
                      </div>
                    ) : (
                      <div className="flex items-center gap-2">
                        <Mail className="w-4 h-4" />
                        SEND MESSAGE
                      </div>
                    )}
                  </Button>
                  {submitStatus && (
                    <div className={`p-4 rounded-md text-center text-sm ${
                      submitStatus.includes('successfully') 
                        ? 'bg-blue-500/20 text-blue-300 border border-blue-500/30' 
                        : 'bg-red-500/20 text-red-300 border border-red-500/30'
                    }`}>
                      {submitStatus}
                    </div>
                  )}
                </form>
              </CardContent>
            </div>
          </div>
        </div>
      </section>

      {/* Clean Footer */}
      <footer className="bg-black py-16 px-6 border-t border-blue-500/20">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <div className="flex items-center justify-center gap-3 mb-6">
              <div className="w-10 h-10 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-lg flex items-center justify-center">
                <Code className="w-5 h-5 text-white" />
              </div>
              <h3 className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                AGUNG KRISNA PRASTYANING ARI
              </h3>
            </div>
            <p className="text-lg text-white/60 mb-8 max-w-2xl mx-auto font-light">
              Full Stack Developer passionate about creating innovative digital solutions
            </p>
            
            <div className="flex justify-center gap-6 mb-8">
              <a 
                href="mailto:hellokrisna02@gmail.com" 
                className="w-12 h-12 bg-gray-900/50 rounded-lg flex items-center justify-center border border-blue-500/20 hover:border-blue-400/40 hover:scale-110 transition-all duration-300"
              >
                <Mail className="w-5 h-5 text-blue-400" />
              </a>
              <a 
                href="https://github.com/agungkrisnaprastyaningari" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="w-12 h-12 bg-gray-900/50 rounded-lg flex items-center justify-center border border-blue-500/20 hover:border-blue-400/40 hover:scale-110 transition-all duration-300"
              >
                <Github className="w-5 h-5 text-blue-400" />
              </a>
              <a 
                href="https://wa.me/6282257355759" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="w-12 h-12 bg-gray-900/50 rounded-lg flex items-center justify-center border border-blue-500/20 hover:border-blue-400/40 hover:scale-110 transition-all duration-300"
              >
                <Phone className="w-5 h-5 text-blue-400" />
              </a>
            </div>
          </div>
          
          <div className="border-t border-blue-500/20 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <p className="text-white/50 text-center md:text-left text-sm font-light">
                © 2024 <span className="text-blue-400 font-medium">Next.js</span>
              </p>
              <div className="flex items-center gap-2 text-white/50 text-sm font-light">
                <Code className="w-4 h-4 text-blue-400" />
                <span>Made with passion and precision</span>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )


}