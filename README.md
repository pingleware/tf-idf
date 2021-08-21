# Installation
To install,

    npm i @presspage/tf-idf

# Getting Started
Start by importing the module,

    import {stopwords, TFIDF} = require('@presspage/tf-idf');

    // if you need to add additional stop words, just append to the array stopwords?

    var content = `A California judge ruled Friday that the costly and controversial 2020 ballot measure exempting firms like Uber and Lyft from having to classify their gig workers in the state as employees rather than as independent contractors is unconstitutional.

    Uber, Lyft, DoorDash, Instacart and Uber-owned Postmates bankrolled Proposition 22, or Prop 22, with more than $200 million, underscoring how important its passage was to the future of their businesses.
    But in a major blow to the companies, Alameda County Superior Court Judge Frank Roesch found that "the entirety of Proposition 22 is unenforceable" because a section within the measure "limits the power of a future legislature to define app-based drivers as workers subject to workers' compensation law" and "is not severable" from the rest of the measure.
    Roesch made specific reference to a section of the proposition that requires a seven-eighth legislative majority for amendments to pass, ruling it to be in defiance of the state's constitution.
    "A prohibition on legislation authorizing collective bargaining by app-based drivers does not promote the right to work as an independent contractor, nor does it protect work flexibility, nor does it provide minimum workplace safety and pay standards for those workers," Roesch wrote in his ruling.
    "It appears only to protect the economic interest of the network companies in having a divided, ununionized workforce, which is not a stated goal of the legislation."

    The coalition representing the gig economy companies said in a statement Friday that it planned to appeal.
    "We will file an immediate appeal and are confident the Appellate Court will uphold Prop 22," said Geoff Vetter, spokesperson for the Protect App-Based Drivers & Services Coalition, in a statement. "Importantly, this Superior Court ruling is not binding and will be immediately stayed upon our appeal. All of the provisions of Prop 22 will remain in effect until the appeal process is complete."
    The decision stems from a lawsuit originally filed in January in California's Supreme Court by labor union Service Employees International Union (SEIU), three ridehail drivers and one ridehail customer, seeking to overturn Prop 22 before being refiled in the lower court.
    In a statement, Bob Schoonover, president of SEIU California State Council, said: "Today's ruling by Judge Roesch striking down Proposition 22 couldn't be clearer: The gig industry-funded ballot initiative was unconstitutional and is therefore unenforceable. Companies like Uber and Lyft spent $225 million in an effort to take away rights from workers in a way that violates California's Constitution.
    "They tried to boost their profits by undermining democracy and the state constitution. For two years, drivers have been saying that democracy cannot be bought. And today's decision shows they were right," he added.
    The companies scaled their businesses with massive fleets of workers who are treated as independent contractors, and therefore not entitled to costly employee benefits such as a minimum wage, overtime, paid sick leave and unemployment insurance.
    Prop 22 came in reaction to a state labor law, Assembly Bill 5 or AB-5, that went into effect January 1, 2020, and codified an "ABC" test to determine if workers are employees who are entitled to labor protections and benefits.
    Under Prop 22, the companies can continue to treat drivers as independent contractors while granting some drivers benefit concessions, but not the full suite of protections that workers would have gotten had the measure not passed.`;

    var topic_sentences = TFIDF(content);

    // topic_sentences will be an array of three elements
    console.log(topic_sentences);

the output expected,

    [
        'Their gig workers in the state as employees rather than as independent contractors is unconstitutional',
        'All of the provisions of Prop 22 will remain in effect until the appeal process is complete',
        'Under Prop 22, the companies can continue to treat drivers as independent contractors while granting some drivers benefit concessions, but not the full suite of protections that workers would have gotten had the measure not passed'
    ]

# Next Step ?
Once you have identified the topic sentences, you will need to rewrite those sentences to prevent plagarism. There are two services which can offer AI-driven writer assistant. They are Rytr at https://rytr.me/ and Jarvis at https://www.jarvis.ai/.

Once you have your new content and checked for plagarism, you can create audio voice over using WellSaidLabs at https://wellsaidlabs.com/

Next, you can create a video using your audio voice on Canva at https://canva.com

# Additional Help Videos

[![How To Use AI Writing Assistants To Write YouTube Video Scripts - You Never Need To Write Again!](https://i.ytimg.com/an_webp/mEsrypAuz_M/mqdefault_6s.webp?du=3000&sqp=CPCngokG&rs=AOn4CLBO_N3gXTCgcyPnUvL2vlOGw1NE8g)](https://www.youtube.com/watch?v=mEsrypAuz_M)

[![How to Create Human-Like Voiceovers With an A.I. Software In Minutes (YouTube + WellSaid Tutorial)](https://i.ytimg.com/an_webp/t1Mx7hhieeM/mqdefault_6s.webp?du=3000&sqp=COSzgokG&rs=AOn4CLADS7c67rA78pDhNQvf-yMwujFhTA)](https://www.youtube.com/watch?v=t1Mx7hhieeM)

[![How To Create HD Videos With Canva For Free - The Best Online Video Editing Software For Beginners!](https://i.ytimg.com/an_webp/MVB_jVApWH8/mqdefault_6s.webp?du=3000&sqp=COapgokG&rs=AOn4CLCU4rApC55LO9RDoMlyv9EXBwP_lQ)](https://www.youtube.com/watch?v=t1Mx7hhieeM)


# Contact Us
The best contact method is via email at presspage.entertainment@gmail.com

# License
Creative Commons Attribution 4.0