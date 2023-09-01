import { AnimatePresence, motion } from 'framer-motion'

export const HomeComponent = () => {
	return (
		<motion.div className='flex flex-col gap-6 space-y-4 p-4'>
			<AnimatePresence>
				<h1 className='text-heading text-center'> Create React App & Tailwind CSS Template Repository </h1>
				<div className='grid gap-4 items-start justify-center p-4 m-4 space-y-4'>
					<h2 className='text-section underline underline-offset-4'>Configuration Done</h2>
					<ol className='text-regular space-y-4'>
						<li>React Router</li>
						<li>Framer Motion</li>
						<li>Responsive Screen Sizes</li>
						<li>Commonly used Font designs</li>
						<li>Git to ignore some files (env, package-lock.json)</li>
						<li>Implemented Directory Per View Folder Structure</li>
					</ol>
					<button className='text-button text-left p-3 bg-blue-200 rounded-md w-fit hover:underline underline-offset-2'>This is a Button </button>
				</div>
			</AnimatePresence>
		</motion.div>
	)
}