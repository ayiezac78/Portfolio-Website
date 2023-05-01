import * as React from 'react';
import {BsFolder, BsGithub, BsBoxArrowUpRight} from 'react-icons/bs';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { createTheme, ThemeProvider, useMediaQuery, makeStyles } from '@mui/material';


function createData(year, title, made, built, github_link, proj_link, description) {
  return { year, title, made, built, github_link, proj_link, description};
}

const rows = [
  createData(2023, <a className='link link-hover' href="https://ayiezac.netlify.app/" target='_blank'>Portfolio Site</a>, 'Personal', "Tailwind CSS • ReactJS • Laravel 9 • Restful API • MySQL", <a href="https://github.com/ayiezac78/portfolio.git" target="_blank"><BsGithub/></a>, <a href="https://ayiezac.netlify.app/" target='_blank'><BsBoxArrowUpRight/></a>, "It's a front-end portfolio for my projects"),
  createData(2023, 'cLinic RESTFUL API', <a className='link link-hover' href="https://kodego.ph/">Kodego</a>, "Tailwind CSS • ReactJS • Laravel 9 • Restful API • MySQL", <a href="https://github.com/ayiezac78/portfolio.git" target="_blank"><BsGithub/></a>," ", "It's an API for AWR cLinic & AWR cLinic Admin Panel"),
  createData(2023, <a className='link link-hover' href="https://adminawrclinic.netlify.app/">Admin Panel for AWR cLinic</a> , <a className='link link-hover' href="https://kodego.ph/">Kodego</a>, "Tailwind CSS • ReactJS • Laravel 9 • Restful API • MySQL", <a href="https://github.com/ayiezac78/adminclinic.git" target="_blank"><BsGithub/></a>, <a href="https://adminawrclinic.netlify.app/" target='_blank'><BsBoxArrowUpRight/></a>, "It's a full stack web application that focus on managing patient's online appointments from AWR cLinic website."),
  createData(2023, <a className='link link-hover' href="https://clinicmp2.netlify.app/">AWR cLinic</a> , <a className='link link-hover' href="https://kodego.ph/">Kodego</a>, "Tailwind CSS • ReactJS • Laravel 9 • Restful API • MySQL", <a href="https://github.com/ayiezac78/clinic.git" target="_blank"><BsGithub/></a>, <a href="https://clinicmp2.netlify.app/" target='_blank'><BsBoxArrowUpRight/></a>, "It's a full stack web application that focus on patient's online appointments."),
  createData(2023, <a className='link link-hover' href="https://flowerplicity.netlify.app/">Flowerplicity</a> , <a className='link link-hover' href="https://kodego.ph/">Kodego</a>, "Bootstrap 5 • JavaScript • jQuery • CSS • HTML", <a href="https://github.com/ayiezac78/flowerplicity.git" target="_blank"><BsGithub/></a>, <a href="https://flowerplicity.netlify.app/" target='_blank'><BsBoxArrowUpRight/></a>, "It's a static web application that focus on a one-stop shop for flowers."),
];


const theme = createTheme({
  typography:{
    fontFamily: `'Space Mono', monospace'`,
  },
});




export default function BasicTable() {
  const isLgScreen = useMediaQuery(theme.breakpoints.up('lg'));

  return (
    <ThemeProvider theme={theme}>
      <TableContainer>
        <Table aria-label="simple table">
          <TableHead className='shadow'>
            <TableRow>
              <TableCell className='text-[#34554B] dark:text-white'>Year</TableCell>
              <TableCell className='text-[#34554B] dark:text-white'>Title</TableCell>
              {isLgScreen && <TableCell className='text-[#34554B] dark:text-white'>Description</TableCell>}
              {isLgScreen && <TableCell className='text-[#34554B] dark:text-white'>Made at</TableCell>}
              {isLgScreen && <TableCell className='text-[#34554B] dark:text-white'>Built with</TableCell>}
              <TableCell className='text-[#34554B] dark:text-white'>Link</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row, index) => (
              <TableRow key={index} className='hover:bg-[#98B0A8] text-sm'>
                <TableCell className='text-[#34554B] dark:text-white p-5' component="th" scope="row">
                  {row.year}
                </TableCell>
                <TableCell className='text-[#34554B] dark:text-white'>{row.title}</TableCell>
                {isLgScreen && <TableCell className='text-[#34554B] dark:text-white'>{row.description}</TableCell>}
                {isLgScreen && <TableCell className='text-[#34554B] dark:text-white'>{row.made}</TableCell>}
                {isLgScreen && <TableCell className='text-[#34554B] dark:text-white'>{row.built}</TableCell>}
                <TableCell className='text-[#34554B] dark:text-white'>
                  <div className="flex gap-2">
                    {row.github_link} {row.proj_link}
                  </div>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </ThemeProvider>
  );
}