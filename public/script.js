// Navigation Toggle
const navToggle = document.getElementById("navToggle")
const navMenu = document.querySelector(".nav-menu")

navToggle.addEventListener("click", () => {
  navMenu.classList.toggle("active")
})

// Close menu when clicking outside
document.addEventListener("click", (e) => {
  if (!navToggle.contains(e.target) && !navMenu.contains(e.target)) {
    navMenu.classList.remove("active")
  }
})

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault()
    const target = document.querySelector(this.getAttribute("href"))
    if (target) {
      target.scrollIntoView({
        behavior: "smooth",
      })
      // Close mobile menu after clicking
      navMenu.classList.remove("active")
    }
  })
})

// Add active class to navigation links on scroll
window.addEventListener("scroll", () => {
  const sections = document.querySelectorAll("section")
  const navLinks = document.querySelectorAll(".nav-menu a")

  let current = ""

  sections.forEach((section) => {
    const sectionTop = section.offsetTop
    const sectionHeight = section.clientHeight
    if (pageYOffset >= sectionTop - 60) {
      current = section.getAttribute("id")
    }
  })

  navLinks.forEach((link) => {
    link.classList.remove("active")
    if (link.getAttribute("href").slice(1) === current) {
      link.classList.add("active")
    }
  })
})

// Cyclical typing effect for Home section name
window.addEventListener("DOMContentLoaded", () => {
  const name = "Austin Lee"
  const target = document.getElementById("typed-name")
  let i = 0
  let typing = true
  function typeCycle() {
    if (typing) {
      if (i < name.length) {
        target.textContent = name.slice(0, i + 1)
        i++
        setTimeout(typeCycle, 120)
      } else {
        typing = false
        setTimeout(typeCycle, 2500)
      }
    } else {
      if (i > 0) {
        target.textContent = name.slice(0, i - 1)
        i--
        setTimeout(typeCycle, 60)
      } else {
        target.textContent = ""
        typing = true
        setTimeout(typeCycle, 600)
      }
    }
  }
  if (target) typeCycle()
})
