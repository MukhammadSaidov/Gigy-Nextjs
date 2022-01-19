import React from 'react';
import ApplyPage from "../../../app/containers/ApplyPage/ApplyPage";
import MainJobItem from "../../../app/components/MainJobInfo/MainJobInfo";
import AcademyGraphCard from "../../../app/components/Cards/AcademyGraphCard";
import SmallUpcomingGigsCard from "../../../app/components/UpcomingGigsCard/SmallUpcomingGigsCard";
import Link from 'next/link';


const RoutedApplyPage = ({item, ninja}) => {
    return (
        <ApplyPage
            mainJobItem={
              <MainJobItem
                  // image={item.image}  
                  job={item.name}
                  company={item.username}
                  // location={item.location}
                  // compensation={item.compensation}
                  // jobType={item.jobType}
                  // experience={item.experience}
                  // jobFrequency={item.jobFrequency}
                  // jobOverview={item.jobOverview}
                  // listOne={item.listOne}
                  // listTwo={item.listTwo}
                  // listThree={item.listThree}
                  // listFour={item.listFour}
              />
            }
            academyGraphCard={
              <AcademyGraphCard
                cardType={item.name}
                // graphValue={}
                // graphPercentage={}
                // totalOrders={}
              />
            }
            smallUpcomingGigsCard={
              ninja.map(items =>
                <Link href={'/me/job/' + items.id + '/info'} key={items.id} >
                  <a href="#">
                  <SmallUpcomingGigsCard
                    // rColor={color of border}
                    job={item.name}
                    // company={}
                    // location={}
                    // time={}
                    // uploadTime={}
                    // money={}
                  />
                  </a>
                </Link>
              )
            }
        />
    );
};



export default RoutedApplyPage;