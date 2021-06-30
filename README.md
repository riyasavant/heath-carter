# Heath Carter Somatotype Simplifier

<p>This application is based on the research paper <a href="https://www.mdthinducollege.org/ebooks/statistics/Heath-CarterManual.pdf">Heath Carter</a>. It aims to simplify the process of calculating complex equations for Somatotype Analysis.</p>
<h2>1. Equations for Somatotype Analysis</h2>
<h3>a. Endomorphy</h3>
<div>Endomorphy = -0.7182 + 0.1451 (X) - 0.00068 (X^2) + 0.0000014 (X^3)</div>
<ul>
  <li>X = (triceps + subscapular + supraspinale skinfolds) * (170.18 / height in cm)</li>
</ul>
<h3>b. Mesomorphy</h3>
<div>Mesomorphy = (0.858 * HB + 0.601 * FB +0.188 * CAG + 0.161 * CCG) - (0.131 * H) + 4.5</div>
<ul>
  <li>HB = humerus breadth</li>
  <li>FB = femur breadth</li>
  <li>CAG = corrected arm girth</li>
  <li>CCG = corrected calf girth</li>
  <li>H = height</li>
</ul>
<h3>c. Ectomorphy</h3>
<div>If HWR >= 40.75, then Ectomorphy = 0.732 * HWR - 28.58</div>
<div>If HWR < 40.75 and > 38.25, then Ectomorphy = 0.463 * HWR - 17.63</div>
<div>If HWR <= 38.25, then Ectomorphy = 0.1 (or recorded as 1/2)</div>
<ul>
  <li>HWR = height / cube root of weight</li>
</ul>
<h2>2. Getting Started</h2>
<div>1. Clone this repository</div>
<div>2. Install dependencies using yarn</div>
<div>3. Run yarn start</div>
<hr />
<div>Developed by: Riya Savant</div>
<div>Usage: Ongoing Research Paper Analysis</div>
<div>Hosted at: <a href="heath-carter.netlify.app/">heath-carter.netlify.app/</a></div>
