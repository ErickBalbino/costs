import React from "react"
import { BrowserRouter, Routes, Route } from "react-router-dom"

import "./styles.css"
import Home from "./components/pages/Home"
import Company from "./components/pages/Company"
import Contact from "./components/pages/Contact"
import NewProject from "./components/pages/NewProject"
import Projects from "./components/pages/Projects"
import Project from "./components/pages/Project"
import Header from "./components/layout/Header"
import Footer from "./components/layout/Footer"
import NotFound from "./components/pages/NotFound"

export default function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />

          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route path="/company" element={<Company />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/newproject" element={<NewProject />} />
            <Route path="/projects/:id" element={<Project />} />
            <Route path="*" element={<NotFound />} />
          </Routes>

        <Footer />
      </BrowserRouter>
    </div>
  )
}
