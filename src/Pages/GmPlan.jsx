import React from 'react';
import { FcApproval } from 'react-icons/fc'

const GmPlan = () => {
    return (
        <div className='home' style={{background:'white'}}>
            <div className="header">
                <h2 className='heading text-center text-white'>
                    The GM Diet Plan: Lose Fat in Just 7 Days?
                </h2>
            </div>
            <div className="gm p-5">
                <div className="gm-body ">
                    <img className='image' style={{ width: '200px', height: '300px', display: 'block', float: 'left' }} src="https://th.bing.com/th/id/OIP.R6vSCdJlXc1pqk9wxtWvAgAAAA?pid=ImgDet&w=141&h=212&c=7&dpr=1.3" alt="shock-img" />
                    <div className="point pt-3"style={{bottom:'0',paddingRight:'2rem',right:'0',minHeight:'350px',width:'calc(100%-200px-10px)',marginLeft:'0'}}>
                        <h4>Healthline Diet Score: <span className='text-danger'>1.13 </span> out of <span className='text-success'>5</span> </h4>
                        <p className="para-1"><i className="fa-solid fa-circle-check"></i> The GM diet, also known as the General Motors diet, is a plan that promises to help you lose up to 15 pounds (6.8 kg) in just one week.</p>
                        <p className="para-2"><i className="fa-solid fa-circle-check"></i> Each day of the GM diet permits you to eat different foods or food groups.</p>
                        <p className="para-3"><i className="fa-solid fa-circle-check"></i> Proponents of the diet claim this technique stimulates weight loss and helps burn fat faster than other diets. But does it actually work? This article looks into the GM diet and its pros and cons.</p>
                    </div>
                </div>
                <h5>DIET REVIEW SCORECARD</h5>
                <div className="score ms-4">
                    <div className="cal-1">
                        <ul>
                            <p><FcApproval /> Overall score: 1.13</p>
                            <p><FcApproval /> Weight loss: 1</p>
                            <p><FcApproval /> Healthy eating: 0</p>
                            <p><FcApproval /> Sustainability: 1</p>
                            <p><FcApproval /> Whole body health: 0</p>
                            <p><FcApproval /> Nutrition quality: 3</p>
                            <p><FcApproval /> Evidence based: 1.75</p>
                        </ul>
                    </div>
                </div><br />
                <h2 className='header text-white'>What is the GM diet?</h2>
                <div className="ans">
                    <p className="para-1"><i className="fa-solid fa-circle-check"></i> It is said to have been developed with help from the US Department of Agriculture and the FDA, with extensive testing at the Johns Hopkins Research Center.</p>
                    <p className="para-2"><i className="fa-solid fa-circle-check"></i> However, this claim has since been debunked as an urban myth, and the true origins of the GM diet remain unknown.</p>
                    <p className="para-3"><i className="fa-solid fa-circle-check"></i> The GM diet plan is broken up into seven days, each with strict rules about which food groups you can consume.</p>
                    <p className="para-4"><i className="fa-solid fa-circle-check"></i> For example, your diet on day two is limited to only vegetables, while on day five you’re instructed to eat several whole tomatoes and large portions of meat.</p>
                    <h5>The diet can supposedly help you:</h5>
                    <div className="score ms-4">
                        <ul className='cal-1'>
                            <p><FcApproval /> Lose upto 15 pounds(6.8 kg) in just one week</p>
                            <p><FcApproval /> Get rid of toxins and impurities in your body</p>
                            <p><FcApproval /> Improve your digestion </p>
                            <p><FcApproval /> Enhance your body's ability to burn fat</p>
                        </ul>
                    </div>
                    <p className="para-1"><i className="fa-solid fa-circle-check"></i> Proponents of the GM diet say it works because many of the foods included in the diet are low in calories, such as fruits and vegetables.</p>
                    <p className="para-2"><i className="fa-solid fa-circle-check"></i> This can help promote weight loss by creating a calorie deficit, which is when you consume fewer calories than you burn throughout the day.</p>
                    <p className="para-3"><i className="fa-solid fa-circle-check"></i> The plan also states that many of the foods in the diet are “negative-calorie foods,” meaning they provide fewer calories than they take to digest.</p>
                    <p className="para-4"><i className="fa-solid fa-circle-check"></i> Many of the foods the diet recommends are also high in water. For this reason, proponents claim that the GM diet can enhance fat loss and help detoxify your body.</p>
                    <p className="para-5"><i className="fa-solid fa-circle-check"></i> Supporters also say you may repeat the diet multiple times to achieve your long-term weight goals, recommending a gap of 5–7 days between cycles.</p>
                </div>
                <h2 className='header text-white'>What do you eat on the diet?</h2>
                <p className="para-1"><i className="fa-solid fa-circle-check"></i> The GM diet is divided into seven days, with different rules that apply to each day.</p>
                <p className="para-2"><i className="fa-solid fa-circle-check"></i> It recommends that you drink 8–12 glasses of water each day to stay hydrated throughout the diet.</p>
                <p className="para-3"><i className="fa-solid fa-circle-check"></i> Although exercise is not required for weight loss on this diet, it is optional. However, the diet recommends against exercise during the first three days.</p>
                <p className="para-4"><i className="fa-solid fa-circle-check"></i> It also allows followers to consume two to three bowls of “GM Wonder Soup” each day. It’s made with cabbage, celery, tomatoes, onions and bell peppers.</p>
                <h5 className="para-5">Here are the specific guidelines for each day of the GM diet:</h5><br />
                <div className="plan">
                    <h2>Day wise Plans:</h2>
                    <div className="day-1"style={{margin:'5vb', padding: '5vb',background:'#fff',borderRadius:'10px',boxShadow:'0 0 10px' }}>
                        <h5>Day One:</h5>
                        <div className="score ms-4" style={{ borderLeft: '2px solid red' }}>
                            <ul className='cal ms-5 p-2'>
                                <p><FcApproval /> Breakfast-8AM</p>
                                <p><FcApproval /> A regular size apple with a glass of water.</p>
                                <p><FcApproval /> Snacks-10AM</p>
                                <p><FcApproval /> Half bowl of cantaloupes and a glass of water.</p>
                                <p><FcApproval /> Lunch-1PM</p>
                                <p><FcApproval /> A serving of watermelon and two glasses of water.</p>
                                <p><FcApproval /> Snacks-4PM</p>
                                <p><FcApproval /> A whole orange and a glass of water.</p>
                                <p><FcApproval /> Dinner-7Pm</p>
                                <p><FcApproval /> Sliced cantaloupe and a guava with two glasses of water.</p><br />
                                <h4>Replacement:</h4>
                                <ul className='ms-5'>
                                    <p><FcApproval /> Apple-Orange</p>
                                    <p><FcApproval /> Cantaloupe-Cucumber</p>
                                    <p><FcApproval /> watermelon-Honeydew melon or Cucumber</p>
                                    <p><FcApproval /> Orange-Grapefruit or Peach</p>
                                    <p><FcApproval /> Guava-Green apple</p>
                                </ul>
                                <h4>Workouts:</h4>
                                <ul className='ms-5'>
                                    <p><FcApproval /> Arm Circles: 1 set of 10 reps</p>
                                    <p><FcApproval /> Wrist Rotations: 1 set of 10 reps</p>
                                    <p><FcApproval /> Shoulder Rotations: 1 set of 10 reps</p>
                                    <p><FcApproval /> Neck Rotations: 1 set of 10 reps</p>
                                    <p><FcApproval /> Ankle Rotations: 1 set of 10 reps</p>
                                    <p><FcApproval /> Leg Rotations: 1 set of 10 reps</p>
                                    <p><FcApproval /> Rope Jumping: 1 set of 50 reps</p>
                                    <p><FcApproval /> Squats: 2 sets of 5 reps</p>
                                </ul>
                            </ul>
                        </div>
                        <div className="declare">
                            <h3>Feel of the Day:</h3>
                            <ul className='ms-5'>
                                <p><i className="fa-solid fa-circle-check"></i> You might feel a little heahache. Its absolutely fine.</p>
                                <p><i className="fa-solid fa-circle-check"></i> if you have strictly followed the GM diet plan to lose weight in 7 days and exercises then you'll surely feel energetic, active and great!</p>
                            </ul>
                        </div>
                    </div>
                    <hr />
                    <div className="day-2" style={{margin:'5vb', padding: '5vb',background:'#fff',borderRadius:'10px',boxShadow:'0 0 10px' }}>
                        <h5>Day Two:</h5>
                        <div className="score ms-4" style={{ borderLeft: '2px solid red' }}>
                            <ul className='cal ms-5 p-2'>
                                <p><FcApproval /> Breakfast-8AM</p>
                                <p><FcApproval /> A boiled potato. You can also add a teaspoon of low-fat butter for flavor.</p>
                                <p><FcApproval /> Snacks-10AM</p>
                                <p><FcApproval /> Cabbage and lettuce salad with a light dressing and a glass of water.</p>
                                <p><FcApproval /> Lunch-1PM</p>
                                <p><FcApproval /> A mixed vegetable salad with cucumbers, onions, carrots and two glasses of water.</p>
                                <p><FcApproval /> Snacks-4PM</p>
                                <p><FcApproval /> A cup of boiled broccoli, half cup of sliced bell pepper and two glasses of water.</p>
                                <p><FcApproval /> Dinner-7Pm</p>
                                <p><FcApproval /> A Salad comprising boiled carrots, broccoli, green beans and two glasses of water.</p><br />
                                <h4>Replacement:</h4>
                                <ul className='ms-5'>
                                    <p><FcApproval />Potato-Sweet potato or carrots</p>
                                    <p><FcApproval />Butter-Margarine or sour cream</p>
                                    <p><FcApproval />Lettuce-leek</p>
                                    <p><FcApproval />Cabbage-Bok choy or celery</p>
                                    <p><FcApproval />Cucumber-Carrots</p>
                                    <p><FcApproval />Onion-Shallots</p>
                                    <p><FcApproval />Carrot-Beetroot</p>
                                    <p><FcApproval />Broccoli-Cauliflower</p>
                                    <p><FcApproval />Bell pepper-Zucchini</p>
                                    <p><FcApproval />Cauliflower-Green Beans</p>
                                </ul>
                                <h4>Workouts:</h4>
                                <ul className='ms-5'>
                                    <p><FcApproval /> Arm Circles: 1 set of 10 reps</p>
                                    <p><FcApproval /> Wrist Rotations: 1 set of 10 reps</p>
                                    <p><FcApproval /> Shoulder Rotations: 1 set of 10 reps</p>
                                    <p><FcApproval /> Neck Rotations: 1 set of 10 reps</p>
                                    <p><FcApproval /> Ankle Rotations: 1 set of 10 reps</p>
                                    <p><FcApproval /> Leg Rotations: 1 set of 10 reps</p>
                                    <p><FcApproval /> Rope Jumping: 1 set of 50 reps</p>
                                    <p><FcApproval /> Squats: 2 sets of 5 reps</p>
                                </ul>
                            </ul>
                        </div>
                        <div className="declare">
                            <h3>Feel of the Day:</h3>
                            <ul className='ms-5'>
                                <p><i className="fa-solid fa-circle-check"></i> You might feel a little weak but not to worry. That is because of body is not getting usual carbohydrates.</p>
                            </ul>
                        </div>
                    </div>
                    <hr />
                    <div className="day-3"style={{margin:'5vb', padding: '5vb',background:'#fff',borderRadius:'10px',boxShadow:'0 0 10px' }}>
                        <h5>Day Three:</h5>
                        <div className="score ms-4" style={{ borderLeft: '2px solid red' }}>
                            <ul className='cal ms-5 p-2'>
                                <p><FcApproval /> Breakfast-8AM</p>
                                <p><FcApproval /> Half bowl of cantaloupe or a sliced apple ans two glasses of water.</p>
                                <p><FcApproval /> Snacks-10AM</p>
                                <p><FcApproval /> Half sliced pineapple or a pear and two glasses of water.</p>
                                <p><FcApproval /> Lunch-1PM</p>
                                <p><FcApproval /> A salad of cucumber, carrot and lettuce with two glasses of water.</p>
                                <p><FcApproval /> Snacks-4PM</p>
                                <p><FcApproval /> An orange or a pear with half sliced cantaloupe and a glass of water.</p>
                                <p><FcApproval /> Dinner-7Pm</p>
                                <p><FcApproval /> Bolied broccoli and beets with two glasses of water.</p><br />
                                <h4>Replacement:</h4>
                                <ul className='ms-5'>
                                    <p><FcApproval /> Cantaloupe - Watermelon</p>
                                    <p><FcApproval /> Apple - Orange</p>
                                    <p><FcApproval /> Pear - Plum</p>
                                    <p><FcApproval /> pineapple - Peach</p>
                                    <p><FcApproval /> Cucumber - Kiwi</p>
                                    <p><FcApproval /> Lettuce - Chinese cabbage</p>
                                    <p><FcApproval /> Carrot - Bok choy or beetroot</p>
                                    <p><FcApproval /> Orange - Grapefruit or Kiwi</p>
                                    <p><FcApproval /> Broccoli - Cauliflower</p>
                                    <p><FcApproval /> Beetroot - Carrot</p>
                                </ul>
                                <h4>Workouts:</h4>
                                <ul className='ms-5'>
                                    <p><FcApproval /> Arm Circles: 1 set of 10 reps</p>
                                    <p><FcApproval /> Wrist Rotations: 1 set of 10 reps</p>
                                    <p><FcApproval /> Shoulder Rotations: 1 set of 10 reps</p>
                                    <p><FcApproval /> Neck Rotations: 1 set of 10 reps</p>
                                    <p><FcApproval /> Ankle Rotations: 1 set of 10 reps</p>
                                    <p><FcApproval /> Leg Rotations: 1 set of 10 reps</p>
                                    <p><FcApproval /> Rope Jumping: 1 set of 50 reps</p>
                                    <p><FcApproval /> Squats: 2 sets of 5 reps</p>
                                </ul>
                            </ul>
                        </div>
                        <div className="declare">
                            <h3>Feel of the Day:</h3>
                            <ul className='ms-5'>
                                <p><i className="fa-solid fa-circle-check"></i> You might feel better again as you will get some sugar from fruits and crabs from vegetables.</p>
                                <p><i className="fa-solid fa-circle-check"></i> Exercising and staying active will also make you feel great.</p>
                            </ul>
                        </div>
                    </div>
                    <hr />
                    <div className="day-4"style={{margin:'5vb', padding: '5vb',background:'#fff',borderRadius:'10px',boxShadow:'0 0 10px' }}>
                        <h5>Day Four:</h5>
                        <div className="score ms-4" style={{ borderLeft: '2px solid red' }}>
                            <ul className='cal ms-5 p-2'>
                                <p><FcApproval /> Breakfast-8AM</p>
                                <p><FcApproval /> Two large bananas and a glass of milk later two glases of water.</p>
                                <p><FcApproval /> Snacks-10AM</p>
                                <p><FcApproval /> A banana shake (use one banana) and a glass of water. Half a teaspoon of honey can be added as a sweetener.</p>
                                <p><FcApproval /> Lunch-1PM</p>
                                <p><FcApproval /> A bowl of GM diet soup and two glasses of water.</p>
                                <p><FcApproval /> Snacks-4PM</p>
                                <p><FcApproval /> A glass og banana milkshake and two glasses of water.</p>
                                <p><FcApproval /> Dinner-7Pm</p>
                                <p><FcApproval /> A bowl of GM diet soup and two glasses of water.</p><br />
                                <h4>Replacement:</h4>
                                <ul className='ms-5'>
                                    <p><FcApproval /> Banana - Fig</p>
                                    <p><FcApproval /> Milk - Soy milk</p>
                                </ul>
                                <h4>Workouts:</h4>
                                <ul className='ms-5'>
                                    <p><FcApproval /> Arm Circles: 1 set of 10 reps</p>
                                    <p><FcApproval /> Wrist Rotations: 1 set of 10 reps</p>
                                    <p><FcApproval /> Shoulder Rotations: 1 set of 10 reps</p>
                                    <p><FcApproval /> Neck Rotations: 1 set of 10 reps</p>
                                    <p><FcApproval /> Ankle Rotations: 1 set of 10 reps</p>
                                    <p><FcApproval /> Leg Rotations: 1 set of 10 reps</p>
                                    <p><FcApproval /> Rope Jumping: 1 set of 50 reps</p>
                                    <p><FcApproval /> Squats: 2 sets of 5 reps</p>
                                </ul>
                            </ul>
                        </div>
                        <div className="declare">
                            <h3>Feel of the Day:</h3>
                            <ul className='ms-5'>
                                <p><i className="fa-solid fa-circle-check"></i> You might feel demotivated eating milk and bananas.</p>
                                <p><i className="fa-solid fa-circle-check"></i> Exercising and drinking water will make you lose weight.</p>
                            </ul>
                        </div>
                    </div>
                    <hr />
                    <div className="day-5"style={{margin:'5vb', padding: '5vb',background:'#fff',borderRadius:'10px',boxShadow:'0 0 10px' }}>
                        <h5>Day Five:</h5>
                        <div className="score ms-4" style={{ borderLeft: '2px solid red' }}>
                            <ul className='cal ms-5 p-2'>
                                <p><FcApproval /> Breakfast-8AM</p>
                                <p><FcApproval /> A few small tomatoes with a bowl of boiled, seasoned kidney beans and two glasses of water.</p>
                                <p><FcApproval /> Snacks-10AM</p>
                                <p><FcApproval /> A cup of yogurt and two glasses of water.</p>
                                <p><FcApproval /> Lunch-1PM</p>
                                <p><FcApproval /> A bowl of cooked brown rice with two tomatoes and two glasses of water.</p>
                                <p><FcApproval /> Snacks-4PM</p>
                                <p><FcApproval /> A salad with onions and sptouts or bowl baked or salted of tomatoes with two glasses of water.</p>
                                <p><FcApproval /> Dinner-7Pm</p>
                                <p><FcApproval /> GM diet soup with two glasses of water.</p><br />
                                <h4>Replacement:</h4>
                                <ul className='ms-5'>
                                    <p><FcApproval /> Tomato - Carrot</p>
                                    <p><FcApproval /> Kidney beans - Black eyed peas</p>
                                    <p><FcApproval /> Yogurt - Sour cream</p>
                                    <p><FcApproval /> Brown rice - Quinoa</p>
                                    <p><FcApproval /> Onion - Cucumber</p>
                                    <p><FcApproval /> Sprouts - Soaked Bengal gram</p>
                                    <p><FcApproval /> Apple - Kiwi</p>
                                    <p><FcApproval /> Pear - Orange</p>
                                </ul>
                                <h4>Workouts:</h4>
                                <ul className='ms-5'>
                                    <p><FcApproval /> Arm Circles: 1 set of 10 reps</p>
                                    <p><FcApproval /> Wrist Rotations: 1 set of 10 reps</p>
                                    <p><FcApproval /> Shoulder Rotations: 1 set of 10 reps</p>
                                    <p><FcApproval /> Neck Rotations: 1 set of 10 reps</p>
                                    <p><FcApproval /> Ankle Rotations: 1 set of 10 reps</p>
                                    <p><FcApproval /> Leg Rotations: 1 set of 10 reps</p>
                                    <p><FcApproval /> Rope Jumping: 1 set of 50 reps</p>
                                    <p><FcApproval /> Squats: 2 sets of 5 reps</p>
                                </ul>
                            </ul>
                        </div>
                        <div className="declare">
                            <h3>Feel of the Day:</h3>
                            <ul className='ms-5'>
                                <p><i className="fa-solid fa-circle-check"></i> You will feel enthusiastic.</p>
                                <p><i className="fa-solid fa-circle-check"></i> Protein, crabs and fruits will elevate your mood.</p>
                            </ul>
                        </div>
                    </div>
                    <hr />
                    <div className="day-6" style={{margin:'5vb', padding: '5vb',background:'#fff',borderRadius:'10px',boxShadow:'0 0 10px' }}>
                        <h5>Day Six:</h5>
                        <div className="score ms-4" style={{ borderLeft: '2px solid red' }}>
                            <ul className='cal ms-5 p-2'>
                                <p><FcApproval /> Breakfast-8AM</p>
                                <p><FcApproval /> A bowl of GM diet soup and two glasses of water.</p>
                                <p><FcApproval /> Snacks-10AM</p>
                                <p><FcApproval /> A bowl of mixed boiled vegetables or kidney beans and two glasses of water.</p>
                                <p><FcApproval /> Lunch-1PM</p>
                                <p><FcApproval /> A bowl of brown rice and vegetables and two glasses of water.</p>
                                <p><FcApproval /> Snacks-4PM</p>
                                <p><FcApproval /> 3-4 baby carrots and a glass of water.</p>
                                <p><FcApproval /> Dinner-7Pm</p>
                                <p><FcApproval /> A bowl of boiled vegetables or GM diet soup with two glasses of water.</p><br />
                                <h4>Replacement:</h4>
                                <ul className='ms-5'>
                                    <p><FcApproval /> Bolied kidney beans - Boiled Bengal gram</p>
                                    <p><FcApproval /> Tomatoes - Cucumber</p>
                                    <p><FcApproval /> Brown rice - Quinoa</p>
                                    <p><FcApproval /> Carrot - Beetroot or Cucumber</p>
                                </ul>
                                <h4>Workouts:</h4>
                                <ul className='ms-5'>
                                    <p><FcApproval /> Arm Circles: 1 set of 10 reps</p>
                                    <p><FcApproval /> Wrist Rotations: 1 set of 10 reps</p>
                                    <p><FcApproval /> Shoulder Rotations: 1 set of 10 reps</p>
                                    <p><FcApproval /> Neck Rotations: 1 set of 10 reps</p>
                                    <p><FcApproval /> Ankle Rotations: 1 set of 10 reps</p>
                                    <p><FcApproval /> Leg Rotations: 1 set of 10 reps</p>
                                    <p><FcApproval /> Rope Jumping: 1 set of 50 reps</p>
                                    <p><FcApproval /> Squats: 2 sets of 5 reps</p>
                                </ul>
                            </ul>
                        </div>
                        <div className="declare">
                            <h3>Feel of the Day:</h3>
                            <ul className='ms-5'>
                                <p><i className="fa-solid fa-circle-check"></i> You will start feeling lighter and will notice a prominently slimmer today.</p>
                            </ul>
                        </div>
                    </div>
                    <hr />
                    <div className="day-7" style={{margin:'5vb', padding: '5vb',background:'#fff',borderRadius:'10px',boxShadow:'0 0 10px' }}>
                        <h5>Day Seven:</h5>
                        <div className="score ms-4" style={{ borderLeft: '2px solid red' }}>
                            <ul className='cal ms-5 p-2'>
                                <p><FcApproval /> Breakfast-8AM</p>
                                <p><FcApproval /> A cup of brown rice with melon or some mixed vegetables and two glasses of water.</p>
                                <p><FcApproval /> Snacks-10AM</p>
                                <p><FcApproval /> Mixed fruit juice without sugar and two glasses of water.</p>
                                <p><FcApproval /> Lunch-1PM</p>
                                <p><FcApproval /> A wholesome big salad with favourite vegetables with a raw mango and two glasses of water.</p>
                                <p><FcApproval /> Snacks-4PM</p>
                                <p><FcApproval /> Mixed fruit juice without sugar and two glasses of water.</p>
                                <p><FcApproval /> Dinner-7Pm</p>
                                <p><FcApproval /> A bowl of brown rice with a lot of vegetables of choice and two glasses of water.</p><br />
                                <h4>Replacement:</h4>
                                <ul className='ms-5'>
                                    <p><FcApproval /> Tomatoes - Cucumber</p>
                                    <p><FcApproval /> Brown Rice - Quinoa</p>
                                    <p><FcApproval /> Carrot - Beetroot or Cucumber</p>
                                </ul>
                                <h4>Workouts:</h4>
                                <ul className='ms-5'>
                                    <p><FcApproval /> Arm Circles: 1 set of 10 reps</p>
                                    <p><FcApproval /> Wrist Rotations: 1 set of 10 reps</p>
                                    <p><FcApproval /> Shoulder Rotations: 1 set of 10 reps</p>
                                    <p><FcApproval /> Neck Rotations: 1 set of 10 reps</p>
                                    <p><FcApproval /> Ankle Rotations: 1 set of 10 reps</p>
                                    <p><FcApproval /> Leg Rotations: 1 set of 10 reps</p>
                                    <p><FcApproval /> Rope Jumping: 1 set of 50 reps</p>
                                    <p><FcApproval /> Squats: 2 sets of 5 reps</p>
                                </ul>
                            </ul>
                        </div>
                        <div className="declare">
                            <h3>Feel of the Day:</h3>
                            <ul className='ms-5'>
                                <p><i className="fa-solid fa-circle-check"></i> You will feel to eat potato or high-calorie dessert but don't fall for it.</p>
                                <p><i className="fa-solid fa-circle-check"></i> The exercise routine will keep you look slim and trim and help you stay active throughout the day.</p>
                            </ul>
                        </div>
                    </div>
                    <hr />
                </div>
            </div>
        </div>
    );
};

export default GmPlan;