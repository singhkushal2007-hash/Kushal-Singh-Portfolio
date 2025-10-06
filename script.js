// Hamburger Menu Toggle
const hamburger = document.getElementById("hamburger")
const navMenu = document.getElementById("navMenu")
const navLinks = document.querySelectorAll(".nav-link")

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active")
  navMenu.classList.toggle("active")
})

// Close menu when clicking on a link
navLinks.forEach((link) => {
  link.addEventListener("click", () => {
    hamburger.classList.remove("active")
    navMenu.classList.remove("active")
  })
})

// Navbar scroll effect
const navbar = document.getElementById("navbar")
window.addEventListener("scroll", () => {
  if (window.scrollY > 100) {
    navbar.classList.add("scrolled")
  } else {
    navbar.classList.remove("scrolled")
  }
})

// Intersection Observer for scroll animations
const observerOptions = {
  threshold: 0.1,
  rootMargin: "0px 0px -50px 0px",
}

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("visible")

      // Animate skill bars when visible
      if (entry.target.classList.contains("skill-item")) {
        const progressBar = entry.target.querySelector(".skill-progress")
        const progress = progressBar.getAttribute("data-progress")
        progressBar.style.width = progress + "%"
      }
    }
  })
}, observerOptions)

// Observe timeline items
const timelineItems = document.querySelectorAll(".timeline-item")
timelineItems.forEach((item) => observer.observe(item))

// Observe project cards
const projectCards = document.querySelectorAll(".project-card")
projectCards.forEach((card) => observer.observe(card))

// Observe skill items for progress bar animation
const skillItems = document.querySelectorAll(".skill-item")
skillItems.forEach((item) => observer.observe(item))

// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault()
    const target = document.querySelector(this.getAttribute("href"))
    if (target) {
      const offsetTop = target.offsetTop - 100
      window.scrollTo({
        top: offsetTop,
        behavior: "smooth",
      })
    }
  })
})

// Contact form submission
const contactForm = document.getElementById("contactForm")
contactForm.addEventListener("submit", (e) => {
  e.preventDefault()

  const name = document.getElementById("name").value
  const email = document.getElementById("email").value
  const message = document.getElementById("message").value

  // Here you would typically send the form data to a server
  // For now, we'll just show an alert
  alert(`Thank you, ${name}! Your message has been received. I'll get back to you at ${email} soon.`)

  // Reset form
  contactForm.reset()
})

// Add parallax effect to hero glows
window.addEventListener("scroll", () => {
  const scrolled = window.pageYOffset
  const glows = document.querySelectorAll(".glow")

  glows.forEach((glow, index) => {
    const speed = 0.5 + index * 0.1
    glow.style.transform = `translateY(${scrolled * speed}px)`
  })
})

// Active nav link highlighting
window.addEventListener("scroll", () => {
  const sections = document.querySelectorAll(".section, .hero")
  const navLinks = document.querySelectorAll(".nav-link")

  let current = ""

  sections.forEach((section) => {
    const sectionTop = section.offsetTop
    const sectionHeight = section.clientHeight

    if (window.pageYOffset >= sectionTop - 150) {
      current = section.getAttribute("id")
    }
  })

  navLinks.forEach((link) => {
    link.classList.remove("active")
    if (link.getAttribute("href") === `#${current}`) {
      link.classList.add("active")
    }
  })
})

// Add loading animation
window.addEventListener("load", () => {
  document.body.style.opacity = "0"
  setTimeout(() => {
    document.body.style.transition = "opacity 0.5s ease"
    document.body.style.opacity = "1"
  }, 100)
})
