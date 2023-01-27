import React from 'react';
import "./About.css";
import aboutImg from "../../images/about-img.jpg";

const About = () => {
  return (
    <section className='about'>
      <div className='container'>
        <div className='section-title'>
          <h2>About</h2>
        </div>

        <div className='about-content grid'>
          <div className='about-img'>
            <img src = {aboutImg} alt = "" />
          </div>
          <div className='about-text'>
            <h2 className='about-title fs-26 ls-1'>ABOUT BOOKLIBRARY</h2>
            <p className='fs-17'>A book is a medium for recording information in the form of writing or images, typically composed of many pages (made of papyrus, parchment, vellum, or paper) bound together and protected by a cover. The technical term for this physical arrangement is codex (plural, codices). In the history of hand-held physical supports for extended written compositions or records, the codex replaces its predecessor, the scroll. A single sheet in a codex is a leaf and each side of a leaf is a page.</p>
            <p className='fs-17'>A page is one side of a leaf (or sheet) of paper, parchment or other material (or electronic media) in a book, magazine, newspaper, or other collection of sheets, on which text or illustrations can be printed, written or drawn, to create documents. It can be used as a measure of communicating general quantity of information ("That topic covers twelve pages") or more specific quantity ("there are 535 words in a standard page in twelve point font type")</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
