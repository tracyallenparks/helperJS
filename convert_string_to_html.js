function convert_string_to_html(string){
    let arr = [],li_count = 0;
    string = string.split('\n');
    string.forEach((element) => {
        element = element.trim();
        if(element.length !== 0){
            element = element.replace(/\d{1,2}\.\t/g,'');
            if(element.indexOf('·') < 0){
                element = '<p> ' + element + ' </p>';
                if(li_count > 0){
                    element = '</ul>' + element;
                    li_count = 0;
                }
            } else {
                element = '<li> ' + element.replace(/·\t/g,'') + ' </li>';
                if(li_count === 0){
                    element = '<ul>' + element;
                }
                li_count++;
            }
            arr.push(element);
        }
    });
    if(arr.length){
        return arr.join('');
    }
}
const test_this = `
*Offer applies to new bookings created between November 1, 2021 – December 14, 2021 (“Offer Period”). Offer applies to select sailings departing November 14, 2021–May 5, 2023. Offer provides 20% off cruise fare, a $500 Onboard Credit (OBC) per stateroom, and a Premium Beverage Package for two guests. OBC is in USD, per stateroom based on double occupancy, has no cash value, is not redeemable for cash, is not transferable, and will expire if not used by 10p.m. on the last evening of the voyage.  All other charges, including, but not limited to, taxes, fees, and port expenses, are additional and apply to all guests. Limit one offer per stateroom. Offer applies to new, individual bookings and non-contracted group bookings named and fully deposited during the Offer Period. 

Offer is combinable with Back to Back Benefits, onboard booking savings and Azamara Circle Quarterly Savings, National Account Hosted and Amenity Programs, and one other OBC or value add. Unless stated otherwise, offer is not combinable with any other offer or promotion, including, but not limited to, Last Minute Voyages, Closed User Rates, Employee Rates, Interline Rates, Travel Agent Rates, and Net Rates. Offer is not applicable to 3rd and 4th guests in a stateroom. Offer is not applicable to incentive or contracted groups. After the Offer Period, the offer will be removed from the booking if the guest cancels and reinstates the booking, applies a fare change, or changes the ship or sail date of the booking; certain other changes to the booking may also result in removal of the offer. 

Offer is subject to availability and change without notice and may be withdrawn at any time. Single occupancy guests paying 200% cruise fare are eligible for the full amount of the offer; single occupancy guests paying less than 200% cruise fare are eligible for a prorated amount of the offer. This offer is applicable to U.S., Canada, and select global markets only. Refer to Azamara.com/OBC500 and the Cruise Ticket Contract for additional terms and conditions. ©2021 Azamara. Ships registered in Malta.
`;
const test_this_other = `
1.	The November Offer applies to new bookings in all stateroom categories (guarantee staterooms excluded) made between 1st November 2021 & 14th December 2021 (“Offer Period”) on selected voyages departing between 14th November 2021 to 5th May 2023 (“Eligible Bookings”). 

2.	Offer includes a $500 Onboard Credit (OBC) per stateroom, and a Premium Beverage Package for two guests. OBC is in USD, per stateroom based on double occupancy, has no cash value, is not redeemable for cash, is not transferable, and will expire if not used by 10p.m. on the last evening of the voyage.  All other charges, including, but not limited to, taxes, fees, and port expenses, are additional and apply to all guests. Limit one offer per stateroom. Offer applies to new, individual bookings and non-contracted group bookings named and fully deposited during the Offer Period.

3.	Eligible Bookings will receive USD $500 onboard credit per stateroom based on two guests sharing (“Offer”). Onboard credit for single bookings will be pro-rated based on single supplement paid:
·	USD $500 for 200% supplement
·	USD $375 for 150% supplement
·	USD $312.50 for 125% supplement

4.	Pricing is per person, based on two people sharing the eligible stateroom booked in AUD or NZD, reflects all promotional savings and is inclusive of all taxes, fees and onboard gratuities (which are subject to change).

5.	See https://www.azamara.com/en-au/booked-guests/onboard-packages/beverage-packages if in Australia or https://www.azamara.com/en-nz/booked-guests/onboard-packages/beverage-packages if in New Zealand for full details on the Premium Beverage package.  
6.	Offer applies to new individual stateroom Eligible Bookings (as specified above). Staterooms in non-contracted group bookings must be named and fully deposited during the promotion period to be eligible for this promotion. 

7.	This promotion does not apply to Travel Agent rates, Interline Rates, Nett Tour Op Rates, Gross Tour Op Rates, Closed User or any form on Non-Revenue price programs, including but not restricted to: Seminars at Sea, Perishable Inventory, Complimentary prize winner staterooms, incentive or contracted groups, or 3rd guests and upwards in the stateroom, who must pay full fare at the time of booking. 

8.	This promotion is only combinable with Black Friday & Cyber Monday Offer, Back-to-Back Benefits where both sailings meet the terms of the offer, Azamara Circle Quarterly Savings, and single supplements. Unless otherwise stated, the Offer is not combinable with any other offer or promotion, including, but not limited to, Complimentary Nights, Last Minute Voyages, Closed User Rates, Employee Rates, Interline Rates, Travel Agent Rates, and Net Rates: offer is available on gross rated fares only. 

9.	If the guest cancels and reinstates an Eligible Booking, applies a fare change, or changes the ship or sail date of the booking or makes certain other changes to the booking, this will result in removal of the Offer.   

10.	Bookings created prior to this promotion that wish to access the new benefits will have to cancel existing booking & make a new booking. Bookings that are cancelled shall be subject to prevailing cancellation charges.

11.	Promoter reserves the right to cancel, suspend and/or modify this promotion, or any part of it, if any fraud, technical failures, a change in applicable law or any other factor beyond Promoter's reasonable control impairs the integrity or proper functioning of this promotion, as determined by Promoter in its sole discretion. 

12.	Promotion is subject to availability and change without notice, is capacity controlled and may be withdrawn at any time. This offer is applicable to residents of Australia and New Zealand only. Promoter’s standard booking terms and conditions (including any supplementary terms and policies related to the COVID-19 pandemic) will apply and are available to view at https://www.azamara.com/en-au/australian-terms-conditions if in Australia or at https://www.azamara.com/en-nz/new-zealand-terms-conditions if in New Zealand.  For general booking information, eligible sailings, terms and conditions, inclusions, cancellation charges & other information please refer to the Azamara website – www.Azamara.com or contact your travel agent. ©2021 Azamara. Ships registered in Malta.

13.	This promotion is sponsored by SP Cruises OpCo Limited (or its designee company as operator of the ‘Azamara’ brand, specifically, SP Cruises Ireland Limited). For more details see www.azamara.com/about-azamara
`;
convert_string_to_html(test_this_other);