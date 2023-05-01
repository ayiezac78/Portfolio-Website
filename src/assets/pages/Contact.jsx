import {BiMailSend} from 'react-icons/bi'

const Contact = () => {
  return (
    <div className="hero min-h-screen text-[#324B4C] dark:text-white">
      <div className="hero-content text-center">
        <div className="max-w-md">
          <h1 className="text-5xl font-bold">Let's Connect</h1>
          <p className="py-6">
            If you have any questions or just want to say hello, please don't hesitate to reach out. I will make an effort to respond as soon as possible.
          </p>
          <a href='mailto:admaniago01@gmail.com' className="btn btn-active dark:btn-outline btn-ghost outline outline-2 text-[#324B4C] gap-2">Send a message<BiMailSend className='inline-block h-6 w-6'/></a>
        </div>
      </div>
    </div>
  );
}

export default Contact