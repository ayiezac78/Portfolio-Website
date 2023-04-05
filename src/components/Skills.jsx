import React from 'react'
import {TiHtml5, TiCss3} from 'react-icons/ti'
import {TbBrandJavascript, TbBrandTailwind, TbBrandBootstrap, TbBrandReact, TbBrandMysql, TbBrandPhp, TbBrandLaravel, TbJson} from 'react-icons/tb'

const Skills = () => {
  return (
    <section className='text-[#324B4C] dark:text-white'>
      <div className='grid grid-cols-3'>
        <div className='grid grid-cols-1 grid-rows-3'>
          <div>
            <div className='tooltip' data-tip="HTML5">
              <TiHtml5 className='h-7 w-7'/>
            </div>
            <div className='tooltip' data-tip="CSS3">
              <TiCss3 className='h-7 w-7'/>
            </div>
            <div className='tooltip' data-tip="JavaScript">
              <TbBrandJavascript className='h-7 w-7'/>
            </div>
          </div>
          <div>
            <div className='tooltip' data-tip="Tailwind CSS">
              <TbBrandTailwind className='h-7 w-7'/>
            </div>
            <div className='tooltip' data-tip="Bootstrap 5">
              <TbBrandBootstrap className='h-7 w-7'/>
            </div>
            <div className='tooltip' data-tip="ReactJS">
              <TbBrandReact className='h-7 w-7'/>
            </div>
          </div>
          <div>
            <div className='tooltip' data-tip="JSON API">
              <TbJson className='h-7 w-7'/>
            </div>
          </div>
        </div>
        <div className='grid grid-cols-1 grid-rows-3'>
          <div>
            <div className="tooltip" data-tip="MySQL">
              <TbBrandMysql className='h-7 w-7'/>
            </div>
            <div className="tooltip" data-tip="PHP">
              <TbBrandPhp className='h-7 w-7'/>
            </div>
            <div className="tooltip" data-tip="PHP">
              <TbBrandLaravel className='h-7 w-7'/>
            </div>
          </div>
        </div>
        <div>
        <TiHtml5 className='h-7 w-7'/>
        </div>
      </div>
    </section>
  )
}

export default Skills