// ================================================================================
//  This code is part of the HacxGPT project.  Repo: hacx-gpt/hacx-gpt.github.io
//  Copyright (c) 2025-26 HacxGPT. All Rights Reserved.
//
//  This project is open-source. Please see the 'LICENSE' file in the root
//  directory of this repository for the full license terms and conditions
//  before copying, modifying, or distributing this code.
//  ================================================================================


document.addEventListener("DOMContentLoaded", () => {
  try {
    const path = window.location.pathname.replace(/\/+$/, "")
    const links = document.querySelectorAll(".main-nav a")
    links.forEach((a) => {
      const href = a.getAttribute("href")
      if (!href) return
      const normalized = href.replace(/\/+$/, "")
      if (normalized === path || (normalized !== "/" && path.startsWith(normalized))) {
        a.classList.add("active")
      }
    })
  } catch (e) {
    console.log("[HacxGPT] nav activation error:", e)
  }

  // Optional: add 'scrolled' style for headers that support it
  const stickyHeader = document.querySelector(".header")
  if (stickyHeader) {
    const update = () => {
      if (window.scrollY > 8) stickyHeader.classList.add("scrolled")
      else stickyHeader.classList.remove("scrolled")
    }
    update()
    window.addEventListener("scroll", update, { passive: true })
  }
})
