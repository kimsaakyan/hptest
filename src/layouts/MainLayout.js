import React from 'react'
import MainMenu from '../components/menu/MainMenu'
import { Outlet } from 'react-router-dom'
import Footer from '../components/footer/Footer'

const MainLayout = () => {
	return (
		<>
			<MainMenu />
			<Outlet />
			<Footer />
		</>
	)
}

export default MainLayout