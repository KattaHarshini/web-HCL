document.addEventListener('DOMContentLoaded', () => {
    const questionsListDiv = document.getElementById('questions-list');
    const hintModal = document.getElementById('hint-modal');
    const hintQuestionTitle = document.getElementById('hint-question');
    const hintContentDiv = document.getElementById('hint-content');
    const closeBtn = document.querySelector('.close-btn');

    // Complete list of Fasal coding questions with hints and answers
    const fasalQuestions = [
        // ... (your existing question array remains the same)
   

{
  "question": " Reverse a String",
  "description": "Basic string manipulation problem.",
  "hint": "Use a loop or built-in StringBuilder methods.",
  "answer": `
<pre><code class="language-java">
String str = "HCL";
String reversed = new StringBuilder(str).reverse().toString();
System.out.println(reversed);
</code></pre>
`
},

{
  "question": " Find the Largest Element in an Array",
  "description": "Tests array traversal logic.",
  "hint": "Use a loop to track the max value.",
  "answer": `
<pre><code class="language-java">
int[] arr = {1, 5, 3, 9, 2};
int max = arr[0];
for (int i = 1; i < arr.length; i++) {
  if (arr[i] > max) max = arr[i];
}
System.out.println(max);
</code></pre>
`
},
{
  "question": " Check for Palindrome String",
  "description": "Checks if a string reads the same backward.",
  "hint": "Compare original with reversed string.",
  "answer": `
<pre><code class="language-java">
String str = "madam";
String rev = new StringBuilder(str).reverse().toString();
System.out.println(str.equals(rev));
</code></pre>
`
},
{
  "question": " Print Fibonacci Series up to N Terms",
  "description": "Test on iterative logic and sequence generation.",
  "hint": "Use a loop to print Fibonacci numbers.",
  "answer": `
<pre><code class="language-java">
int n = 5, a = 0, b = 1;
for (int i = 1; i <= n; i++) {
  System.out.print(a + " ");
  int next = a + b;
  a = b;
  b = next;
}
</code></pre>
`
},
{
  "question": " Find Factorial of a Number",
  "description": "Recursive or iterative factorial computation.",
  "hint": "Multiply numbers from 1 to n.",
  "answer": `
<pre><code class="language-java">
int n = 5;
int fact = 1;
for (int i = 1; i <= n; i++) {
  fact *= i;
}
System.out.println(fact);
</code></pre>
`
},
{
  "question": " Count Vowels in a String",
  "description": "String analysis question.",
  "hint": "Loop through and check each character.",
  "answer": `
<pre><code class="language-java">
String str = "HCL Technologies";
int count = 0;
for (char c : str.toLowerCase().toCharArray()) {
  if ("aeiou".indexOf(c) != -1) count++;
}
System.out.println(count);
</code></pre>
`
},
{
  "question": " Check if a Number is Prime",
  "description": "Tests number theory basics.",
  "hint": "Divide by numbers up to square root.",
  "answer": `
<pre><code class="language-java">
int num = 29;
boolean isPrime = true;
for (int i = 2; i <= Math.sqrt(num); i++) {
  if (num % i == 0) {
    isPrime = false;
    break;
  }
}
System.out.println(isPrime);
</code></pre>
`
},
{
  "question": " Remove Duplicates from an Array",
  "description": "Eliminate duplicates using Set.",
  "hint": "Use LinkedHashSet to maintain order.",
  "answer": `
<pre><code class="language-java">
int[] arr = {1, 2, 2, 3, 4, 4, 5};
Set<Integer> set = new LinkedHashSet<>();
for (int i : arr) set.add(i);
System.out.println(set);
</code></pre>
`
},
{
  "question": " Find the Second Largest Number in an Array",
  "description": "Array manipulation to find second max.",
  "hint": "Track two max values.",
  "answer": `
<pre><code class="language-java">
int[] arr = {10, 20, 30, 25, 30};
int first = Integer.MIN_VALUE, second = Integer.MIN_VALUE;
for (int n : arr) {
  if (n > first) {
    second = first;
    first = n;
  } else if (n > second && n != first) {
    second = n;
  }
}
System.out.println(second);
</code></pre>
`
},
{
  "question": " Check Anagram Strings",
  "description": "Determine if two strings are anagrams.",
  "hint": "Sort and compare both strings.",
  "answer": `
<pre><code class="language-java">
String str1 = "listen", str2 = "silent";
char[] a1 = str1.toCharArray();
char[] a2 = str2.toCharArray();
Arrays.sort(a1);
Arrays.sort(a2);
System.out.println(Arrays.equals(a1, a2));
</code></pre>
`
},
{
  "question": " Find the Missing Number in an Array",
  "description": "One number is missing from a sequence of 1 to n.",
  "hint": "Use the formula n(n+1)/2 and subtract the array sum.",
  "answer": `
<pre><code class="language-java">
int[] arr = {1, 2, 4, 5, 6};
int n = 6;
int total = n * (n + 1) / 2;
int sum = 0;
for (int num : arr) sum += num;
System.out.println("Missing number: " + (total - sum));
</code></pre>
`
},
{
  "question": " Move Zeros to End",
  "description": "Move all 0s in an array to the end without changing the order of non-zero elements.",
  "hint": "Use two pointers approach.",
  "answer": `
<pre><code class="language-java">
int[] arr = {0, 1, 0, 3, 12};
int index = 0;
for (int num : arr) {
  if (num != 0) arr[index++] = num;
}
while (index < arr.length) arr[index++] = 0;
System.out.println(Arrays.toString(arr));
</code></pre>
`
},
{
  "question": " Find All Duplicates in an Array",
  "description": "Return all elements that appear more than once.",
  "hint": "Use a HashMap to count frequency.",
  "answer": `
<pre><code class="language-java">
int[] nums = {4, 3, 2, 7, 8, 2, 3, 1};
Map<Integer, Integer> map = new HashMap<>();
for (int num : nums) {
  map.put(num, map.getOrDefault(num, 0) + 1);
}
for (Map.Entry<Integer, Integer> entry : map.entrySet()) {
  if (entry.getValue() > 1) {
    System.out.print(entry.getKey() + " ");
  }
}
</code></pre>
`
},
{
  "question": " Rotate an Array to the Right by K Steps",
  "description": "Rotate elements of an array k steps to the right.",
  "hint": "Use reverse approach in three steps.",
  "answer": `
<pre><code class="language-java">
void reverse(int[] arr, int start, int end) {
  while (start < end) {
    int temp = arr[start];
    arr[start++] = arr[end];
    arr[end--] = temp;
  }
}

int[] nums = {1,2,3,4,5,6,7};
int k = 3;
k = k % nums.length;
reverse(nums, 0, nums.length - 1);
reverse(nums, 0, k - 1);
reverse(nums, k, nums.length - 1);
System.out.println(Arrays.toString(nums));
</code></pre>
`
},
{
  "question": " Find the First Non-Repeating Character in a String",
  "description": "Return the index of the first unique character.",
  "hint": "Use a LinkedHashMap to maintain insertion order.",
  "answer": `
<pre><code class="language-java">
String s = "leetcode";
Map<Character, Integer> map = new LinkedHashMap<>();
for (char c : s.toCharArray()) {
  map.put(c, map.getOrDefault(c, 0) + 1);
}
for (int i = 0; i < s.length(); i++) {
  if (map.get(s.charAt(i)) == 1) {
    System.out.println(i);
    break;
  }
}
</code></pre>
`
},
{
  "question": " Merge Two Sorted Arrays",
  "description": "Merge two sorted arrays into a single sorted array.",
  "hint": "Use two-pointer technique.",
  "answer": `
<pre><code class="language-java">
int[] a = {1, 3, 5};
int[] b = {2, 4, 6};
int[] merged = new int[a.length + b.length];
int i = 0, j = 0, k = 0;
while (i < a.length && j < b.length) {
  merged[k++] = a[i] < b[j] ? a[i++] : b[j++];
}
while (i < a.length) merged[k++] = a[i++];
while (j < b.length) merged[k++] = b[j++];
System.out.println(Arrays.toString(merged));
</code></pre>
`
},
{
  "question": " Check if a String is a Pangram",
  "description": "A pangram contains every letter of the alphabet at least once.",
  "hint": "Use a Set to track all unique letters.",
  "answer": `
<pre><code class="language-java">
String s = "The quick brown fox jumps over the lazy dog";
Set<Character> set = new HashSet<>();
for (char c : s.toLowerCase().toCharArray()) {
  if (Character.isLetter(c)) set.add(c);
}
System.out.println(set.size() == 26);
</code></pre>
`
},
{
  "question": " Implement a Stack Using Two Queues",
  "description": "Classic data structure implementation problem.",
  "hint": "Use two queues and push/pop logic.",
  "answer": `
<pre><code class="language-java">
Queue<Integer> q1 = new LinkedList<>();
Queue<Integer> q2 = new LinkedList<>();

void push(int x) {
  q2.add(x);
  while (!q1.isEmpty()) q2.add(q1.poll());
  Queue<Integer> temp = q1;
  q1 = q2;
  q2 = temp;
}

int pop() {
  return q1.poll();
}
</code></pre>
`
},
{
  "question": " Implement a Queue Using Stacks",
  "description": "Classic queue using two stacks problem.",
  "hint": "Use two stacks to simulate enqueue/dequeue.",
  "answer": `
<pre><code class="language-java">
Stack<Integer> stack1 = new Stack<>();
Stack<Integer> stack2 = new Stack<>();

void enqueue(int x) {
  stack1.push(x);
}

int dequeue() {
  if (stack2.isEmpty()) {
    while (!stack1.isEmpty()) {
      stack2.push(stack1.pop());
    }
  }
  return stack2.pop();
}
</code></pre>
`
},
{
  "question": " Print All Permutations of a String",
  "description": "Recursion-based backtracking problem.",
  "hint": "Swap characters and recurse.",
  "answer": `
<pre><code class="language-java">
void permute(String str, int l, int r) {
  if (l == r) System.out.println(str);
  else {
    for (int i = l; i <= r; i++) {
      str = swap(str, l, i);
      permute(str, l + 1, r);
      str = swap(str, l, i); // backtrack
    }
  }
}

String swap(String s, int i, int j) {
  char[] ch = s.toCharArray();
  char temp = ch[i];
  ch[i] = ch[j];
  ch[j] = temp;
  return String.valueOf(ch);
}

permute("ABC", 0, 2);
</code></pre>
`
},
{
  "question": " Tell me about yourself.",
  "description": "This is usually the first question. It sets the tone of the interview.",
  "hint": "Focus on your education, skills, internships, and career goals relevant to the company.",
  "answer": `
<pre>
"I'm a recent Computer Science graduate with a strong foundation in Java, full-stack development, and data structures. During my internship at Kodnest, I worked on a library management system project, which improved my problem-solving and collaborative skills. I'm passionate about coding and eager to contribute to innovative projects at your company."
</pre>
`
},
{
  "question": " Why do you want to work at our company?",
  "description": "This tests your understanding and interest in the company.",
  "hint": "Do some research about the company’s culture, mission, and recent achievements.",
  "answer": `
<pre>
"I’m impressed by your focus on innovation and employee growth. Your recent work on cloud solutions and strong reputation in the tech community align with my interests in scalable systems and learning culture. I believe this environment will allow me to grow professionally and contribute meaningfully."
</pre>
`
},
{
  "question": " What are your strengths and weaknesses?",
  "description": "Evaluates self-awareness and honesty.",
  "hint": "Mention strengths with examples; for weaknesses, talk about what you're doing to improve.",
  "answer": `
<pre>
"My strength is adaptability — during college, I quickly picked up new technologies like JavaScript and SQL for our projects. As for a weakness, I used to struggle with public speaking, but I’ve been improving by volunteering for presentations and team meetings."
</pre>
`
},
{
  "question": " Describe a challenging situation you faced and how you handled it.",
  "description": "Tests problem-solving, stress management, and teamwork.",
  "hint": "Use the STAR method: Situation, Task, Action, Result.",
  "answer": `
<pre>
"During my internship, we faced a last-minute bug in our app just before deployment. I stayed back late, collaborated with the QA team, and traced the issue to a faulty API response. After fixing it, we tested all modules thoroughly and delivered it on time."
</pre>
`
},
{
  "question": " Where do you see yourself in 5 years?",
  "description": "Checks your career planning and commitment.",
  "hint": "Connect your goals with growth in the company.",
  "answer": `
<pre>
"In five years, I see myself as a full-stack developer leading a team, contributing to meaningful projects, and mentoring juniors. I aim to grow with the company by learning continuously and taking on more responsibilities."
</pre>
`
},
{
  "question": " Are you comfortable relocating or working in shifts?",
  "description": "Assesses flexibility and availability.",
  "hint": "Be honest but show openness if possible.",
  "answer": `
<pre>
"Yes, I am open to relocation and flexible with shift timings if required. I understand the demands of the IT industry and am ready to adapt to contribute effectively."
</pre>
`
}






























    ];

    fasalQuestions.forEach((question, index) => {
        const questionDiv = document.createElement('div');
        questionDiv.classList.add('question-item');

        const title = document.createElement('h3');
        title.textContent = `${index + 1}. ${question.question}`;

        const description = document.createElement('p');
        description.textContent = question.description;

        // Create button container
        const buttonContainer = document.createElement('div');
        buttonContainer.style.display = 'flex';
        buttonContainer.style.gap = '10px';
        buttonContainer.style.marginTop = '15px';

        // Hint Button
        const hintButton = document.createElement('button');
        hintButton.textContent = 'Show Hint';
        hintButton.style.padding = '10px 20px';
        hintButton.style.border = 'none';
        hintButton.style.borderRadius = '5px';
        hintButton.style.backgroundColor = '#4CAF50';
        hintButton.style.color = 'white';
        hintButton.style.fontWeight = 'bold';
        hintButton.style.cursor = 'pointer';
        hintButton.style.transition = 'all 0.3s ease';
        hintButton.style.boxShadow = '0 2px 5px rgba(0,0,0,0.2)';
        
        // Hover effect for hint button
        hintButton.addEventListener('mouseover', () => {
            hintButton.style.backgroundColor = '#45a049';
            hintButton.style.transform = 'translateY(-2px)';
            hintButton.style.boxShadow = '0 4px 8px rgba(0,0,0,0.2)';
        });
        
        hintButton.addEventListener('mouseout', () => {
            hintButton.style.backgroundColor = '#4CAF50';
            hintButton.style.transform = 'translateY(0)';
            hintButton.style.boxShadow = '0 2px 5px rgba(0,0,0,0.2)';
        });
        
        hintButton.addEventListener('click', () => {
            hintQuestionTitle.textContent = question.question;
            hintContentDiv.innerHTML = `<p>${question.hint}</p>`;
            hintModal.style.display = 'block';
        });

        // Answer Button
        const answerButton = document.createElement('button');
        answerButton.textContent = 'Show Answer';
        answerButton.style.padding = '10px 20px';
        answerButton.style.border = 'none';
        answerButton.style.borderRadius = '5px';
        answerButton.style.backgroundColor = '#2196F3';
        answerButton.style.color = 'white';
        answerButton.style.fontWeight = 'bold';
        answerButton.style.cursor = 'pointer';
        answerButton.style.transition = 'all 0.3s ease';
        answerButton.style.boxShadow = '0 2px 5px rgba(0,0,0,0.2)';
        
        // Hover effect for answer button
        answerButton.addEventListener('mouseover', () => {
            answerButton.style.backgroundColor = '#0b7dda';
            answerButton.style.transform = 'translateY(-2px)';
            answerButton.style.boxShadow = '0 4px 8px rgba(0,0,0,0.2)';
        });
        
        answerButton.addEventListener('mouseout', () => {
            answerButton.style.backgroundColor = '#2196F3';
            answerButton.style.transform = 'translateY(0)';
            answerButton.style.boxShadow = '0 2px 5px rgba(0,0,0,0.2)';
        });
        
        answerButton.addEventListener('click', () => {
            hintQuestionTitle.textContent = question.question;
            hintContentDiv.innerHTML = question.answer;
            hintModal.style.display = 'block';
        });

        // Add buttons to container
        buttonContainer.appendChild(hintButton);
        buttonContainer.appendChild(answerButton);

        questionDiv.appendChild(title);
        questionDiv.appendChild(description);
        questionDiv.appendChild(buttonContainer);
        questionsListDiv.appendChild(questionDiv);
    });

    closeBtn.addEventListener('click', () => {
        hintModal.style.display = 'none';
    });

    window.addEventListener('click', (event) => {
        if (event.target === hintModal) {
            hintModal.style.display = 'none';
        }
    });
});