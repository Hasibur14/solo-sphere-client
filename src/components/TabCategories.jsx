import axios from 'axios';
import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';
import { Tab, TabList, TabPanel, Tabs } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import JobCard from './JobCard';

const TabCategories = () => {

    const [jobs, setJobs] = useState([])

    useEffect(() => {
        const getData = async () => {
            const { data } = await axios(`${import.meta.env.VITE_API_URL}/jobs`)
            setJobs(data)
        }
        getData()
    }, [])



    return (
        <>
            <Tabs>
                <div className='container mx-auto my-10'>
                    <div className='text-center my-10 space-y-4'>
                        <h1 className='lg:text-3xl font-bold'>Browse By Categories</h1>
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Veniam adipisci repellendus maxime praesentium! Eius aperiam placeat</p>
                    </div>
                    <div className='flex items-center justify-center'>
                        <TabList>
                            <Tab>Web Development</Tab>
                            <Tab>Graphics Design</Tab>
                            <Tab>Digital Marketing</Tab>
                        </TabList>
                    </div>
                    <TabPanel>
                        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6'>
                            {
                                jobs
                                    .filter(j => j.category === 'Web Developer')
                                    .map(job => <JobCard key={job._id} job={job}>

                                    </JobCard>)
                            }
                        </div>
                    </TabPanel>
                    <TabPanel>
                        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6'>
                            {
                                jobs
                                    .filter(j => j.category === 'Graphics Design')
                                    .map(job => <JobCard key={job._id} job={job}>

                                    </JobCard>)
                            }
                        </div>
                    </TabPanel>
                    <TabPanel>
                        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6'>
                            {
                                jobs
                                    .filter(j => j.category === 'Digital Marketing')
                                    .map(job => <JobCard key={job._id} job={job}>

                                    </JobCard>)
                            }
                        </div>
                    </TabPanel>
                </div>
            </Tabs>
        </>
    );
};

TabCategories.propTypes = {
    jobs: PropTypes.array.isRequired,
};

export default TabCategories;
