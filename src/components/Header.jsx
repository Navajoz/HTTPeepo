import React from 'react'
import gitlogo from '../assets/github.svg'
import { Link, useNavigate } from 'react-router-dom'


export default function Header() {
    const navigate = useNavigate()
    return (
        <header className="bg-blue-medium border-b border-blue-light flex justify-between">
            <div className="container mx-16 my-5">
                <h1 className=" text-5xl font-bold cursor-pointer" onClick={() => navigate('/')}>HTTPeepo</h1>
            </div>
            <Link to="https://github.com/Navajoz" target="_blank" rel="noopener noreferrer">
                <img src={gitlogo} className='w-12 mr-4 my-5' />
            </Link>
        </header>
    )
}
