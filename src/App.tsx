import React from 'react';
import { Shield, Book, Award, Mail, Github, Linkedin, Terminal, Lock, FileText, GraduationCap, ExternalLink } from 'lucide-react';

function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <header className="bg-gradient-to-r from-blue-900 to-blue-800 text-white">
        <div className="container mx-auto px-6 py-20">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="md:w-1/2 text-center md:text-left mb-8 md:mb-0">
              <h1 className="text-4xl md:text-5xl font-bold mb-4">Md. Nasir Uddin</h1>
              <h2 className="text-xl md:text-2xl text-blue-200 mb-6">Cybersecurity Researcher</h2>
              <p className="max-w-2xl text-blue-100 mb-8">
                Dedicated to advancing the field of cybersecurity through innovative research 
                and practical solutions for emerging threats.
              </p>
              <div className="flex space-x-4 justify-center md:justify-start">
                <a href="https://github.com" className="hover:text-blue-300 transition-colors">
                  <Github className="w-6 h-6" />
                </a>
                <a href="https://linkedin.com" className="hover:text-blue-300 transition-colors">
                  <Linkedin className="w-6 h-6" />
                </a>
                <a href="mailto:contact@example.com" className="hover:text-blue-300 transition-colors">
                  <Mail className="w-6 h-6" />
                </a>
              </div>
            </div>
            <div className="md:w-1/3">
              <img 
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=500&h=500&fit=crop" 
                alt="Profile" 
                className="rounded-full w-64 h-64 object-cover border-4 border-blue-400 shadow-xl"
              />
            </div>
          </div>
        </div>
      </header>

      {/* Stats Section */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div className="p-4">
              <h3 className="text-3xl font-bold text-blue-600 mb-2">50+</h3>
              <p className="text-gray-600">Research Papers</p>
            </div>
            <div className="p-4">
              <h3 className="text-3xl font-bold text-blue-600 mb-2">10+</h3>
              <p className="text-gray-600">Years Experience</p>
            </div>
            <div className="p-4">
              <h3 className="text-3xl font-bold text-blue-600 mb-2">30+</h3>
              <p className="text-gray-600">Projects</p>
            </div>
            <div className="p-4">
              <h3 className="text-3xl font-bold text-blue-600 mb-2">15+</h3>
              <p className="text-gray-600">Awards</p>
            </div>
          </div>
        </div>
      </section>

      {/* Research Areas */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12">Research Areas</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md transform hover:scale-105 transition-transform">
              <img 
                src="https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=500&h=300&fit=crop" 
                alt="Network Security" 
                className="w-full h-48 object-cover rounded-lg mb-4"
              />
              <Terminal className="w-10 h-10 text-blue-600 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Network Security</h3>
              <p className="text-gray-600">Specializing in advanced threat detection and network protocol analysis.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md transform hover:scale-105 transition-transform">
              <img 
                src="https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=500&h=300&fit=crop" 
                alt="Cryptography" 
                className="w-full h-48 object-cover rounded-lg mb-4"
              />
              <Lock className="w-10 h-10 text-blue-600 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Cryptography</h3>
              <p className="text-gray-600">Research on post-quantum cryptography and secure communication protocols.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md transform hover:scale-105 transition-transform">
              <img 
                src="https://images.unsplash.com/photo-1563986768609-322da13575f3?w=500&h=300&fit=crop" 
                alt="Malware Analysis" 
                className="w-full h-48 object-cover rounded-lg mb-4"
              />
              <Shield className="w-10 h-10 text-blue-600 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Malware Analysis</h3>
              <p className="text-gray-600">Reverse engineering and behavioral analysis of advanced malware.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Research Impact Graph */}
      <section className="bg-white py-20">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12">Research Impact</h2>
          <div className="bg-gray-50 p-6 rounded-lg shadow-lg">
            <img 
              src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&h=400&fit=crop" 
              alt="Research Impact Graph" 
              className="w-full rounded-lg"
            />
            <div className="mt-6 grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="bg-white p-4 rounded-lg shadow text-center">
                <h4 className="font-semibold text-blue-600">Citations</h4>
                <p className="text-2xl font-bold">1000+</p>
              </div>
              <div className="bg-white p-4 rounded-lg shadow text-center">
                <h4 className="font-semibold text-blue-600">h-index</h4>
                <p className="text-2xl font-bold">15</p>
              </div>
              <div className="bg-white p-4 rounded-lg shadow text-center">
                <h4 className="font-semibold text-blue-600">i10-index</h4>
                <p className="text-2xl font-bold">20</p>
              </div>
              <div className="bg-white p-4 rounded-lg shadow text-center">
                <h4 className="font-semibold text-blue-600">Publications</h4>
                <p className="text-2xl font-bold">50+</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Publications */}
      <section className="bg-gray-100 py-20">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12">Recent Publications</h2>
          <div className="space-y-6 max-w-3xl mx-auto">
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <div className="flex items-start">
                <img 
                  src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=200&h=150&fit=crop" 
                  alt="Research Paper" 
                  className="w-24 h-24 object-cover rounded-lg mr-4"
                />
                <div>
                  <FileText className="w-8 h-8 text-blue-600 mb-3" />
                  <h3 className="text-xl font-semibold mb-2">Advanced Threat Detection Using Machine Learning</h3>
                  <p className="text-gray-600 mb-2">Published in International Journal of Cybersecurity, 2024</p>
                  <a href="#" className="text-blue-600 hover:text-blue-800 inline-flex items-center">
                    Read More <ExternalLink className="w-4 h-4 ml-1" />
                  </a>
                </div>
              </div>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <div className="flex items-start">
                <img 
                  src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=200&h=150&fit=crop" 
                  alt="Research Paper" 
                  className="w-24 h-24 object-cover rounded-lg mr-4"
                />
                <div>
                  <FileText className="w-8 h-8 text-blue-600 mb-3" />
                  <h3 className="text-xl font-semibold mb-2">Zero-Day Vulnerability Detection Methods</h3>
                  <p className="text-gray-600 mb-2">IEEE Security Conference, 2023</p>
                  <a href="#" className="text-blue-600 hover:text-blue-800 inline-flex items-center">
                    Read More <ExternalLink className="w-4 h-4 ml-1" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Education & Awards */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12">Education & Awards</h2>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div>
              <h3 className="text-xl font-semibold mb-6 flex items-center">
                <GraduationCap className="w-6 h-6 mr-2 text-blue-600" />
                Education
              </h3>
              <div className="space-y-4">
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <img 
                    src="https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=400&h=200&fit=crop" 
                    alt="University" 
                    className="w-full h-32 object-cover rounded-lg mb-4"
                  />
                  <h4 className="font-semibold">Ph.D. in Computer Science</h4>
                  <p className="text-gray-600">University of Technology, 2020-2024</p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <img 
                    src="https://images.unsplash.com/photo-1592280771190-3e2e4d571952?w=400&h=200&fit=crop" 
                    alt="Institute" 
                    className="w-full h-32 object-cover rounded-lg mb-4"
                  />
                  <h4 className="font-semibold">M.Sc. in Cybersecurity</h4>
                  <p className="text-gray-600">Institute of Science, 2018-2020</p>
                </div>
              </div>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-6 flex items-center">
                <Award className="w-6 h-6 mr-2 text-blue-600" />
                Awards
              </h3>
              <div className="space-y-4">
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <img 
                    src="https://images.unsplash.com/photo-1531545514256-b1400bc00f31?w=400&h=200&fit=crop" 
                    alt="Award Ceremony" 
                    className="w-full h-32 object-cover rounded-lg mb-4"
                  />
                  <h4 className="font-semibold">Best Research Paper Award</h4>
                  <p className="text-gray-600">Cybersecurity Summit 2023</p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <img 
                    src="https://images.unsplash.com/photo-1496469888073-80de7e952517?w=400&h=200&fit=crop" 
                    alt="Grant Award" 
                    className="w-full h-32 object-cover rounded-lg mb-4"
                  />
                  <h4 className="font-semibold">Young Researcher Grant</h4>
                  <p className="text-gray-600">National Science Foundation, 2022</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section className="bg-blue-900 text-white py-20">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-8">Get in Touch</h2>
          <p className="mb-6">Interested in collaboration or have questions about my research?</p>
          <a 
            href="mailto:contact@example.com" 
            className="inline-flex items-center bg-blue-600 hover:bg-blue-700 px-6 py-3 rounded-lg transition-colors"
          >
            <Mail className="w-5 h-5 mr-2" />
            Contact Me
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-400 py-8">
        <div className="container mx-auto px-6 text-center">
          <p>© 2024 Md. Nasir Uddin. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;