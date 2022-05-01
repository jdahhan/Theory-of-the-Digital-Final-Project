import './App.css';
import dean from './dean.jpg'
import React from 'react';



const Modal = ({setModal}) => {
    const handleClick = () => {setModal(false)}
    return(
        <div className='modal'>
            <p>
                It might seem obvious to some that we are generally more willing to post something online than to say it in person. This website seeks to highlight and potentially explain that dissonance. When someone is given a provocative question,  it feels easy to just type an answer in the text box. However, words that are easy to write are much harder to say when they are visually and aurally tied to our identities. 
            </p>
            <img src={dean} alt='Dean Browning is a black gay guy'/>
            <p>
                This project was inspired by this tweet by former Pennsylvania state senate candidate Dean Browning. Obviously Dean is not a black gay guy, and it seems as though he forgot to log into an alternate account, but seeing this tweet begs the question of where he got the audacity to lie so blatantly online. This phenomenon is what psychologists have begun to call the Online Disinhibition Effect.
            </p><p>
                The online disinhibition effect generally refers to the lack of inhibition that users feel when posting on the internet. Instinctively one might assume this is mainly observed in the context of cyberbullying. While this is certainly true, psychologist John Suler notes that there are two manifestations of the online disinhibition effect: toxic and benign. Toxic online disinhibition is the kind that allows cyberbullies to harass others without shame. However, there is also benign inhibition, which refers to the type of disinhibition that allows someone to open up about things they would not be comfortable discussing in person. This can be seen in online support groups, where people silently struggling with various issues can suddenly discuss them quite frankly with complete strangers, a prospect that would likely terrify them in person. 
            </p><p>
                Suler explains many reasons this effect can occur in his article on the topic. For one, the internet protects us from someone’s actual response. Saying something provocative to someone will typically prompt a response that is very immediate and clear. Conversely, when you make a provocative post on the internet, it is incredibly unlikely that you will even see their response at all, and if you do, it will likely not be immediate and will certainly be much less impactful than having to observe someone’s actual body language when they are provoked by you. Another reason that Suler cites is how posters view the internet. When someone speaks to multiple people, they have to directly engage with them, having to observe and respond to their physical bodies. However, when we speak to thousands of people on the internet, it is still just us interacting with a glowing rectangle. It is very easy to internalize the internet as a large mass that exists for our use rather than a network of billions of distinct people with feelings and desires. Thus, the people we interact with online become more like imaginary friends than real people. 
            </p><p>
                The reason that is most relevant to this project is identity and anonymity. When someone is using the internet, they are in complete control of how they are perceived. Public facing internet profiles typically only have enough information as the user willingly provides. It is easy to disassociate posts from one’s identity if they are pegged to an online identity distinct from your own. This could be why you are likely more comfortable typing into a text box than reading your writing to yourself. This identity dissassociation also holds true for the person one is speaking to. A user is less likely to consider the consequences of their speech when they are talking to a relatively anonymous profile. You are not directly talking to a person, but a construction of the things they share publicly. This is a phenomenon that is exacerbated in high volume harassment campaigns like Gamergate. Gamergate was a mass harassment campaign against women in video games and video games journalism. In the context of a "movement", one rude troll now becomes an anonymous speck in a sea of rude trolls, none of whom have any identifying details and none of whom can be individually responded to. Conversely, all of them are not whipped into a frenzy against a person, per se, but their social media presence, making it easier to spew vitriol than if you were conversing with them directly. It is difficult to combat things like cyberbullying when it is so easy for anyone to abstract away their own online presence and that of their victims. 
            </p><p>
                The flip side of the anonymous troll is the cancellation victim. Justine Sacco was senior director of corporate communications at IAC, until she made several off-color tweets while on a trip to South Africa in 2013. Having experienced online disinhibition herself, she likely felt comfortable making jokes like “ ‘Weird German Dude: You’re in First Class. It’s 2014. Get some deodorant.’ — Inner monologue as I inhale BO. Thank God for pharmaceuticals.”, which she would presumably never actually say to that German man’s face. However, the internet did not prevent her from consequences in this case, as her public profile was tied to her identity, which allowed others to find her place of employment and campaign to get her fired. She is not the only person in this story to experience online disinhibition. Those who tweeted things such as “We are about to watch this @JustineSacco bitch get fired.” were likely also not prepared to say these things to her face. This is regarded as one of the first real instances of “cancel culture”, which generally refers to mass backlash against individuals for their perceived bad behavior online. This could be observed as a force against online disinhibition: people are less likely to behave online in ways they otherwise wouldn’t if they understand that consequences will not escape them online. However, those who dogpile others also behave in a way they might not in person. People who are otherwise non-confrontational find it easy to call out the behavior of others online.
            </p><p>
                There are many difficult questions that arise from discussing the online disinhibition effect. It is difficult to know whether we should understand the online disinhibition effect as a reflection of people’s true nature or a distortion of character brought on by the internet. Even more complicated is the question of how to combat this. Cancel culture is certainly one answer, but some would argue that it is more of an expression of online disinhibition than a reflex against it. These questions may be hard to answer, but a thorough understanding of the phenomenon might help us combat things like cyberbullying while preserving the areas in which disinhibition can be a net positive.
            </p>
            <p>
                Sources:<p>
                    <p className='citation'>
                    Ronson, Jon. <a href='https://www.nytimes.com/2015/02/15/magazine/how-one-stupid-tweet-ruined-justine-saccos-life.html'>“How One Stupid Tweet Blew Up Justine Sacco's Life.”</a> <i>The New York Times,</i> The New York Times, 12 Feb. 2015.
                    </p>
                    <p className='citation'>
                    Suler, John. <a href='http://drleannawolfe.com/Suler-TheOnlineDisinhibitionEffect-2004.pdf'>“The Online Disinhibition Effect.”</a> <i>CyberPsychology &amp; Behavior,</i> vol. 7, no. 3, 28 July 2004, pp. 321–326., https://doi.org/10.1089/1094931041291295. 
                    </p>
                </p>
            </p>
            <div className='buttoncontainer'>
                <button className='button active exit' onClick={handleClick}>RETURN</button>
            </div>
        </div>
    );
}
export default Modal