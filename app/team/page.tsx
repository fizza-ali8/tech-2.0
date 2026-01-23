'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import {
  ArrowRight,
  Linkedin,
  Github,
  Mail,
  Lightbulb,
  Users,
  Award,
  UserPlus,
  GraduationCap,
  Eye,
} from 'lucide-react'
import type { LucideIcon } from 'lucide-react'
import { leadershipTeam, coreTeam, teamValues } from '@/lib/team'
import type { TeamValue } from '@/lib/team'
import { sectionFadeIn, buttonFadeIn, cardFadeInUp, imageScaleIn, transitions, getStaggerDelay, staggerContainer, staggerItem } from '@/lib/animations'

// Icon mapping
const iconMap: Record<string, LucideIcon> = {
  Lightbulb,
  Users,
  Award,
  UserPlus,
  GraduationCap,
  Eye,
}

export default function TeamPage() {
  return (
    <main>
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-[#004B78] to-[#00A485] text-white">
        <div className="absolute inset-0 opacity-20">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='80' height='80' viewBox='0 0 80 80' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.15'%3E%3Cpath d='M46 44v-8h-4v8h-8v4h8v8h4v-8h8v-4h-8zM46 8V0h-4v8h-8v4h8v8h4V12h8V8h-8zM8 44v-8H4v8H0v4h4v8h4v-8h8v-4H8zM8 8V0H4v8H0v4h4v8h4V12h8V8H8z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            }}
          />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20 md:py-28">
          <motion.h1
            {...sectionFadeIn}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight text-center"
          >
            Meet the Minds{' '}
            <span className="bg-white/20 px-2 rounded-md">Behind the Magic</span>
          </motion.h1>
          <motion.p
            {...sectionFadeIn}
            transition={{ ...transitions.smooth, delay: 0.1 }}
            className="mt-6 text-base sm:text-lg md:text-xl text-white/90 max-w-3xl mx-auto text-center leading-relaxed"
          >
            Behind every successful project is a passionate team of developers,
            designers, strategists, and innovators dedicated to delivering
            exceptional digital solutions.
          </motion.p>
        </div>
      </section>

      {/* Intro Section */}
      <section className="py-12 sm:py-16 md:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div {...sectionFadeIn} className="text-center max-w-3xl mx-auto">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              A Team Built on Innovation, Skill & Passion
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-[#004B78] to-[#00A485] mx-auto mb-6" />
            <p className="text-base sm:text-lg text-gray-600 leading-relaxed mb-4">
              At Aurora Nexus, our strength lies in our people. We are a diverse
              team of software engineers, AI specialists, designers, cloud
              architects, DevOps experts, and digital strategists working together
              to create powerful, scalable, and impactful digital solutions.
            </p>
            <p className="text-base sm:text-lg text-gray-600 leading-relaxed">
              Each team member brings deep expertise, creative thinking, and a
              commitment to excellence. We collaborate closely, think strategically,
              and build solutions that truly make a difference for our clients.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Leadership Team */}
      <section className="py-12 sm:py-16 md:py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div {...sectionFadeIn} className="text-center mb-8 sm:mb-12 md:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Leadership Team
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-[#004B78] to-[#00A485] mx-auto" />
          </motion.div>
          <motion.div 
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, amount: 0.1 }}
            className="grid sm:grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 max-w-4xl mx-auto"
          >
            {leadershipTeam.map((member, index) => (
              <motion.div
                key={member.name}
                variants={staggerItem}
                transition={{ ...transitions.smooth, delay: getStaggerDelay(index, 0.1) }}
                whileHover={{ y: -8, scale: 1.02 }}
                className="bg-white rounded-2xl shadow-lg border border-gray-100 p-6 sm:p-8 text-center hover:shadow-2xl transition-all duration-300"
              >
                <motion.div 
                  {...imageScaleIn}
                  transition={{ ...transitions.smooth, delay: getStaggerDelay(index, 0.1) + 0.1 }}
                  className="w-20 h-20 sm:w-24 sm:h-24 rounded-full overflow-hidden bg-gradient-to-br from-gray-200 to-gray-300 flex items-center justify-center mx-auto mb-5 border-2 border-gray-300 relative"
                >
                  {member.image ? (
                    <Image
                      src={member.image}
                      alt={member.name}
                      fill
                      className="object-cover"
                      loading="lazy"
                      quality={85}
                    />
                  ) : (
                    <div className="w-full h-full bg-gradient-to-br from-[#004B78] to-[#00A485] flex items-center justify-center">
                      <span className="text-white text-2xl sm:text-3xl font-bold">
                        {member.name.charAt(0)}
                      </span>
                    </div>
                  )}
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-2">
                  {member.name}
                </h3>
                <p className="text-sm sm:text-base text-[#00A485] font-semibold mb-3">
                  {member.role}
                </p>
                <p className="text-sm text-gray-600 leading-relaxed mb-4">
                  {member.expertise}
                </p>
                <div className="flex items-center justify-center gap-3">
                  {member.social?.linkedin && (
                    <a
                      href={member.social.linkedin}
                      className="w-8 h-8 rounded-full bg-gray-100 hover:bg-[#00A485] flex items-center justify-center transition-colors group"
                    >
                      <Linkedin className="w-4 h-4 text-gray-600 group-hover:text-white" />
                    </a>
                  )}
                  {member.social?.email && (
                    <a
                      href={`mailto:${member.social.email}`}
                      className="w-8 h-8 rounded-full bg-gray-100 hover:bg-[#00A485] flex items-center justify-center transition-colors group"
                    >
                      <Mail className="w-4 h-4 text-gray-600 group-hover:text-white" />
                    </a>
                  )}
                </motion.div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Core Team */}
      <section className="py-12 sm:py-16 md:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div {...sectionFadeIn} className="text-center mb-8 sm:mb-12 md:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Experts
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-[#004B78] to-[#00A485] mx-auto" />
          </motion.div>
          <motion.div 
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, amount: 0.1 }}
            className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8"
          >
            {coreTeam.slice(0, 3).map((member, index) => (
              <motion.div
                key={member.name}
                variants={staggerItem}
                transition={{ ...transitions.smooth, delay: getStaggerDelay(index, 0.08) }}
                whileHover={{ y: -8, scale: 1.02 }}
                className="bg-white rounded-2xl shadow-lg border border-gray-100 p-6 sm:p-8 text-center hover:shadow-2xl transition-all duration-300"
              >
                <motion.div 
                  {...imageScaleIn}
                  transition={{ ...transitions.smooth, delay: getStaggerDelay(index, 0.08) + 0.1 }}
                  className="w-20 h-20 sm:w-24 sm:h-24 rounded-full overflow-hidden bg-gradient-to-br from-gray-200 to-gray-300 flex items-center justify-center mx-auto mb-5 border-2 border-gray-300 relative"
                >
                  {member.image ? (
                    <Image
                      src={member.image}
                      alt={member.name}
                      fill
                      className="object-cover"
                      loading="lazy"
                      quality={85}
                    />
                  ) : (
                    <div className="w-full h-full bg-gradient-to-br from-[#004B78] to-[#00A485] flex items-center justify-center">
                      <span className="text-white text-2xl sm:text-3xl font-bold">
                        {member.name.charAt(0)}
                      </span>
                    </div>
                  )}
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-2">
                  {member.name}
                </h3>
                <p className="text-sm sm:text-base text-[#00A485] font-semibold mb-3">
                  {member.role}
                </p>
                <p className="text-sm text-gray-600 leading-relaxed mb-4">
                  {member.expertise}
                </p>
                <div className="flex items-center justify-center gap-3">
                  {member.social?.linkedin && (
                    <a
                      href={member.social.linkedin}
                      className="w-8 h-8 rounded-full bg-gray-100 hover:bg-[#00A485] flex items-center justify-center transition-colors group"
                    >
                      <Linkedin className="w-4 h-4 text-gray-600 group-hover:text-white" />
                    </a>
                  )}
                  {member.social?.github && (
                    <a
                      href={member.social.github}
                      className="w-8 h-8 rounded-full bg-gray-100 hover:bg-[#00A485] flex items-center justify-center transition-colors group"
                    >
                      <Github className="w-4 h-4 text-gray-600 group-hover:text-white" />
                    </a>
                  )}
                </div>
              </motion.div>
            ))}
            {/* Last 2 items centered */}
            {coreTeam.length > 3 && (
              <div className="lg:col-span-3 flex justify-center gap-6 md:gap-8 flex-wrap">
                {coreTeam.slice(3).map((member, index) => (
                  <motion.div
                    key={member.name}
                    variants={staggerItem}
                    transition={{ ...transitions.smooth, delay: getStaggerDelay(index + 3, 0.08) }}
                    whileHover={{ y: -8, scale: 1.02 }}
                    className="bg-white rounded-2xl shadow-lg border border-gray-100 p-6 sm:p-8 text-center hover:shadow-2xl transition-all duration-300 w-full md:w-[calc(50%-1rem)] lg:w-auto lg:max-w-sm"
                  >
                    <motion.div 
                      {...imageScaleIn}
                      transition={{ ...transitions.smooth, delay: getStaggerDelay(index + 3, 0.08) + 0.1 }}
                      className="w-20 h-20 sm:w-24 sm:h-24 rounded-full overflow-hidden bg-gradient-to-br from-gray-200 to-gray-300 flex items-center justify-center mx-auto mb-5 border-2 border-gray-300 relative"
                    >
                      {member.image ? (
                        <Image
                          src={member.image}
                          alt={member.name}
                          fill
                          className="object-cover"
                          loading="lazy"
                          quality={85}
                        />
                      ) : (
                        <div className="w-full h-full bg-gradient-to-br from-[#004B78] to-[#00A485] flex items-center justify-center">
                          <span className="text-white text-2xl sm:text-3xl font-bold">
                            {member.name.charAt(0)}
                          </span>
                        </div>
                      )}
                    </div>
                    <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-2">
                      {member.name}
                    </h3>
                    <p className="text-sm sm:text-base text-[#00A485] font-semibold mb-3">
                      {member.role}
                    </p>
                    <p className="text-sm text-gray-600 leading-relaxed mb-4">
                      {member.expertise}
                    </p>
                    <div className="flex items-center justify-center gap-3">
                      {member.social?.linkedin && (
                        <a
                          href={member.social.linkedin}
                          className="w-8 h-8 rounded-full bg-gray-100 hover:bg-[#00A485] flex items-center justify-center transition-colors group"
                        >
                          <Linkedin className="w-4 h-4 text-gray-600 group-hover:text-white" />
                        </a>
                      )}
                      {member.social?.github && (
                        <a
                          href={member.social.github}
                          className="w-8 h-8 rounded-full bg-gray-100 hover:bg-[#00A485] flex items-center justify-center transition-colors group"
                        >
                          <Github className="w-4 h-4 text-gray-600 group-hover:text-white" />
                        </a>
                      )}
                    </div>
                  </motion.div>
                ))}
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Team Values */}
      <section className="py-12 sm:py-16 md:py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div {...sectionFadeIn} className="text-center mb-8 sm:mb-12 md:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              What Drives Our Team
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-[#004B78] to-[#00A485] mx-auto" />
          </motion.div>
          <motion.div 
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, amount: 0.1 }}
            className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8"
          >
            {teamValues.map((value, index) => {
              const IconComponent = iconMap[value.icon] || Lightbulb
              return (
                <motion.div
                  key={value.title}
                  variants={staggerItem}
                  transition={{ ...transitions.smooth, delay: getStaggerDelay(index, 0.1) }}
                  whileHover={{ y: -8, scale: 1.02 }}
                  className="bg-white rounded-2xl shadow-lg border border-gray-100 p-6 sm:p-8 text-center hover:shadow-2xl transition-all duration-300"
                >
                  <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-lg bg-gradient-to-br from-[#004B78] to-[#00A485] flex items-center justify-center mx-auto mb-5">
                    <IconComponent className="w-7 h-7 sm:w-8 sm:h-8 text-white" />
                  </div>
                  <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-3">
                    {value.title}
                  </h3>
                  <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                    {value.description}
                  </p>
                </motion.div>
              )
            })}
          </motion.div>
        </div>
      </section>

      {/* Our Culture */}
      <section className="py-12 sm:py-16 md:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <motion.div {...sectionFadeIn} className="text-center mb-8 sm:mb-12">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                A Culture of Growth & Excellence
              </h2>
              <div className="w-24 h-1 bg-gradient-to-r from-[#004B78] to-[#00A485] mx-auto mb-6" />
            </motion.div>
            <motion.div
              {...sectionFadeIn}
              transition={{ ...transitions.smooth, delay: 0.1 }}
              className="space-y-4"
            >
              <p className="text-base sm:text-lg text-gray-700 leading-relaxed">
                We foster a culture where creativity, curiosity, and collaboration
                thrive. Our team is encouraged to innovate, challenge ideas, and
                continuously grow their skills. From brainstorming sessions to
                project launches, we work as one team with a shared goal: delivering
                outstanding digital experiences.
              </p>
              <p className="text-base sm:text-lg text-gray-700 leading-relaxed">
                We value transparency, respect, and ownership — creating an
                environment where great ideas turn into great products.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Behind the Scenes */}
      <section className="py-12 sm:py-16 md:py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div {...sectionFadeIn} className="text-center mb-8 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Life at Aurora Nexus
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-[#004B78] to-[#00A485] mx-auto mb-6" />
          </motion.div>
          <motion.div
            {...sectionFadeIn}
            transition={{ ...transitions.smooth, delay: 0.1 }}
            className="max-w-4xl mx-auto"
          >
            <p className="text-base sm:text-lg text-gray-700 leading-relaxed mb-6">
              From design workshops and sprint planning to product launches and
              celebrations, our team enjoys a dynamic and collaborative work
              environment. We believe that a happy, motivated team delivers the best
              results.
            </p>
            <div className="grid sm:grid-cols-2 gap-4">
              {[1, 2, 3, 4].map((i) => (
                <div
                  key={i}
                  className="w-full h-48 rounded-xl bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center"
                >
                  <div className="text-center">
                    <Users className="w-12 h-12 text-[#00A485] mx-auto mb-2" />
                    <p className="text-sm text-gray-600">Team Photo {i}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Join Our Team */}
      <section className="py-12 sm:py-16 md:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            {...cardFadeInUp}
            className="bg-gradient-to-br from-gray-50 to-white rounded-2xl shadow-lg border border-gray-100 p-8 sm:p-12 text-center"
          >
            <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
              Want to Work With Us?
            </h3>
            <p className="text-base text-gray-600 mb-6 max-w-2xl mx-auto">
              We&apos;re always looking for talented developers, designers, AI
              specialists, and digital strategists to join our growing team.
            </p>
            <motion.a
              {...buttonFadeIn}
              href="/contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center gap-2 px-6 py-3 md:px-8 md:py-4 bg-gradient-to-r from-[#004B78] to-[#00A485] text-white rounded-lg font-semibold text-base md:text-lg shadow-lg hover:shadow-xl transition-all duration-300"
            >
              View Open Positions
              <ArrowRight className="w-5 h-5" />
            </motion.a>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 sm:py-16 md:py-20 bg-gradient-to-br from-[#004B78] to-[#00A485] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h3
            {...sectionFadeIn}
            className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4"
          >
            Ready to Build Something Amazing With Us?
          </motion.h3>
          <motion.p
            {...sectionFadeIn}
            transition={{ ...transitions.smooth, delay: 0.1 }}
            className="text-base sm:text-lg text-white/90 mb-6 max-w-2xl mx-auto"
          >
            Let&apos;s turn your ideas into powerful digital solutions with a team
            you can trust.
          </motion.p>
          <motion.a
            {...buttonFadeIn}
            href="/contact"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center gap-2 px-6 py-3 md:px-8 md:py-4 bg-white text-[#004B78] rounded-lg font-semibold text-base md:text-lg shadow-lg hover:shadow-xl transition-all duration-300"
          >
            Start Your Project Today
            <ArrowRight className="w-5 h-5" />
          </motion.a>
        </div>
      </section>
    </main>
  )
}

