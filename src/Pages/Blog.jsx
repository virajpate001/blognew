import React from 'react'
import Articles from '../components/Articles'
import Breadcrumb from '../components/Breadcrumb'
import bgimg from '../assets/img/bg.jpg'
import Filter from '../components/Filter'

function Blog() {
	return (
		<>
			{/* <img src={bgimg} alt="" /> */}

			<Breadcrumb pagename="Blog" imgurl={bgimg} />
			<Filter />
			<Articles />
		</>
	)
}

export default Blog
