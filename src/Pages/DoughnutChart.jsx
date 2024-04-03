import React, { useEffect, useRef } from 'react';
import { Chart } from 'chart.js/auto';
import { FcApproval } from 'react-icons/fc'

const DoughnutChart = () => {
  const chartRef = useRef(null);
  const chartInstance = useRef(null);

  useEffect(() => {
    // Cleanup function to destroy the previous chart instance
    return () => {
      if (chartInstance.current) {
        chartInstance.current.destroy();
      }
    };
  }, []);

  // Assuming you have 7 weeks of data
  const weeks = ["Week 1", "Week 2", "Week 3", "Week 4", "Week 5", "Week 6", "Week 7"];
  // Sample weight loss data for each week
  const weightLossData = [90, 85, 82, 80, 75, 72, 70];

  const data = {
    labels: weeks,
    datasets: [
      {
        data: weightLossData,
        backgroundColor: [
          "rgba(255, 99, 132, 0.6)",
          "rgba(54, 162, 235, 0.6)",
          "rgba(255, 206, 86, 0.6)",
          "rgba(75, 192, 192, 0.6)",
          "rgba(153, 102, 255, 0.6)",
          "rgba(255, 159, 64, 0.6)",
          "rgba(201, 203, 207, 0.6)",
        ],
        borderColor: [
          "rgba(255, 99, 132, 1)",
          "rgba(54, 162, 235, 1)",
          "rgba(255, 206, 86, 1)",
          "rgba(75, 192, 192, 1)",
          "rgba(153, 102, 255, 1)",
          "rgba(255, 159, 64, 1)",
          "rgba(201, 203, 207, 1)",
        ],
        borderWidth: 1,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: "top",
      },
      title: {
        display: true,
        text: "Weight Loss Progress by Week",
      },
    },
  };

  // Render the chart when the component mounts or updates
  useEffect(() => {
    const ctx = chartRef.current.getContext("2d");
    chartInstance.current = new Chart(ctx, {
      type: "doughnut",
      data,
      options,
    });

    return () => {
      chartInstance.current.destroy();
    };
  }, [data, options]);

  return (
    <div className='home' >
      <div className="cart" style={{ top: '1rem', width: '80vw', padding: '2rem' }}>
        <div className="card h-100">
          <div className="card-body">
            <canvas ref={chartRef} />
          </div>
        </div>
      </div>
      <div className="description w-100">
        <div className="header">
          <h3 className="text-white text-center">Weight Loss Process</h3>
        </div>
        <div className="points p-2">

          <div className="para">
            <p style={{ textIndent: '50px' }}>
              The weight loss process typically involves a gradual reduction in body weight over a period of time through a combination of dietary changes, exercise, and lifestyle modifications. Here's a general overview of a weight loss process for a 7-week period:
            </p>
          </div>
          <h5><strong>Week-1: Setting Goals and Establishing Habits:</strong></h5>
          <div className="score ms-4" style={{ borderLeft: '2px solid red' }}>
            <div className='cal ms-5 p-2'>
              <p><FcApproval /> Set realistic weight loss goals based on desired outcomes and health considerations.</p>
              <p><FcApproval /> Begin tracking food intake and physical activity levels to gain insight into current habits.</p>
              <p><FcApproval /> Establish healthy eating habits by focusing on whole, nutrient-dense foods and reducing intake of processed and high-calorie foods.</p>
              <p><FcApproval /> Start incorporating regular physical activity into the weekly routine, aiming for at least 150 minutes of moderate-intensity aerobic activity or 75 minutes of vigorous-intensity aerobic activity per week, along with muscle-strengthening activities on two or more days.</p>
            </div>
          </div>
          <h5><strong>Week 2-3: Building Consistency</strong></h5>
          <div className="score ms-4" style={{ borderLeft: '2px solid red' }}>
            <div className='cal ms-5 p-2'>
              <p><FcApproval /> Continue with the established habits from week 1, focusing on consistency in dietary choices and exercise routines.</p>
              <p><FcApproval /> Experiment with different types of physical activities to find enjoyable options that can be sustained long-term.</p>
              <p><FcApproval /> Monitor progress regularly by tracking weight, body measurements, and changes in energy levels and mood.</p>
            </div>
          </div>
          <h5><strong>Week 4-5: Refining Strategies</strong></h5>
          <div className="score ms-4" style={{ borderLeft: '2px solid red' }}>
            <div className='cal ms-5 p-2'>
              <p><FcApproval /> Evaluate progress and adjust dietary and exercise strategies as needed based on results and feedback.</p>
              <p><FcApproval /> Incorporate mindful eating practices such as paying attention to hunger and fullness cues, eating slowly, and savoring meals.</p>
              <p><FcApproval /> Increase the intensity or duration of workouts to challenge the body and prevent plateaus in weight loss.</p>
            </div>
          </div>
          <h5><strong>Week 6: Overcoming Challenges</strong></h5>
          <div className="score ms-4" style={{ borderLeft: '2px solid red' }}>
            <div className='cal ms-5 p-2'>
              <p><FcApproval /> Identify and address any obstacles or challenges that may arise during the weight loss journey, such as cravings, emotional eating, or schedule disruptions.</p>
              <p><FcApproval /> Seek support from friends, family, or professionals if facing difficulties in maintaining motivation or adherence to the plan.</p>
              <p><FcApproval /> Stay focused on long-term health benefits and personal goals to stay motivated and resilient.</p>
            </div>
          </div>
          <h5><strong>Week 7: Celebrating Progress and Planning Ahead</strong></h5>
          <div className="score ms-4" style={{ borderLeft: '2px solid red' }}>
            <div className='cal ms-5 p-2'>
              <p><FcApproval /> Reflect on achievements and celebrate progress made during the 7-week period, whether it's improvements in fitness, changes in body composition, or positive changes in lifestyle habits.</p>
              <p><FcApproval /> Set new goals or milestones for continued progress beyond the initial 7 weeks, focusing on sustainable lifestyle changes rather than short-term fixes.</p>
              <p><FcApproval /> Develop a maintenance plan to ensure long-term success by incorporating healthy habits into daily life and remaining mindful of nutrition and physical activity choices.</p>
            </div>
          </div>
          <div className="para">
            <p style={{ textIndent: '50px' }}>
              Throughout the 7-week weight loss process, it's important to prioritize overall health and well-being, listen to the body's cues, and seek support from healthcare professionals or registered dietitians if needed. Additionally, staying patient, consistent, and adaptable can help navigate challenges and achieve sustainable results.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DoughnutChart;
