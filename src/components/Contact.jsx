import React from 'react';
import { Mail, Phone, MapPin, Wifi, Shield, Zap } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="py-20 relative overflow-hidden bg-black text-white">
      {/* Background Layers */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-[#0f172a] via-black to-[#020617] opacity-50"></div>
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              'radial-gradient(circle at 1px 1px, rgba(6,182,212,0.15) 1px, transparent 0px)',
            backgroundSize: '50px 50px',
          }}
        ></div>
        <div className="absolute inset-0 particles"></div>
      </div>

      <div className="relative z-10 container mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-3 mb-4">
            <Wifi className="w-8 h-8 text-cyan-400" />
            <span className="text-cyan-400 font-mono text-sm tracking-wider">
              COMMUNICATION_PROTOCOL
            </span>
          </div>
          <h2 className="text-4xl md:text-6xl font-bold font-mono bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 mb-4">
            GET IN TOUCH
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Ready to build something extraordinary? Let's connect and discuss your next project.
          </p>
        </div>

        {/* Content */}
        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Form Panel */}
          <div className="space-y-8">
            <div className="relative border border-cyan-500/20 bg-gradient-to-r from-cyan-500/5 to-purple-500/5 rounded-lg p-6 backdrop-blur-sm">
              <div className="flex items-center gap-3 mb-4">
                <Mail className="w-6 h-6 text-cyan-400" />
                <h3 className="text-xl font-semibold text-white">Send Message</h3>
                <div className="flex-1"></div>
                <Wifi className="w-4 h-4 text-green-400" />
                <span className="text-green-400 text-sm font-mono">ONLINE</span>
              </div>

              {/* ✅ Working FormSubmit Integration */}
              <form
                action="https://formsubmit.co/khogula2004@gmail.com"
                method="POST"
                className="space-y-6 mt-6"
              >
                <input type="hidden" name="_captcha" value="false" />
                <input type="hidden" name="_template" value="table" />

                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-cyan-400 text-sm font-mono mb-2">NAME</label>
                    <input
                      type="text"
                      required
                      name="name"
                      placeholder="Enter your name"
                      className="input-field"
                    />
                  </div>
                  <div>
                    <label className="block text-cyan-400 text-sm font-mono mb-2">EMAIL</label>
                    <input
                      type="email"
                      required
                      name="email"
                      placeholder="your@email.com"
                      className="input-field"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-cyan-400 text-sm font-mono mb-2">SUBJECT</label>
                  <input
                    type="text"
                    required
                    name="subject"
                    placeholder="Project discussion"
                    className="input-field"
                  />
                </div>
                <div>
                  <label className="block text-cyan-400 text-sm font-mono mb-2">MESSAGE</label>
                  <textarea
                    name="message"
                    rows="6"
                    required
                    placeholder="Tell me about your project..."
                    className="input-field resize-none"
                  ></textarea>
                </div>
                <button type="submit" className="btn-gradient group relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-cyan-500 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                  <div className="relative flex items-center justify-center gap-2 z-10">
                    <Mail className="w-5 h-5" />
                    <span>SEND MESSAGE</span>
                  </div>
                </button>
              </form>
            </div>
          </div>

          {/* Info Panel */}
          <div className="space-y-8">
            <div className="card-glass">
              <h3 className="text-xl font-semibold text-white mb-6 flex items-center gap-2">
                <Shield className="w-6 h-6 text-purple-400" />
                Contact Information
              </h3>
              <div className="space-y-6">
                {[
                  {
                    icon: <Mail className="w-6 h-6" />,
                    label: 'EMAIL',
                    value: 'khogula2004@gmail.com',
                    href: 'mailto:khogula2004@gmail.com',
                  },
                  {
                    icon: <Phone className="w-6 h-6" />,
                    label: 'PHONE',
                    value: '+918300132004',
                    href: 'tel:+918300132004',
                  },
                  {
                    icon: <MapPin className="w-6 h-6" />,
                    label: 'LOCATION',
                    value: 'Tiruchirappalli, India',
                    href: '#',
                  },
                  {
                    icon: <Zap className="w-6 h-6" />,
                    label: 'WHATSAPP',
                    value: '+918300132004',
                    href: 'https://wa.me/+918300132004',
                  },
                ].map((item) => (
                  <a key={item.label} href={item.href} className="flex items-center gap-4 p-4 info-card">
                    <div className="icon-gradient">{item.icon}</div>
                    <div>
                      <p className="text-gray-400 text-sm font-mono">{item.label}</p>
                      <p className="text-white font-medium">{item.value}</p>
                    </div>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
