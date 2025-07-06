"use client"
import { useState, useEffect } from "react"
import { Heart, Mail, Star, Sparkles, X } from 'lucide-react'
import "./App.css"


function App() {
  const [isOpen, setIsOpen] = useState(false)
  const [showIntro, setShowIntro] = useState(true)
  const [currentPage, setCurrentPage] = useState(1)

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowIntro(false)
    }, 3500)
    return () => clearTimeout(timer)
  }, [])

  const openLetter = () => {
    setIsOpen(true)
  }

  const closeLetter = () => {
    setIsOpen(false)
    setCurrentPage(1)
  }

  const nextPage = () => {
    if (currentPage < 3) setCurrentPage(currentPage + 1)
  }

  const prevPage = () => {
    if (currentPage > 1) setCurrentPage(currentPage - 1)
  }

  return (
    <div className="app">
      {/* Intro Animation */}
      {showIntro && (
        <div className="intro-overlay">
          <div className="intro-content">
            <div className="intro-icon">
              <Heart className="intro-heart" />
              <div className="heart-rings">
                <div className="ring ring-1"></div>
                <div className="ring ring-2"></div>
                <div className="ring ring-3"></div>
              </div>
            </div>
            <h1 className="intro-title">Hi Love!</h1>
            <p className="intro-subtitle">Here's a short message</p>
          </div>
        </div>
      )}

      <div className="main-container">
        {!isOpen ? (
          // Envelope Section
          <div className="envelope-section">
            <div className="envelope-wrapper" onClick={openLetter}>
              <div className="envelope">
                <div className="envelope-top"></div>
                <div className="envelope-body">
                  <div className="envelope-content">
                    <Mail className="envelope-icon" />
                    <p className="envelope-text">Tap to open</p>
                  </div>
                </div>
              </div>

              {/* Floating Elements */}
              <div className="float-element float-1">💕</div>
              <div className="float-element float-2">✨</div>
              <div className="float-element float-3">🌸</div>
              <div className="float-element float-4">💖</div>
            </div>

            <div className="envelope-message">
              <h2 className="envelope-title">Smile before tapping</h2>
            </div>
          </div>
        ) : (
          // Letter Section
          <div className="letter-section">
            <div className="letter-card">
              <div className="letter-header">
                <div className="page-indicator">
                  <span className={`dot ${currentPage === 1 ? "active" : ""}`}></span>
                  <span className={`dot ${currentPage === 2 ? "active" : ""}`}></span>
   
                </div>
                <button onClick={closeLetter} className="close-btn">
                  <X className="close-icon" />
                </button>
              </div>

              <div className="letter-content">
                {currentPage === 1 && (
                  <div className="page page-1">
                    <div className="page-header">
                      <Heart className="page-heart" />
                      <h1 className="letter-title">I'm Sorry</h1>
                      <div className="title-decoration">
                        <Star className="star star-1" />
                        <div className="line"></div>
                        <Star className="star star-2" />
                      </div>
                    </div>
                    <div className="letter-text">
                      <p className="paragraph">
                        Hi love,
                      </p>
                      <p className="paragraph">
                        I made this to apologize about last night and for everything. I was really overthinking, I thought you are slowly pulling away from me. We talk less and less everyday and I'm not used to that kind of set up because I know I require too much attention, overthinks a lot and I'm really afraid to lose you.
                      
                      </p>
                      <p className="paragraph">
                        The past few days have been tough. I’ve been really trying hard to understand that you’re dealing with something too, and that spending time with yourself is your way of coping. It was never my intention to stress you out even more last night. What I did was wrong, and I should have been more grateful because you’re still trying to spend time with me, even when things are hard
                      </p>
                      
                    </div>
                  </div>
                )}

                
                {currentPage === 2 && (
                  <div className="page page-2">
                    <div className="page-header">
                      <div className="final-hearts">
                        <Heart className="final-heart heart-1" />
                        <Heart className="final-heart heart-2" />
                        <Heart className="final-heart heart-3" />
                      </div>
                      <h2 className="page-title"></h2>
                    </div>
                    <div className="letter-text">
                      <p className="paragraph final-message">
                        I hope you can see trying my best to deserve you, I'm genuinely sorry for everything that I've done. I love you
                      </p>
                      
                      <div className="signature-section">
                        <p className="signature-text">Sincerely,</p>
                        <p className="signature-name">Jz</p>
                        <div className="signature-hearts">
                          <Heart className="sig-heart" />
                          <Heart className="sig-heart" />
                          <Heart className="sig-heart" />
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>

              <div className="letter-footer">
                <button
                  onClick={prevPage}
                  className={`nav-btn prev-btn ${currentPage === 1 ? "disabled" : ""}`}
                  disabled={currentPage === 1}
                >
                  Previous
                </button>
                <div className="page-info">Page {currentPage} of 2</div>
                <button
                  onClick={nextPage}
                  className={`nav-btn next-btn ${currentPage === 2 ? "disabled" : ""}`}
                  disabled={currentPage === 2}
                >
                  Next
                </button>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Enhanced Background Design */}
      <div className="background-design">
        {/* Geometric Shapes */}
        <div className="shape shape-1"></div>
        <div className="shape shape-2"></div>
        <div className="shape shape-3"></div>
        <div className="shape shape-4"></div>
        <div className="shape shape-5"></div>
        <div className="shape shape-6"></div>

        {/* Floating Hearts */}
        <div className="bg-heart bg-heart-1">💕</div>
        <div className="bg-heart bg-heart-2">💖</div>
        <div className="bg-heart bg-heart-3">✨</div>
        <div className="bg-heart bg-heart-4">🌸</div>
        <div className="bg-heart bg-heart-5">💝</div>
        <div className="bg-heart bg-heart-6">🌟</div>

        {/* Decorative Lines */}
        <div className="deco-line line-1"></div>
        <div className="deco-line line-2"></div>
        <div className="deco-line line-3"></div>
        <div className="deco-line line-4"></div>

        {/* Floating Dots */}
        <div className="floating-dot dot-1"></div>
        <div className="floating-dot dot-2"></div>
        <div className="floating-dot dot-3"></div>
        <div className="floating-dot dot-4"></div>
        <div className="floating-dot dot-5"></div>
        <div className="floating-dot dot-6"></div>
        <div className="floating-dot dot-7"></div>
        <div className="floating-dot dot-8"></div>
      </div>
    </div>
  )
}

export default App
