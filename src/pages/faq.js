import React from "react";
import FAQ from '../images/faq.jpg'
import FAQ1 from '../images/faq1.jpg'
import Accordion from 'react-bootstrap/Accordion';
import './../App.css'
import './faq.css'

export default function faq() {
    return (
      <div>
        <div>
        <img
          className="d-block w-100 " src={FAQ} alt="WSL" />
        </div>
        <div className='row mt-5'>
        <span className='col-md-12 header-text-x text-center'>AURVADA</span>
      </div>

      <div className='row text-center content-text ms-5 me-5'>
      <p>Our aim is to show that there is now an enormous range of spa offers, which makes orientation 
        extremely difficult. Our system gives you tips on which questions you should clarify for yourself 
        in order to filter out the right offer for you. When you think of Ayurveda, you quickly think of 
        Ayurveda cures. Probably the best-known form of treatment is the Panchakarma treatment, the classic 
        cleansing and rejuvenating treatment. However, there are many other spa programs that have been 
        developed for very specific clinical pictures. In principle, every Ayurveda cure should be tailored 
        to the individual with their own personal inclinations and needs.</p>

      <p>The Ayurvedic cures in the countries of origin India and Sri Lanka were primarily intended as 
        medical cures, a trend has emerged that increasingly also includes pure wellness cures. The variety 
        of offers under the name "Ayurveda cures" is growing and with it, of course, the difficulty of 
        finding your way around and finding the individually suitable offer.</p>

        <p>Our well selected questionnaire will help you to find your best matching hotel for your wishes 
            and needs. </p>
        
        <p>We have some more questions and answers for you around your Ayurvedic treatments, which you couldn’t find in the 
            questionnaire. Here they are….</p>

      </div>

      <div className="div-background mt-5 ms-5 me-5">
      <Accordion defaultActiveKey="0">
      <Accordion.Item eventKey="0">
        <Accordion.Header>How does Aurveda work?</Accordion.Header>
        <Accordion.Body className="content-text">
        <p className='ms-1 me-1'>The foremost effort of our organism is to keep us alive and active. That is its function, its duty.
           Every cell has the intelligence to support that duty, but it can be a difficult task due to social,
            environmental, emotional, nutritional, and genetic factors.</p>

        <p className='ms-1 me-1'>These factors can affect the bio-energies (Doshas) and bring about disorders and disease. 
          Ayurveda's main objective is to balance the doshas according to your original constitution. 
          When the doshas are in balance, the organism can function properly.</p>

        <p className='ms-1 me-1'>Ayurveda focuses on removing the underlying cause of symptoms, which are the result of 
          bio-energy imbalance. For that purpose, Ayurveda uses medicinal herbs, cooking methods, 
          rejuvenating therapies, and daily routines. Diet and lifestyle that are in harmony with 
          the original constitution will strengthen the body (immune system), mind and consciousness, 
          and prevent disorders at all levels. </p>  
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="1">
        <Accordion.Header>Is Ayurveda safe?</Accordion.Header>
        <Accordion.Body className="content-text">
        <p className='ms-1 me-1'>Ayurveda is a holistic natural system of health and herbal medicine for all ages. Since Ayurveda considers food to be medicine, it focuses on diet and lifestyle as the foundation for good health, allowing you to take more control over your health and well being. Along with proper nutrition, it uses Ayurvedic herbs and therapies that have been utilized for thousands of years.</p>

        <p className='ms-1 me-1'>Medicinal herbs have many properties and potential actions, and, when manufactured and used properly, they achieve the desired results without creating further imbalances. So, as with any type of health care, it is important to have the guidance and close supervision of a professional Ayurvedic Doctor through regular follow-ups and good communication.</p>

        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="2">
        <Accordion.Header>How effective is Ayurveda?</Accordion.Header>
        <Accordion.Body className="content-text">
        <p className='ms-1 me-1'>Ayurveda is a very effective system of alternative medicine that is gradually being recognized in the Western world and from the WHO. It is one of the primary systems of health care in Sri Lanka and has been used for thousands of years for all sorts of disorders and diseases.</p>

        <p className='ms-1 me-1'>It’s full effectiveness will depend on various considerations, including your age and state of health, how much effort you are willing to put into making the necessary changes toward better health, and how disciplined you are with taking your herbal medicine and following the recommended guidelines.</p>

        <p className='ms-1 me-1'>Since an Ayurvedic cure is very personalized, its results will depend on specific factors and on follow-up treatments, since alterations and close management are absolutely necessary to obtain optimal results.</p>

        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="3">
        <Accordion.Header>Can Ayurveda help me with chronic or serious diseases?</Accordion.Header>
        <Accordion.Body className="content-text">
        <p className='ms-1 me-1'>As a holistic system of medicine, Ayurveda does not focus on disease or pathology individuals. Rather it maintains that all life must be supported by energy imbalances.</p>

        <p className='ms-1 me-1'>It views health as the harmonious functioning of the organism as a whole and states that no system can work in isolation. Therefore, its goal is not just to treat or suppress symptoms, but to bring balance to the doshas so as to restore the natural harmony of the organism as a whole. When the flow of energy is harmonious, everything works properly and there is a sense of well being.</p>

        <p className='ms-1 me-1'>In other words, when the balance of the bio-energies is restored, the root cause of imbalance is uninvolved, and the organism works properly. Symptoms are disappearing.</p>

        <p className='ms-1 me-1'>Further Ayurveda uses the cleansing and rejuvenation program known as Panchakarma to detoxify and rejuvenate the organism at a cellular level, further promoting overall health and longevity.</p>

        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="4">
        <Accordion.Header>What is Panchakarma? And how Panchakarma works?</Accordion.Header>
        <Accordion.Body className="content-text">
        <p className='ms-1 me-1'>The Panchakarma cure is the most profound and effective method for physical and mental cleansing and regeneration as well as for restoring the dynamic balance of bio-energies.</p>

        <p className='ms-1 me-1'>"Pancha" means "five" and "karma" means "acts" or "processes" by which toxins and waste products in our body are dissolved and eliminated through our natural elimination organs.
The Panchakarma cure forms the heart of Ayurvedic medicine. The intensive therapies of the Panchakarma cure are aimed at cleaning and detoxification, weight regulation, as well as regeneration and harmonization of bio-energies, because balance of body and mind is the basis for joie de vivre, vitality and performance. The purification takes place at the same time on the psychological level and thus gives space for a more positive attitude towards life.</p>

        <p className='ms-1 me-1'>After the first detailed examination and questioning by the experienced Ayurveda doctor, during the first phase of the cure, disease substances are released from the tissues and transported into the gastrointestinal tract (possibly also into the bronchial space), from where they are later excreted from the body by further applications.
In the first half of this phase, head oil treatments (Shirodhara or Shiroabhyanga) loosen toxins in the head area, and the hormone-producing glands are balanced. These applications have a very relaxing effect.
</p>

        <p className='ms-1 me-1'>The second phase consists of full-body massages, herbal baths and sweat baths, among other things. The massages serve to loosen the waste products from the tissue. Very high-quality medicinal oils are used, which are massaged in so that they take effect in the body. It is therefore important not to shower or wash immediately after the massage, the oils should remain on the skin.</p>

         <p className='ms-1 me-1'>The draining measures (discharge, enemas) in the next phase serve to cleanse the body, mind and feelings and are always applied taking into account the physical and psychological condition of the guest. Like all measures, they serve to cleanse, purify and build up the organism.</p>
        
        <p className='ms-1 me-1'>For a follow-up treatment at home lasting several weeks, various Ayurvedic medications are then prescribed at the final consultation, which both continue to support the body’s cleansing process and also have a very constructive effect.</p>

        <p className='ms-1 me-1'>As a result of the regeneration and harmonization of the body during the Panchakarma treatment you can expect
        <ul><li>healthy and beautiful skin</li>
        <li>Weight normalization</li>
        <li>Tissue Enhancement</li>
        <li>general rejuvenating effect</li>
        <li>Stimulating the self-healing powers, strengthening the immune system</li>
        <li>Improvement of general well-being</li>
        <li>Revitalization</li>
        <li>Relaxation and detachment</li>
        <li>increased zest for life</li>
        <li>higher energy level</li>

        </ul>
        </p>
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>

    </div>

       
              

        <div>
        <img
          className="d-block w-100 " src={FAQ1} alt="WSL" />
        </div>
      </div>
    )
  }
  