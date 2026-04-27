
 
 <h1> All question </h1>
    <p>1. What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll? <br>
        2. How do you create and insert a new element into the DOM? <br>
        3. What is Event Bubbling? And how does it work? <br>
        4. What is Event Delegation in JavaScript? Why is it useful? <br>
        5. What is the difference between preventDefault() and stopPropagation() methods?
    </p>

 <h1> All question Answer </h1>

 <h2>1. Difference between selectors</h2>
    <ul>
        <li> getElementById() একটিমাত্র element দেয়।</li>
        <li>getElementsByClassName() একাধিক element দেয়। </li>
        <li>querySelector() প্রথম matching element দেয়। </li>
        <li> querySelectorAll() সব matching element দেয়।</li>
    </ul>


 <h2>2. Create and insert element</h2>
    <ul>
        <li> createElement() দিয়ে element বানিয়ে appendChild() দিয়ে DOM এ যোগ করা হয়।</li>
    </ul>

 <h2>3. Event Bubbling</h2>
    <ul>
        <li> Event নিচ থেকে উপরের দিকে যায় (child → parent)।</li>
    </ul>



 <h3>4. Event Delegation</h3>
    <ul>
        <li>Parent এ event listener বসিয়ে child element control করা হয়।</li>

 </ul>

<h3>5. preventDefault() vs stopPropagation()</h3>
    <ul>
        <li> preventDefault() default কাজ বন্ধ করে। <br>
            stopPropagation() event bubbling বন্ধ করে।</li>
    </ul>
