"use client";

import { useState } from "react";

type FormData = {
  name: string;
  role: string;
  email: string;
  phone: string;
  location: string;
  linkedin: string;
  skills: string;
  summary: string;
  education: string;
  experience: string;
  projects: string;
};

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [generated, setGenerated] = useState(false);

  const [form, setForm] = useState<FormData>({
    name: "",
    role: "",
    email: "",
    phone: "",
    location: "",
    linkedin: "",
    skills: "",
    summary: "",
    education: "",
    experience: "",
    projects: "",
  });

  const updateField = (field: keyof FormData, value: string) => {
    setForm((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const generateResume = async () => {
  try {
    setGenerated(true);

    const response = await fetch("/api/generate-resume", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(form),
    });

    const data = await response.json();

    console.log("Backend response:", data);

    setTimeout(() => {
      document
        .getElementById("resume-result")
        ?.scrollIntoView({ behavior: "smooth" });
    }, 100);

  } catch (error) {
    console.error("Generate resume error:", error);
    alert("Something went wrong.");
  }
};

  const copyResume = async () => {
    const resumeText = `
${form.name || "Your Name"}
${form.role || "Professional"}

PROFESSIONAL SUMMARY
${form.summary || "Your AI-generated professional summary will appear here."}

SKILLS
${form.skills || "Your relevant skills will appear here."}

WORK EXPERIENCE
${form.experience || "Your professional experience and achievements will appear here."}

PROJECTS
${form.projects || "Your projects, technologies and achievements will appear here."}

EDUCATION
${form.education || "Your education and academic achievements will appear here."}

CONTACT
${
  [form.email, form.phone, form.location, form.linkedin]
    .filter(Boolean)
    .join(" • ") || "Your contact information will appear here."
}
    `.trim();

    try {
      await navigator.clipboard.writeText(resumeText);
      alert("Resume copied!");
    } catch {
      alert("Unable to copy resume.");
    }
  };

  return (
    <main className="min-h-screen overflow-x-hidden bg-[#160b05] text-white">

      {/* ========================================================= */}
      {/* BACKGROUND */}
      {/* ========================================================= */}

      <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">

        {/* Main warm orange → dark brown gradient */}
        <div
          className="
            absolute inset-0
            bg-[linear-gradient(to_bottom,#6b2f08_0%,#592506_18%,#431b08_38%,#2d1208_60%,#1d0c06_82%,#160b05_100%)]
          "
        />

        {/* Large top orange glow */}
        <div
          className="
            absolute
            left-1/2
            top-[-260px]
            h-[650px]
            w-[950px]
            -translate-x-1/2
            rounded-full
            bg-orange-500/20
            blur-[170px]
          "
        />

        {/* Left warm glow */}
        <div
          className="
            absolute
            left-[-300px]
            top-[600px]
            h-[600px]
            w-[600px]
            rounded-full
            bg-orange-500/10
            blur-[170px]
          "
        />

        {/* Right warm glow */}
        <div
          className="
            absolute
            right-[-300px]
            top-[1400px]
            h-[600px]
            w-[600px]
            rounded-full
            bg-amber-500/10
            blur-[180px]
          "
        />

        {/* Bottom subtle glow */}
        <div
          className="
            absolute
            bottom-[-350px]
            left-1/2
            h-[600px]
            w-[800px]
            -translate-x-1/2
            rounded-full
            bg-orange-700/10
            blur-[200px]
          "
        />

      </div>


      {/* ========================================================= */}
      {/* NAVBAR */}
      {/* ========================================================= */}

      <nav className="relative z-50 mx-auto w-full max-w-6xl px-5 pt-5 sm:px-8">

        <div
          className="
            flex items-center justify-between
            rounded-3xl
            border border-orange-300/15
            bg-[#2a1208]/65
            px-5 py-4
            shadow-xl shadow-black/20
            backdrop-blur-xl
            sm:px-6
          "
        >

          {/* Logo */}

          <div className="flex min-w-0 items-center gap-3">

            <div
              className="
                flex h-11 w-11 shrink-0
                items-center justify-center
                overflow-hidden
                rounded-full
                border border-orange-300/20
                bg-white
                shadow-lg shadow-orange-900/20
              "
            >
              <img
                src="/logo.png"
                alt="KrishAIWorks"
                className="h-full w-full rounded-full object-cover"
              />
            </div>

            <div className="min-w-0">

              <h2 className="text-sm font-bold text-white sm:text-base">
                KrishAIWorks
              </h2>

              <p className="text-[10px] text-orange-100/50 sm:text-xs">
                AI Solutions That Work
              </p>

            </div>

          </div>


          {/* Desktop Navigation */}

          <div className="hidden items-center gap-7 text-sm text-orange-50/70 md:flex">

            <a
              href="#features"
              className="transition hover:text-orange-300"
            >
              Features
            </a>

            <a
              href="#how"
              className="transition hover:text-orange-300"
            >
              How To Use
            </a>

            <a
              href="#faq"
              className="transition hover:text-orange-300"
            >
              FAQ
            </a>

            <a
              href="https://instagram.com/KrishAIWorks"
              target="_blank"
              rel="noopener noreferrer"
              className="
                rounded-full
                border border-orange-400/20
                bg-orange-400/10
                px-5 py-2
                font-medium
                text-orange-200
                transition
                hover:bg-orange-400/20
                hover:text-orange-100
              "
            >
              Follow
            </a>

          </div>


          {/* Mobile Menu */}

          <button
            type="button"
            onClick={() => setMenuOpen(!menuOpen)}
            className="
              rounded-full
              border border-orange-300/20
              bg-orange-200/5
              px-5 py-2
              text-xs
              text-orange-100/70
              transition
              hover:border-orange-300/40
              hover:text-orange-300
              md:hidden
            "
          >
            {menuOpen ? "Close" : "Menu"}
          </button>

        </div>


        {/* Mobile Dropdown */}

        {menuOpen && (
          <div
            className="
              mt-2
              rounded-3xl
              border border-orange-300/15
              bg-[#291108]/95
              p-4
              shadow-xl shadow-black/30
              backdrop-blur-xl
              md:hidden
            "
          >

            <div className="flex flex-col gap-1">

              <a
                href="#features"
                onClick={() => setMenuOpen(false)}
                className="
                  rounded-2xl px-4 py-3
                  text-sm text-orange-50/70
                  transition
                  hover:bg-orange-400/10
                  hover:text-orange-300
                "
              >
                Features
              </a>

              <a
                href="#how"
                onClick={() => setMenuOpen(false)}
                className="
                  rounded-2xl px-4 py-3
                  text-sm text-orange-50/70
                  transition
                  hover:bg-orange-400/10
                  hover:text-orange-300
                "
              >
                How To Use
              </a>

              <a
                href="#faq"
                onClick={() => setMenuOpen(false)}
                className="
                  rounded-2xl px-4 py-3
                  text-sm text-orange-50/70
                  transition
                  hover:bg-orange-400/10
                  hover:text-orange-300
                "
              >
                FAQ
              </a>

            </div>

          </div>
        )}

      </nav>


      {/* ========================================================= */}
      {/* HERO */}
      {/* ========================================================= */}

      <section
        className="
          relative z-10
          mx-auto flex w-full max-w-6xl
          flex-col items-center
          px-5 pb-16 pt-20
          text-center
          sm:px-8 sm:pt-24
        "
      >

        {/* Powered badge */}

        <div
          className="
            rounded-full
            border border-orange-400/25
            bg-orange-400/10
            px-5 py-2.5
            text-xs
            text-orange-200
            shadow-lg shadow-orange-950/20
            backdrop-blur-xl
            sm:text-sm
          "
        >
          ✨ Powered by Gemini AI
        </div>


        {/* Built by */}

        <p className="mt-5 text-xs text-orange-100/45 sm:text-sm">
          Built by{" "}
          <span className="font-semibold text-orange-300">
            KrishAIWorks
          </span>
        </p>


        {/* Heading */}

        <h1
          className="
            mt-7
            max-w-4xl
            text-4xl
            font-extrabold
            leading-[1.08]
            tracking-tight
            sm:text-6xl
            lg:text-7xl
          "
        >

          Build A Better Resume

          <br />

          <span
            className="
              bg-gradient-to-r
              from-orange-200
              via-orange-400
              to-amber-500
              bg-clip-text
              text-transparent
            "
          >
            With AI.
          </span>

        </h1>


        {/* Description */}

        <p
          className="
            mt-6
            max-w-2xl
            text-sm
            leading-7
            text-orange-50/60
            sm:text-base
            sm:leading-8
          "
        >
          Create a professional, structured and job-focused resume in
          seconds. Turn your skills, experience and projects into a polished
          resume with the help of AI.
        </p>


        {/* Pills */}

        <div className="mt-7 flex flex-wrap justify-center gap-2.5">

          <span
            className="
              rounded-full
              border border-orange-300/15
              bg-orange-300/5
              px-4 py-2
              text-xs
              text-orange-50/75
              backdrop-blur-xl
            "
          >
            📄 AI Resume
          </span>

          <span
            className="
              rounded-full
              border border-orange-300/15
              bg-orange-300/5
              px-4 py-2
              text-xs
              text-orange-50/75
              backdrop-blur-xl
            "
          >
            🎯 Job Focused
          </span>

          <span
            className="
              rounded-full
              border border-orange-300/15
              bg-orange-300/5
              px-4 py-2
              text-xs
              text-orange-50/75
              backdrop-blur-xl
            "
          >
            ⚡ AI Powered
          </span>

        </div>

      </section>


      {/* ========================================================= */}
      {/* RESUME GENERATOR */}
      {/* ========================================================= */}

      <section
        id="resume-generator"
        className="relative z-10 mx-auto w-full max-w-4xl px-5 py-10 sm:px-8"
      >

        <div
          className="
            rounded-[2rem]
            border border-orange-300/15
            bg-[#241007]/90
            p-5
            shadow-2xl shadow-black/30
            backdrop-blur-2xl
            sm:p-8
          "
        >

          <div className="text-left">

            <p
              className="
                text-xs
                font-semibold
                uppercase
                tracking-[0.2em]
                text-orange-400
              "
            >
              Resume Builder
            </p>

            <h2 className="mt-3 text-2xl font-bold text-white sm:text-3xl">
              Tell us about yourself.
            </h2>

            <p className="mt-2 max-w-2xl text-sm leading-7 text-orange-50/50">
              Add your details, skills and experience. AI will turn them into
              a professional resume.
            </p>

          </div>


          {/* Personal Information */}

          <div className="mt-10">

            <FormSectionTitle title="Personal Information" />

            <div className="mt-5 grid gap-4 sm:grid-cols-2">

              <InputField
                label="Full Name"
                placeholder="e.g. Krish Sharma"
                value={form.name}
                onChange={(value) => updateField("name", value)}
              />

              <InputField
                label="Target Job Role"
                placeholder="e.g. AI Automation Developer"
                value={form.role}
                onChange={(value) => updateField("role", value)}
              />

              <InputField
                label="Email"
                type="email"
                placeholder="you@example.com"
                value={form.email}
                onChange={(value) => updateField("email", value)}
              />

              <InputField
                label="Phone"
                type="tel"
                placeholder="+91 XXXXX XXXXX"
                value={form.phone}
                onChange={(value) => updateField("phone", value)}
              />

              <InputField
                label="Location"
                placeholder="City, Country"
                value={form.location}
                onChange={(value) => updateField("location", value)}
              />

              <InputField
                label="LinkedIn / Portfolio"
                placeholder="https://..."
                value={form.linkedin}
                onChange={(value) => updateField("linkedin", value)}
              />

            </div>

          </div>


          {/* Professional */}

          <div className="mt-10">

            <FormSectionTitle title="Professional Information" />

            <div className="mt-5 space-y-4">

              <TextAreaField
                label="Skills"
                rows={4}
                placeholder="e.g. React, Next.js, TypeScript, AI Automation, n8n..."
                value={form.skills}
                onChange={(value) => updateField("skills", value)}
              />

              <TextAreaField
                label="Professional Summary"
                rows={4}
                placeholder="Briefly describe yourself, your strengths and career goals..."
                value={form.summary}
                onChange={(value) => updateField("summary", value)}
              />

            </div>

          </div>


          {/* Education */}

          <div className="mt-10">

            <FormSectionTitle title="Education" />

            <div className="mt-5">

              <TextAreaField
                label="Education Details"
                rows={5}
                placeholder="Degree, college/university, year, achievements..."
                value={form.education}
                onChange={(value) => updateField("education", value)}
              />

            </div>

          </div>


          {/* Experience */}

          <div className="mt-10">

            <FormSectionTitle title="Work Experience" />

            <div className="mt-5">

              <TextAreaField
                label="Experience"
                rows={6}
                placeholder="Company, role, responsibilities, achievements..."
                value={form.experience}
                onChange={(value) => updateField("experience", value)}
              />

            </div>

          </div>


          {/* Projects */}

          <div className="mt-10">

            <FormSectionTitle title="Projects" />

            <div className="mt-5">

              <TextAreaField
                label="Projects"
                rows={6}
                placeholder="Project name, what you built, technologies used, results..."
                value={form.projects}
                onChange={(value) => updateField("projects", value)}
              />

            </div>

          </div>


          {/* Generate */}

          <button
            type="button"
            onClick={generateResume}
            className="
              mt-8
              h-14
              w-full
              rounded-2xl
              bg-gradient-to-r
              from-orange-500
              via-orange-500
              to-amber-500
              px-7
              text-sm
              font-semibold
              text-white
              shadow-xl
              shadow-orange-950/30
              transition
              hover:-translate-y-0.5
              hover:from-orange-400
              hover:to-amber-400
              active:scale-[0.99]
            "
          >
            ✨ Generate Resume
          </button>

          <p className="mt-3 text-center text-xs text-orange-100/35">
            Your information will be used to create your professional resume.
          </p>

        </div>

      </section>


      {/* ========================================================= */}
      {/* RESULT */}
      {/* ========================================================= */}

      <section
        id="resume-result"
        className="relative z-10 mx-auto w-full max-w-4xl px-5 py-10 sm:px-8"
      >

        <div
          className="
            rounded-[2rem]
            border border-orange-300/15
            bg-[#241007]/90
            p-6
            shadow-2xl shadow-black/30
            backdrop-blur-2xl
            sm:p-8
          "
        >

          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">

            <div>

              <h2 className="text-2xl font-bold text-white">
                📄 AI Generated Resume
              </h2>

              <p className="mt-1 text-sm text-orange-50/45">
                {generated
                  ? "Your resume is ready to review."
                  : "Your professional resume will appear here."}
              </p>

            </div>

            <span
              className="
                w-fit
                rounded-full
                border border-orange-400/25
                bg-orange-400/10
                px-4 py-2
                text-xs
                font-medium
                text-orange-300
              "
            >
              {generated ? "Generated" : "Preview"}
            </span>

          </div>


          {/* Resume Content */}

          <div
            className="
              mt-7
              rounded-2xl
              border border-orange-300/10
              bg-[#170b05]/80
              p-5
              sm:p-7
            "
          >

            <div className="space-y-8">

              <ResumeSection
                title="PROFESSIONAL SUMMARY"
                text={
                  form.summary ||
                  "Your AI-generated professional summary will appear here."
                }
              />

              <ResumeSection
                title="SKILLS"
                text={
                  form.skills ||
                  "Your relevant skills will appear here."
                }
              />

              <ResumeSection
                title="WORK EXPERIENCE"
                text={
                  form.experience ||
                  "Your professional experience and achievements will appear here."
                }
              />

              <ResumeSection
                title="PROJECTS"
                text={
                  form.projects ||
                  "Your projects, technologies and achievements will appear here."
                }
              />

              <ResumeSection
                title="EDUCATION"
                text={
                  form.education ||
                  "Your education and academic achievements will appear here."
                }
              />

              <ResumeSection
                title="CONTACT"
                text={
                  [
                    form.email,
                    form.phone,
                    form.location,
                    form.linkedin,
                  ]
                    .filter(Boolean)
                    .join(" • ") ||
                  "Your contact information will appear here."
                }
              />

            </div>

          </div>


          {/* Actions */}

          <div className="mt-6 flex flex-wrap gap-3">

            <button
              type="button"
              onClick={copyResume}
              className="
                rounded-xl
                bg-gradient-to-r
                from-orange-500
                to-amber-500
                px-5 py-3
                text-sm
                font-semibold
                text-white
                shadow-lg
                shadow-orange-950/20
                transition
                hover:from-orange-400
                hover:to-amber-400
                active:scale-95
              "
            >
              📋 Copy Resume
            </button>

            <button
              type="button"
              onClick={() =>
                document
                  .getElementById("resume-generator")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
              className="
                rounded-xl
                border border-orange-300/15
                bg-orange-100/5
                px-5 py-3
                text-sm
                font-semibold
                text-orange-50/70
                transition
                hover:border-orange-300/30
                hover:bg-orange-400/10
                hover:text-orange-300
                active:scale-95
              "
            >
              🔄 New Resume
            </button>

          </div>

        </div>

      </section>


      {/* ========================================================= */}
      {/* FEATURES */}
      {/* ========================================================= */}

      <section
        id="features"
        className="relative z-10 mx-auto w-full max-w-6xl px-5 py-24 sm:px-8"
      >

        <div className="mx-auto max-w-2xl text-center">

          <p
            className="
              text-xs
              font-semibold
              uppercase
              tracking-[0.25em]
              text-orange-400
            "
          >
            Why Use It
          </p>

          <h2 className="mt-4 text-3xl font-bold text-white sm:text-4xl">
            Build a resume that stands out.
          </h2>

          <p className="mt-4 text-sm leading-7 text-orange-50/50">
            Turn your raw information into clean, professional and
            job-focused resume content with AI.
          </p>

        </div>


        <div className="mt-12 grid gap-5 md:grid-cols-3">

          <FeatureCard
            icon="🎯"
            title="Job Focused"
            description="Create resume content tailored around the role you want to apply for."
          />

          <FeatureCard
            icon="⚡"
            title="Save Your Time"
            description="Turn your experience, skills and projects into polished content in seconds."
          />

          <FeatureCard
            icon="📄"
            title="Professional Format"
            description="Get a clean and structured resume that's easy to read and customize."
          />

        </div>

      </section>


      {/* ========================================================= */}
      {/* HOW TO USE */}
      {/* ========================================================= */}

      <section
        id="how"
        className="relative z-10 mx-auto w-full max-w-6xl px-5 py-24 sm:px-8"
      >

        <div className="mx-auto max-w-2xl text-center">

          <p
            className="
              text-xs
              font-semibold
              uppercase
              tracking-[0.25em]
              text-orange-400
            "
          >
            Simple Process
          </p>

          <h2 className="mt-4 text-3xl font-bold text-white sm:text-4xl">
            Create your resume in seconds.
          </h2>

        </div>


        <div className="mt-12 grid gap-5 md:grid-cols-3">

          <StepCard
            number="01"
            title="Enter Your Details"
            description="Add your personal information, skills, education, experience and projects."
          />

          <StepCard
            number="02"
            title="Generate With AI"
            description="Let AI transform your information into polished, professional resume content."
          />

          <StepCard
            number="03"
            title="Review & Copy"
            description="Review your resume and copy the finished content whenever you're ready."
          />

        </div>

      </section>


      {/* ========================================================= */}
      {/* FAQ */}
      {/* ========================================================= */}

      <section
        id="faq"
        className="relative z-10 mx-auto w-full max-w-4xl px-5 py-24 sm:px-8"
      >

        <div className="text-center">

          <p
            className="
              text-xs
              font-semibold
              uppercase
              tracking-[0.25em]
              text-orange-400
            "
          >
            FAQ
          </p>

          <h2 className="mt-4 text-3xl font-bold text-white sm:text-4xl">
            Frequently Asked Questions
          </h2>

        </div>


        <div className="mt-10 space-y-4">

          <FaqItem
            question="Is this resume builder free?"
            answer="Yes. You can use the resume builder without paying for the basic experience."
          />

          <FaqItem
            question="Can I use it for different job roles?"
            answer="Yes. Add your target job role and your resume content can be tailored around that position."
          />

          <FaqItem
            question="Can I edit the generated resume?"
            answer="Yes. You can review the generated content and copy it into your preferred resume format for further editing."
          />

          <FaqItem
            question="What information should I provide?"
            answer="Add your basic details, skills, education, work experience, projects and professional summary."
          />

        </div>

      </section>


     {/* ========================================================= */}
{/* FOOTER */}
{/* ========================================================= */}

<footer
  className="
    relative z-10
    border-t border-orange-300/10
    bg-[#170b05]/60
  "
>

  <div className="mx-auto w-full max-w-6xl px-5 py-14 sm:px-8">

    {/* RELATED TOOLS */}

    <div className="mb-12">

      <div className="mx-auto max-w-2xl text-center">

        <p className="text-xs font-semibold uppercase tracking-[0.25em] text-orange-300">
          Explore More
        </p>

        <h2 className="mt-3 text-2xl font-bold text-white sm:text-3xl">
          More AI Career Tools
        </h2>

        <p className="mt-3 text-sm leading-7 text-orange-100/40">
          Explore more AI-powered tools to improve your resume,
          job applications and professional career.
        </p>

      </div>

      <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">

        {/* AI RESUME ANALYZER */}

        <a
          href="https://airesumeanalyzer.krishaiworks.com/"
          className="group rounded-2xl border border-white/5 bg-white/[0.025] p-5 transition hover:-translate-y-1 hover:border-orange-300/20 hover:bg-orange-300/[0.03]"
        >

          <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-orange-300/10 bg-orange-300/10 text-lg">
            🔍
          </div>

          <h3 className="mt-4 text-sm font-semibold text-white transition group-hover:text-orange-200">
            AI Resume Analyzer
          </h3>

          <p className="mt-2 text-xs leading-6 text-orange-100/40">
            Analyze your resume and discover ways to improve it.
          </p>

        </a>

        {/* AI COVER LETTER GENERATOR */}

        <a
          href="https://aicoverlettergenerator.krishaiworks.com/"
          className="group rounded-2xl border border-white/5 bg-white/[0.025] p-5 transition hover:-translate-y-1 hover:border-orange-300/20 hover:bg-orange-300/[0.03]"
        >

          <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-orange-300/10 bg-orange-300/10 text-lg">
            💼
          </div>

          <h3 className="mt-4 text-sm font-semibold text-white transition group-hover:text-orange-200">
            AI Cover Letter Generator
          </h3>

          <p className="mt-2 text-xs leading-6 text-orange-100/40">
            Create personalized cover letters for your job applications.
          </p>

        </a>

        {/* AI EMAIL WRITER */}

        <a
          href="https://aiemailwriter.krishaiworks.com/"
          className="group rounded-2xl border border-white/5 bg-white/[0.025] p-5 transition hover:-translate-y-1 hover:border-orange-300/20 hover:bg-orange-300/[0.03]"
        >

          <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-orange-300/10 bg-orange-300/10 text-lg">
            ✉️
          </div>

          <h3 className="mt-4 text-sm font-semibold text-white transition group-hover:text-orange-200">
            AI Email Writer
          </h3>

          <p className="mt-2 text-xs leading-6 text-orange-100/40">
            Write professional emails quickly with AI.
          </p>

        </a>

        {/* AI GRAMMAR & WRITING FIXER */}

        <a
          href="https://aigrammarwritingfixer.krishaiworks.com/"
          className="group rounded-2xl border border-white/5 bg-white/[0.025] p-5 transition hover:-translate-y-1 hover:border-orange-300/20 hover:bg-orange-300/[0.03]"
        >

          <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-orange-300/10 bg-orange-300/10 text-lg">
            ✍️
          </div>

          <h3 className="mt-4 text-sm font-semibold text-white transition group-hover:text-orange-200">
            AI Grammar & Writing Fixer
          </h3>

          <p className="mt-2 text-xs leading-6 text-orange-100/40">
            Fix grammar, spelling and improve your writing with AI.
          </p>

        </a>

      </div>

    </div>

    {/* FOOTER MAIN */}

    <div className="border-t border-white/5 pt-8">

      <div className="flex flex-col items-center justify-between gap-5 text-center sm:flex-row sm:text-left">

        {/* Logo + Brand */}

        <div className="flex items-center gap-3">

          <div
            className="
              flex h-11 w-11
              shrink-0
              items-center
              justify-center
              overflow-hidden
              rounded-full
              border border-orange-300/20
              bg-white
              shadow-lg
              shadow-orange-950/20
            "
          >

            <img
              src="/logo.png"
              alt="KrishAIWorks"
              className="h-full w-full rounded-full object-cover"
            />

          </div>

          <div>

            <p className="font-semibold text-white">
              KrishAIWorks
            </p>

            <p className="mt-1 text-xs text-orange-100/40">
              AI Solutions That Work
            </p>

          </div>

        </div>

        {/* Copyright */}

        <p className="text-xs text-orange-100/35">
          Built with AI • © {new Date().getFullYear()} KrishAIWorks
        </p>

      </div>

    </div>

  </div>

</footer>
    </main>
  );
}


/* =============================================================== */
/* COMPONENTS */
/* =============================================================== */

function FormSectionTitle({ title }: { title: string }) {
  return (
    <div className="flex items-center gap-3">

      <div className="h-px flex-1 bg-orange-300/10" />

      <h3 className="text-xs font-semibold uppercase tracking-[0.18em] text-orange-300/80">
        {title}
      </h3>

      <div className="h-px flex-1 bg-orange-300/10" />

    </div>
  );
}


function InputField({
  label,
  placeholder,
  value,
  onChange,
  type = "text",
}: {
  label: string;
  placeholder: string;
  value: string;
  onChange: (value: string) => void;
  type?: string;
}) {
  return (
    <label className="block">

      <span className="mb-2 block text-sm text-orange-100/65">
        {label}
      </span>

      <input
        type={type}
        value={value}
        placeholder={placeholder}
        onChange={(e) => onChange(e.target.value)}
        className="
          h-13
          w-full
          rounded-2xl
          border border-orange-200/10
          bg-[#160b05]
          px-4
          text-sm
          text-white
          outline-none
          placeholder:text-orange-100/25
          transition
          focus:border-orange-400/40
          focus:ring-2
          focus:ring-orange-400/10
        "
      />

    </label>
  );
}


function TextAreaField({
  label,
  placeholder,
  value,
  onChange,
  rows,
}: {
  label: string;
  placeholder: string;
  value: string;
  onChange: (value: string) => void;
  rows: number;
}) {
  return (
    <label className="block">

      <span className="mb-2 block text-sm text-orange-100/65">
        {label}
      </span>

      <textarea
        rows={rows}
        value={value}
        placeholder={placeholder}
        onChange={(e) => onChange(e.target.value)}
        className="
          w-full
          resize-y
          rounded-2xl
          border border-orange-200/10
          bg-[#160b05]
          px-4 py-4
          text-sm
          leading-6
          text-white
          outline-none
          placeholder:text-orange-100/25
          transition
          focus:border-orange-400/40
          focus:ring-2
          focus:ring-orange-400/10
        "
      />

    </label>
  );
}


function ResumeSection({
  title,
  text,
}: {
  title: string;
  text: string;
}) {
  return (
    <div>

      <h3
        className="
          mb-3
          text-xs
          font-bold
          tracking-[0.18em]
          text-orange-400
        "
      >
        {title}
      </h3>

      <p className="whitespace-pre-line text-sm leading-7 text-orange-50/65">
        {text}
      </p>

    </div>
  );
}


function FeatureCard({
  icon,
  title,
  description,
}: {
  icon: string;
  title: string;
  description: string;
}) {
  return (
    <div
      className="
        rounded-3xl
        border border-orange-300/10
        bg-[#241007]/75
        p-6
        shadow-xl shadow-black/20
        backdrop-blur-xl
        transition
        hover:-translate-y-1
        hover:border-orange-300/20
      "
    >

      <div
        className="
          flex h-12 w-12
          items-center justify-center
          rounded-2xl
          border border-orange-300/10
          bg-orange-400/10
          text-xl
        "
      >
        {icon}
      </div>

      <h3 className="mt-5 text-lg font-semibold text-white">
        {title}
      </h3>

      <p className="mt-2 text-sm leading-7 text-orange-50/45">
        {description}
      </p>

    </div>
  );
}


function StepCard({
  number,
  title,
  description,
}: {
  number: string;
  title: string;
  description: string;
}) {
  return (
    <div
      className="
        rounded-3xl
        border border-orange-300/10
        bg-[#241007]/70
        p-6
        shadow-xl shadow-black/20
        backdrop-blur-xl
      "
    >

      <div
        className="
          text-sm
          font-bold
          text-orange-400
        "
      >
        {number}
      </div>

      <h3 className="mt-5 text-lg font-semibold text-white">
        {title}
      </h3>

      <p className="mt-2 text-sm leading-7 text-orange-50/45">
        {description}
      </p>

    </div>
  );
}


function FaqItem({
  question,
  answer,
}: {
  question: string;
  answer: string;
}) {
  return (
    <div
      className="
        rounded-3xl
        border border-orange-300/10
        bg-[#241007]/70
        p-6
        shadow-lg shadow-black/10
      "
    >

      <h3 className="text-base font-semibold text-white">
        {question}
      </h3>

      <p className="mt-3 text-sm leading-7 text-orange-50/45">
        {answer}
      </p>

    </div>
  );
}