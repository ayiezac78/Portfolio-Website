import React from 'react'
import {TiHtml5, TiCss3, TiVideo} from 'react-icons/ti'
import {TbBrandJavascript, TbBrandTailwind, TbBrandBootstrap, TbBrandReact, TbBrandMysql, TbBrandPhp, TbBrandLaravel, TbJson, TbBrandFigma, TbBrandGit} from 'react-icons/tb'
import {GoMarkGithub} from 'react-icons/go'
import {BsFileEarmarkPlayFill} from 'react-icons/bs'


const Skills = () => {
  return (
    <section className='text-[#324B4C] dark:text-white'>
      <div className='grid grid-cols-3'>
        <div className='grid grid-cols-1 grid-rows-3 mr-auto'>
          <div>
            <div className='tooltip mr-1' data-tip="HTML5">
              <TiHtml5 className='h-7 w-7'/>
            </div>
            <div className='tooltip mr-1' data-tip="CSS3">
              <TiCss3 className='h-7 w-7'/>
            </div>
            <div className='tooltip' data-tip="JavaScript">
              <TbBrandJavascript className='h-7 w-7'/>
            </div>
          </div>
          <div>
            <div className='tooltip mr-1' data-tip="Tailwind CSS">
              <TbBrandTailwind className='h-7 w-7'/>
            </div>
            <div className='tooltip mr-1' data-tip="Bootstrap 5">
              <TbBrandBootstrap className='h-7 w-7'/>
            </div>
            <div className='tooltip' data-tip="ReactJS">
              <TbBrandReact className='h-7 w-7'/>
            </div>
          </div>
        </div>
        <div className='grid grid-cols-1 grid-rows-3 m-auto'>
          <div>
            <div className="tooltip mr-1" data-tip="MySQL">
              <TbBrandMysql className='h-7 w-7'/>
            </div>
            <div className="tooltip mr-1" data-tip="PHP">
              <TbBrandPhp className='h-7 w-7'/>
            </div>
            <div className="tooltip" data-tip="PHP">
              <TbBrandLaravel className='h-7 w-7'/>
            </div>
          </div>
          <div>
            <div className='tooltip' data-tip="JSON API">
              <TbJson className='h-7 w-7'/>
            </div>
          </div>
        </div>
        <div className='grid grid-cols-1 grid-rows-3 m-auto'>
          <div>
            <div className='tooltip mr-1' data-tip="Figma">
              <TbBrandFigma className='h-7 w-7'/>
            </div>
            <div className='tooltip mr-1' data-tip="Github">
              <GoMarkGithub className='h-7 w-7'/>
            </div>
            <div className='tooltip' data-tip="Git">
              <TbBrandGit className='h-7 w-7'/>
            </div>
          </div>
          <div>
            <div className='tooltip' data-tip="Cinematography">
              <TiVideo className='h-7 w-7'/>
            </div>
            <div className='tooltip' data-tip="Video Editing">
              <BsFileEarmarkPlayFill className='h-7 w-7'/>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Skills