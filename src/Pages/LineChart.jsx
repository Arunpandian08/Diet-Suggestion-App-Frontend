import React from 'react';
import { Line } from 'react-chartjs-2';
import './Styles/dashboard.css'
import '../components/Styles/Sidebar.css'
import { FcApproval } from 'react-icons/fc';

const LineChart = () => {
    // Assuming you have 7 weeks of data
    const weeks = ["Week 1", "Week 2", "Week 3", "Week 4", "Week 5", "Week 6", "Week 7"];
    // Sample workout data for each week
    const workoutData = [30, 25, 40, 35, 50, 55, 60]; // Minutes of workout per week
    // Sample fat loss data for each week (in kg)
    const fatLossData = [1.2, 1.5, 1.8, 2.1, 2.5, 2.8, 3.0]; // Fat loss per week

    const data = {
        labels: weeks,
        datasets: [
            {
                label: 'Workout (minutes)',
                data: workoutData,
                borderColor: 'rgba(75, 192, 192, 1)',
                backgroundColor: 'rgba(75, 192, 192, 0.2)',
                fill: false,
            },
            {
                label: 'Fat Loss (kg)',
                data: fatLossData,
                borderColor: 'rgba(255, 99, 132, 1)',
                backgroundColor: 'rgba(255, 99, 132, 0.2)',
                fill: false,
            },
        ],
    };

    const options = {
        plugins: {
            legend: {
                position: "top",
            },
            title: {
                display: true,
                text: "Workout and Fat Loss Progress by Week",
            },
        },
        scales: {
            y: {
                beginAtZero: true,
                title: {
                    display: true,
                    text: 'Minutes / Kilograms',
                },
            },
        },
    };

    return (
        <div className='home' >
            <div className="line justify-content-center" style={{ top: '2rem', width: '80vw', padding: '2rem' }}>
                <div className="card h-100">
                    <div className="card-body">
                        <Line data={data} options={options} />
                    </div>
                </div>
            </div>
            <div className="description w-100">
                <div className="header">
                    <h3 className="text-white text-center">Workout and Fat Loss Progress</h3>
                </div>
                <div className="points p-2">
                    <h5><strong>Week 1:</strong></h5>
                    <div className="score ms-4" style={{ borderLeft: '2px solid red' }}>
                        <div className='cal ms-5'>
                            <p><FcApproval /> <strong>Workout: </strong>Started with 30 minutes of cardio exercises, including brisk walking and jogging.</p>
                            <p><FcApproval /> <strong>Fat Loss</strong>Experienced a slight decrease in body weight, indicating the initiation of the fat loss process.</p>
                        </div>
                    </div>
                    <h5><strong>Week 2:</strong></h5>
                    <div className="score ms-4" style={{ borderLeft: '2px solid red' }}>
                        <div className='cal ms-5'>
                            <p><FcApproval /> <strong>Workout: </strong>Increased workout duration to 35 minutes, incorporating interval training and strength exercises.</p>
                            <p><FcApproval /> <strong>Fat Loss: </strong>Noticed a more significant reduction in body fat, indicating progress in the fat loss journey.</p>
                        </div>
                    </div>
                    <h5><strong>Week 3:</strong></h5>
                    <div className="score ms-4" style={{ borderLeft: '2px solid red' }}>
                        <div className='cal ms-5'>
                            <p><FcApproval /> <strong>Workout: </strong>Maintained consistency with 40 minutes of workouts per session, focusing on high-intensity interval training (HIIT) and resistance exercises.</p>
                            <p><FcApproval /> <strong>Fat Loss: </strong>Continued to see steady progress in fat loss, reflecting the effectiveness of the workout regimen and dietary habits.</p>
                        </div>
                    </div>
                    <h5><strong>Week 4:</strong></h5>
                    <div className="score ms-4" style={{ borderLeft: '2px solid red' }}>
                        <div className='cal ms-5'>
                            <p><FcApproval /> <strong>Workout: </strong>Progressed to 45 minutes of workouts, incorporating a variety of exercises to target different muscle groups and enhance cardiovascar health.</p>
                            <p><FcApproval /> <strong>Fat Loss: </strong> Experienced a notable decrease in body fat percentage, signaling improved metabolic rate and calorie expenditure.</p>
                        </div>
                    </div>
                    <h5><strong>Week 5:</strong></h5>
                    <div className="score ms-4" style={{ borderLeft: '2px solid red' }}>
                        <div className='cal ms-5'>
                            <p><FcApproval /> <strong>Workout: </strong>Increased workout intensity with 50 minutes of challenging exercises, including circuit training and bodyweight workouts.</p>
                            <p><FcApproval /> <strong>Fat Loss: </strong>Witnessed significant fat loss rests, demonstrating the positive impact of consistent exercise and healthy eating habits.</p>
                        </div>
                    </div>
                    <h5><strong>Week 6:</strong></h5>
                    <div className="score ms-4" style={{ borderLeft: '2px solid red' }}>
                        <div className='cal ms-5'>
                            <p><FcApproval /> <strong>Workout: </strong>Maintained intensity with 55 minutes of diverse workouts, focusing on endurance and strength-building exercises.</p>
                            <p><FcApproval /> <strong>Fat Loss: </strong>Achieved a milestone in fat loss journey, reaching a lower body fat percentage and improved overall fitness level.</p>
                        </div>
                    </div>
                    <h5><strong>Week 7:</strong></h5>
                    <div className="score ms-4" style={{ borderLeft: '2px solid red' }}>
                        <div className='cal ms-5'>
                            <p><FcApproval /> <strong>Workout: </strong>Culminated the week with 60 minutes of rigorous workouts, incorporating advanced training techniques and progressive overload.</p>
                            <p><FcApproval /> <strong>Fat Loss: </strong>Attained the desired fat loss goal, reflecting dedication, perseverance, and disciplined lifestyle choices.</p>
                        </div>
                    </div>
                    <hr />
                    <div className="para">
                        <p style={{ textIndent: '50px' }}>
                            This week-by-week breakdown highlights the progressive nature of the workout and fat loss journey, showcasing the incremental improvements and milestones achieved over time. It underscores the importance of consistency, dedication, and adaptation in achieving fitness goals and maintaining a healthy lifestyle.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LineChart;
