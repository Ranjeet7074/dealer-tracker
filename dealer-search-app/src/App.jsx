import React, { useState, useMemo } from 'react';
import { Search, Filter, X, Phone, MapPin, Briefcase, Building2 } from 'lucide-react';

// Embedded dealer data
const DEALER_DATA = [
  {
    "Organization": "West-2",
    "Manager Name": "Vikaram Chauhan",
    "Manager Level": "EOS Site Incharge",
    "Dealer Name": "( NON ACTIVE ) Apco Autosales-Morbi",
    "SCode": "1S3352",
    "State": "Gujarat",
    "City": "Morbi",
    "Contact No.": "9510764035"
  },
  {
    "Organization": "West-2",
    "Manager Name": "Divyesh Shah",
    "Manager Level": "ASM",
    "Dealer Name": "( NON ACTIVE ) Apco Autosales-Morbi",
    "SCode": "1S3352",
    "State": "Gujarat",
    "City": "Morbi",
    "Contact No.": "7600287682"
  },
  {
    "Organization": "West-2",
    "Manager Name": "Sudhir Kumar",
    "Manager Level": "RSM",
    "Dealer Name": "( NON ACTIVE ) Apco Autosales-Morbi",
    "SCode": "1S3352",
    "State": "Gujarat",
    "City": "Morbi",
    "Contact No.": "9752542733"
  },
  {
    "Organization": "West-2",
    "Manager Name": "Mahesh",
    "Manager Level": "WM",
    "Dealer Name": "( NON ACTIVE ) Apco Autosales-Morbi",
    "SCode": "1S3352",
    "State": "Gujarat",
    "City": "Morbi",
    "Contact No.": "9510764032"
  },
  {
    "Organization": "West-2",
    "Manager Name": "Mehul Sheth",
    "Manager Level": "MD",
    "Dealer Name": "( NON ACTIVE ) Apco Autosales-Morbi",
    "SCode": "1S3352",
    "State": "Gujarat",
    "City": "Morbi",
    "Contact No.": "9824653565"
  },
  {
    "Organization": "West-2",
    "Manager Name": "Ajay Gamit",
    "Manager Level": "CSM",
    "Dealer Name": "( NON ACTIVE ) Apco Autosales-Morbi",
    "SCode": "1S3352",
    "State": "Gujarat",
    "City": "Morbi",
    "Contact No.": "9265850546"
  },
  {
    "Organization": "South-2",
    "Manager Name": "Bharath Chary",
    "Manager Level": "EOS Site Incharge",
    "Dealer Name": "( NON ACTIVE ) Apex Automobiles-Jadcherla",
    "SCode": "1S6132",
    "State": "Telangana",
    "City": "Jadcherla",
    "Contact No.": "6281557686"
  },
  {
    "Organization": "South-2",
    "Manager Name": "Ikkurthy Srikanth",
    "Manager Level": "ASM",
    "Dealer Name": "( NON ACTIVE ) Apex Automobiles-Jadcherla",
    "SCode": "1S6132",
    "State": "Telangana",
    "City": "Jadcherla",
    "Contact No.": "9550801110"
  },
  {
    "Organization": "South-2",
    "Manager Name": "Rahul / Balabrahmam",
    "Manager Level": "WM",
    "Dealer Name": "( NON ACTIVE ) Apex Automobiles-Jadcherla",
    "SCode": "1S6132",
    "State": "Telangana",
    "City": "Jadcherla",
    "Contact No.": "9912333103,9912333107"
  },
  {
    "Organization": "South-2",
    "Manager Name": "N Narayanan",
    "Manager Level": "RSM",
    "Dealer Name": "( NON ACTIVE ) Apex Automobiles-Jadcherla",
    "SCode": "1S6132",
    "State": "Telangana",
    "City": "Jadcherla",
    "Contact No.": "8123036700"
  },
  {
    "Organization": "South-2",
    "Manager Name": "Narayana Rao",
    "Manager Level": "MD",
    "Dealer Name": "( NON ACTIVE ) Apex Automobiles-Jadcherla",
    "SCode": "1S6132",
    "State": "Telangana",
    "City": "Jadcherla",
    "Contact No.": "9848023730"
  },
  {
    "Organization": "South-2",
    "Manager Name": "S Kalyan Raj (D) / Prem Kumar (N)",
    "Manager Level": "CSM",
    "Dealer Name": "( NON ACTIVE ) Apex Automobiles-Jadcherla",
    "SCode": "1S6132",
    "State": "Telangana",
    "City": "Jadcherla",
    "Contact No.": "7305466642,9154141679"
  },
  {
    "Organization": "East-1",
    "Manager Name": "Sanjoy Singh",
    "Manager Level": "WM",
    "Dealer Name": "( NON ACTIVE ) Badrinath Motors-Ghoshpukur",
    "SCode": "1S2273",
    "State": "West Bengal",
    "City": "Siliguri",
    "Contact No.": "7319034038"
  },
  {
    "Organization": "East-1",
    "Manager Name": "Yogeshwar Singh",
    "Manager Level": "RSM",
    "Dealer Name": "( NON ACTIVE ) Badrinath Motors-Ghoshpukur",
    "SCode": "1S2273",
    "State": "West Bengal",
    "City": "Siliguri",
    "Contact No.": "9717966997"
  },
  {
    "Organization": "East-1",
    "Manager Name": "Rakesh Ghosh",
    "Manager Level": "ASM",
    "Dealer Name": "( NON ACTIVE ) Badrinath Motors-Ghoshpukur",
    "SCode": "1S2273",
    "State": "West Bengal",
    "City": "Siliguri",
    "Contact No.": "9477374098"
  },
  {
    "Organization": "East-1",
    "Manager Name": "Debraj Saha",
    "Manager Level": "MD",
    "Dealer Name": "( NON ACTIVE ) Badrinath Motors-Ghoshpukur",
    "SCode": "1S2273",
    "State": "West Bengal",
    "City": "Siliguri",
    "Contact No.": "8617432182"
  },
  {
    "Organization": "East-1",
    "Manager Name": "Hemant Kumar",
    "Manager Level": "CSM",
    "Dealer Name": "( NON ACTIVE ) Badrinath Motors-Ghoshpukur",
    "SCode": "1S2273",
    "State": "West Bengal",
    "City": "Siliguri",
    "Contact No.": "7982996478"
  },
  {
    "Organization": "East-1",
    "Manager Name": "Sourav Sarkar",
    "Manager Level": "EOS Site Incharge",
    "Dealer Name": "( NON ACTIVE ) Badrinath Motors-Ghoshpukur",
    "SCode": "1S2273",
    "State": "West Bengal",
    "City": "Siliguri",
    "Contact No.": "7029433980"
  },
  {
    "Organization": "East-1",
    "Manager Name": "Rakesh Ghosh",
    "Manager Level": "ASM",
    "Dealer Name": "( NON ACTIVE ) Badrinath Motors-Malda",
    "SCode": "1S2139",
    "State": "West Bengal",
    "City": "Malda",
    "Contact No.": "9477374098"
  },
  {
    "Organization": "East-1",
    "Manager Name": "Akash Das",
    "Manager Level": "CSM",
    "Dealer Name": "( NON ACTIVE ) Badrinath Motors-Malda",
    "SCode": "1S2139",
    "State": "West Bengal",
    "City": "Malda",
    "Contact No.": "7439543497"
  },
  {
    "Organization": "East-1",
    "Manager Name": "Sanjay Singh",
    "Manager Level": "WM",
    "Dealer Name": "( NON ACTIVE ) Badrinath Motors-Malda",
    "SCode": "1S2139",
    "State": "West Bengal",
    "City": "Malda",
    "Contact No.": "8759844071"
  },
  {
    "Organization": "East-1",
    "Manager Name": "Nitai Sarkar",
    "Manager Level": "EOS Site Incharge",
    "Dealer Name": "( NON ACTIVE ) Badrinath Motors-Malda",
    "SCode": "1S2139",
    "State": "West Bengal",
    "City": "Malda",
    "Contact No.": "7319034039"
  },
  {
    "Organization": "East-1",
    "Manager Name": "Debraj Saha",
    "Manager Level": "MD",
    "Dealer Name": "( NON ACTIVE ) Badrinath Motors-Malda",
    "SCode": "1S2139",
    "State": "West Bengal",
    "City": "Malda",
    "Contact No.": "8617432182"
  },
  {
    "Organization": "East-1",
    "Manager Name": "Yogeshwar Singh",
    "Manager Level": "RSM",
    "Dealer Name": "( NON ACTIVE ) Badrinath Motors-Malda",
    "SCode": "1S2139",
    "State": "West Bengal",
    "City": "Malda",
    "Contact No.": "9717966997"
  },
  {
    "Organization": "East-1",
    "Manager Name": "Sayed Rahamattulla",
    "Manager Level": "MD",
    "Dealer Name": "( NON ACTIVE ) Deshpriya Motors-Kolaghat",
    "SCode": "1S2319",
    "State": "West Bengal",
    "City": "Kolkata",
    "Contact No.": "9434118468"
  },
  {
    "Organization": "East-1",
    "Manager Name": "Kallol Dutta",
    "Manager Level": "EOS Site Incharge",
    "Dealer Name": "( NON ACTIVE ) Deshpriya Motors-Kolaghat",
    "SCode": "1S2319",
    "State": "West Bengal",
    "City": "Kolkata",
    "Contact No.": "6290623337"
  },
  {
    "Organization": "East-1",
    "Manager Name": "Yogeshwar Singh",
    "Manager Level": "RSM",
    "Dealer Name": "( NON ACTIVE ) Deshpriya Motors-Kolaghat",
    "SCode": "1S2319",
    "State": "West Bengal",
    "City": "Kolkata",
    "Contact No.": "9717966997"
  },
  {
    "Organization": "East-1",
    "Manager Name": "Kuntal Deb",
    "Manager Level": "CSM",
    "Dealer Name": "( NON ACTIVE ) Deshpriya Motors-Kolaghat",
    "SCode": "1S2319",
    "State": "West Bengal",
    "City": "Kolkata",
    "Contact No.": "6291810496"
  },
  {
    "Organization": "East-1",
    "Manager Name": "Abhirup Ghosh",
    "Manager Level": "ASM",
    "Dealer Name": "( NON ACTIVE ) Deshpriya Motors-Kolaghat",
    "SCode": "1S2319",
    "State": "West Bengal",
    "City": "Kolkata",
    "Contact No.": "9073378080"
  },
  {
    "Organization": "East-1",
    "Manager Name": "Sayed Rajibul Islam",
    "Manager Level": "WM",
    "Dealer Name": "( NON ACTIVE ) Deshpriya Motors-Kolaghat",
    "SCode": "1S2319",
    "State": "West Bengal",
    "City": "Kolkata",
    "Contact No.": "8170039910"
  },
  {
    "Organization": "East-2",
    "Manager Name": "Chandan Tiwari / Kamal Soni",
    "Manager Level": "WM",
    "Dealer Name": "( NON ACTIVE ) GK Automotive-Dhamtari",
    "SCode": "1S2240",
    "State": "Chhattisgarh",
    "City": "Dhamtari",
    "Contact No.": "8770743190,6264488619"
  },
  {
    "Organization": "East-2",
    "Manager Name": "Niket Kumar",
    "Manager Level": "RSM",
    "Dealer Name": "( NON ACTIVE ) GK Automotive-Dhamtari",
    "SCode": "1S2240",
    "State": "Chhattisgarh",
    "City": "Dhamtari",
    "Contact No.": "8427733112"
  },
  {
    "Organization": "East-2",
    "Manager Name": "Chandrakanta Biswal",
    "Manager Level": "CSM",
    "Dealer Name": "( NON ACTIVE ) GK Automotive-Dhamtari",
    "SCode": "1S2240",
    "State": "Chhattisgarh",
    "City": "Dhamtari",
    "Contact No.": "9937492710"
  },
  {
    "Organization": "East-2",
    "Manager Name": "Nilesh Gajandekar",
    "Manager Level": "MD",
    "Dealer Name": "( NON ACTIVE ) GK Automotive-Dhamtari",
    "SCode": "1S2240",
    "State": "Chhattisgarh",
    "City": "Dhamtari",
    "Contact No.": "7722885566"
  },
  {
    "Organization": "East-2",
    "Manager Name": "Rachit Kumar",
    "Manager Level": "ASM",
    "Dealer Name": "( NON ACTIVE ) GK Automotive-Dhamtari",
    "SCode": "1S2240",
    "State": "Chhattisgarh",
    "City": "Dhamtari",
    "Contact No.": "9534341234"
  },
  {
    "Organization": "East-2",
    "Manager Name": "Yashwant Sahu",
    "Manager Level": "EOS Site Incharge",
    "Dealer Name": "( NON ACTIVE ) GK Automotive-Dhamtari",
    "SCode": "1S2240",
    "State": "Chhattisgarh",
    "City": "Dhamtari",
    "Contact No.": "7999348933"
  },
  {
    "Organization": "East-2",
    "Manager Name": "Sanjoy Nayek",
    "Manager Level": "ASM",
    "Dealer Name": "( NON ACTIVE ) GK Ventures - Bhawanipatna",
    "SCode": "1S2155",
    "State": "Odisha",
    "City": "Bhawanipatna",
    "Contact No.": "8001165218"
  },
  {
    "Organization": "East-2",
    "Manager Name": "Niket Kumar",
    "Manager Level": "RSM",
    "Dealer Name": "( NON ACTIVE ) GK Ventures - Bhawanipatna",
    "SCode": "1S2155",
    "State": "Odisha",
    "City": "Bhawanipatna",
    "Contact No.": "8427733112"
  },
  {
    "Organization": "East-2",
    "Manager Name": "Sailesh Moharana",
    "Manager Level": "CSM",
    "Dealer Name": "( NON ACTIVE ) GK Ventures - Bhawanipatna",
    "SCode": "1S2155",
    "State": "Odisha",
    "City": "Bhawanipatna",
    "Contact No.": "9337951215"
  },
  {
    "Organization": "East-2",
    "Manager Name": "Biswaranjan Rout",
    "Manager Level": "WM",
    "Dealer Name": "( NON ACTIVE ) GK Ventures - Bhawanipatna",
    "SCode": "1S2155",
    "State": "Odisha",
    "City": "Bhawanipatna",
    "Contact No.": "7978718083,7377322064"
  },
  {
    "Organization": "East-2",
    "Manager Name": "Mukund Podh",
    "Manager Level": "EOS Site Incharge",
    "Dealer Name": "( NON ACTIVE ) GK Ventures - Bhawanipatna",
    "SCode": "1S2155",
    "State": "Odisha",
    "City": "Bhawanipatna",
    "Contact No.": "7536936555"
  },
  {
    "Organization": "East-2",
    "Manager Name": "Gurucharan Sandhu",
    "Manager Level": "MD",
    "Dealer Name": "( NON ACTIVE ) GK Ventures - Bhawanipatna",
    "SCode": "1S2155",
    "State": "Odisha",
    "City": "Bhawanipatna",
    "Contact No.": "9938196602,9337709552"
  },
  {
    "Organization": "West-1",
    "Manager Name": "Kalpesh Bhadane / Nilesh Bhadane",
    "Manager Level": "EOS Site Incharge",
    "Dealer Name": "( NON ACTIVE ) Indisch Motors Pvt Ltd-Dhule",
    "SCode": "1S3365",
    "State": "Maharashtra",
    "City": "Dhule",
    "Contact No.": "8956568664,8767178544"
  },
  {
    "Organization": "West-1",
    "Manager Name": "Soumodeep Sinha / Shrishail Honnagol",
    "Manager Level": "CSM",
    "Dealer Name": "( NON ACTIVE ) Indisch Motors Pvt Ltd-Dhule",
    "SCode": "1S3365",
    "State": "Maharashtra",
    "City": "Dhule",
    "Contact No.": "9831385426,7700906442"
  },
  {
    "Organization": "West-1",
    "Manager Name": "Santosh Kumawat",
    "Manager Level": "WM",
    "Dealer Name": "( NON ACTIVE ) Indisch Motors Pvt Ltd-Dhule",
    "SCode": "1S3365",
    "State": "Maharashtra",
    "City": "Dhule",
    "Contact No.": "8329081590"
  },
  {
    "Organization": "West-1",
    "Manager Name": "Suhas Ramchandra Mane",
    "Manager Level": "RSM",
    "Dealer Name": "( NON ACTIVE ) Indisch Motors Pvt Ltd-Dhule",
    "SCode": "1S3365",
    "State": "Maharashtra",
    "City": "Dhule",
    "Contact No.": "8454812225"
  },
  {
    "Organization": "West-1",
    "Manager Name": "Tushar Vasant Jagtap",
    "Manager Level": "ASM",
    "Dealer Name": "( NON ACTIVE ) Indisch Motors Pvt Ltd-Dhule",
    "SCode": "1S3365",
    "State": "Maharashtra",
    "City": "Dhule",
    "Contact No.": "9960144000"
  },
  {
    "Organization": "West-1",
    "Manager Name": "OM Moharir",
    "Manager Level": "MD",
    "Dealer Name": "( NON ACTIVE ) Indisch Motors Pvt Ltd-Dhule",
    "SCode": "1S3365",
    "State": "Maharashtra",
    "City": "Dhule",
    "Contact No.": "8956568666"
  },
  {
    "Organization": "East-2",
    "Manager Name": "Shravan Kumar Akela",
    "Manager Level": "ASM",
    "Dealer Name": "( NON ACTIVE ) JDS Automobiles Pvt Ltd-Deoghar",
    "SCode": "1S2323",
    "State": "Jharkhand",
    "City": "Deoghar",
    "Contact No.": "9771422291"
  },
  {
    "Organization": "East-2",
    "Manager Name": "Niket Kumar",
    "Manager Level": "RSM",
    "Dealer Name": "( NON ACTIVE ) JDS Automobiles Pvt Ltd-Deoghar",
    "SCode": "1S2323",
    "State": "Jharkhand",
    "City": "Deoghar",
    "Contact No.": "8427733112"
  },
  {
    "Organization": "East-2",
    "Manager Name": "Bam Shankar Sahai",
    "Manager Level": "MD",
    "Dealer Name": "( NON ACTIVE ) JDS Automobiles Pvt Ltd-Deoghar",
    "SCode": "1S2323",
    "State": "Jharkhand",
    "City": "Deoghar",
    "Contact No.": "7678337568"
  },
  {
    "Organization": "East-2",
    "Manager Name": "Sumit Kumar Jha",
    "Manager Level": "CSM",
    "Dealer Name": "( NON ACTIVE ) JDS Automobiles Pvt Ltd-Deoghar",
    "SCode": "1S2323",
    "State": "Jharkhand",
    "City": "Deoghar",
    "Contact No.": "9798466831"
  },
  {
    "Organization": "East-2",
    "Manager Name": "Bishwanath Sahay Raman",
    "Manager Level": "WM",
    "Dealer Name": "( NON ACTIVE ) JDS Automobiles Pvt Ltd-Deoghar",
    "SCode": "1S2323",
    "State": "Jharkhand",
    "City": "Deoghar",
    "Contact No.": "8051727476"
  },
  {
    "Organization": "East-2",
    "Manager Name": "Indrajeet Thakur",
    "Manager Level": "EOS Site Incharge",
    "Dealer Name": "( NON ACTIVE ) JDS Automobiles Pvt Ltd-Deoghar",
    "SCode": "1S2323",
    "State": "Jharkhand",
    "City": "Deoghar",
    "Contact No.": "9708018010"
  },
  {
    "Organization": "North-2",
    "Manager Name": "Rajkumar Vaishnav",
    "Manager Level": "ASM",
    "Dealer Name": "( NON ACTIVE ) Jandu Motors-Kelwa",
    "SCode": "1S1191",
    "State": "Rajasthan",
    "City": "Rajsamand",
    "Contact No.": "9636756000"
  },
  {
    "Organization": "North-2",
    "Manager Name": "Krishnendu Saha",
    "Manager Level": "RSM",
    "Dealer Name": "( NON ACTIVE ) Jandu Motors-Kelwa",
    "SCode": "1S1191",
    "State": "Rajasthan",
    "City": "Rajsamand",
    "Contact No.": "7980433425"
  },
  {
    "Organization": "North-2",
    "Manager Name": "Mr. Naresh Regar",
    "Manager Level": "WM",
    "Dealer Name": "( NON ACTIVE ) Jandu Motors-Kelwa",
    "SCode": "1S1191",
    "State": "Rajasthan",
    "City": "Rajsamand",
    "Contact No.": "7300071842"
  },
  {
    "Organization": "North-2",
    "Manager Name": "Shivam Bhardwaj / Akeel Mansury",
    "Manager Level": "CSM",
    "Dealer Name": "( NON ACTIVE ) Jandu Motors-Kelwa",
    "SCode": "1S1191",
    "State": "Rajasthan",
    "City": "Rajsamand",
    "Contact No.": "7878175706,8518009611"
  },
  {
    "Organization": "North-2",
    "Manager Name": "Sher singh Jandu",
    "Manager Level": "MD",
    "Dealer Name": "( NON ACTIVE ) Jandu Motors-Kelwa",
    "SCode": "1S1191",
    "State": "Rajasthan",
    "City": "Rajsamand",
    "Contact No.": "9680064850"
  },
  {
    "Organization": "West-2",
    "Manager Name": "Das  / Pawandeep",
    "Manager Level": "MD",
    "Dealer Name": "( NON ACTIVE ) Jeewan Motors-Sagar",
    "SCode": "1S5024",
    "State": "Madhya Pradesh",
    "City": "Sagar",
    "Contact No.": "9926003577,9826047581"
  },
  {
    "Organization": "West-2",
    "Manager Name": "Mahesh / Sumeet",
    "Manager Level": "WM",
    "Dealer Name": "( NON ACTIVE ) Jeewan Motors-Sagar",
    "SCode": "1S5024",
    "State": "Madhya Pradesh",
    "City": "Sagar",
    "Contact No.": "9617990996,9926001450"
  },
  {
    "Organization": "West-2",
    "Manager Name": "Sudhir Kumar",
    "Manager Level": "RSM",
    "Dealer Name": "( NON ACTIVE ) Jeewan Motors-Sagar",
    "SCode": "1S5024",
    "State": "Madhya Pradesh",
    "City": "Sagar",
    "Contact No.": "9752542733"
  },
  {
    "Organization": "West-2",
    "Manager Name": "Saurabh Dwivedi",
    "Manager Level": "CSM",
    "Dealer Name": "( NON ACTIVE ) Jeewan Motors-Sagar",
    "SCode": "1S5024",
    "State": "Madhya Pradesh",
    "City": "Sagar",
    "Contact No.": "9407322767"
  },
  {
    "Organization": "North-2",
    "Manager Name": "Krishnendu Saha",
    "Manager Level": "RSM",
    "Dealer Name": "( NON ACTIVE ) Kiskindha Commercial Motors Ltd-Kanpur",
    "SCode": "1S7056",
    "State": "Uttar Pradesh",
    "City": "Kanpur dehat",
    "Contact No.": "7980433425"
  },
  {
    "Organization": "North-2",
    "Manager Name": "Vinay Agarwal",
    "Manager Level": "MD",
    "Dealer Name": "( NON ACTIVE ) Kiskindha Commercial Motors Ltd-Kanpur",
    "SCode": "1S7056",
    "State": "Uttar Pradesh",
    "City": "Kanpur dehat",
    "Contact No.": "9839103634"
  },
  {
    "Organization": "North-2",
    "Manager Name": "Nitin Gupta",
    "Manager Level": "ASM",
    "Dealer Name": "( NON ACTIVE ) Kiskindha Commercial Motors Ltd-Kanpur",
    "SCode": "1S7056",
    "State": "Uttar Pradesh",
    "City": "Kanpur dehat",
    "Contact No.": "7080811550"
  },
  {
    "Organization": "North-1",
    "Manager Name": "Harpreet",
    "Manager Level": "MD",
    "Dealer Name": "( NON ACTIVE ) MCTC Exim Pvt Ltd-Govindpuri",
    "SCode": "1S1267",
    "State": "Delhi",
    "City": "Delhi",
    "Contact No.": "7428767503"
  },
  {
    "Organization": "North-1",
    "Manager Name": "Prince",
    "Manager Level": "EOS Site Incharge",
    "Dealer Name": "( NON ACTIVE ) MCTC Exim Pvt Ltd-Govindpuri",
    "SCode": "1S1267",
    "State": "Delhi",
    "City": "Delhi",
    "Contact No.": "7428767505"
  },
  {
    "Organization": "North-1",
    "Manager Name": "Rajeev Pathak / Sugam Agrawal",
    "Manager Level": "WM",
    "Dealer Name": "( NON ACTIVE ) MCTC Exim Pvt Ltd-Govindpuri",
    "SCode": "1S1267",
    "State": "Delhi",
    "City": "Delhi",
    "Contact No.": "8383806223,7428497281"
  },
  {
    "Organization": "North-1",
    "Manager Name": "Adarsh Prasad",
    "Manager Level": "RSM",
    "Dealer Name": "( NON ACTIVE ) MCTC Exim Pvt Ltd-Govindpuri",
    "SCode": "1S1267",
    "State": "Delhi",
    "City": "Delhi",
    "Contact No.": "9717996321"
  },
  {
    "Organization": "North-1",
    "Manager Name": "Sunil Verma",
    "Manager Level": "ASM",
    "Dealer Name": "( NON ACTIVE ) MCTC Exim Pvt Ltd-Govindpuri",
    "SCode": "1S1267",
    "State": "Delhi",
    "City": "Delhi",
    "Contact No.": "7742688688"
  },
  {
    "Organization": "North-1",
    "Manager Name": "Vishal Puri",
    "Manager Level": "CSM",
    "Dealer Name": "( NON ACTIVE ) MCTC Exim Pvt Ltd-Govindpuri",
    "SCode": "1S1267",
    "State": "Delhi",
    "City": "Delhi",
    "Contact No.": "7827730269"
  },
  {
    "Organization": "North-2",
    "Manager Name": "Sudhanshu Sahu",
    "Manager Level": "EOS Site Incharge",
    "Dealer Name": "( NON ACTIVE ) Medatwal Motors-Kota",
    "SCode": "1S1089",
    "State": "Rajasthan",
    "City": "Kota",
    "Contact No.": "9461092299"
  },
  {
    "Organization": "North-2",
    "Manager Name": "Riya Mewara",
    "Manager Level": "WM",
    "Dealer Name": "( NON ACTIVE ) Medatwal Motors-Kota",
    "SCode": "1S1089",
    "State": "Rajasthan",
    "City": "Kota",
    "Contact No.": "9461288877"
  },
  {
    "Organization": "North-2",
    "Manager Name": "Shivam Bhardwaj / Abhishek Awasthi",
    "Manager Level": "CSM",
    "Dealer Name": "( NON ACTIVE ) Medatwal Motors-Kota",
    "SCode": "1S1089",
    "State": "Rajasthan",
    "City": "Kota",
    "Contact No.": "7878175706,9179662115"
  },
  {
    "Organization": "North-2",
    "Manager Name": "Krishnendu Saha",
    "Manager Level": "RSM",
    "Dealer Name": "( NON ACTIVE ) Medatwal Motors-Kota",
    "SCode": "1S1089",
    "State": "Rajasthan",
    "City": "Kota",
    "Contact No.": "7980433425"
  },
  {
    "Organization": "North-2",
    "Manager Name": "Rajkumar Vaishnav",
    "Manager Level": "ASM",
    "Dealer Name": "( NON ACTIVE ) Medatwal Motors-Kota",
    "SCode": "1S1089",
    "State": "Rajasthan",
    "City": "Kota",
    "Contact No.": "9636756000"
  },
  {
    "Organization": "North-2",
    "Manager Name": "Anil Gupta",
    "Manager Level": "MD",
    "Dealer Name": "( NON ACTIVE ) Medatwal Motors-Kota",
    "SCode": "1S1089",
    "State": "Rajasthan",
    "City": "Kota",
    "Contact No.": "9414749966"
  },
  {
    "Organization": "East-1",
    "Manager Name": "Yogeshwar Singh",
    "Manager Level": "RSM",
    "Dealer Name": "( NON ACTIVE ) Meetei Construction Pvt Ltd-Imphal",
    "SCode": "1S2188",
    "State": "Manipur",
    "City": "Imphal",
    "Contact No.": "9717966997"
  },
  {
    "Organization": "East-1",
    "Manager Name": "Sushobhon Mondal",
    "Manager Level": "ASM",
    "Dealer Name": "( NON ACTIVE ) Meetei Construction Pvt Ltd-Imphal",
    "SCode": "1S2188",
    "State": "Manipur",
    "City": "Imphal",
    "Contact No.": "7044071795"
  },
  {
    "Organization": "East-1",
    "Manager Name": "Moty Singh",
    "Manager Level": "WM",
    "Dealer Name": "( NON ACTIVE ) Meetei Construction Pvt Ltd-Imphal",
    "SCode": "1S2188",
    "State": "Manipur",
    "City": "Imphal",
    "Contact No.": "9402752282"
  },
  {
    "Organization": "East-1",
    "Manager Name": "Dhruba",
    "Manager Level": "MD",
    "Dealer Name": "( NON ACTIVE ) Meetei Construction Pvt Ltd-Imphal",
    "SCode": "1S2188",
    "State": "Manipur",
    "City": "Imphal",
    "Contact No.": "8415000330"
  },
  {
    "Organization": "East-1",
    "Manager Name": "Ranjan Sharma",
    "Manager Level": "CSM",
    "Dealer Name": "( NON ACTIVE ) Meetei Construction Pvt Ltd-Imphal",
    "SCode": "1S2188",
    "State": "Manipur",
    "City": "Imphal",
    "Contact No.": "7903904529"
  },
  {
    "Organization": "East-1",
    "Manager Name": "Anjanav Changmai",
    "Manager Level": "CSM",
    "Dealer Name": "( NON ACTIVE ) Mittal Eicher-Jorabat",
    "SCode": "1S2326",
    "State": "Assam",
    "City": "Jorhat",
    "Contact No.": "8822053356"
  },
  {
    "Organization": "East-1",
    "Manager Name": "Pranjal Protim Saikia",
    "Manager Level": "WM",
    "Dealer Name": "( NON ACTIVE ) Mittal Eicher-Jorabat",
    "SCode": "1S2326",
    "State": "Assam",
    "City": "Jorhat",
    "Contact No.": "9181035192,9287982039"
  },
  {
    "Organization": "East-1",
    "Manager Name": "Lokesh Mittal",
    "Manager Level": "MD",
    "Dealer Name": "( NON ACTIVE ) Mittal Eicher-Jorabat",
    "SCode": "1S2326",
    "State": "Assam",
    "City": "Jorhat",
    "Contact No.": "9365947300"
  },
  {
    "Organization": "East-1",
    "Manager Name": "Rakesh Ghosh",
    "Manager Level": "ASM",
    "Dealer Name": "( NON ACTIVE ) Mittal Eicher-Jorabat",
    "SCode": "1S2326",
    "State": "Assam",
    "City": "Jorhat",
    "Contact No.": "9477374098"
  },
  {
    "Organization": "East-1",
    "Manager Name": "Yogeshwar Singh",
    "Manager Level": "RSM",
    "Dealer Name": "( NON ACTIVE ) Mittal Eicher-Jorabat",
    "SCode": "1S2326",
    "State": "Assam",
    "City": "Jorhat",
    "Contact No.": "9717966997"
  },
  {
    "Organization": "North-2",
    "Manager Name": "Rajkumar Vaishnav",
    "Manager Level": "ASM",
    "Dealer Name": "( NON ACTIVE ) Om Motors - Chittorgarh",
    "SCode": "1S1220",
    "State": "Rajasthan",
    "City": "Chittorgarh",
    "Contact No.": "9636756000"
  },
  {
    "Organization": "East-1",
    "Manager Name": "Indrajit Kumar",
    "Manager Level": "MD",
    "Dealer Name": "( NON ACTIVE ) Sara Automobiles Pvt Ltd-Sasaram",
    "SCode": "1S2254",
    "State": "Bihar",
    "City": "Sasaram",
    "Contact No.": "7544017914"
  },
  {
    "Organization": "East-1",
    "Manager Name": "Prabhat Kumar (N)",
    "Manager Level": "WM",
    "Dealer Name": "( NON ACTIVE ) Sara Automobiles Pvt Ltd-Sasaram",
    "SCode": "1S2254",
    "State": "Bihar",
    "City": "Sasaram",
    "Contact No.": "9801406705"
  },
  {
    "Organization": "East-1",
    "Manager Name": "Anil (D) / Prabhat (N)",
    "Manager Level": "EOS Site Incharge",
    "Dealer Name": "( NON ACTIVE ) Sara Automobiles Pvt Ltd-Sasaram",
    "SCode": "1S2254",
    "State": "Bihar",
    "City": "Sasaram",
    "Contact No.": "7488027179,9801406705"
  },
  {
    "Organization": "East-1",
    "Manager Name": "Santosh Ray",
    "Manager Level": "CSM",
    "Dealer Name": "( NON ACTIVE ) Sara Automobiles Pvt Ltd-Sasaram",
    "SCode": "1S2254",
    "State": "Bihar",
    "City": "Sasaram",
    "Contact No.": "7667384075"
  },
  {
    "Organization": "East-1",
    "Manager Name": "Krishna Bhushan",
    "Manager Level": "ASM",
    "Dealer Name": "( NON ACTIVE ) Sara Automobiles Pvt Ltd-Sasaram",
    "SCode": "1S2254",
    "State": "Bihar",
    "City": "Sasaram",
    "Contact No.": "6202531709"
  },
  {
    "Organization": "East-1",
    "Manager Name": "Yogeshwar Singh",
    "Manager Level": "RSM",
    "Dealer Name": "( NON ACTIVE ) Sara Automobiles Pvt Ltd-Sasaram",
    "SCode": "1S2254",
    "State": "Bihar",
    "City": "Sasaram",
    "Contact No.": "9717966997"
  },
  {
    "Organization": "West-1",
    "Manager Name": "Milind Ashtaputre / Rajshekhar Ganachari",
    "Manager Level": "MD",
    "Dealer Name": "( NON ACTIVE ) Saral Motors-Omerga",
    "SCode": "1S3324",
    "State": "Maharashtra",
    "City": "Osmanabad",
    "Contact No.": "9657212099,9423068301"
  },
  {
    "Organization": "West-1",
    "Manager Name": "Sunil Dalimbe",
    "Manager Level": "WM",
    "Dealer Name": "( NON ACTIVE ) Saral Motors-Omerga",
    "SCode": "1S3324",
    "State": "Maharashtra",
    "City": "Osmanabad",
    "Contact No.": "7588001573"
  },
  {
    "Organization": "West-1",
    "Manager Name": "Suhas Ramchandra Mane",
    "Manager Level": "RSM",
    "Dealer Name": "( NON ACTIVE ) Saral Motors-Omerga",
    "SCode": "1S3324",
    "State": "Maharashtra",
    "City": "Osmanabad",
    "Contact No.": "8454812225"
  },
  {
    "Organization": "West-1",
    "Manager Name": "Datta Nikam",
    "Manager Level": "CSM",
    "Dealer Name": "( NON ACTIVE ) Saral Motors-Omerga",
    "SCode": "1S3324",
    "State": "Maharashtra",
    "City": "Osmanabad",
    "Contact No.": "7389946335"
  },
  {
    "Organization": "West-1",
    "Manager Name": "Incharge / Satish Akade",
    "Manager Level": "EOS Site Incharge",
    "Dealer Name": "( NON ACTIVE ) Saral Motors-Omerga",
    "SCode": "1S3324",
    "State": "Maharashtra",
    "City": "Osmanabad",
    "Contact No.": "9028864004,8275306969"
  },
  {
    "Organization": "West-1",
    "Manager Name": "Shrishail Honnagol",
    "Manager Level": "ASM",
    "Dealer Name": "( NON ACTIVE ) Saral Motors-Omerga",
    "SCode": "1S3324",
    "State": "Maharashtra",
    "City": "Osmanabad",
    "Contact No.": "7700906442"
  },
  {
    "Organization": "West-1",
    "Manager Name": "Rutik Thokale / Chandanshiv",
    "Manager Level": "WM",
    "Dealer Name": "( NON ACTIVE ) Shree Krupa Automobile-Sangola",
    "SCode": "1S3384",
    "State": "Maharashtra",
    "City": "Sangole",
    "Contact No.": "8956549774,8956549773"
  },
  {
    "Organization": "West-1",
    "Manager Name": "Tushar vasant Jagtap",
    "Manager Level": "ASM",
    "Dealer Name": "( NON ACTIVE ) Shree Krupa Automobile-Sangola",
    "SCode": "1S3384",
    "State": "Maharashtra",
    "City": "Sangole",
    "Contact No.": "9960144000"
  },
  {
    "Organization": "West-1",
    "Manager Name": "Datta Nikam",
    "Manager Level": "CSM",
    "Dealer Name": "( NON ACTIVE ) Shree Krupa Automobile-Sangola",
    "SCode": "1S3384",
    "State": "Maharashtra",
    "City": "Sangole",
    "Contact No.": "7389946335"
  },
  {
    "Organization": "West-1",
    "Manager Name": "Suhas Ramchandra Mane",
    "Manager Level": "RSM",
    "Dealer Name": "( NON ACTIVE ) Shree Krupa Automobile-Sangola",
    "SCode": "1S3384",
    "State": "Maharashtra",
    "City": "Sangole",
    "Contact No.": "8454812225"
  },
  {
    "Organization": "West-1",
    "Manager Name": "Manoj Patil / Anil Shelar",
    "Manager Level": "MD",
    "Dealer Name": "( NON ACTIVE ) Shree Krupa Automobile-Sangola",
    "SCode": "1S3384",
    "State": "Maharashtra",
    "City": "Sangole",
    "Contact No.": "9763936000,9527776000"
  },
  {
    "Organization": "North-1",
    "Manager Name": "Amitesh Kumar Sharma",
    "Manager Level": "CSM",
    "Dealer Name": "( NON ACTIVE ) Shree Nath Auto Works-Jhumpa",
    "SCode": "1S1223",
    "State": "Haryana",
    "City": "Hisar",
    "Contact No.": "9691357849"
  },
  {
    "Organization": "North-1",
    "Manager Name": "Adarsh Prasad",
    "Manager Level": "RSM",
    "Dealer Name": "( NON ACTIVE ) Shree Nath Auto Works-Jhumpa",
    "SCode": "1S1223",
    "State": "Haryana",
    "City": "Hisar",
    "Contact No.": "9717996321"
  },
  {
    "Organization": "North-1",
    "Manager Name": "Ankur Goyal",
    "Manager Level": "MD",
    "Dealer Name": "( NON ACTIVE ) Shree Nath Auto Works-Jhumpa",
    "SCode": "1S1223",
    "State": "Haryana",
    "City": "Hisar",
    "Contact No.": "8607442555"
  },
  {
    "Organization": "North-1",
    "Manager Name": "Sunny Verma",
    "Manager Level": "ASM",
    "Dealer Name": "( NON ACTIVE ) Shree Nath Auto Works-Jhumpa",
    "SCode": "1S1223",
    "State": "Haryana",
    "City": "Hisar",
    "Contact No.": "7276047837"
  },
  {
    "Organization": "North-1",
    "Manager Name": "Ankur Goyal",
    "Manager Level": "WM",
    "Dealer Name": "( NON ACTIVE ) Shree Nath Auto Works-Jhumpa",
    "SCode": "1S1223",
    "State": "Haryana",
    "City": "Hisar",
    "Contact No.": "8607442555"
  },
  {
    "Organization": "North-2",
    "Manager Name": "Jitendra Mishra (D) / Saket Singh (N)",
    "Manager Level": "CSM",
    "Dealer Name": "( NON ACTIVE ) Shree Vehicle Pvt Ltd-Fatehpur",
    "SCode": "1S7024",
    "State": "Uttar Pradesh",
    "City": "Fatehpur",
    "Contact No.": "9005547771,8709859215"
  },
  {
    "Organization": "North-2",
    "Manager Name": "Krishnendu Saha",
    "Manager Level": "RSM",
    "Dealer Name": "( NON ACTIVE ) Shree Vehicle Pvt Ltd-Fatehpur",
    "SCode": "1S7024",
    "State": "Uttar Pradesh",
    "City": "Fatehpur",
    "Contact No.": "7980433425"
  },
  {
    "Organization": "North-2",
    "Manager Name": "SUNNY",
    "Manager Level": "EOS Site Incharge",
    "Dealer Name": "( NON ACTIVE ) Shree Vehicle Pvt Ltd-Fatehpur",
    "SCode": "1S7024",
    "State": "Uttar Pradesh",
    "City": "Fatehpur",
    "Contact No.": "6306223842"
  },
  {
    "Organization": "North-2",
    "Manager Name": "Pulkit Jalan",
    "Manager Level": "MD",
    "Dealer Name": "( NON ACTIVE ) Shree Vehicle Pvt Ltd-Fatehpur",
    "SCode": "1S7024",
    "State": "Uttar Pradesh",
    "City": "Fatehpur",
    "Contact No.": "8052415152"
  },
  {
    "Organization": "North-2",
    "Manager Name": "KAMAL  AWASTHI",
    "Manager Level": "WM",
    "Dealer Name": "( NON ACTIVE ) Shree Vehicle Pvt Ltd-Fatehpur",
    "SCode": "1S7024",
    "State": "Uttar Pradesh",
    "City": "Fatehpur",
    "Contact No.": "9653096618"
  },
  {
    "Organization": "North-2",
    "Manager Name": "Nitin Gupta",
    "Manager Level": "ASM",
    "Dealer Name": "( NON ACTIVE ) Shree Vehicle Pvt Ltd-Fatehpur",
    "SCode": "1S7024",
    "State": "Uttar Pradesh",
    "City": "Fatehpur",
    "Contact No.": "7080811550"
  },
  {
    "Organization": "West-2",
    "Manager Name": "Alpesh Gohil",
    "Manager Level": "EOS Site Incharge",
    "Dealer Name": "( NON ACTIVE ) Shreeji Autoworld-Vadodara",
    "SCode": "1S3424",
    "State": "Gujarat",
    "City": "Vadodara",
    "Contact No.": "6358898918"
  },
  {
    "Organization": "West-2",
    "Manager Name": "Divyesh Shah",
    "Manager Level": "ASM",
    "Dealer Name": "( NON ACTIVE ) Shreeji Autoworld-Vadodara",
    "SCode": "1S3424",
    "State": "Gujarat",
    "City": "Vadodara",
    "Contact No.": "7600287682"
  },
  {
    "Organization": "West-2",
    "Manager Name": "Sudhir Kumar",
    "Manager Level": "RSM",
    "Dealer Name": "( NON ACTIVE ) Shreeji Autoworld-Vadodara",
    "SCode": "1S3424",
    "State": "Gujarat",
    "City": "Vadodara",
    "Contact No.": "9752542733"
  },
  {
    "Organization": "West-2",
    "Manager Name": "Ajay Gamit",
    "Manager Level": "CSM",
    "Dealer Name": "( NON ACTIVE ) Shreeji Autoworld-Vadodara",
    "SCode": "1S3424",
    "State": "Gujarat",
    "City": "Vadodara",
    "Contact No.": "9265850546"
  },
  {
    "Organization": "West-2",
    "Manager Name": "Daxesh Patel / Tushar Shrimali",
    "Manager Level": "WM",
    "Dealer Name": "( NON ACTIVE ) Shreeji Autoworld-Vadodara",
    "SCode": "1S3424",
    "State": "Gujarat",
    "City": "Vadodara",
    "Contact No.": "6358898907,6358898906"
  },
  {
    "Organization": "West-2",
    "Manager Name": "Niraj Patel / Ketan Mer",
    "Manager Level": "MD",
    "Dealer Name": "( NON ACTIVE ) Shreeji Autoworld-Vadodara",
    "SCode": "1S3424",
    "State": "Gujarat",
    "City": "Vadodara",
    "Contact No.": "6358898909,9601296786"
  },
  {
    "Organization": "South-2",
    "Manager Name": "N Narayanan",
    "Manager Level": "RSM",
    "Dealer Name": "( NON ACTIVE ) Sri Laxmi Motor Service Pvt Ltd-Yeshwanthpur",
    "SCode": "1S6027",
    "State": "Karnataka",
    "City": "Yeshwantpur",
    "Contact No.": "8123036700"
  },
  {
    "Organization": "South-2",
    "Manager Name": "Nagaraj",
    "Manager Level": "MD",
    "Dealer Name": "( NON ACTIVE ) Sri Laxmi Motor Service Pvt Ltd-Yeshwanthpur",
    "SCode": "1S6027",
    "State": "Karnataka",
    "City": "Yeshwantpur",
    "Contact No.": "9900035836"
  },
  {
    "Organization": "South-2",
    "Manager Name": "Amar",
    "Manager Level": "WM",
    "Dealer Name": "( NON ACTIVE ) Sri Laxmi Motor Service Pvt Ltd-Yeshwanthpur",
    "SCode": "1S6027",
    "State": "Karnataka",
    "City": "Yeshwantpur",
    "Contact No.": "9071432190"
  },
  {
    "Organization": "South-2",
    "Manager Name": "C Ganesha (D) / Jeevan Kumar (N)",
    "Manager Level": "CSM",
    "Dealer Name": "( NON ACTIVE ) Sri Laxmi Motor Service Pvt Ltd-Yeshwanthpur",
    "SCode": "1S6027",
    "State": "Karnataka",
    "City": "Yeshwantpur",
    "Contact No.": "8217810473,7892822611"
  },
  {
    "Organization": "South-2",
    "Manager Name": "S Balaji",
    "Manager Level": "ASM",
    "Dealer Name": "( NON ACTIVE ) Sri Laxmi Motor Service Pvt Ltd-Yeshwanthpur",
    "SCode": "1S6027",
    "State": "Karnataka",
    "City": "Yeshwantpur",
    "Contact No.": "9840833723"
  },
  {
    "Organization": "South-2",
    "Manager Name": "Shiva / Murugan",
    "Manager Level": "EOS Site Incharge",
    "Dealer Name": "( NON ACTIVE ) Sri Laxmi Motor Service Pvt Ltd-Yeshwanthpur",
    "SCode": "1S6027",
    "State": "Karnataka",
    "City": "Yeshwantpur",
    "Contact No.": "9740558459,9071432182"
  },
  {
    "Organization": "West-2",
    "Manager Name": "Keyur",
    "Manager Level": "EOS Site Incharge",
    "Dealer Name": "( NON ACTIVE ) Stellar Commercial Vehicle Pvt Ltd-Becharaji",
    "SCode": "1S3391",
    "State": "Gujarat",
    "City": "Mehshana",
    "Contact No.": "9316231134"
  },
  {
    "Organization": "West-2",
    "Manager Name": "Manish Bhatt / Devam Tripathi",
    "Manager Level": "MD",
    "Dealer Name": "( NON ACTIVE ) Stellar Commercial Vehicle Pvt Ltd-Becharaji",
    "SCode": "1S3391",
    "State": "Gujarat",
    "City": "Mehshana",
    "Contact No.": "9316231385,9998366666"
  },
  {
    "Organization": "West-2",
    "Manager Name": "Sanjeev Rawat",
    "Manager Level": "CSM",
    "Dealer Name": "( NON ACTIVE ) Stellar Commercial Vehicle Pvt Ltd-Becharaji",
    "SCode": "1S3391",
    "State": "Gujarat",
    "City": "Mehshana",
    "Contact No.": "7906022920"
  },
  {
    "Organization": "West-2",
    "Manager Name": "Vikram",
    "Manager Level": "WM",
    "Dealer Name": "( NON ACTIVE ) Stellar Commercial Vehicle Pvt Ltd-Becharaji",
    "SCode": "1S3391",
    "State": "Gujarat",
    "City": "Mehshana",
    "Contact No.": "9327069651"
  },
  {
    "Organization": "West-2",
    "Manager Name": "Sudhir Kumar",
    "Manager Level": "RSM",
    "Dealer Name": "( NON ACTIVE ) Stellar Commercial Vehicle Pvt Ltd-Becharaji",
    "SCode": "1S3391",
    "State": "Gujarat",
    "City": "Mehshana",
    "Contact No.": "9752542733"
  },
  {
    "Organization": "West-2",
    "Manager Name": "Vipul Barot",
    "Manager Level": "ASM",
    "Dealer Name": "( NON ACTIVE ) Stellar Commercial Vehicle Pvt Ltd-Becharaji",
    "SCode": "1S3391",
    "State": "Gujarat",
    "City": "Mehshana",
    "Contact No.": "9638341568"
  },
  {
    "Organization": "North-2",
    "Manager Name": "Arman / Mohit",
    "Manager Level": "HD Bus SPOC",
    "Dealer Name": "( NON ACTIVE ) TESTEOS",
    "SCode": "1S9999",
    "State": "Uttar Pradesh",
    "City": "Ghaziabad",
    "Contact No.": "9818945971"
  },
  {
    "Organization": "West-2",
    "Manager Name": "Arman / Mohit",
    "Manager Level": "MD",
    "Dealer Name": "( NON ACTIVE ) TESTEOS",
    "SCode": "1S9999",
    "State": "Madhya Pradesh",
    "City": "Indore",
    "Contact No.": "9818945971"
  },
  {
    "Organization": "West-2",
    "Manager Name": "Arman",
    "Manager Level": "RSM",
    "Dealer Name": "( NON ACTIVE ) TESTEOS",
    "SCode": "1S9999",
    "State": "Madhya Pradesh",
    "City": "Indore",
    "Contact No.": "9818945971"
  },
  {
    "Organization": "West-2",
    "Manager Name": "Priya",
    "Manager Level": "WM",
    "Dealer Name": "( NON ACTIVE ) TESTEOS",
    "SCode": "1S9999",
    "State": "Madhya Pradesh",
    "City": "Indore",
    "Contact No.": "9993778106"
  },
  {
    "Organization": "North-2",
    "Manager Name": "Arman / Mohit",
    "Manager Level": "HD Bus SPOC 2",
    "Dealer Name": "( NON ACTIVE ) TESTEOS",
    "SCode": "1S9999",
    "State": "Uttar Pradesh",
    "City": "Ghaziabad",
    "Contact No.": "9818945971"
  },
  {
    "Organization": "West-2",
    "Manager Name": "Abhishek",
    "Manager Level": "CSM",
    "Dealer Name": "( NON ACTIVE ) TESTEOS",
    "SCode": "1S9999",
    "State": "Madhya Pradesh",
    "City": "Indore",
    "Contact No.": "9718880641"
  },
  {
    "Organization": "West-2",
    "Manager Name": "Arman",
    "Manager Level": "EOS Site Incharge",
    "Dealer Name": "( NON ACTIVE ) TESTEOS",
    "SCode": "1S9999",
    "State": "Madhya Pradesh",
    "City": "Indore",
    "Contact No.": "9818945971"
  },
  {
    "Organization": "West-2",
    "Manager Name": "Mohit",
    "Manager Level": "ASM",
    "Dealer Name": "( NON ACTIVE ) TESTEOS",
    "SCode": "1S9999",
    "State": "Madhya Pradesh",
    "City": "Indore",
    "Contact No.": "9558820990"
  },
  {
    "Organization": "West-2",
    "Manager Name": "Arman",
    "Manager Level": "WM",
    "Dealer Name": "( NON ACTIVE ) TESTEOS 2",
    "SCode": "1S9990",
    "State": "Madhya Pradesh",
    "City": "Indore",
    "Contact No.": "9818945971"
  },
  {
    "Organization": "South-2",
    "Manager Name": "Sikander Sandimani / Jaffar Sharif",
    "Manager Level": "EOS Site Incharge",
    "Dealer Name": "(NON- ACTIVE) Indian Garage-Belgaum",
    "SCode": "1S6153",
    "State": "Karnataka",
    "City": "Belgaum",
    "Contact No.": "6364912885,9606973057"
  },
  {
    "Organization": "South-2",
    "Manager Name": "Prajwal Hiremath (D) / Mahamadali T Maniyar (N)",
    "Manager Level": "CSM",
    "Dealer Name": "(NON- ACTIVE) Indian Garage-Belgaum",
    "SCode": "1S6153",
    "State": "Karnataka",
    "City": "Belgaum",
    "Contact No.": "8296308637,9972619686"
  },
  {
    "Organization": "South-2",
    "Manager Name": "N Narayanan",
    "Manager Level": "RSM",
    "Dealer Name": "(NON- ACTIVE) Indian Garage-Belgaum",
    "SCode": "1S6153",
    "State": "Karnataka",
    "City": "Belgaum",
    "Contact No.": "8123036700"
  },
  {
    "Organization": "South-2",
    "Manager Name": "Rahul Shinde",
    "Manager Level": "WM",
    "Dealer Name": "(NON- ACTIVE) Indian Garage-Belgaum",
    "SCode": "1S6153",
    "State": "Karnataka",
    "City": "Belgaum",
    "Contact No.": "7338108178,8073488949"
  },
  {
    "Organization": "South-2",
    "Manager Name": "PRABHU S MUGALKHOD",
    "Manager Level": "ASM",
    "Dealer Name": "(NON- ACTIVE) Indian Garage-Belgaum",
    "SCode": "1S6153",
    "State": "Karnataka",
    "City": "Belgaum",
    "Contact No.": "9980512550"
  },
  {
    "Organization": "South-2",
    "Manager Name": "Jaffar",
    "Manager Level": "MD",
    "Dealer Name": "(NON- ACTIVE) Indian Garage-Belgaum",
    "SCode": "1S6153",
    "State": "Karnataka",
    "City": "Belgaum",
    "Contact No.": "8073488949"
  },
  {
    "Organization": "East-2",
    "Manager Name": "Shravan kumar Akela",
    "Manager Level": "ASM",
    "Dealer Name": "(NON-ACTIVE) DRS Millennium Pvt Ltd-Deoghar",
    "SCode": "1S2233",
    "State": "Jharkhand",
    "City": "Deoghar",
    "Contact No.": "9771422291"
  },
  {
    "Organization": "East-2",
    "Manager Name": "Mridul Banerjee",
    "Manager Level": "MD",
    "Dealer Name": "(NON-ACTIVE) DRS Millennium Pvt Ltd-Deoghar",
    "SCode": "1S2233",
    "State": "Jharkhand",
    "City": "Deoghar",
    "Contact No.": "9304836783"
  },
  {
    "Organization": "East-2",
    "Manager Name": "Niket Kumar",
    "Manager Level": "RSM",
    "Dealer Name": "(NON-ACTIVE) DRS Millennium Pvt Ltd-Deoghar",
    "SCode": "1S2233",
    "State": "Jharkhand",
    "City": "Deoghar",
    "Contact No.": "8427733112"
  },
  {
    "Organization": "East-2",
    "Manager Name": "Vicky Ravidas",
    "Manager Level": "CSM",
    "Dealer Name": "(NON-ACTIVE) DRS Millennium Pvt Ltd-Deoghar",
    "SCode": "1S2233",
    "State": "Jharkhand",
    "City": "Deoghar",
    "Contact No.": "9939377899"
  },
  {
    "Organization": "East-2",
    "Manager Name": "Aloknath Grahacharjee",
    "Manager Level": "WM",
    "Dealer Name": "(NON-ACTIVE) DRS Millennium Pvt Ltd-Deoghar",
    "SCode": "1S2233",
    "State": "Jharkhand",
    "City": "Deoghar",
    "Contact No.": "7707002148"
  },
  {
    "Organization": "South-2",
    "Manager Name": "N Narayanan",
    "Manager Level": "RSM",
    "Dealer Name": "(NON-ACTIVE) Ramcor-Visakhapatnam",
    "SCode": "1S6102",
    "State": "Andhra Pradesh",
    "City": "Visakhapatnam",
    "Contact No.": "8123036700"
  },
  {
    "Organization": "South-2",
    "Manager Name": "Naveen B (D) / Prem Kumar (N)",
    "Manager Level": "CSM",
    "Dealer Name": "(NON-ACTIVE) Ramcor-Visakhapatnam",
    "SCode": "1S6102",
    "State": "Andhra Pradesh",
    "City": "Visakhapatnam",
    "Contact No.": "7893227879,9154141679"
  },
  {
    "Organization": "South-2",
    "Manager Name": "SA Srinivas / Prakash Rao",
    "Manager Level": "MD",
    "Dealer Name": "(NON-ACTIVE) Ramcor-Visakhapatnam",
    "SCode": "1S6102",
    "State": "Andhra Pradesh",
    "City": "Visakhapatnam",
    "Contact No.": "9866189992,9849086242"
  },
  {
    "Organization": "South-2",
    "Manager Name": "I.V Rama Raju",
    "Manager Level": "EOS Site Incharge",
    "Dealer Name": "(NON-ACTIVE) Ramcor-Visakhapatnam",
    "SCode": "1S6102",
    "State": "Andhra Pradesh",
    "City": "Visakhapatnam",
    "Contact No.": "9985944444"
  },
  {
    "Organization": "South-2",
    "Manager Name": "Shaik Maqsood",
    "Manager Level": "ASM",
    "Dealer Name": "(NON-ACTIVE) Ramcor-Visakhapatnam",
    "SCode": "1S6102",
    "State": "Andhra Pradesh",
    "City": "Visakhapatnam",
    "Contact No.": "9989311516"
  },
  {
    "Organization": "South-2",
    "Manager Name": "Sridhar",
    "Manager Level": "WM",
    "Dealer Name": "(NON-ACTIVE) Ramcor-Visakhapatnam",
    "SCode": "1S6102",
    "State": "Andhra Pradesh",
    "City": "Visakhapatnam",
    "Contact No.": "9989146767"
  },
  {
    "Organization": "South-2",
    "Manager Name": "Shaik Maqsood",
    "Manager Level": "ASM",
    "Dealer Name": "(NON_ACTIVE) Ramcor-Srikakulam",
    "SCode": "1S6111",
    "State": "Andhra Pradesh",
    "City": "Srikakulam",
    "Contact No.": "9989311516"
  },
  {
    "Organization": "South-2",
    "Manager Name": "K Shekhar",
    "Manager Level": "EOS Site Incharge",
    "Dealer Name": "(NON_ACTIVE) Ramcor-Srikakulam",
    "SCode": "1S6111",
    "State": "Andhra Pradesh",
    "City": "Srikakulam",
    "Contact No.": "9908548333"
  },
  {
    "Organization": "South-2",
    "Manager Name": "Naveen B (D) / Prem Kumar (N)",
    "Manager Level": "CSM",
    "Dealer Name": "(NON_ACTIVE) Ramcor-Srikakulam",
    "SCode": "1S6111",
    "State": "Andhra Pradesh",
    "City": "Srikakulam",
    "Contact No.": "7893227879,9154141679"
  },
  {
    "Organization": "South-2",
    "Manager Name": "N Narayanan",
    "Manager Level": "RSM",
    "Dealer Name": "(NON_ACTIVE) Ramcor-Srikakulam",
    "SCode": "1S6111",
    "State": "Andhra Pradesh",
    "City": "Srikakulam",
    "Contact No.": "8123036700"
  },
  {
    "Organization": "South-2",
    "Manager Name": "SA Srinivas / Prakash Rao",
    "Manager Level": "MD",
    "Dealer Name": "(NON_ACTIVE) Ramcor-Srikakulam",
    "SCode": "1S6111",
    "State": "Andhra Pradesh",
    "City": "Srikakulam",
    "Contact No.": "9866189992,9849086242"
  },
  {
    "Organization": "South-2",
    "Manager Name": "G. Subbarao",
    "Manager Level": "WM",
    "Dealer Name": "(NON_ACTIVE) Ramcor-Srikakulam",
    "SCode": "1S6111",
    "State": "Andhra Pradesh",
    "City": "Srikakulam",
    "Contact No.": "9246964154"
  },
  {
    "Organization": "North-2",
    "Manager Name": "Krishnendu Saha",
    "Manager Level": "RSM",
    "Dealer Name": "ARC Automobiles-Allahabad",
    "SCode": "1S1120",
    "State": "Uttar Pradesh",
    "City": "Allahabad",
    "Contact No.": "7980433425"
  },
  {
    "Organization": "North-2",
    "Manager Name": "Rajeev Tiwari",
    "Manager Level": "WM",
    "Dealer Name": "ARC Automobiles-Allahabad",
    "SCode": "1S1120",
    "State": "Uttar Pradesh",
    "City": "Allahabad",
    "Contact No.": "9956299482"
  },
  {
    "Organization": "North-2",
    "Manager Name": "Shashank Saran (D) / Saket Singh (N)",
    "Manager Level": "CSM",
    "Dealer Name": "ARC Automobiles-Allahabad",
    "SCode": "1S1120",
    "State": "Uttar Pradesh",
    "City": "Allahabad",
    "Contact No.": "9554900557,8709859215"
  },
  {
    "Organization": "North-2",
    "Manager Name": "Ankur Shukla",
    "Manager Level": "EOS Site Incharge",
    "Dealer Name": "ARC Automobiles-Allahabad",
    "SCode": "1S1120",
    "State": "Uttar Pradesh",
    "City": "Allahabad",
    "Contact No.": "9369009939"
  },
  {
    "Organization": "North-2",
    "Manager Name": "Nitin Gupta",
    "Manager Level": "ASM",
    "Dealer Name": "ARC Automobiles-Allahabad",
    "SCode": "1S1120",
    "State": "Uttar Pradesh",
    "City": "Allahabad",
    "Contact No.": "7080811550"
  },
  {
    "Organization": "North-2",
    "Manager Name": "Mr. Rafiq Ahmed",
    "Manager Level": "MD",
    "Dealer Name": "ARC Automobiles-Allahabad",
    "SCode": "1S1120",
    "State": "Uttar Pradesh",
    "City": "Allahabad",
    "Contact No.": "9415662706"
  },
  {
    "Organization": "North-2",
    "Manager Name": "Manish",
    "Manager Level": "MD",
    "Dealer Name": "AS Motors-Kota",
    "SCode": "1S1194",
    "State": "Rajasthan",
    "City": "Kota",
    "Contact No.": "7230819222"
  },
  {
    "Organization": "North-2",
    "Manager Name": "Rajkumar Vaishnav",
    "Manager Level": "ASM",
    "Dealer Name": "AS Motors-Kota",
    "SCode": "1S1194",
    "State": "Rajasthan",
    "City": "Kota",
    "Contact No.": "9636756000"
  },
  {
    "Organization": "North-2",
    "Manager Name": "Yogesh Nagar",
    "Manager Level": "WM",
    "Dealer Name": "AS Motors-Kota",
    "SCode": "1S1194",
    "State": "Rajasthan",
    "City": "Kota",
    "Contact No.": "7073008222"
  },
  {
    "Organization": "North-2",
    "Manager Name": "Krishnendu Saha",
    "Manager Level": "RSM",
    "Dealer Name": "AS Motors-Kota",
    "SCode": "1S1194",
    "State": "Rajasthan",
    "City": "Kota",
    "Contact No.": "7980433425"
  },
  {
    "Organization": "North-2",
    "Manager Name": "Rajesh Kumar",
    "Manager Level": "EOS Site Incharge",
    "Dealer Name": "AS Motors-Kota",
    "SCode": "1S1194",
    "State": "Rajasthan",
    "City": "Kota",
    "Contact No.": "9829307222"
  },
  {
    "Organization": "North-2",
    "Manager Name": "Shivam Bhardwaj / Abhishek Awasthi",
    "Manager Level": "CSM",
    "Dealer Name": "AS Motors-Kota",
    "SCode": "1S1194",
    "State": "Rajasthan",
    "City": "Kota",
    "Contact No.": "7878175706,9179662115"
  },
  {
    "Organization": "West-1",
    "Manager Name": "Sanket Chordiya",
    "Manager Level": "CSM",
    "Dealer Name": "ATC Mobility Pvt Ltd (ProX)-Aurangabad",
    "SCode": "1S3460",
    "State": "Maharashtra",
    "City": "Aurangabad",
    "Contact No.": "9167257836"
  },
  {
    "Organization": "West-1",
    "Manager Name": "Imran Gauri",
    "Manager Level": "MD",
    "Dealer Name": "ATC Mobility Pvt Ltd (ProX)-Aurangabad",
    "SCode": "1S3460",
    "State": "Maharashtra",
    "City": "Aurangabad",
    "Contact No.": "7774002593"
  },
  {
    "Organization": "West-1",
    "Manager Name": "Ausaf Khan",
    "Manager Level": "EOS Site Incharge",
    "Dealer Name": "ATC Mobility Pvt Ltd (ProX)-Aurangabad",
    "SCode": "1S3460",
    "State": "Maharashtra",
    "City": "Aurangabad",
    "Contact No.": "8956677325"
  },
  {
    "Organization": "West-1",
    "Manager Name": "Irfan Pathan",
    "Manager Level": "WM",
    "Dealer Name": "ATC Mobility Pvt Ltd (ProX)-Aurangabad",
    "SCode": "1S3460",
    "State": "Maharashtra",
    "City": "Aurangabad",
    "Contact No.": "7768069654"
  },
  {
    "Organization": "West-1",
    "Manager Name": "Sujan Saha",
    "Manager Level": "RSM",
    "Dealer Name": "ATC Mobility Pvt Ltd (ProX)-Aurangabad",
    "SCode": "1S3460",
    "State": "Maharashtra",
    "City": "Aurangabad",
    "Contact No.": "9903978950"
  },
  {
    "Organization": "West-1",
    "Manager Name": "Pratik Ramesh Kolhe / Sagar Nichite",
    "Manager Level": "CSM",
    "Dealer Name": "ATC Motors-Aurangabad",
    "SCode": "1S3317",
    "State": "Maharashtra",
    "City": "Aurangabad",
    "Contact No.": "9156518915,8149683808"
  },
  {
    "Organization": "West-1",
    "Manager Name": "Ashfaq Shaikh",
    "Manager Level": "EOS Site Incharge",
    "Dealer Name": "ATC Motors-Aurangabad",
    "SCode": "1S3317",
    "State": "Maharashtra",
    "City": "Aurangabad",
    "Contact No.": "7777977819"
  },
  {
    "Organization": "West-1",
    "Manager Name": "Suhas Ramchandra Mane",
    "Manager Level": "RSM",
    "Dealer Name": "ATC Motors-Aurangabad",
    "SCode": "1S3317",
    "State": "Maharashtra",
    "City": "Aurangabad",
    "Contact No.": "8454812225"
  },
  {
    "Organization": "West-1",
    "Manager Name": "Mohammed Mujeeb / Shaikh Moiz",
    "Manager Level": "WM",
    "Dealer Name": "ATC Motors-Aurangabad",
    "SCode": "1S3317",
    "State": "Maharashtra",
    "City": "Aurangabad",
    "Contact No.": "7774041891,8956806004"
  },
  {
    "Organization": "West-1",
    "Manager Name": "Shrishail Honnagol",
    "Manager Level": "ASM",
    "Dealer Name": "ATC Motors-Aurangabad",
    "SCode": "1S3317",
    "State": "Maharashtra",
    "City": "Aurangabad",
    "Contact No.": "7700906442"
  },
  {
    "Organization": "West-1",
    "Manager Name": "Azhar Khan",
    "Manager Level": "MD",
    "Dealer Name": "ATC Motors-Aurangabad",
    "SCode": "1S3317",
    "State": "Maharashtra",
    "City": "Aurangabad",
    "Contact No.": "7798788336"
  },
  {
    "Organization": "West-1",
    "Manager Name": "Sachin Nemane",
    "Manager Level": "WM",
    "Dealer Name": "ATC Motors-Jalna",
    "SCode": "1S3387",
    "State": "Maharashtra",
    "City": "Jalna",
    "Contact No.": "7030011284"
  },
  {
    "Organization": "West-1",
    "Manager Name": "Shrishail Honnagol",
    "Manager Level": "ASM",
    "Dealer Name": "ATC Motors-Jalna",
    "SCode": "1S3387",
    "State": "Maharashtra",
    "City": "Jalna",
    "Contact No.": "7700906442"
  },
  {
    "Organization": "West-1",
    "Manager Name": "Suhas Ramchandra Mane",
    "Manager Level": "RSM",
    "Dealer Name": "ATC Motors-Jalna",
    "SCode": "1S3387",
    "State": "Maharashtra",
    "City": "Jalna",
    "Contact No.": "8454812225"
  },
  {
    "Organization": "West-1",
    "Manager Name": "Shaikh Sajid",
    "Manager Level": "EOS Site Incharge",
    "Dealer Name": "ATC Motors-Jalna",
    "SCode": "1S3387",
    "State": "Maharashtra",
    "City": "Jalna",
    "Contact No.": "9975087827,7030011284"
  },
  {
    "Organization": "West-1",
    "Manager Name": "Pratik Ramesh Kolhe / Sagar Nichite",
    "Manager Level": "CSM",
    "Dealer Name": "ATC Motors-Jalna",
    "SCode": "1S3387",
    "State": "Maharashtra",
    "City": "Jalna",
    "Contact No.": "9156518915,8149683808"
  },
  {
    "Organization": "South-1",
    "Manager Name": "Mr. Mathew",
    "Manager Level": "WM",
    "Dealer Name": "AVG Vehicle Sales and Services Pvt Ltd-Kottayam",
    "SCode": "1S4034",
    "State": "Kerala",
    "City": "Kottayam",
    "Contact No.": "9447094734"
  },
  {
    "Organization": "South-1",
    "Manager Name": "MR. Georgy Zachariah",
    "Manager Level": "ASM",
    "Dealer Name": "AVG Vehicle Sales and Services Pvt Ltd-Kottayam",
    "SCode": "1S4034",
    "State": "Kerala",
    "City": "Kottayam",
    "Contact No.": "9895398896"
  },
  {
    "Organization": "South-1",
    "Manager Name": "Radhakrishnan",
    "Manager Level": "RSM",
    "Dealer Name": "AVG Vehicle Sales and Services Pvt Ltd-Kottayam",
    "SCode": "1S4034",
    "State": "Kerala",
    "City": "Kottayam",
    "Contact No.": "9840730250"
  },
  {
    "Organization": "South-1",
    "Manager Name": "Mr. John",
    "Manager Level": "MD",
    "Dealer Name": "AVG Vehicle Sales and Services Pvt Ltd-Kottayam",
    "SCode": "1S4034",
    "State": "Kerala",
    "City": "Kottayam",
    "Contact No.": "9061773300"
  },
  {
    "Organization": "South-1",
    "Manager Name": "Mr. Ponraj (D) / Yuvaraj B (N)",
    "Manager Level": "CSM",
    "Dealer Name": "AVG Vehicle Sales and Services Pvt Ltd-Kottayam",
    "SCode": "1S4034",
    "State": "Kerala",
    "City": "Kottayam",
    "Contact No.": "7356111315,9543338783"
  },
  {
    "Organization": "South-1",
    "Manager Name": "MR. Georgy Zachariah",
    "Manager Level": "ASM",
    "Dealer Name": "AVG Vehicle Sales and Services Pvt Ltd-Thodupuzha",
    "SCode": "1S4098",
    "State": "Kerala",
    "City": "Thodupuzha",
    "Contact No.": "9895398896"
  },
  {
    "Organization": "South-1",
    "Manager Name": "Radhakrishnan",
    "Manager Level": "RSM",
    "Dealer Name": "AVG Vehicle Sales and Services Pvt Ltd-Thodupuzha",
    "SCode": "1S4098",
    "State": "Kerala",
    "City": "Thodupuzha",
    "Contact No.": "9840730250"
  },
  {
    "Organization": "South-1",
    "Manager Name": "Mr. Ponraj (D) / Yuvaraj B (N)",
    "Manager Level": "CSM",
    "Dealer Name": "AVG Vehicle Sales and Services Pvt Ltd-Thodupuzha",
    "SCode": "1S4098",
    "State": "Kerala",
    "City": "Thodupuzha",
    "Contact No.": "7356111315,9543338783"
  },
  {
    "Organization": "South-1",
    "Manager Name": "John Thomas",
    "Manager Level": "MD",
    "Dealer Name": "AVG Vehicle Sales and Services Pvt Ltd-Thodupuzha",
    "SCode": "1S4098",
    "State": "Kerala",
    "City": "Thodupuzha",
    "Contact No.": "9567180700"
  },
  {
    "Organization": "South-1",
    "Manager Name": "Mr.Arun",
    "Manager Level": "WM",
    "Dealer Name": "AVG Vehicle Sales and Services Pvt Ltd-Thodupuzha",
    "SCode": "1S4098",
    "State": "Kerala",
    "City": "Thodupuzha",
    "Contact No.": "8086208858"
  },
  {
    "Organization": "South-2",
    "Manager Name": "Ram Kumar K",
    "Manager Level": "CSM",
    "Dealer Name": "Agustya (ProX)-Bangalore",
    "SCode": "1S6233",
    "State": "Karnataka",
    "City": "Bangalore",
    "Contact No.": "8309859008"
  },
  {
    "Organization": "South-2",
    "Manager Name": "Mithun DC",
    "Manager Level": "EOS Site Incharge",
    "Dealer Name": "Agustya (ProX)-Bangalore",
    "SCode": "1S6233",
    "State": "Karnataka",
    "City": "Bangalore",
    "Contact No.": "8884627277"
  },
  {
    "Organization": "South-2",
    "Manager Name": "Pavan Chand / Deepak Hegde",
    "Manager Level": "MD",
    "Dealer Name": "Agustya (ProX)-Bangalore",
    "SCode": "1S6233",
    "State": "Karnataka",
    "City": "Bangalore",
    "Contact No.": "9845021111"
  },
  {
    "Organization": "South-2",
    "Manager Name": "Sujan Saha",
    "Manager Level": "RSM",
    "Dealer Name": "Agustya (ProX)-Bangalore",
    "SCode": "1S6233",
    "State": "Karnataka",
    "City": "Bangalore",
    "Contact No.": "9903978950"
  },
  {
    "Organization": "South-2",
    "Manager Name": "Sharath",
    "Manager Level": "WM",
    "Dealer Name": "Agustya (ProX)-Bangalore",
    "SCode": "1S6233",
    "State": "Karnataka",
    "City": "Bangalore",
    "Contact No.": "8095152099"
  },
  {
    "Organization": "South-2",
    "Manager Name": "Basavaraj",
    "Manager Level": "WM",
    "Dealer Name": "Agustya Automobile Pvt Ltd-Banglore",
    "SCode": "1S6239",
    "State": "Karnataka",
    "City": "Bengaluru",
    "Contact No.": "8749012751"
  },
  {
    "Organization": "South-2",
    "Manager Name": "Venkatesha G (D) / Jeevan Kumar (N)",
    "Manager Level": "CSM",
    "Dealer Name": "Agustya Automobile Pvt Ltd-Banglore",
    "SCode": "1S6239",
    "State": "Karnataka",
    "City": "Bengaluru",
    "Contact No.": "9108361445,7892822611"
  },
  {
    "Organization": "South-2",
    "Manager Name": "S Balaji",
    "Manager Level": "ASM",
    "Dealer Name": "Agustya Automobile Pvt Ltd-Banglore",
    "SCode": "1S6239",
    "State": "Karnataka",
    "City": "Bengaluru",
    "Contact No.": "9840833723"
  },
  {
    "Organization": "South-2",
    "Manager Name": "Punith",
    "Manager Level": "EOS Site Incharge",
    "Dealer Name": "Agustya Automobile Pvt Ltd-Banglore",
    "SCode": "1S6239",
    "State": "Karnataka",
    "City": "Bengaluru",
    "Contact No.": "6366890889,6366765775"
  },
  {
    "Organization": "South-2",
    "Manager Name": "Mahadev Kalkur",
    "Manager Level": "MD",
    "Dealer Name": "Agustya Automobile Pvt Ltd-Banglore",
    "SCode": "1S6239",
    "State": "Karnataka",
    "City": "Bengaluru",
    "Contact No.": "9740999894"
  },
  {
    "Organization": "South-2",
    "Manager Name": "N Narayanan",
    "Manager Level": "RSM",
    "Dealer Name": "Agustya Automobile Pvt Ltd-Banglore",
    "SCode": "1S6239",
    "State": "Karnataka",
    "City": "Bengaluru",
    "Contact No.": "8123036700"
  },
  {
    "Organization": "South-2",
    "Manager Name": "Chidananda Reddy",
    "Manager Level": "WM",
    "Dealer Name": "Agustya Automobile Pvt Ltd-Devanahalli",
    "SCode": "1S6243",
    "State": "Karnataka",
    "City": "Devanahalli",
    "Contact No.": "8884222516"
  },
  {
    "Organization": "South-2",
    "Manager Name": "N Narayanan",
    "Manager Level": "RSM",
    "Dealer Name": "Agustya Automobile Pvt Ltd-Devanahalli",
    "SCode": "1S6243",
    "State": "Karnataka",
    "City": "Devanahalli",
    "Contact No.": "8123036700"
  },
  {
    "Organization": "South-2",
    "Manager Name": "Anil Kumar M",
    "Manager Level": "EOS Site Incharge",
    "Dealer Name": "Agustya Automobile Pvt Ltd-Devanahalli",
    "SCode": "1S6243",
    "State": "Karnataka",
    "City": "Devanahalli",
    "Contact No.": "8884222848"
  },
  {
    "Organization": "South-2",
    "Manager Name": "S Balaji",
    "Manager Level": "ASM",
    "Dealer Name": "Agustya Automobile Pvt Ltd-Devanahalli",
    "SCode": "1S6243",
    "State": "Karnataka",
    "City": "Devanahalli",
    "Contact No.": "9840833723"
  },
  {
    "Organization": "South-2",
    "Manager Name": "Venkatesha G",
    "Manager Level": "CSM",
    "Dealer Name": "Agustya Automobile Pvt Ltd-Devanahalli",
    "SCode": "1S6243",
    "State": "Karnataka",
    "City": "Devanahalli",
    "Contact No.": "9108361445"
  },
  {
    "Organization": "South-2",
    "Manager Name": "Mahadev",
    "Manager Level": "MD",
    "Dealer Name": "Agustya Automobile Pvt Ltd-Devanahalli",
    "SCode": "1S6243",
    "State": "Karnataka",
    "City": "Devanahalli",
    "Contact No.": "9740999894"
  },
  {
    "Organization": "South-2",
    "Manager Name": "S Balaji",
    "Manager Level": "ASM",
    "Dealer Name": "Agustya Yeshwanthpur-Bengaluru",
    "SCode": "1S6241",
    "State": "Karnataka",
    "City": "Bangalore",
    "Contact No.": "9840833723"
  },
  {
    "Organization": "South-2",
    "Manager Name": "Venkatesha G (D) / Jeevan Kumar (N)",
    "Manager Level": "CSM",
    "Dealer Name": "Agustya Yeshwanthpur-Bengaluru",
    "SCode": "1S6241",
    "State": "Karnataka",
    "City": "Bangalore",
    "Contact No.": "9108361445,7892822611"
  },
  {
    "Organization": "South-2",
    "Manager Name": "Murugan / Amar",
    "Manager Level": "WM",
    "Dealer Name": "Agustya Yeshwanthpur-Bengaluru",
    "SCode": "1S6241",
    "State": "Karnataka",
    "City": "Bangalore",
    "Contact No.": "8884748486,8884748200"
  },
  {
    "Organization": "South-2",
    "Manager Name": "Mahadev Kalkur",
    "Manager Level": "MD",
    "Dealer Name": "Agustya Yeshwanthpur-Bengaluru",
    "SCode": "1S6241",
    "State": "Karnataka",
    "City": "Bangalore",
    "Contact No.": "9740999894"
  },
  {
    "Organization": "South-2",
    "Manager Name": "N Narayanan",
    "Manager Level": "RSM",
    "Dealer Name": "Agustya Yeshwanthpur-Bengaluru",
    "SCode": "1S6241",
    "State": "Karnataka",
    "City": "Bangalore",
    "Contact No.": "8123036700"
  },
  {
    "Organization": "South-2",
    "Manager Name": "Akshith PS",
    "Manager Level": "EOS Site Incharge",
    "Dealer Name": "Agustya Yeshwanthpur-Bengaluru",
    "SCode": "1S6241",
    "State": "Karnataka",
    "City": "Bangalore",
    "Contact No.": "8884634349"
  },
  {
    "Organization": "South-2",
    "Manager Name": "Sharath",
    "Manager Level": "WM",
    "Dealer Name": "Agustya Yeshwanthpur-Bengaluru",
    "SCode": "1S6241",
    "State": "Karnataka",
    "City": "Bangalore",
    "Contact No.": "8095152099"
  },
  {
    "Organization": "South-2",
    "Manager Name": "Mithun",
    "Manager Level": "EOS Site Incharge",
    "Dealer Name": "Agustya Yeshwanthpur-Bengaluru",
    "SCode": "1S6241",
    "State": "Karnataka",
    "City": "Bangalore",
    "Contact No.": "8884634349"
  },
  {
    "Organization": "South-2",
    "Manager Name": "Mahadev Kalkur",
    "Manager Level": "MD",
    "Dealer Name": "Agustya-Bidadi",
    "SCode": "1S6248",
    "State": "Karnataka",
    "City": "Bengaluru",
    "Contact No.": "9740999894"
  },
  {
    "Organization": "South-2",
    "Manager Name": "N Narayanan",
    "Manager Level": "RSM",
    "Dealer Name": "Agustya-Bidadi",
    "SCode": "1S6248",
    "State": "Karnataka",
    "City": "Bengaluru",
    "Contact No.": "8123036700"
  },
  {
    "Organization": "South-2",
    "Manager Name": "Chidanand",
    "Manager Level": "WM",
    "Dealer Name": "Agustya-Bidadi",
    "SCode": "1S6248",
    "State": "Karnataka",
    "City": "Bengaluru",
    "Contact No.": "9591309061"
  },
  {
    "Organization": "South-2",
    "Manager Name": "S Balaji",
    "Manager Level": "ASM",
    "Dealer Name": "Agustya-Bidadi",
    "SCode": "1S6248",
    "State": "Karnataka",
    "City": "Bengaluru",
    "Contact No.": "9840833723"
  },
  {
    "Organization": "South-2",
    "Manager Name": "Ram Lakshmanan",
    "Manager Level": "EOS Site Incharge",
    "Dealer Name": "Agustya-Bidadi",
    "SCode": "1S6248",
    "State": "Karnataka",
    "City": "Bengaluru",
    "Contact No.": "6381998226"
  },
  {
    "Organization": "South-2",
    "Manager Name": "Venkatesha G (D) / Jeevan Kumar (N)",
    "Manager Level": "CSM",
    "Dealer Name": "Agustya-Bidadi",
    "SCode": "1S6248",
    "State": "Karnataka",
    "City": "Bengaluru",
    "Contact No.": "9108361445,7892822611"
  },
  {
    "Organization": "East-2",
    "Manager Name": "Dhamendra Mishra / Yuglesh Mishra",
    "Manager Level": "EOS Site Incharge",
    "Dealer Name": "Ajay Trucking-Jagdalpur",
    "SCode": "1S2177",
    "State": "Chhattisgarh",
    "City": "Jagdalpur",
    "Contact No.": "9329141696,9329141694"
  },
  {
    "Organization": "East-2",
    "Manager Name": "Rachit Kumar",
    "Manager Level": "ASM",
    "Dealer Name": "Ajay Trucking-Jagdalpur",
    "SCode": "1S2177",
    "State": "Chhattisgarh",
    "City": "Jagdalpur",
    "Contact No.": "9534341234"
  },
  {
    "Organization": "East-2",
    "Manager Name": "Niket Kumar",
    "Manager Level": "RSM",
    "Dealer Name": "Ajay Trucking-Jagdalpur",
    "SCode": "1S2177",
    "State": "Chhattisgarh",
    "City": "Jagdalpur",
    "Contact No.": "8427733112"
  },
  {
    "Organization": "East-2",
    "Manager Name": "Keshav Jee",
    "Manager Level": "CSM",
    "Dealer Name": "Ajay Trucking-Jagdalpur",
    "SCode": "1S2177",
    "State": "Chhattisgarh",
    "City": "Jagdalpur",
    "Contact No.": "8986011219"
  },
  {
    "Organization": "East-2",
    "Manager Name": "Mohit Chauhan",
    "Manager Level": "WM",
    "Dealer Name": "Ajay Trucking-Jagdalpur",
    "SCode": "1S2177",
    "State": "Chhattisgarh",
    "City": "Jagdalpur",
    "Contact No.": "7415777263"
  },
  {
    "Organization": "East-2",
    "Manager Name": "Ajay Tiwari",
    "Manager Level": "MD",
    "Dealer Name": "Ajay Trucking-Jagdalpur",
    "SCode": "1S2177",
    "State": "Chhattisgarh",
    "City": "Jagdalpur",
    "Contact No.": "9926791160"
  },
  {
    "Organization": "West-1",
    "Manager Name": "Rajshekhar / Manish",
    "Manager Level": "EOS Site Incharge",
    "Dealer Name": "Ajmera Auto Services-Karad",
    "SCode": "1S3369",
    "State": "Maharashtra",
    "City": "Satara",
    "Contact No.": "7083998399,9130063699"
  },
  {
    "Organization": "West-1",
    "Manager Name": "Suhas Ramchandra Mane",
    "Manager Level": "RSM",
    "Dealer Name": "Ajmera Auto Services-Karad",
    "SCode": "1S3369",
    "State": "Maharashtra",
    "City": "Satara",
    "Contact No.": "8454812225"
  },
  {
    "Organization": "West-1",
    "Manager Name": "Adil Shaikh / Vivek Maske",
    "Manager Level": "CSM",
    "Dealer Name": "Ajmera Auto Services-Karad",
    "SCode": "1S3369",
    "State": "Maharashtra",
    "City": "Satara",
    "Contact No.": "9325446342,9021549678"
  },
  {
    "Organization": "West-1",
    "Manager Name": "Manish Ajmera",
    "Manager Level": "MD",
    "Dealer Name": "Ajmera Auto Services-Karad",
    "SCode": "1S3369",
    "State": "Maharashtra",
    "City": "Satara",
    "Contact No.": "9130063699"
  },
  {
    "Organization": "West-1",
    "Manager Name": "Rajshekhar Konnur",
    "Manager Level": "WM",
    "Dealer Name": "Ajmera Auto Services-Karad",
    "SCode": "1S3369",
    "State": "Maharashtra",
    "City": "Satara",
    "Contact No.": "7083998399"
  },
  {
    "Organization": "West-1",
    "Manager Name": "Mrinal Kunwar",
    "Manager Level": "ASM",
    "Dealer Name": "Ajmera Auto Services-Karad",
    "SCode": "1S3369",
    "State": "Maharashtra",
    "City": "Satara",
    "Contact No.": "8002023303"
  },
  {
    "Organization": "East-1",
    "Manager Name": "Mr.Abhi Mohalanobish",
    "Manager Level": "MD",
    "Dealer Name": "Allied Autowheels Pvt Ltd-Siliguri",
    "SCode": "1S2081",
    "State": "West Bengal",
    "City": "Siliguri",
    "Contact No.": "9434074174"
  },
  {
    "Organization": "East-1",
    "Manager Name": "Mr.Anshuman Sarkar",
    "Manager Level": "WM",
    "Dealer Name": "Allied Autowheels Pvt Ltd-Siliguri",
    "SCode": "1S2081",
    "State": "West Bengal",
    "City": "Siliguri",
    "Contact No.": "9800054174,9434007984"
  },
  {
    "Organization": "East-1",
    "Manager Name": "Hemant Kumar",
    "Manager Level": "CSM",
    "Dealer Name": "Allied Autowheels Pvt Ltd-Siliguri",
    "SCode": "1S2081",
    "State": "West Bengal",
    "City": "Siliguri",
    "Contact No.": "7982996478"
  },
  {
    "Organization": "East-1",
    "Manager Name": "Abhirup Ghosh",
    "Manager Level": "ASM",
    "Dealer Name": "Allied Autowheels Pvt Ltd-Siliguri",
    "SCode": "1S2081",
    "State": "West Bengal",
    "City": "Siliguri",
    "Contact No.": "9073378080"
  },
  {
    "Organization": "East-1",
    "Manager Name": "Yogeshwar Singh",
    "Manager Level": "RSM",
    "Dealer Name": "Allied Autowheels Pvt Ltd-Siliguri",
    "SCode": "1S2081",
    "State": "West Bengal",
    "City": "Siliguri",
    "Contact No.": "9717966997"
  },
  {
    "Organization": "East-1",
    "Manager Name": "Rakesh Ghosh",
    "Manager Level": "ASM",
    "Dealer Name": "Amisun-Dimapur",
    "SCode": "1S2204",
    "State": "Nagaland",
    "City": "Dimapur",
    "Contact No.": "9477374098"
  },
  {
    "Organization": "East-1",
    "Manager Name": "Amit Jain",
    "Manager Level": "MD",
    "Dealer Name": "Amisun-Dimapur",
    "SCode": "1S2204",
    "State": "Nagaland",
    "City": "Dimapur",
    "Contact No.": "9436012412"
  },
  {
    "Organization": "East-1",
    "Manager Name": "Sanju Kumar Pal / Vishal Kumar",
    "Manager Level": "CSM",
    "Dealer Name": "Amisun-Dimapur",
    "SCode": "1S2204",
    "State": "Nagaland",
    "City": "Dimapur",
    "Contact No.": "9382495455,7630027054"
  },
  {
    "Organization": "East-1",
    "Manager Name": "Gauri Shankar / Sunup Ao",
    "Manager Level": "WM",
    "Dealer Name": "Amisun-Dimapur",
    "SCode": "1S2204",
    "State": "Nagaland",
    "City": "Dimapur",
    "Contact No.": "9304544990,9862049442"
  },
  {
    "Organization": "East-1",
    "Manager Name": "Dharmendra Rai",
    "Manager Level": "EOS Site Incharge",
    "Dealer Name": "Amisun-Dimapur",
    "SCode": "1S2204",
    "State": "Nagaland",
    "City": "Dimapur",
    "Contact No.": "9862590350"
  },
  {
    "Organization": "East-1",
    "Manager Name": "Yogeshwar Singh",
    "Manager Level": "RSM",
    "Dealer Name": "Amisun-Dimapur",
    "SCode": "1S2204",
    "State": "Nagaland",
    "City": "Dimapur",
    "Contact No.": "9717966997"
  },
  {
    "Organization": "South-1",
    "Manager Name": "Rajan",
    "Manager Level": "MD",
    "Dealer Name": "Anaamalais Mobility Pvt Ltd (ProX)-Coimbatore",
    "SCode": "1S4149",
    "State": "Tamil Nadu",
    "City": "Coimbatore",
    "Contact No.": "9842226300"
  },
  {
    "Organization": "South-1",
    "Manager Name": "Udhayakumar N",
    "Manager Level": "CSM",
    "Dealer Name": "Anaamalais Mobility Pvt Ltd (ProX)-Coimbatore",
    "SCode": "1S4149",
    "State": "Tamil Nadu",
    "City": "Coimbatore",
    "Contact No.": "9384144925"
  },
  {
    "Organization": "South-1",
    "Manager Name": "N.Sivakumar",
    "Manager Level": "WM",
    "Dealer Name": "Anaamalais Mobility Pvt Ltd (ProX)-Coimbatore",
    "SCode": "1S4149",
    "State": "Tamil Nadu",
    "City": "Coimbatore",
    "Contact No.": "7397711200"
  },
  {
    "Organization": "South-1",
    "Manager Name": "Sujan Saha",
    "Manager Level": "RSM",
    "Dealer Name": "Anaamalais Mobility Pvt Ltd (ProX)-Coimbatore",
    "SCode": "1S4149",
    "State": "Tamil Nadu",
    "City": "Coimbatore",
    "Contact No.": "9903978950"
  },
  {
    "Organization": "South-1",
    "Manager Name": "R.Llango",
    "Manager Level": "EOS Site Incharge",
    "Dealer Name": "Anaamalais Mobility Pvt Ltd (ProX)-Coimbatore",
    "SCode": "1S4149",
    "State": "Tamil Nadu",
    "City": "Coimbatore",
    "Contact No.": "8754477200"
  },
  {
    "Organization": "South-1",
    "Manager Name": "Udhayakumar N",
    "Manager Level": "CSM",
    "Dealer Name": "Anaamallais Mobility Pvt Ltd (ProX)-Erode",
    "SCode": "1S4150",
    "State": "Tamil Nadu",
    "City": "Erode",
    "Contact No.": "9384144925"
  },
  {
    "Organization": "South-1",
    "Manager Name": "Sujan Saha",
    "Manager Level": "RSM",
    "Dealer Name": "Anaamallais Mobility Pvt Ltd (ProX)-Erode",
    "SCode": "1S4150",
    "State": "Tamil Nadu",
    "City": "Erode",
    "Contact No.": "9903978950"
  },
  {
    "Organization": "South-1",
    "Manager Name": "Rajan",
    "Manager Level": "MD",
    "Dealer Name": "Anaamallais Mobility Pvt Ltd (ProX)-Erode",
    "SCode": "1S4150",
    "State": "Tamil Nadu",
    "City": "Erode",
    "Contact No.": "9842226300"
  },
  {
    "Organization": "South-1",
    "Manager Name": "Tamilselvan S",
    "Manager Level": "WM",
    "Dealer Name": "Anaamallais Mobility Pvt Ltd (ProX)-Erode",
    "SCode": "1S4150",
    "State": "Tamil Nadu",
    "City": "Erode",
    "Contact No.": "9677233100"
  },
  {
    "Organization": "South-1",
    "Manager Name": "Ragul N",
    "Manager Level": "EOS Site Incharge",
    "Dealer Name": "Anaamallais Mobility Pvt Ltd (ProX)-Erode",
    "SCode": "1S4150",
    "State": "Tamil Nadu",
    "City": "Erode",
    "Contact No.": "9789066300"
  },
  {
    "Organization": "South-1",
    "Manager Name": "KP Sharma",
    "Manager Level": "ASM",
    "Dealer Name": "Anamallais Agencies (Stadium) Ltd-Coimbatore",
    "SCode": "1S4072",
    "State": "Tamil Nadu",
    "City": "Kavundampalayam",
    "Contact No.": "9567475444"
  },
  {
    "Organization": "South-1",
    "Manager Name": "Mr. Nandha Kumar",
    "Manager Level": "MD",
    "Dealer Name": "Anamallais Agencies (Stadium) Ltd-Coimbatore",
    "SCode": "1S4072",
    "State": "Tamil Nadu",
    "City": "Kavundampalayam",
    "Contact No.": "9942066000"
  },
  {
    "Organization": "South-1",
    "Manager Name": "Nagendran",
    "Manager Level": "WM",
    "Dealer Name": "Anamallais Agencies (Stadium) Ltd-Coimbatore",
    "SCode": "1S4072",
    "State": "Tamil Nadu",
    "City": "Kavundampalayam",
    "Contact No.": "9965355000"
  },
  {
    "Organization": "South-1",
    "Manager Name": "Saravanan Sanjeev",
    "Manager Level": "EOS Site Incharge",
    "Dealer Name": "Anamallais Agencies (Stadium) Ltd-Coimbatore",
    "SCode": "1S4072",
    "State": "Tamil Nadu",
    "City": "Kavundampalayam",
    "Contact No.": "9965574700"
  },
  {
    "Organization": "South-1",
    "Manager Name": "Radhakrishnan",
    "Manager Level": "RSM",
    "Dealer Name": "Anamallais Agencies (Stadium) Ltd-Coimbatore",
    "SCode": "1S4072",
    "State": "Tamil Nadu",
    "City": "Kavundampalayam",
    "Contact No.": "9840730250"
  },
  {
    "Organization": "South-1",
    "Manager Name": "Arun Kumar N (D) / Yuvaraj B (N)",
    "Manager Level": "CSM",
    "Dealer Name": "Anamallais Agencies (Stadium) Ltd-Coimbatore",
    "SCode": "1S4072",
    "State": "Tamil Nadu",
    "City": "Kavundampalayam",
    "Contact No.": "7338856610,9543338783"
  },
  {
    "Organization": "South-1",
    "Manager Name": "KP Sharma",
    "Manager Level": "ASM",
    "Dealer Name": "Anamallais Agencies (Stadium) Ltd-Eachanari",
    "SCode": "1S4011",
    "State": "Tamil Nadu",
    "City": "Eachanari",
    "Contact No.": "9567475444"
  },
  {
    "Organization": "South-1",
    "Manager Name": "Mr. Nandha Kumar",
    "Manager Level": "MD",
    "Dealer Name": "Anamallais Agencies (Stadium) Ltd-Eachanari",
    "SCode": "1S4011",
    "State": "Tamil Nadu",
    "City": "Eachanari",
    "Contact No.": "9942066000"
  },
  {
    "Organization": "South-1",
    "Manager Name": "Arun Kumar N (D) / Yuvaraj B (N)",
    "Manager Level": "CSM",
    "Dealer Name": "Anamallais Agencies (Stadium) Ltd-Eachanari",
    "SCode": "1S4011",
    "State": "Tamil Nadu",
    "City": "Eachanari",
    "Contact No.": "7338856610,9543338783"
  },
  {
    "Organization": "South-1",
    "Manager Name": "Pradeep Kumar (D) / EOS SPOC (N)",
    "Manager Level": "EOS Site Incharge",
    "Dealer Name": "Anamallais Agencies (Stadium) Ltd-Eachanari",
    "SCode": "1S4011",
    "State": "Tamil Nadu",
    "City": "Eachanari",
    "Contact No.": "9965375700,9865210900"
  },
  {
    "Organization": "South-1",
    "Manager Name": "Radhakrishnan",
    "Manager Level": "RSM",
    "Dealer Name": "Anamallais Agencies (Stadium) Ltd-Eachanari",
    "SCode": "1S4011",
    "State": "Tamil Nadu",
    "City": "Eachanari",
    "Contact No.": "9840730250"
  },
  {
    "Organization": "South-1",
    "Manager Name": "R Sundaramoorthy (D) / Damodharan (N)",
    "Manager Level": "WM",
    "Dealer Name": "Anamallais Agencies (Stadium) Ltd-Eachanari",
    "SCode": "1S4011",
    "State": "Tamil Nadu",
    "City": "Eachanari",
    "Contact No.": "9842444100,7539945200"
  },
  {
    "Organization": "South-1",
    "Manager Name": "S. Ashok Kumar",
    "Manager Level": "MD",
    "Dealer Name": "Anamallais Agencies (Stadium) Ltd-Erode",
    "SCode": "1S4044",
    "State": "Tamil Nadu",
    "City": "Erode",
    "Contact No.": "9842922710"
  },
  {
    "Organization": "South-1",
    "Manager Name": "E.Jeevanantham",
    "Manager Level": "WM",
    "Dealer Name": "Anamallais Agencies (Stadium) Ltd-Erode",
    "SCode": "1S4044",
    "State": "Tamil Nadu",
    "City": "Erode",
    "Contact No.": "9976021700"
  },
  {
    "Organization": "South-1",
    "Manager Name": "KP Sharma",
    "Manager Level": "ASM",
    "Dealer Name": "Anamallais Agencies (Stadium) Ltd-Erode",
    "SCode": "1S4044",
    "State": "Tamil Nadu",
    "City": "Erode",
    "Contact No.": "9567475444"
  },
  {
    "Organization": "South-1",
    "Manager Name": "S.Tamilselvan",
    "Manager Level": "EOS Site Incharge",
    "Dealer Name": "Anamallais Agencies (Stadium) Ltd-Erode",
    "SCode": "1S4044",
    "State": "Tamil Nadu",
    "City": "Erode",
    "Contact No.": "9791836700"
  },
  {
    "Organization": "South-1",
    "Manager Name": "Radhakrishnan",
    "Manager Level": "RSM",
    "Dealer Name": "Anamallais Agencies (Stadium) Ltd-Erode",
    "SCode": "1S4044",
    "State": "Tamil Nadu",
    "City": "Erode",
    "Contact No.": "9840730250"
  },
  {
    "Organization": "South-1",
    "Manager Name": "Arun Kumar N (D) / Yuvaraj B (N)",
    "Manager Level": "CSM",
    "Dealer Name": "Anamallais Agencies (Stadium) Ltd-Erode",
    "SCode": "1S4044",
    "State": "Tamil Nadu",
    "City": "Erode",
    "Contact No.": "7338856610,9543338783"
  },
  {
    "Organization": "South-1",
    "Manager Name": "J Manojarokiaraj",
    "Manager Level": "EOS Site Incharge",
    "Dealer Name": "Anamallais Agencies (Stadium) Ltd-Palladam",
    "SCode": "1S4045",
    "State": "Tamil Nadu",
    "City": "Palladam",
    "Contact No.": "9524732100"
  },
  {
    "Organization": "South-1",
    "Manager Name": "KP Sharma",
    "Manager Level": "ASM",
    "Dealer Name": "Anamallais Agencies (Stadium) Ltd-Palladam",
    "SCode": "1S4045",
    "State": "Tamil Nadu",
    "City": "Palladam",
    "Contact No.": "9567475444"
  },
  {
    "Organization": "South-1",
    "Manager Name": "Radhakrishnan",
    "Manager Level": "RSM",
    "Dealer Name": "Anamallais Agencies (Stadium) Ltd-Palladam",
    "SCode": "1S4045",
    "State": "Tamil Nadu",
    "City": "Palladam",
    "Contact No.": "9840730250"
  },
  {
    "Organization": "South-1",
    "Manager Name": "Devaraj S (D) / Yuvaraj B (N)",
    "Manager Level": "CSM",
    "Dealer Name": "Anamallais Agencies (Stadium) Ltd-Palladam",
    "SCode": "1S4045",
    "State": "Tamil Nadu",
    "City": "Palladam",
    "Contact No.": "7305111688,9543338783"
  },
  {
    "Organization": "South-1",
    "Manager Name": "Nandha Kumar",
    "Manager Level": "MD",
    "Dealer Name": "Anamallais Agencies (Stadium) Ltd-Palladam",
    "SCode": "1S4045",
    "State": "Tamil Nadu",
    "City": "Palladam",
    "Contact No.": "9942066000"
  },
  {
    "Organization": "South-1",
    "Manager Name": "G Santhakumar",
    "Manager Level": "WM",
    "Dealer Name": "Anamallais Agencies (Stadium) Ltd-Palladam",
    "SCode": "1S4045",
    "State": "Tamil Nadu",
    "City": "Palladam",
    "Contact No.": "9942932100"
  },
  {
    "Organization": "South-1",
    "Manager Name": "E.Jeevanantham",
    "Manager Level": "WM",
    "Dealer Name": "Anamallais Agencies (Stadium) Ltd-Sathyamangalam",
    "SCode": "1S4141",
    "State": "Tamil Nadu",
    "City": "Sathyamangalam",
    "Contact No.": "9976021700"
  },
  {
    "Organization": "South-1",
    "Manager Name": "KP Sharma",
    "Manager Level": "ASM",
    "Dealer Name": "Anamallais Agencies (Stadium) Ltd-Sathyamangalam",
    "SCode": "1S4141",
    "State": "Tamil Nadu",
    "City": "Sathyamangalam",
    "Contact No.": "9567475444"
  },
  {
    "Organization": "South-1",
    "Manager Name": "S.Ashokkumar",
    "Manager Level": "MD",
    "Dealer Name": "Anamallais Agencies (Stadium) Ltd-Sathyamangalam",
    "SCode": "1S4141",
    "State": "Tamil Nadu",
    "City": "Sathyamangalam",
    "Contact No.": "9842922710"
  },
  {
    "Organization": "South-1",
    "Manager Name": "Radhakrishnan",
    "Manager Level": "RSM",
    "Dealer Name": "Anamallais Agencies (Stadium) Ltd-Sathyamangalam",
    "SCode": "1S4141",
    "State": "Tamil Nadu",
    "City": "Sathyamangalam",
    "Contact No.": "9840730250"
  },
  {
    "Organization": "South-1",
    "Manager Name": "M.Rajesh",
    "Manager Level": "EOS Site Incharge",
    "Dealer Name": "Anamallais Agencies (Stadium) Ltd-Sathyamangalam",
    "SCode": "1S4141",
    "State": "Tamil Nadu",
    "City": "Sathyamangalam",
    "Contact No.": "9384001200"
  },
  {
    "Organization": "South-1",
    "Manager Name": "Arun Kumar N (D) / Yuvaraj B (N)",
    "Manager Level": "CSM",
    "Dealer Name": "Anamallais Agencies (Stadium) Ltd-Sathyamangalam",
    "SCode": "1S4141",
    "State": "Tamil Nadu",
    "City": "Sathyamangalam",
    "Contact No.": "7338856610,9543338783"
  },
  {
    "Organization": "South-1",
    "Manager Name": "KP Sharma",
    "Manager Level": "ASM",
    "Dealer Name": "Anamallais Agencies-Madurai",
    "SCode": "1S4123",
    "State": "Tamil Nadu",
    "City": "Madurai",
    "Contact No.": "9567475444"
  },
  {
    "Organization": "South-1",
    "Manager Name": "Mano",
    "Manager Level": "EOS Site Incharge",
    "Dealer Name": "Anamallais Agencies-Madurai",
    "SCode": "1S4123",
    "State": "Tamil Nadu",
    "City": "Madurai",
    "Contact No.": "8012541600"
  },
  {
    "Organization": "South-1",
    "Manager Name": "Santhosh Kannan K (D) / Yuvaraj B (N)",
    "Manager Level": "CSM",
    "Dealer Name": "Anamallais Agencies-Madurai",
    "SCode": "1S4123",
    "State": "Tamil Nadu",
    "City": "Madurai",
    "Contact No.": "7418384448,9543338783"
  },
  {
    "Organization": "South-1",
    "Manager Name": "Radhakrishnan",
    "Manager Level": "RSM",
    "Dealer Name": "Anamallais Agencies-Madurai",
    "SCode": "1S4123",
    "State": "Tamil Nadu",
    "City": "Madurai",
    "Contact No.": "9840730250"
  },
  {
    "Organization": "South-1",
    "Manager Name": "Sunder.K.N",
    "Manager Level": "MD",
    "Dealer Name": "Anamallais Agencies-Madurai",
    "SCode": "1S4123",
    "State": "Tamil Nadu",
    "City": "Madurai",
    "Contact No.": "9842123488"
  },
  {
    "Organization": "South-1",
    "Manager Name": "Naushad Ahamed",
    "Manager Level": "WM",
    "Dealer Name": "Anamallais Agencies-Madurai",
    "SCode": "1S4123",
    "State": "Tamil Nadu",
    "City": "Madurai",
    "Contact No.": "9659622800"
  },
  {
    "Organization": "South-1",
    "Manager Name": "KP Sharma",
    "Manager Level": "ASM",
    "Dealer Name": "Anamallais Agencies-Ramanathapuram",
    "SCode": "1S4126",
    "State": "Tamil Nadu",
    "City": "Ramanathapuram",
    "Contact No.": "9567475444"
  },
  {
    "Organization": "South-1",
    "Manager Name": "Sunder.K.N",
    "Manager Level": "MD",
    "Dealer Name": "Anamallais Agencies-Ramanathapuram",
    "SCode": "1S4126",
    "State": "Tamil Nadu",
    "City": "Ramanathapuram",
    "Contact No.": "9842123488"
  },
  {
    "Organization": "South-1",
    "Manager Name": "Kumaresan",
    "Manager Level": "WM",
    "Dealer Name": "Anamallais Agencies-Ramanathapuram",
    "SCode": "1S4126",
    "State": "Tamil Nadu",
    "City": "Ramanathapuram",
    "Contact No.": "7373049300"
  },
  {
    "Organization": "South-1",
    "Manager Name": "Sugan",
    "Manager Level": "EOS Site Incharge",
    "Dealer Name": "Anamallais Agencies-Ramanathapuram",
    "SCode": "1S4126",
    "State": "Tamil Nadu",
    "City": "Ramanathapuram",
    "Contact No.": "7373726300"
  },
  {
    "Organization": "South-1",
    "Manager Name": "Santhosh Kannan K (D) / Yuvaraj B (N)",
    "Manager Level": "CSM",
    "Dealer Name": "Anamallais Agencies-Ramanathapuram",
    "SCode": "1S4126",
    "State": "Tamil Nadu",
    "City": "Ramanathapuram",
    "Contact No.": "7418384448,9543338783"
  },
  {
    "Organization": "South-1",
    "Manager Name": "Radhakrishnan",
    "Manager Level": "RSM",
    "Dealer Name": "Anamallais Agencies-Ramanathapuram",
    "SCode": "1S4126",
    "State": "Tamil Nadu",
    "City": "Ramanathapuram",
    "Contact No.": "9840730250"
  },
  {
    "Organization": "South-1",
    "Manager Name": "Sunder.K.N",
    "Manager Level": "MD",
    "Dealer Name": "Anamallais Agencies-Theni",
    "SCode": "1S4124",
    "State": "Tamil Nadu",
    "City": "Theni",
    "Contact No.": "9842123488"
  },
  {
    "Organization": "South-1",
    "Manager Name": "Radhakrishnan",
    "Manager Level": "RSM",
    "Dealer Name": "Anamallais Agencies-Theni",
    "SCode": "1S4124",
    "State": "Tamil Nadu",
    "City": "Theni",
    "Contact No.": "9840730250"
  },
  {
    "Organization": "South-1",
    "Manager Name": "KP Sharma",
    "Manager Level": "ASM",
    "Dealer Name": "Anamallais Agencies-Theni",
    "SCode": "1S4124",
    "State": "Tamil Nadu",
    "City": "Theni",
    "Contact No.": "9567475444"
  },
  {
    "Organization": "South-1",
    "Manager Name": "Kumaresan",
    "Manager Level": "WM",
    "Dealer Name": "Anamallais Agencies-Theni",
    "SCode": "1S4124",
    "State": "Tamil Nadu",
    "City": "Theni",
    "Contact No.": "7373049300"
  },
  {
    "Organization": "South-1",
    "Manager Name": "Santhosh Kannan K (D) / Yuvaraj B (N)",
    "Manager Level": "CSM",
    "Dealer Name": "Anamallais Agencies-Theni",
    "SCode": "1S4124",
    "State": "Tamil Nadu",
    "City": "Theni",
    "Contact No.": "7418384448,9543338783"
  },
  {
    "Organization": "South-1",
    "Manager Name": "Kasi",
    "Manager Level": "EOS Site Incharge",
    "Dealer Name": "Anamallais Agencies-Theni",
    "SCode": "1S4124",
    "State": "Tamil Nadu",
    "City": "Theni",
    "Contact No.": "7395817100"
  },
  {
    "Organization": "South-1",
    "Manager Name": "Radhakrishnan",
    "Manager Level": "RSM",
    "Dealer Name": "Anamallais Agencies-Virudhunagar",
    "SCode": "1S4143",
    "State": "Tamil Nadu",
    "City": "Virudhunagar",
    "Contact No.": "9840730250"
  },
  {
    "Organization": "South-1",
    "Manager Name": "Kumaresan",
    "Manager Level": "WM",
    "Dealer Name": "Anamallais Agencies-Virudhunagar",
    "SCode": "1S4143",
    "State": "Tamil Nadu",
    "City": "Virudhunagar",
    "Contact No.": "7373049300"
  },
  {
    "Organization": "South-1",
    "Manager Name": "KP Sharma",
    "Manager Level": "ASM",
    "Dealer Name": "Anamallais Agencies-Virudhunagar",
    "SCode": "1S4143",
    "State": "Tamil Nadu",
    "City": "Virudhunagar",
    "Contact No.": "9567475444"
  },
  {
    "Organization": "South-1",
    "Manager Name": "Santhosh Kannan K (D) / Yuvaraj B (N)",
    "Manager Level": "CSM",
    "Dealer Name": "Anamallais Agencies-Virudhunagar",
    "SCode": "1S4143",
    "State": "Tamil Nadu",
    "City": "Virudhunagar",
    "Contact No.": "7418384448,9543338783"
  },
  {
    "Organization": "South-1",
    "Manager Name": "Sunder.K.N",
    "Manager Level": "MD",
    "Dealer Name": "Anamallais Agencies-Virudhunagar",
    "SCode": "1S4143",
    "State": "Tamil Nadu",
    "City": "Virudhunagar",
    "Contact No.": "9842123488"
  },
  {
    "Organization": "South-1",
    "Manager Name": "Velmurugan",
    "Manager Level": "EOS Site Incharge",
    "Dealer Name": "Anamallais Agencies-Virudhunagar",
    "SCode": "1S4143",
    "State": "Tamil Nadu",
    "City": "Virudhunagar",
    "Contact No.": "7305945800"
  },
  {
    "Organization": "South-1",
    "Manager Name": "A.Senthil",
    "Manager Level": "WM",
    "Dealer Name": "Anamallais Commercial Vehicles Pvt Ltd (ProX)-Madurai",
    "SCode": "1S4146",
    "State": "Tamil Nadu",
    "City": "Madurai",
    "Contact No.": "7338807200"
  },
  {
    "Organization": "South-1",
    "Manager Name": "Raghu Ram",
    "Manager Level": "MD",
    "Dealer Name": "Anamallais Commercial Vehicles Pvt Ltd (ProX)-Madurai",
    "SCode": "1S4146",
    "State": "Tamil Nadu",
    "City": "Madurai",
    "Contact No.": "9750000000"
  },
  {
    "Organization": "South-1",
    "Manager Name": "P.Manikandan",
    "Manager Level": "EOS Site Incharge",
    "Dealer Name": "Anamallais Commercial Vehicles Pvt Ltd (ProX)-Madurai",
    "SCode": "1S4146",
    "State": "Tamil Nadu",
    "City": "Madurai",
    "Contact No.": "9384893300"
  },
  {
    "Organization": "South-1",
    "Manager Name": "Bhuvaneswari",
    "Manager Level": "CSM",
    "Dealer Name": "Anamallais Commercial Vehicles Pvt Ltd (ProX)-Madurai",
    "SCode": "1S4146",
    "State": "Tamil Nadu",
    "City": "Madurai",
    "Contact No.": "9003555165"
  },
  {
    "Organization": "South-1",
    "Manager Name": "Bhuvaneswari",
    "Manager Level": "CSM",
    "Dealer Name": "Anamallais Commercial Vehicles Pvt Ltd (ProX)-Tirunelveli",
    "SCode": "1S4148",
    "State": "Tamil Nadu",
    "City": "Tirunelveli",
    "Contact No.": "9003555165"
  },
  {
    "Organization": "South-1",
    "Manager Name": "Raghu Ram",
    "Manager Level": "MD",
    "Dealer Name": "Anamallais Commercial Vehicles Pvt Ltd (ProX)-Tirunelveli",
    "SCode": "1S4148",
    "State": "Tamil Nadu",
    "City": "Tirunelveli",
    "Contact No.": "9750000000"
  },
  {
    "Organization": "South-1",
    "Manager Name": "J.Kipson Daniel",
    "Manager Level": "WM",
    "Dealer Name": "Anamallais Commercial Vehicles Pvt Ltd (ProX)-Tirunelveli",
    "SCode": "1S4148",
    "State": "Tamil Nadu",
    "City": "Tirunelveli",
    "Contact No.": "7338987100"
  },
  {
    "Organization": "South-1",
    "Manager Name": "Bala Subramaniyan",
    "Manager Level": "EOS Site Incharge",
    "Dealer Name": "Anamallais Commercial Vehicles Pvt Ltd (ProX)-Tirunelveli",
    "SCode": "1S4148",
    "State": "Tamil Nadu",
    "City": "Tirunelveli",
    "Contact No.": "9384093300"
  },
  {
    "Organization": "West-1",
    "Manager Name": "Deepak Chormalle",
    "Manager Level": "WM",
    "Dealer Name": "Anuraj Motors-Ahmednagar",
    "SCode": "1S3304",
    "State": "Maharashtra",
    "City": "Ahmednagar",
    "Contact No.": "8380075951,8380075989"
  },
  {
    "Organization": "West-1",
    "Manager Name": "Shrishail Honnagol",
    "Manager Level": "ASM",
    "Dealer Name": "Anuraj Motors-Ahmednagar",
    "SCode": "1S3304",
    "State": "Maharashtra",
    "City": "Ahmednagar",
    "Contact No.": "7700906442"
  },
  {
    "Organization": "West-1",
    "Manager Name": "Anup Lasure",
    "Manager Level": "CSM",
    "Dealer Name": "Anuraj Motors-Ahmednagar",
    "SCode": "1S3304",
    "State": "Maharashtra",
    "City": "Ahmednagar",
    "Contact No.": "8668611069"
  },
  {
    "Organization": "West-1",
    "Manager Name": "Hiten Bansal",
    "Manager Level": "MD",
    "Dealer Name": "Anuraj Motors-Ahmednagar",
    "SCode": "1S3304",
    "State": "Maharashtra",
    "City": "Ahmednagar",
    "Contact No.": "9730013750"
  },
  {
    "Organization": "West-1",
    "Manager Name": "Mudassir Shaik",
    "Manager Level": "EOS Site Incharge",
    "Dealer Name": "Anuraj Motors-Ahmednagar",
    "SCode": "1S3304",
    "State": "Maharashtra",
    "City": "Ahmednagar",
    "Contact No.": "8380075951"
  },
  {
    "Organization": "West-1",
    "Manager Name": "Suhas Ramchandra Mane",
    "Manager Level": "RSM",
    "Dealer Name": "Anuraj Motors-Ahmednagar",
    "SCode": "1S3304",
    "State": "Maharashtra",
    "City": "Ahmednagar",
    "Contact No.": "8454812225"
  },
  {
    "Organization": "West-2",
    "Manager Name": "Sanjay Desai",
    "Manager Level": "WM",
    "Dealer Name": "Apco Autosales-Bhavnagar",
    "SCode": "1S3100",
    "State": "Gujarat",
    "City": "Bhavnagar",
    "Contact No.": "9924766994"
  },
  {
    "Organization": "West-2",
    "Manager Name": "Vipul Barot",
    "Manager Level": "ASM",
    "Dealer Name": "Apco Autosales-Bhavnagar",
    "SCode": "1S3100",
    "State": "Gujarat",
    "City": "Bhavnagar",
    "Contact No.": "9638341568"
  },
  {
    "Organization": "West-2",
    "Manager Name": "Divyesh Shah",
    "Manager Level": "MD",
    "Dealer Name": "Apco Autosales-Bhavnagar",
    "SCode": "1S3100",
    "State": "Gujarat",
    "City": "Bhavnagar",
    "Contact No.": "9824651968"
  },
  {
    "Organization": "West-2",
    "Manager Name": "Arjunsinh Gohil",
    "Manager Level": "EOS Site Incharge",
    "Dealer Name": "Apco Autosales-Bhavnagar",
    "SCode": "1S3100",
    "State": "Gujarat",
    "City": "Bhavnagar",
    "Contact No.": "7574880774"
  },
  {
    "Organization": "West-2",
    "Manager Name": "Jaydeep Chavda",
    "Manager Level": "CSM",
    "Dealer Name": "Apco Autosales-Bhavnagar",
    "SCode": "1S3100",
    "State": "Gujarat",
    "City": "Bhavnagar",
    "Contact No.": "7567379010"
  },
  {
    "Organization": "West-2",
    "Manager Name": "Sudhir Kumar",
    "Manager Level": "RSM",
    "Dealer Name": "Apco Autosales-Bhavnagar",
    "SCode": "1S3100",
    "State": "Gujarat",
    "City": "Bhavnagar",
    "Contact No.": "9752542733"
  },
  {
    "Organization": "West-2",
    "Manager Name": "Vicky Raghuvanshi",
    "Manager Level": "EOS Site Incharge",
    "Dealer Name": "Apco Autosales-Jamnagar",
    "SCode": "1S3106",
    "State": "Gujarat",
    "City": "Jamnagar",
    "Contact No.": "7574899233"
  },
  {
    "Organization": "West-2",
    "Manager Name": "Divyesh Shah",
    "Manager Level": "MD",
    "Dealer Name": "Apco Autosales-Jamnagar",
    "SCode": "1S3106",
    "State": "Gujarat",
    "City": "Jamnagar",
    "Contact No.": "9824651968"
  },
  {
    "Organization": "West-2",
    "Manager Name": "Sudhir Kumar",
    "Manager Level": "RSM",
    "Dealer Name": "Apco Autosales-Jamnagar",
    "SCode": "1S3106",
    "State": "Gujarat",
    "City": "Jamnagar",
    "Contact No.": "9752542733"
  },
  {
    "Organization": "West-2",
    "Manager Name": "Jaydeep Chavda",
    "Manager Level": "CSM",
    "Dealer Name": "Apco Autosales-Jamnagar",
    "SCode": "1S3106",
    "State": "Gujarat",
    "City": "Jamnagar",
    "Contact No.": "7567379010"
  },
  {
    "Organization": "West-2",
    "Manager Name": "Vipul Barot",
    "Manager Level": "ASM",
    "Dealer Name": "Apco Autosales-Jamnagar",
    "SCode": "1S3106",
    "State": "Gujarat",
    "City": "Jamnagar",
    "Contact No.": "9638341568"
  },
  {
    "Organization": "West-2",
    "Manager Name": "Mahesh",
    "Manager Level": "WM",
    "Dealer Name": "Apco Autosales-Jamnagar",
    "SCode": "1S3106",
    "State": "Gujarat",
    "City": "Jamnagar",
    "Contact No.": "9510764032"
  },
  {
    "Organization": "West-2",
    "Manager Name": "Vipul Barot",
    "Manager Level": "ASM",
    "Dealer Name": "Apco Autosales-Junagadh",
    "SCode": "1S3099",
    "State": "Gujarat",
    "City": "Junagadh",
    "Contact No.": "9638341568"
  },
  {
    "Organization": "West-2",
    "Manager Name": "Savan Gohel / Ashok Makavana",
    "Manager Level": "WM",
    "Dealer Name": "Apco Autosales-Junagadh",
    "SCode": "1S3099",
    "State": "Gujarat",
    "City": "Junagadh",
    "Contact No.": "8264964418,9924769400"
  },
  {
    "Organization": "West-2",
    "Manager Name": "Sudhir Kumar",
    "Manager Level": "RSM",
    "Dealer Name": "Apco Autosales-Junagadh",
    "SCode": "1S3099",
    "State": "Gujarat",
    "City": "Junagadh",
    "Contact No.": "9752542733"
  },
  {
    "Organization": "West-2",
    "Manager Name": "Nayan Devdhariya",
    "Manager Level": "EOS Site Incharge",
    "Dealer Name": "Apco Autosales-Junagadh",
    "SCode": "1S3099",
    "State": "Gujarat",
    "City": "Junagadh",
    "Contact No.": "8320088148"
  },
  {
    "Organization": "West-2",
    "Manager Name": "Divyesh Shah",
    "Manager Level": "MD",
    "Dealer Name": "Apco Autosales-Junagadh",
    "SCode": "1S3099",
    "State": "Gujarat",
    "City": "Junagadh",
    "Contact No.": "9824651968"
  },
  {
    "Organization": "West-2",
    "Manager Name": "Jaydeep Chavda",
    "Manager Level": "CSM",
    "Dealer Name": "Apco Autosales-Junagadh",
    "SCode": "1S3099",
    "State": "Gujarat",
    "City": "Junagadh",
    "Contact No.": "7567379010"
  },
  {
    "Organization": "West-2",
    "Manager Name": "Sudhir Kumar",
    "Manager Level": "RSM",
    "Dealer Name": "Apco Autosales-Rajkot",
    "SCode": "1S3089",
    "State": "Gujarat",
    "City": "Rajkot",
    "Contact No.": "9752542733"
  },
  {
    "Organization": "West-2",
    "Manager Name": "Vipul Barot",
    "Manager Level": "ASM",
    "Dealer Name": "Apco Autosales-Rajkot",
    "SCode": "1S3089",
    "State": "Gujarat",
    "City": "Rajkot",
    "Contact No.": "9638341568"
  },
  {
    "Organization": "West-2",
    "Manager Name": "Raghav Rangapara",
    "Manager Level": "EOS Site Incharge",
    "Dealer Name": "Apco Autosales-Rajkot",
    "SCode": "1S3089",
    "State": "Gujarat",
    "City": "Rajkot",
    "Contact No.": "9510764035"
  },
  {
    "Organization": "West-2",
    "Manager Name": "Pritesh Solanki",
    "Manager Level": "CSM",
    "Dealer Name": "Apco Autosales-Rajkot",
    "SCode": "1S3089",
    "State": "Gujarat",
    "City": "Rajkot",
    "Contact No.": "8369331811"
  },
  {
    "Organization": "West-2",
    "Manager Name": "Mahesh / Divyesh Shah",
    "Manager Level": "WM",
    "Dealer Name": "Apco Autosales-Rajkot",
    "SCode": "1S3089",
    "State": "Gujarat",
    "City": "Rajkot",
    "Contact No.": "9510764032,9824651968"
  },
  {
    "Organization": "West-2",
    "Manager Name": "Jenil Dholakia",
    "Manager Level": "MD",
    "Dealer Name": "Apco Autosales-Rajkot",
    "SCode": "1S3089",
    "State": "Gujarat",
    "City": "Rajkot",
    "Contact No.": "9924654555"
  },
  {
    "Organization": "West-2",
    "Manager Name": "Amar Rajput / Amit Khapeker",
    "Manager Level": "WM",
    "Dealer Name": "Apco Motors-Ahmedabad",
    "SCode": "1S3036",
    "State": "Gujarat",
    "City": "Ahmedabad",
    "Contact No.": "9510050261,9274694835"
  },
  {
    "Organization": "West-2",
    "Manager Name": "Sudhir Kumar",
    "Manager Level": "RSM",
    "Dealer Name": "Apco Motors-Ahmedabad",
    "SCode": "1S3036",
    "State": "Gujarat",
    "City": "Ahmedabad",
    "Contact No.": "9752542733"
  },
  {
    "Organization": "West-2",
    "Manager Name": "Vipul Barot",
    "Manager Level": "ASM",
    "Dealer Name": "Apco Motors-Ahmedabad",
    "SCode": "1S3036",
    "State": "Gujarat",
    "City": "Ahmedabad",
    "Contact No.": "9638341568"
  },
  {
    "Organization": "West-2",
    "Manager Name": "Vijay Yadav",
    "Manager Level": "CSM",
    "Dealer Name": "Apco Motors-Ahmedabad",
    "SCode": "1S3036",
    "State": "Gujarat",
    "City": "Ahmedabad",
    "Contact No.": "8860715185"
  },
  {
    "Organization": "West-2",
    "Manager Name": "Prakash Chauhan / Jenil Dholakiya",
    "Manager Level": "MD",
    "Dealer Name": "Apco Motors-Ahmedabad",
    "SCode": "1S3036",
    "State": "Gujarat",
    "City": "Ahmedabad",
    "Contact No.": "9904409295,9924654555"
  },
  {
    "Organization": "West-2",
    "Manager Name": "Pawan Sharma",
    "Manager Level": "EOS Site Incharge",
    "Dealer Name": "Apco Motors-Ahmedabad",
    "SCode": "1S3036",
    "State": "Gujarat",
    "City": "Ahmedabad",
    "Contact No.": "9099009188"
  },
  {
    "Organization": "West-2",
    "Manager Name": "Sudhir Kumar",
    "Manager Level": "RSM",
    "Dealer Name": "Apco Motors-Aslali",
    "SCode": "1S3035",
    "State": "Gujarat",
    "City": "Ahmedabad",
    "Contact No.": "9752542733"
  },
  {
    "Organization": "West-2",
    "Manager Name": "Shivklesh Yadav / Prakash Chauhan",
    "Manager Level": "WM",
    "Dealer Name": "Apco Motors-Aslali",
    "SCode": "1S3035",
    "State": "Gujarat",
    "City": "Ahmedabad",
    "Contact No.": "9824653546,9904409295"
  },
  {
    "Organization": "West-2",
    "Manager Name": "Vipul Barot",
    "Manager Level": "ASM",
    "Dealer Name": "Apco Motors-Aslali",
    "SCode": "1S3035",
    "State": "Gujarat",
    "City": "Ahmedabad",
    "Contact No.": "9638341568"
  },
  {
    "Organization": "West-2",
    "Manager Name": "Vijay Yadav",
    "Manager Level": "CSM",
    "Dealer Name": "Apco Motors-Aslali",
    "SCode": "1S3035",
    "State": "Gujarat",
    "City": "Ahmedabad",
    "Contact No.": "8860715185"
  },
  {
    "Organization": "West-2",
    "Manager Name": "Ajit Prajapati",
    "Manager Level": "EOS Site Incharge",
    "Dealer Name": "Apco Motors-Aslali",
    "SCode": "1S3035",
    "State": "Gujarat",
    "City": "Ahmedabad",
    "Contact No.": "9875150492"
  },
  {
    "Organization": "West-2",
    "Manager Name": "Mudit Joshi / Jenil Dholakiya",
    "Manager Level": "MD",
    "Dealer Name": "Apco Motors-Aslali",
    "SCode": "1S3035",
    "State": "Gujarat",
    "City": "Ahmedabad",
    "Contact No.": "7574899281,9924654555"
  },
  {
    "Organization": "West-2",
    "Manager Name": "Vikram / Prakash Chauhan",
    "Manager Level": "WM",
    "Dealer Name": "Apco Motors-Gandhinagar",
    "SCode": "1S3423",
    "State": "Gujarat",
    "City": "Gandhi nagar",
    "Contact No.": "7567888881,9904409295"
  },
  {
    "Organization": "West-2",
    "Manager Name": "Jaydeep Chavda",
    "Manager Level": "EOS Site Incharge",
    "Dealer Name": "Apco Motors-Gandhinagar",
    "SCode": "1S3423",
    "State": "Gujarat",
    "City": "Gandhi nagar",
    "Contact No.": "9274684259"
  },
  {
    "Organization": "West-2",
    "Manager Name": "Sudhir Kumar",
    "Manager Level": "RSM",
    "Dealer Name": "Apco Motors-Gandhinagar",
    "SCode": "1S3423",
    "State": "Gujarat",
    "City": "Gandhi nagar",
    "Contact No.": "9752542733"
  },
  {
    "Organization": "West-2",
    "Manager Name": "Mudit Joshi / Jenil Dholakiya",
    "Manager Level": "MD",
    "Dealer Name": "Apco Motors-Gandhinagar",
    "SCode": "1S3423",
    "State": "Gujarat",
    "City": "Gandhi nagar",
    "Contact No.": "7574899281,9924654555"
  },
  {
    "Organization": "West-2",
    "Manager Name": "Vijay Yadav",
    "Manager Level": "CSM",
    "Dealer Name": "Apco Motors-Gandhinagar",
    "SCode": "1S3423",
    "State": "Gujarat",
    "City": "Gandhi nagar",
    "Contact No.": "8860715185"
  },
  {
    "Organization": "West-2",
    "Manager Name": "Vipul Barot",
    "Manager Level": "ASM",
    "Dealer Name": "Apco Motors-Gandhinagar",
    "SCode": "1S3423",
    "State": "Gujarat",
    "City": "Gandhi nagar",
    "Contact No.": "9638341568"
  },
  {
    "Organization": "West-2",
    "Manager Name": "Mehul Seth / Mudit Joshi",
    "Manager Level": "MD",
    "Dealer Name": "Apco Motors-Himmatnagar",
    "SCode": "1S3091",
    "State": "Gujarat",
    "City": "Himatnagar",
    "Contact No.": "9824653565,7574899281"
  },
  {
    "Organization": "West-2",
    "Manager Name": "Sudhir Kumar",
    "Manager Level": "RSM",
    "Dealer Name": "Apco Motors-Himmatnagar",
    "SCode": "1S3091",
    "State": "Gujarat",
    "City": "Himatnagar",
    "Contact No.": "9752542733"
  },
  {
    "Organization": "West-2",
    "Manager Name": "Yayati joshi",
    "Manager Level": "WM",
    "Dealer Name": "Apco Motors-Himmatnagar",
    "SCode": "1S3091",
    "State": "Gujarat",
    "City": "Himatnagar",
    "Contact No.": "7574899331"
  },
  {
    "Organization": "West-2",
    "Manager Name": "Vipul Barot",
    "Manager Level": "ASM",
    "Dealer Name": "Apco Motors-Himmatnagar",
    "SCode": "1S3091",
    "State": "Gujarat",
    "City": "Himatnagar",
    "Contact No.": "9638341568"
  },
  {
    "Organization": "West-2",
    "Manager Name": "Karan Singh",
    "Manager Level": "EOS Site Incharge",
    "Dealer Name": "Apco Motors-Himmatnagar",
    "SCode": "1S3091",
    "State": "Gujarat",
    "City": "Himatnagar",
    "Contact No.": "9904103565"
  },
  {
    "Organization": "West-2",
    "Manager Name": "Deepak Basnayat",
    "Manager Level": "CSM",
    "Dealer Name": "Apco Motors-Himmatnagar",
    "SCode": "1S3091",
    "State": "Gujarat",
    "City": "Himatnagar",
    "Contact No.": "7300735475"
  },
  {
    "Organization": "West-2",
    "Manager Name": "Deepak Basnayat",
    "Manager Level": "CSM",
    "Dealer Name": "Apco Motors-Mehshana",
    "SCode": "1S3092",
    "State": "Gujarat",
    "City": "Mehshana",
    "Contact No.": "7300735475"
  },
  {
    "Organization": "West-2",
    "Manager Name": "Sudhir Kumar",
    "Manager Level": "RSM",
    "Dealer Name": "Apco Motors-Mehshana",
    "SCode": "1S3092",
    "State": "Gujarat",
    "City": "Mehshana",
    "Contact No.": "9752542733"
  },
  {
    "Organization": "West-2",
    "Manager Name": "Vipul Barot",
    "Manager Level": "ASM",
    "Dealer Name": "Apco Motors-Mehshana",
    "SCode": "1S3092",
    "State": "Gujarat",
    "City": "Mehshana",
    "Contact No.": "9638341568"
  },
  {
    "Organization": "West-2",
    "Manager Name": "Vikram Singh Chauhan / Mehul Seth",
    "Manager Level": "WM",
    "Dealer Name": "Apco Motors-Mehshana",
    "SCode": "1S3092",
    "State": "Gujarat",
    "City": "Mehshana",
    "Contact No.": "7574890044,9824653565"
  },
  {
    "Organization": "West-2",
    "Manager Name": "Mudit Joshi / Jenil Dholakiya",
    "Manager Level": "MD",
    "Dealer Name": "Apco Motors-Mehshana",
    "SCode": "1S3092",
    "State": "Gujarat",
    "City": "Mehshana",
    "Contact No.": "7574899281,9924654555"
  },
  {
    "Organization": "West-2",
    "Manager Name": "Yogesh Chaudhary",
    "Manager Level": "EOS Site Incharge",
    "Dealer Name": "Apco Motors-Mehshana",
    "SCode": "1S3092",
    "State": "Gujarat",
    "City": "Mehshana",
    "Contact No.": "9313926685"
  },
  {
    "Organization": "West-2",
    "Manager Name": "Sudhir Kumar",
    "Manager Level": "RSM",
    "Dealer Name": "Apco Motors-Sanathal",
    "SCode": "1S3340",
    "State": "Gujarat",
    "City": "Sanathal",
    "Contact No.": "9752542733"
  },
  {
    "Organization": "West-2",
    "Manager Name": "Vipul Barot",
    "Manager Level": "ASM",
    "Dealer Name": "Apco Motors-Sanathal",
    "SCode": "1S3340",
    "State": "Gujarat",
    "City": "Sanathal",
    "Contact No.": "9638341568"
  },
  {
    "Organization": "West-2",
    "Manager Name": "Vikash Jogi",
    "Manager Level": "EOS Site Incharge",
    "Dealer Name": "Apco Motors-Sanathal",
    "SCode": "1S3340",
    "State": "Gujarat",
    "City": "Sanathal",
    "Contact No.": "9106546483"
  },
  {
    "Organization": "West-2",
    "Manager Name": "Jitesh Kumar / Prakash Chauhan",
    "Manager Level": "WM",
    "Dealer Name": "Apco Motors-Sanathal",
    "SCode": "1S3340",
    "State": "Gujarat",
    "City": "Sanathal",
    "Contact No.": "7574812700,9904409295"
  },
  {
    "Organization": "West-2",
    "Manager Name": "Mudit Joshi / Jenil Dholakiya",
    "Manager Level": "MD",
    "Dealer Name": "Apco Motors-Sanathal",
    "SCode": "1S3340",
    "State": "Gujarat",
    "City": "Sanathal",
    "Contact No.": "7574899281,9924654555"
  },
  {
    "Organization": "West-2",
    "Manager Name": "Vijay Yadav",
    "Manager Level": "CSM",
    "Dealer Name": "Apco Motors-Sanathal",
    "SCode": "1S3340",
    "State": "Gujarat",
    "City": "Sanathal",
    "Contact No.": "8860715185"
  },
  {
    "Organization": "South-2",
    "Manager Name": "N Narayanan",
    "Manager Level": "RSM",
    "Dealer Name": "Apex Automobiles-Kompally(Hyd)",
    "SCode": "1S6067",
    "State": "Telangana",
    "City": "Kompally",
    "Contact No.": "8123036700"
  },
  {
    "Organization": "South-2",
    "Manager Name": "Rahul",
    "Manager Level": "MD",
    "Dealer Name": "Apex Automobiles-Kompally(Hyd)",
    "SCode": "1S6067",
    "State": "Telangana",
    "City": "Kompally",
    "Contact No.": "9912377033"
  },
  {
    "Organization": "South-2",
    "Manager Name": "Sandeep",
    "Manager Level": "WM",
    "Dealer Name": "Apex Automobiles-Kompally(Hyd)",
    "SCode": "1S6067",
    "State": "Telangana",
    "City": "Kompally",
    "Contact No.": "9912377033"
  },
  {
    "Organization": "South-2",
    "Manager Name": "Rama Krishna",
    "Manager Level": "EOS Site Incharge",
    "Dealer Name": "Apex Automobiles-Kompally(Hyd)",
    "SCode": "1S6067",
    "State": "Telangana",
    "City": "Kompally",
    "Contact No.": "9912377011"
  },
  {
    "Organization": "South-2",
    "Manager Name": "K Balaji Ravi Shankar (D) / Bhashipangu Upendar (N)",
    "Manager Level": "CSM",
    "Dealer Name": "Apex Automobiles-Kompally(Hyd)",
    "SCode": "1S6067",
    "State": "Telangana",
    "City": "Kompally",
    "Contact No.": "9959355562,9154141679"
  },
  {
    "Organization": "South-2",
    "Manager Name": "Ikkurthy Srikanth",
    "Manager Level": "ASM",
    "Dealer Name": "Apex Automobiles-Kompally(Hyd)",
    "SCode": "1S6067",
    "State": "Telangana",
    "City": "Kompally",
    "Contact No.": "9550801110"
  },
  {
    "Organization": "South-2",
    "Manager Name": "K Balaji Ravi Shankar (D) / Bhashipangu Upendar (N)",
    "Manager Level": "CSM",
    "Dealer Name": "Apex Automobiles-Palamakole",
    "SCode": "1S6155",
    "State": "Telangana",
    "City": "Palamakole",
    "Contact No.": "9959355562,9154141679"
  },
  {
    "Organization": "South-2",
    "Manager Name": "N Narayanan",
    "Manager Level": "RSM",
    "Dealer Name": "Apex Automobiles-Palamakole",
    "SCode": "1S6155",
    "State": "Telangana",
    "City": "Palamakole",
    "Contact No.": "8123036700"
  },
  {
    "Organization": "South-2",
    "Manager Name": "A Srinivas Rao",
    "Manager Level": "MD",
    "Dealer Name": "Apex Automobiles-Palamakole",
    "SCode": "1S6155",
    "State": "Telangana",
    "City": "Palamakole",
    "Contact No.": "9177566011"
  },
  {
    "Organization": "South-2",
    "Manager Name": "Sirish",
    "Manager Level": "WM",
    "Dealer Name": "Apex Automobiles-Palamakole",
    "SCode": "1S6155",
    "State": "Telangana",
    "City": "Palamakole",
    "Contact No.": "9177600079"
  },
  {
    "Organization": "South-2",
    "Manager Name": "Swamy",
    "Manager Level": "EOS Site Incharge",
    "Dealer Name": "Apex Automobiles-Palamakole",
    "SCode": "1S6155",
    "State": "Telangana",
    "City": "Palamakole",
    "Contact No.": "9154895498"
  },
  {
    "Organization": "South-2",
    "Manager Name": "Ikkurthy Srikanth",
    "Manager Level": "ASM",
    "Dealer Name": "Apex Automobiles-Palamakole",
    "SCode": "1S6155",
    "State": "Telangana",
    "City": "Palamakole",
    "Contact No.": "9550801110"
  },
  {
    "Organization": "North-2",
    "Manager Name": "Rajkumar Vaishnav",
    "Manager Level": "ASM",
    "Dealer Name": "Arihant Auto Care-Beawar",
    "SCode": "1S7097",
    "State": "Rajasthan",
    "City": "Ajmer",
    "Contact No.": "9636756000"
  },
  {
    "Organization": "North-2",
    "Manager Name": "Shivam Bhardwaj / Nandkishor",
    "Manager Level": "CSM",
    "Dealer Name": "Arihant Auto Care-Beawar",
    "SCode": "1S7097",
    "State": "Rajasthan",
    "City": "Ajmer",
    "Contact No.": "7878175706,7389944049"
  },
  {
    "Organization": "North-2",
    "Manager Name": "Sher Singh",
    "Manager Level": "WM",
    "Dealer Name": "Arihant Auto Care-Beawar",
    "SCode": "1S7097",
    "State": "Rajasthan",
    "City": "Ajmer",
    "Contact No.": "8302722617"
  },
  {
    "Organization": "North-2",
    "Manager Name": "Krishnendu Saha",
    "Manager Level": "RSM",
    "Dealer Name": "Arihant Auto Care-Beawar",
    "SCode": "1S7097",
    "State": "Rajasthan",
    "City": "Ajmer",
    "Contact No.": "7980433425"
  },
  {
    "Organization": "North-2",
    "Manager Name": "Devang Jain",
    "Manager Level": "MD",
    "Dealer Name": "Arihant Auto Care-Beawar",
    "SCode": "1S7097",
    "State": "Rajasthan",
    "City": "Ajmer",
    "Contact No.": "6377475300"
  },
  {
    "Organization": "South-2",
    "Manager Name": "Lokesh",
    "Manager Level": "MD",
    "Dealer Name": "Asha Motors Service-Dabaspet",
    "SCode": "1S6096",
    "State": "Karnataka",
    "City": "Dabaspet",
    "Contact No.": "9986073845"
  },
  {
    "Organization": "South-2",
    "Manager Name": "M Karthik (D) / Jeevan Kumar (N)",
    "Manager Level": "CSM",
    "Dealer Name": "Asha Motors Service-Dabaspet",
    "SCode": "1S6096",
    "State": "Karnataka",
    "City": "Dabaspet",
    "Contact No.": "7904167378,7892822611"
  },
  {
    "Organization": "South-2",
    "Manager Name": "S Balaji",
    "Manager Level": "ASM",
    "Dealer Name": "Asha Motors Service-Dabaspet",
    "SCode": "1S6096",
    "State": "Karnataka",
    "City": "Dabaspet",
    "Contact No.": "9840833723"
  },
  {
    "Organization": "South-2",
    "Manager Name": "Anjinappa",
    "Manager Level": "EOS Site Incharge",
    "Dealer Name": "Asha Motors Service-Dabaspet",
    "SCode": "1S6096",
    "State": "Karnataka",
    "City": "Dabaspet",
    "Contact No.": "9900045463"
  },
  {
    "Organization": "South-2",
    "Manager Name": "Harsha",
    "Manager Level": "WM",
    "Dealer Name": "Asha Motors Service-Dabaspet",
    "SCode": "1S6096",
    "State": "Karnataka",
    "City": "Dabaspet",
    "Contact No.": "9900045461"
  },
  {
    "Organization": "South-2",
    "Manager Name": "N Narayanan",
    "Manager Level": "RSM",
    "Dealer Name": "Asha Motors Service-Dabaspet",
    "SCode": "1S6096",
    "State": "Karnataka",
    "City": "Dabaspet",
    "Contact No.": "8123036700"
  },
  {
    "Organization": "South-2",
    "Manager Name": "Subhachandra",
    "Manager Level": "MD",
    "Dealer Name": "Asha Motors Service-Tumkur",
    "SCode": "1S6040",
    "State": "Karnataka",
    "City": "Tumkur",
    "Contact No.": "9448363845"
  },
  {
    "Organization": "South-2",
    "Manager Name": "Sadiq Pasha",
    "Manager Level": "WM",
    "Dealer Name": "Asha Motors Service-Tumkur",
    "SCode": "1S6040",
    "State": "Karnataka",
    "City": "Tumkur",
    "Contact No.": "9980901343"
  },
  {
    "Organization": "South-2",
    "Manager Name": "Madhusudan",
    "Manager Level": "EOS Site Incharge",
    "Dealer Name": "Asha Motors Service-Tumkur",
    "SCode": "1S6040",
    "State": "Karnataka",
    "City": "Tumkur",
    "Contact No.": "7022671001"
  },
  {
    "Organization": "South-2",
    "Manager Name": "M Karthik (D) / Jeevan Kumar (N)",
    "Manager Level": "CSM",
    "Dealer Name": "Asha Motors Service-Tumkur",
    "SCode": "1S6040",
    "State": "Karnataka",
    "City": "Tumkur",
    "Contact No.": "7904167378,7892822611"
  },
  {
    "Organization": "South-2",
    "Manager Name": "N Narayanan",
    "Manager Level": "RSM",
    "Dealer Name": "Asha Motors Service-Tumkur",
    "SCode": "1S6040",
    "State": "Karnataka",
    "City": "Tumkur",
    "Contact No.": "8123036700"
  },
  {
    "Organization": "South-2",
    "Manager Name": "S Balaji",
    "Manager Level": "ASM",
    "Dealer Name": "Asha Motors Service-Tumkur",
    "SCode": "1S6040",
    "State": "Karnataka",
    "City": "Tumkur",
    "Contact No.": "9840833723"
  },
  {
    "Organization": "West-2",
    "Manager Name": "Sajid Lakha",
    "Manager Level": "EOS Site Incharge",
    "Dealer Name": "Auto Talent Hub-Gadu",
    "SCode": "1S3449",
    "State": "Gujarat",
    "City": "Junagadh",
    "Contact No.": "9081153534"
  },
  {
    "Organization": "West-2",
    "Manager Name": "Pritesh Solanki",
    "Manager Level": "CSM",
    "Dealer Name": "Auto Talent Hub-Gadu",
    "SCode": "1S3449",
    "State": "Gujarat",
    "City": "Junagadh",
    "Contact No.": "8369331811"
  },
  {
    "Organization": "West-2",
    "Manager Name": "Sudhir Kumar",
    "Manager Level": "RSM",
    "Dealer Name": "Auto Talent Hub-Gadu",
    "SCode": "1S3449",
    "State": "Gujarat",
    "City": "Junagadh",
    "Contact No.": "9752542733"
  },
  {
    "Organization": "West-2",
    "Manager Name": "Yasin Lakha",
    "Manager Level": "MD",
    "Dealer Name": "Auto Talent Hub-Gadu",
    "SCode": "1S3449",
    "State": "Gujarat",
    "City": "Junagadh",
    "Contact No.": "9723659098"
  },
  {
    "Organization": "West-2",
    "Manager Name": "Vipul Barot",
    "Manager Level": "ASM",
    "Dealer Name": "Auto Talent Hub-Gadu",
    "SCode": "1S3449",
    "State": "Gujarat",
    "City": "Junagadh",
    "Contact No.": "9638341568"
  },
  {
    "Organization": "South-1",
    "Manager Name": "Aakash V (D) / Yuvaraj B (N)",
    "Manager Level": "CSM",
    "Dealer Name": "Automotive Marketing P.Ltd (HD/BUS)-Malapparambu",
    "SCode": "1S4050",
    "State": "Kerala",
    "City": "Malaparamba",
    "Contact No.": "9003555672,9543338783"
  },
  {
    "Organization": "South-1",
    "Manager Name": "Radhakrishnan",
    "Manager Level": "RSM",
    "Dealer Name": "Automotive Marketing P.Ltd (HD/BUS)-Malapparambu",
    "SCode": "1S4050",
    "State": "Kerala",
    "City": "Malaparamba",
    "Contact No.": "9840730250"
  },
  {
    "Organization": "South-1",
    "Manager Name": "Akhin (D) / Sharon (N)",
    "Manager Level": "EOS Site Incharge",
    "Dealer Name": "Automotive Marketing P.Ltd (HD/BUS)-Malapparambu",
    "SCode": "1S4050",
    "State": "Kerala",
    "City": "Malaparamba",
    "Contact No.": "9400055301,8086862959"
  },
  {
    "Organization": "South-1",
    "Manager Name": "Shaji K",
    "Manager Level": "WM",
    "Dealer Name": "Automotive Marketing P.Ltd (HD/BUS)-Malapparambu",
    "SCode": "1S4050",
    "State": "Kerala",
    "City": "Malaparamba",
    "Contact No.": "9447779990"
  },
  {
    "Organization": "South-1",
    "Manager Name": "MR. Georgy Zachariah",
    "Manager Level": "ASM",
    "Dealer Name": "Automotive Marketing P.Ltd (HD/BUS)-Malapparambu",
    "SCode": "1S4050",
    "State": "Kerala",
    "City": "Malaparamba",
    "Contact No.": "9895398896"
  },
  {
    "Organization": "South-1",
    "Manager Name": "Prasanth",
    "Manager Level": "MD",
    "Dealer Name": "Automotive Marketing P.Ltd (HD/BUS)-Malapparambu",
    "SCode": "1S4050",
    "State": "Kerala",
    "City": "Malaparamba",
    "Contact No.": "9447774422"
  },
  {
    "Organization": "South-1",
    "Manager Name": "Radhakrishnan",
    "Manager Level": "RSM",
    "Dealer Name": "Automotive Marketing P.Ltd (LMD)-Pavangad",
    "SCode": "1S4010",
    "State": "Kerala",
    "City": "Pavangad",
    "Contact No.": "9840730250"
  },
  {
    "Organization": "South-1",
    "Manager Name": "Muhammad Shamneesh M",
    "Manager Level": "WM",
    "Dealer Name": "Automotive Marketing P.Ltd (LMD)-Pavangad",
    "SCode": "1S4010",
    "State": "Kerala",
    "City": "Pavangad",
    "Contact No.": "9633600345"
  },
  {
    "Organization": "South-1",
    "Manager Name": "MR. Georgy Zachariah",
    "Manager Level": "ASM",
    "Dealer Name": "Automotive Marketing P.Ltd (LMD)-Pavangad",
    "SCode": "1S4010",
    "State": "Kerala",
    "City": "Pavangad",
    "Contact No.": "9895398896"
  },
  {
    "Organization": "South-1",
    "Manager Name": "Prasanth",
    "Manager Level": "MD",
    "Dealer Name": "Automotive Marketing P.Ltd (LMD)-Pavangad",
    "SCode": "1S4010",
    "State": "Kerala",
    "City": "Pavangad",
    "Contact No.": "9447774422"
  },
  {
    "Organization": "South-1",
    "Manager Name": "Vibin (D) / Sharon (N)",
    "Manager Level": "EOS Site Incharge",
    "Dealer Name": "Automotive Marketing P.Ltd (LMD)-Pavangad",
    "SCode": "1S4010",
    "State": "Kerala",
    "City": "Pavangad",
    "Contact No.": "8086862339,8086862959"
  },
  {
    "Organization": "South-1",
    "Manager Name": "Vishwam E (D) / Yuvaraj B (N)",
    "Manager Level": "CSM",
    "Dealer Name": "Automotive Marketing P.Ltd (LMD)-Pavangad",
    "SCode": "1S4010",
    "State": "Kerala",
    "City": "Pavangad",
    "Contact No.": "7418556663,9543338783"
  },
  {
    "Organization": "South-1",
    "Manager Name": "Prasanth",
    "Manager Level": "MD",
    "Dealer Name": "Automotive Marketing P.Ltd-Kandhangad",
    "SCode": "1S4049",
    "State": "Kerala",
    "City": "Kanhangad",
    "Contact No.": "9447774422"
  },
  {
    "Organization": "South-1",
    "Manager Name": "MR. Georgy Zachariah",
    "Manager Level": "ASM",
    "Dealer Name": "Automotive Marketing P.Ltd-Kandhangad",
    "SCode": "1S4049",
    "State": "Kerala",
    "City": "Kanhangad",
    "Contact No.": "9895398896"
  },
  {
    "Organization": "South-1",
    "Manager Name": "Ashish Sabu (D) / Sharon (N)",
    "Manager Level": "EOS Site Incharge",
    "Dealer Name": "Automotive Marketing P.Ltd-Kandhangad",
    "SCode": "1S4049",
    "State": "Kerala",
    "City": "Kanhangad",
    "Contact No.": "8086862387,8086862959"
  },
  {
    "Organization": "South-1",
    "Manager Name": "Radhakrishnan",
    "Manager Level": "RSM",
    "Dealer Name": "Automotive Marketing P.Ltd-Kandhangad",
    "SCode": "1S4049",
    "State": "Kerala",
    "City": "Kanhangad",
    "Contact No.": "9840730250"
  },
  {
    "Organization": "South-1",
    "Manager Name": "Vishwam E (D) / Yuvaraj B (N)",
    "Manager Level": "CSM",
    "Dealer Name": "Automotive Marketing P.Ltd-Kandhangad",
    "SCode": "1S4049",
    "State": "Kerala",
    "City": "Kanhangad",
    "Contact No.": "7418556663,9543338783"
  },
  {
    "Organization": "South-1",
    "Manager Name": "Sachin / Alin Shiby (N)",
    "Manager Level": "WM",
    "Dealer Name": "Automotive Marketing P.Ltd-Kandhangad",
    "SCode": "1S4049",
    "State": "Kerala",
    "City": "Kanhangad",
    "Contact No.": "9447778852,8086862959"
  },
  {
    "Organization": "South-1",
    "Manager Name": "Vishwam E (D) / Yuvaraj B (N)",
    "Manager Level": "CSM",
    "Dealer Name": "Automotive Marketing P.Ltd-Kannur",
    "SCode": "1S4046",
    "State": "Kerala",
    "City": "Kannur",
    "Contact No.": "7418556663,9543338783"
  },
  {
    "Organization": "South-1",
    "Manager Name": "Mr. Madhu J / Alin Shiby (N)",
    "Manager Level": "WM",
    "Dealer Name": "Automotive Marketing P.Ltd-Kannur",
    "SCode": "1S4046",
    "State": "Kerala",
    "City": "Kannur",
    "Contact No.": "9447779992,8086862959"
  },
  {
    "Organization": "South-1",
    "Manager Name": "MR. Georgy Zachariah",
    "Manager Level": "ASM",
    "Dealer Name": "Automotive Marketing P.Ltd-Kannur",
    "SCode": "1S4046",
    "State": "Kerala",
    "City": "Kannur",
    "Contact No.": "9895398896"
  },
  {
    "Organization": "South-1",
    "Manager Name": "Prasanth",
    "Manager Level": "MD",
    "Dealer Name": "Automotive Marketing P.Ltd-Kannur",
    "SCode": "1S4046",
    "State": "Kerala",
    "City": "Kannur",
    "Contact No.": "9447774422"
  },
  {
    "Organization": "South-1",
    "Manager Name": "Radhakrishnan",
    "Manager Level": "RSM",
    "Dealer Name": "Automotive Marketing P.Ltd-Kannur",
    "SCode": "1S4046",
    "State": "Kerala",
    "City": "Kannur",
    "Contact No.": "9840730250"
  },
  {
    "Organization": "South-1",
    "Manager Name": "Akshay T (D) / Sharon (N)",
    "Manager Level": "EOS Site Incharge",
    "Dealer Name": "Automotive Marketing P.Ltd-Kannur",
    "SCode": "1S4046",
    "State": "Kerala",
    "City": "Kannur",
    "Contact No.": "9746995625,8086862959"
  },
  {
    "Organization": "South-1",
    "Manager Name": "Radhakrishnan",
    "Manager Level": "RSM",
    "Dealer Name": "Automotive Marketing P.Ltd-Manjeri",
    "SCode": "1S4047",
    "State": "Kerala",
    "City": "Manjeri",
    "Contact No.": "9840730250"
  },
  {
    "Organization": "South-1",
    "Manager Name": "Aebal Christy C J (D) / Yuvaraj B (N)",
    "Manager Level": "CSM",
    "Dealer Name": "Automotive Marketing P.Ltd-Manjeri",
    "SCode": "1S4047",
    "State": "Kerala",
    "City": "Manjeri",
    "Contact No.": "7358046976,9543338783"
  },
  {
    "Organization": "South-1",
    "Manager Name": "Prasanth",
    "Manager Level": "MD",
    "Dealer Name": "Automotive Marketing P.Ltd-Manjeri",
    "SCode": "1S4047",
    "State": "Kerala",
    "City": "Manjeri",
    "Contact No.": "9447774422"
  },
  {
    "Organization": "South-1",
    "Manager Name": "Anandhu Anil (D) / Sharon (N)",
    "Manager Level": "EOS Site Incharge",
    "Dealer Name": "Automotive Marketing P.Ltd-Manjeri",
    "SCode": "1S4047",
    "State": "Kerala",
    "City": "Manjeri",
    "Contact No.": "8086862220,8086862959"
  },
  {
    "Organization": "South-1",
    "Manager Name": "Shafeek",
    "Manager Level": "WM",
    "Dealer Name": "Automotive Marketing P.Ltd-Manjeri",
    "SCode": "1S4047",
    "State": "Kerala",
    "City": "Manjeri",
    "Contact No.": "9447779190"
  },
  {
    "Organization": "South-1",
    "Manager Name": "MR. Georgy Zachariah",
    "Manager Level": "ASM",
    "Dealer Name": "Automotive Marketing P.Ltd-Manjeri",
    "SCode": "1S4047",
    "State": "Kerala",
    "City": "Manjeri",
    "Contact No.": "9895398896"
  },
  {
    "Organization": "South-1",
    "Manager Name": "Prasanth",
    "Manager Level": "MD",
    "Dealer Name": "Automotive Marketing P.Ltd-Wynad",
    "SCode": "1S4048",
    "State": "Kerala",
    "City": "Wayanad",
    "Contact No.": "9447774422"
  },
  {
    "Organization": "South-1",
    "Manager Name": "MUHAMMED YASEEN / Alin Shiby (N)",
    "Manager Level": "WM",
    "Dealer Name": "Automotive Marketing P.Ltd-Wynad",
    "SCode": "1S4048",
    "State": "Kerala",
    "City": "Wayanad",
    "Contact No.": "9447778980,8086862959"
  },
  {
    "Organization": "South-1",
    "Manager Name": "Aakash V (D) / Yuvaraj B (N)",
    "Manager Level": "CSM",
    "Dealer Name": "Automotive Marketing P.Ltd-Wynad",
    "SCode": "1S4048",
    "State": "Kerala",
    "City": "Wayanad",
    "Contact No.": "9003555672,9543338783"
  },
  {
    "Organization": "South-1",
    "Manager Name": "Albin (D) / Sharon (N)",
    "Manager Level": "EOS Site Incharge",
    "Dealer Name": "Automotive Marketing P.Ltd-Wynad",
    "SCode": "1S4048",
    "State": "Kerala",
    "City": "Wayanad",
    "Contact No.": "9447779594,8086862959"
  },
  {
    "Organization": "South-1",
    "Manager Name": "MR. Georgy Zachariah",
    "Manager Level": "ASM",
    "Dealer Name": "Automotive Marketing P.Ltd-Wynad",
    "SCode": "1S4048",
    "State": "Kerala",
    "City": "Wayanad",
    "Contact No.": "9895398896"
  },
  {
    "Organization": "South-1",
    "Manager Name": "Radhakrishnan",
    "Manager Level": "RSM",
    "Dealer Name": "Automotive Marketing P.Ltd-Wynad",
    "SCode": "1S4048",
    "State": "Kerala",
    "City": "Wayanad",
    "Contact No.": "9840730250"
  },
  {
    "Organization": "South-2",
    "Manager Name": "N Narayanan",
    "Manager Level": "RSM",
    "Dealer Name": "Automotive Marketing Pvt Ltd-Avalahalli",
    "SCode": "1S6074",
    "State": "Karnataka",
    "City": "Avalahalli",
    "Contact No.": "8123036700"
  },
  {
    "Organization": "South-2",
    "Manager Name": "Surya Narayanan (D) / Jeevan Kumar (N)",
    "Manager Level": "CSM",
    "Dealer Name": "Automotive Marketing Pvt Ltd-Avalahalli",
    "SCode": "1S6074",
    "State": "Karnataka",
    "City": "Avalahalli",
    "Contact No.": "7760512233,7892822611"
  },
  {
    "Organization": "South-2",
    "Manager Name": "Parthiv Purani",
    "Manager Level": "MD",
    "Dealer Name": "Automotive Marketing Pvt Ltd-Avalahalli",
    "SCode": "1S6074",
    "State": "Karnataka",
    "City": "Avalahalli",
    "Contact No.": "9686621617"
  },
  {
    "Organization": "South-2",
    "Manager Name": "S Balaji",
    "Manager Level": "ASM",
    "Dealer Name": "Automotive Marketing Pvt Ltd-Avalahalli",
    "SCode": "1S6074",
    "State": "Karnataka",
    "City": "Avalahalli",
    "Contact No.": "9840833723"
  },
  {
    "Organization": "South-2",
    "Manager Name": "Girish (D) / Ajay (N)",
    "Manager Level": "WM",
    "Dealer Name": "Automotive Marketing Pvt Ltd-Avalahalli",
    "SCode": "1S6074",
    "State": "Karnataka",
    "City": "Avalahalli",
    "Contact No.": "9686601986,9606637404"
  },
  {
    "Organization": "South-2",
    "Manager Name": "Radhyeshyam",
    "Manager Level": "EOS Site Incharge",
    "Dealer Name": "Automotive Marketing Pvt Ltd-Avalahalli",
    "SCode": "1S6074",
    "State": "Karnataka",
    "City": "Avalahalli",
    "Contact No.": "9755058604"
  },
  {
    "Organization": "South-2",
    "Manager Name": "Parthiv Purani",
    "Manager Level": "MD",
    "Dealer Name": "Automotive Marketing Pvt Ltd-Kolar",
    "SCode": "1S6119",
    "State": "Karnataka",
    "City": "Kolar",
    "Contact No.": "9686621617"
  },
  {
    "Organization": "South-2",
    "Manager Name": "N Narayanan",
    "Manager Level": "RSM",
    "Dealer Name": "Automotive Marketing Pvt Ltd-Kolar",
    "SCode": "1S6119",
    "State": "Karnataka",
    "City": "Kolar",
    "Contact No.": "8123036700"
  },
  {
    "Organization": "South-2",
    "Manager Name": "Arun",
    "Manager Level": "EOS Site Incharge",
    "Dealer Name": "Automotive Marketing Pvt Ltd-Kolar",
    "SCode": "1S6119",
    "State": "Karnataka",
    "City": "Kolar",
    "Contact No.": "9686679542"
  },
  {
    "Organization": "South-2",
    "Manager Name": "Surya Narayanan (D) / Jeevan Kumar (N)",
    "Manager Level": "CSM",
    "Dealer Name": "Automotive Marketing Pvt Ltd-Kolar",
    "SCode": "1S6119",
    "State": "Karnataka",
    "City": "Kolar",
    "Contact No.": "7760512233,7892822611"
  },
  {
    "Organization": "South-2",
    "Manager Name": "Abdul S",
    "Manager Level": "WM",
    "Dealer Name": "Automotive Marketing Pvt Ltd-Kolar",
    "SCode": "1S6119",
    "State": "Karnataka",
    "City": "Kolar",
    "Contact No.": "9686662954"
  },
  {
    "Organization": "South-2",
    "Manager Name": "S Balaji",
    "Manager Level": "ASM",
    "Dealer Name": "Automotive Marketing Pvt Ltd-Kolar",
    "SCode": "1S6119",
    "State": "Karnataka",
    "City": "Kolar",
    "Contact No.": "9840833723"
  },
  {
    "Organization": "South-2",
    "Manager Name": "PRABHU S MUGALKHOD",
    "Manager Level": "ASM",
    "Dealer Name": "Automotive Marketing Pvt Ltd-Kundapur",
    "SCode": "1S6078",
    "State": "Karnataka",
    "City": "Udupi",
    "Contact No.": "9980512550"
  },
  {
    "Organization": "South-2",
    "Manager Name": "N Narayanan",
    "Manager Level": "RSM",
    "Dealer Name": "Automotive Marketing Pvt Ltd-Kundapur",
    "SCode": "1S6078",
    "State": "Karnataka",
    "City": "Udupi",
    "Contact No.": "8123036700"
  },
  {
    "Organization": "South-2",
    "Manager Name": "Mr. Shailesh",
    "Manager Level": "WM",
    "Dealer Name": "Automotive Marketing Pvt Ltd-Kundapur",
    "SCode": "1S6078",
    "State": "Karnataka",
    "City": "Udupi",
    "Contact No.": "9449861385"
  },
  {
    "Organization": "South-2",
    "Manager Name": "Shivanand",
    "Manager Level": "EOS Site Incharge",
    "Dealer Name": "Automotive Marketing Pvt Ltd-Kundapur",
    "SCode": "1S6078",
    "State": "Karnataka",
    "City": "Udupi",
    "Contact No.": "9449861392"
  },
  {
    "Organization": "South-2",
    "Manager Name": "Mr. Gururaj",
    "Manager Level": "MD",
    "Dealer Name": "Automotive Marketing Pvt Ltd-Kundapur",
    "SCode": "1S6078",
    "State": "Karnataka",
    "City": "Udupi",
    "Contact No.": "9108461522"
  },
  {
    "Organization": "South-2",
    "Manager Name": "Govardhan H C (D) / Mahamadali T Maniyar (N)",
    "Manager Level": "CSM",
    "Dealer Name": "Automotive Marketing Pvt Ltd-Kundapur",
    "SCode": "1S6078",
    "State": "Karnataka",
    "City": "Udupi",
    "Contact No.": "8904513336,9972619686"
  },
  {
    "Organization": "South-2",
    "Manager Name": "Venkatesha (EVS) / N Ramdas Pai (D)",
    "Manager Level": "CSM",
    "Dealer Name": "Automotive Marketing Pvt Ltd-Mangalore",
    "SCode": "1S6064",
    "State": "Karnataka",
    "City": "Mangaluru",
    "Contact No.": "9108361445,7259221942"
  },
  {
    "Organization": "South-2",
    "Manager Name": "Subrahmanya",
    "Manager Level": "WM",
    "Dealer Name": "Automotive Marketing Pvt Ltd-Mangalore",
    "SCode": "1S6064",
    "State": "Karnataka",
    "City": "Mangaluru",
    "Contact No.": "9900554522"
  },
  {
    "Organization": "South-2",
    "Manager Name": "Akshith",
    "Manager Level": "EOS Site Incharge",
    "Dealer Name": "Automotive Marketing Pvt Ltd-Mangalore",
    "SCode": "1S6064",
    "State": "Karnataka",
    "City": "Mangaluru",
    "Contact No.": "9900554524"
  },
  {
    "Organization": "South-2",
    "Manager Name": "Govardhan H C (D) / Mahamadali T Maniyar (N)",
    "Manager Level": "CSM",
    "Dealer Name": "Automotive Marketing Pvt Ltd-Mangalore",
    "SCode": "1S6064",
    "State": "Karnataka",
    "City": "Mangaluru",
    "Contact No.": "8904513336,9972619686"
  },
  {
    "Organization": "South-2",
    "Manager Name": "N Narayanan",
    "Manager Level": "RSM",
    "Dealer Name": "Automotive Marketing Pvt Ltd-Mangalore",
    "SCode": "1S6064",
    "State": "Karnataka",
    "City": "Mangaluru",
    "Contact No.": "8123036700"
  },
  {
    "Organization": "South-2",
    "Manager Name": "PRABHU S MUGALKHOD",
    "Manager Level": "ASM",
    "Dealer Name": "Automotive Marketing Pvt Ltd-Mangalore",
    "SCode": "1S6064",
    "State": "Karnataka",
    "City": "Mangaluru",
    "Contact No.": "9980512550"
  },
  {
    "Organization": "South-2",
    "Manager Name": "Mr. Gururaj",
    "Manager Level": "MD",
    "Dealer Name": "Automotive Marketing Pvt Ltd-Mangalore",
    "SCode": "1S6064",
    "State": "Karnataka",
    "City": "Mangaluru",
    "Contact No.": "9108461522"
  },
  {
    "Organization": "East-1",
    "Manager Name": "Ujjal Pal",
    "Manager Level": "WM",
    "Dealer Name": "BD Jagannath Automobiles-Basirhat",
    "SCode": "1S2241",
    "State": "West Bengal",
    "City": "Habra",
    "Contact No.": "9332089391"
  },
  {
    "Organization": "East-1",
    "Manager Name": "Yogeshwar Singh",
    "Manager Level": "RSM",
    "Dealer Name": "BD Jagannath Automobiles-Basirhat",
    "SCode": "1S2241",
    "State": "West Bengal",
    "City": "Habra",
    "Contact No.": "9717966997"
  },
  {
    "Organization": "East-1",
    "Manager Name": "Mainak Das",
    "Manager Level": "CSM",
    "Dealer Name": "BD Jagannath Automobiles-Basirhat",
    "SCode": "1S2241",
    "State": "West Bengal",
    "City": "Habra",
    "Contact No.": "8910943653"
  },
  {
    "Organization": "East-1",
    "Manager Name": "Bimal Ghosh",
    "Manager Level": "MD",
    "Dealer Name": "BD Jagannath Automobiles-Basirhat",
    "SCode": "1S2241",
    "State": "West Bengal",
    "City": "Habra",
    "Contact No.": "9332089390"
  },
  {
    "Organization": "East-1",
    "Manager Name": "Abhirup Ghosh",
    "Manager Level": "ASM",
    "Dealer Name": "BD Jagannath Automobiles-Basirhat",
    "SCode": "1S2241",
    "State": "West Bengal",
    "City": "Habra",
    "Contact No.": "9073378080"
  },
  {
    "Organization": "East-1",
    "Manager Name": "Hemant Kumar",
    "Manager Level": "CSM",
    "Dealer Name": "Badrinath Motors-Kanki",
    "SCode": "1S2203",
    "State": "West Bengal",
    "City": "Raiganj",
    "Contact No.": "7982996478"
  },
  {
    "Organization": "East-1",
    "Manager Name": "SANJAY SINGH",
    "Manager Level": "WM",
    "Dealer Name": "Badrinath Motors-Kanki",
    "SCode": "1S2203",
    "State": "West Bengal",
    "City": "Raiganj",
    "Contact No.": "8759844071"
  },
  {
    "Organization": "East-1",
    "Manager Name": "Sanjeev Kumar",
    "Manager Level": "EOS Site Incharge",
    "Dealer Name": "Badrinath Motors-Kanki",
    "SCode": "1S2203",
    "State": "West Bengal",
    "City": "Raiganj",
    "Contact No.": "8840612857"
  },
  {
    "Organization": "East-1",
    "Manager Name": "Yogeshwar Singh",
    "Manager Level": "RSM",
    "Dealer Name": "Badrinath Motors-Kanki",
    "SCode": "1S2203",
    "State": "West Bengal",
    "City": "Raiganj",
    "Contact No.": "9717966997"
  },
  {
    "Organization": "East-1",
    "Manager Name": "Abhirup Ghosh",
    "Manager Level": "ASM",
    "Dealer Name": "Badrinath Motors-Kanki",
    "SCode": "1S2203",
    "State": "West Bengal",
    "City": "Raiganj",
    "Contact No.": "9073378080"
  },
  {
    "Organization": "East-1",
    "Manager Name": "DEBRAJ SAHA",
    "Manager Level": "MD",
    "Dealer Name": "Badrinath Motors-Kanki",
    "SCode": "1S2203",
    "State": "West Bengal",
    "City": "Raiganj",
    "Contact No.": "8617432182"
  },
  {
    "Organization": "North-2",
    "Manager Name": "Krishnendu Saha",
    "Manager Level": "RSM",
    "Dealer Name": "Bajrang Automobiles Pvt.Ltd-Haldwani",
    "SCode": "1S1127",
    "State": "Uttarakhand",
    "City": "Haldwani",
    "Contact No.": "7980433425"
  },
  {
    "Organization": "North-2",
    "Manager Name": "Mukesh Saxena",
    "Manager Level": "ASM",
    "Dealer Name": "Bajrang Automobiles Pvt.Ltd-Haldwani",
    "SCode": "1S1127",
    "State": "Uttarakhand",
    "City": "Haldwani",
    "Contact No.": "9599117560"
  },
  {
    "Organization": "North-2",
    "Manager Name": "Nandan Singh",
    "Manager Level": "EOS Site Incharge",
    "Dealer Name": "Bajrang Automobiles Pvt.Ltd-Haldwani",
    "SCode": "1S1127",
    "State": "Uttarakhand",
    "City": "Haldwani",
    "Contact No.": "8393883607"
  },
  {
    "Organization": "North-2",
    "Manager Name": "Ramesh Rawat",
    "Manager Level": "WM",
    "Dealer Name": "Bajrang Automobiles Pvt.Ltd-Haldwani",
    "SCode": "1S1127",
    "State": "Uttarakhand",
    "City": "Haldwani",
    "Contact No.": "8393883606"
  },
  {
    "Organization": "North-2",
    "Manager Name": "Pushkar Pant",
    "Manager Level": "MD",
    "Dealer Name": "Bajrang Automobiles Pvt.Ltd-Haldwani",
    "SCode": "1S1127",
    "State": "Uttarakhand",
    "City": "Haldwani",
    "Contact No.": "9756708055"
  },
  {
    "Organization": "North-2",
    "Manager Name": "Vinayak Tyagi (D) / Saket Singh (N)",
    "Manager Level": "CSM",
    "Dealer Name": "Bajrang Automobiles Pvt.Ltd-Haldwani",
    "SCode": "1S1127",
    "State": "Uttarakhand",
    "City": "Haldwani",
    "Contact No.": "7448051315,8709859215"
  },
  {
    "Organization": "North-2",
    "Manager Name": "Krishnendu Saha",
    "Manager Level": "RSM",
    "Dealer Name": "Bajrang Automobiles Pvt.Ltd-Pithoragarh",
    "SCode": "1S1161",
    "State": "Uttarakhand",
    "City": "Pithoragarh",
    "Contact No.": "7980433425"
  },
  {
    "Organization": "North-2",
    "Manager Name": "Vinayak Tyagi (D) / Saket Singh (N)",
    "Manager Level": "CSM",
    "Dealer Name": "Bajrang Automobiles Pvt.Ltd-Pithoragarh",
    "SCode": "1S1161",
    "State": "Uttarakhand",
    "City": "Pithoragarh",
    "Contact No.": "7448051315,8709859215"
  },
  {
    "Organization": "North-2",
    "Manager Name": "Pushkar Pant",
    "Manager Level": "MD",
    "Dealer Name": "Bajrang Automobiles Pvt.Ltd-Pithoragarh",
    "SCode": "1S1161",
    "State": "Uttarakhand",
    "City": "Pithoragarh",
    "Contact No.": "9756708055"
  },
  {
    "Organization": "North-2",
    "Manager Name": "Mukesh Saxena",
    "Manager Level": "ASM",
    "Dealer Name": "Bajrang Automobiles Pvt.Ltd-Pithoragarh",
    "SCode": "1S1161",
    "State": "Uttarakhand",
    "City": "Pithoragarh",
    "Contact No.": "9599117560"
  },
  {
    "Organization": "North-2",
    "Manager Name": "Ritik Dhanik",
    "Manager Level": "WM",
    "Dealer Name": "Bajrang Automobiles Pvt.Ltd-Pithoragarh",
    "SCode": "1S1161",
    "State": "Uttarakhand",
    "City": "Pithoragarh",
    "Contact No.": "9756708027"
  },
  {
    "Organization": "North-2",
    "Manager Name": "Mukesh Saxena",
    "Manager Level": "ASM",
    "Dealer Name": "Bajrang Automobiles Pvt.Ltd-Rudrapur",
    "SCode": "1S1155",
    "State": "Uttarakhand",
    "City": "Rudrapur",
    "Contact No.": "9599117560"
  },
  {
    "Organization": "North-2",
    "Manager Name": "Krishnendu Saha",
    "Manager Level": "RSM",
    "Dealer Name": "Bajrang Automobiles Pvt.Ltd-Rudrapur",
    "SCode": "1S1155",
    "State": "Uttarakhand",
    "City": "Rudrapur",
    "Contact No.": "7980433425"
  },
  {
    "Organization": "North-2",
    "Manager Name": "Prem Upadhyay",
    "Manager Level": "WM",
    "Dealer Name": "Bajrang Automobiles Pvt.Ltd-Rudrapur",
    "SCode": "1S1155",
    "State": "Uttarakhand",
    "City": "Rudrapur",
    "Contact No.": "9756700093"
  },
  {
    "Organization": "North-2",
    "Manager Name": "Vinayak Tyagi (D) / Saket Singh (N)",
    "Manager Level": "CSM",
    "Dealer Name": "Bajrang Automobiles Pvt.Ltd-Rudrapur",
    "SCode": "1S1155",
    "State": "Uttarakhand",
    "City": "Rudrapur",
    "Contact No.": "7448051315,8709859215"
  },
  {
    "Organization": "North-2",
    "Manager Name": "Mosim Khan",
    "Manager Level": "EOS Site Incharge",
    "Dealer Name": "Bajrang Automobiles Pvt.Ltd-Rudrapur",
    "SCode": "1S1155",
    "State": "Uttar Pradesh",
    "City": "Rudrapur",
    "Contact No.": "8279442586"
  },
  {
    "Organization": "North-2",
    "Manager Name": "Pushkar Pant",
    "Manager Level": "MD",
    "Dealer Name": "Bajrang Automobiles Pvt.Ltd-Rudrapur",
    "SCode": "1S1155",
    "State": "Uttarakhand",
    "City": "Rudrapur",
    "Contact No.": "9756708055"
  },
  {
    "Organization": "West-2",
    "Manager Name": "Sudhir Kumar",
    "Manager Level": "RSM",
    "Dealer Name": "Balaji Motors-Khandwa",
    "SCode": "1S5060",
    "State": "Madhya Pradesh",
    "City": "Khandwa",
    "Contact No.": "9752542733"
  },
  {
    "Organization": "West-2",
    "Manager Name": "Vivek Kumar",
    "Manager Level": "ASM",
    "Dealer Name": "Balaji Motors-Khandwa",
    "SCode": "1S5060",
    "State": "Madhya Pradesh",
    "City": "Khandwa",
    "Contact No.": "8171110903"
  },
  {
    "Organization": "West-2",
    "Manager Name": "Harsh Sharma",
    "Manager Level": "WM",
    "Dealer Name": "Balaji Motors-Khandwa",
    "SCode": "1S5060",
    "State": "Madhya Pradesh",
    "City": "Khandwa",
    "Contact No.": "9669663228,8109498590"
  },
  {
    "Organization": "West-2",
    "Manager Name": "Ram sharma",
    "Manager Level": "MD",
    "Dealer Name": "Balaji Motors-Khandwa",
    "SCode": "1S5060",
    "State": "Madhya Pradesh",
    "City": "Khandwa",
    "Contact No.": "7000300764"
  },
  {
    "Organization": "West-2",
    "Manager Name": "Mukesh Varma",
    "Manager Level": "EOS Site Incharge",
    "Dealer Name": "Balaji Motors-Khandwa",
    "SCode": "1S5060",
    "State": "Madhya Pradesh",
    "City": "Khandwa",
    "Contact No.": "9109587234"
  },
  {
    "Organization": "West-2",
    "Manager Name": "Himanshu Rawat",
    "Manager Level": "CSM",
    "Dealer Name": "Balaji Motors-Khandwa",
    "SCode": "1S5060",
    "State": "Madhya Pradesh",
    "City": "Khandwa",
    "Contact No.": "8630936244"
  },
  {
    "Organization": "North-2",
    "Manager Name": "Amit Pandey",
    "Manager Level": "ASM",
    "Dealer Name": "Balaji Motors-Shahpura",
    "SCode": "1S7041",
    "State": "Rajasthan",
    "City": "Shahpura",
    "Contact No.": "9099979633"
  },
  {
    "Organization": "North-2",
    "Manager Name": "Manoj Kr. Gurjar",
    "Manager Level": "EOS Site Incharge",
    "Dealer Name": "Balaji Motors-Shahpura",
    "SCode": "1S7041",
    "State": "Rajasthan",
    "City": "Shahpura",
    "Contact No.": "9079320617"
  },
  {
    "Organization": "North-2",
    "Manager Name": "Suresh Gurjar",
    "Manager Level": "MD",
    "Dealer Name": "Balaji Motors-Shahpura",
    "SCode": "1S7041",
    "State": "Rajasthan",
    "City": "Shahpura",
    "Contact No.": "8852959572"
  },
  {
    "Organization": "North-2",
    "Manager Name": "Krishnendu Saha",
    "Manager Level": "RSM",
    "Dealer Name": "Balaji Motors-Shahpura",
    "SCode": "1S7041",
    "State": "Rajasthan",
    "City": "Shahpura",
    "Contact No.": "7980433425"
  },
  {
    "Organization": "North-2",
    "Manager Name": "Kamal / Shyam Sundar",
    "Manager Level": "WM",
    "Dealer Name": "Balaji Motors-Shahpura",
    "SCode": "1S7041",
    "State": "Rajasthan",
    "City": "Shahpura",
    "Contact No.": "9982209576,8209330415"
  },
  {
    "Organization": "North-2",
    "Manager Name": "Amrit Satsangi / Shivam Bharadwaj (N)",
    "Manager Level": "CSM",
    "Dealer Name": "Balaji Motors-Shahpura",
    "SCode": "1S7041",
    "State": "Rajasthan",
    "City": "Shahpura",
    "Contact No.": "8302169270,7878175706"
  },
  {
    "Organization": "North-2",
    "Manager Name": "Rinku Kumar (D) / Shivam Bhardwaj (N)",
    "Manager Level": "CSM",
    "Dealer Name": "Balaji Motors-Sri Ganganagar",
    "SCode": "1S1207",
    "State": "Rajasthan",
    "City": "Sri ganganagar",
    "Contact No.": "9015965095,7878175707"
  },
  {
    "Organization": "North-2",
    "Manager Name": "Shubham",
    "Manager Level": "WM",
    "Dealer Name": "Balaji Motors-Sri Ganganagar",
    "SCode": "1S1207",
    "State": "Rajasthan",
    "City": "Sri Ganganagar",
    "Contact No.": "7665448000"
  },
  {
    "Organization": "North-2",
    "Manager Name": "Amit Pandey",
    "Manager Level": "ASM",
    "Dealer Name": "Balaji Motors-Sri Ganganagar",
    "SCode": "1S1207",
    "State": "Rajasthan",
    "City": "Sri ganganagar",
    "Contact No.": "9099979633"
  },
  {
    "Organization": "North-2",
    "Manager Name": "Krishnendu Saha",
    "Manager Level": "RSM",
    "Dealer Name": "Balaji Motors-Sri Ganganagar",
    "SCode": "1S1207",
    "State": "Rajasthan",
    "City": "Sri ganganagar",
    "Contact No.": "7980433425"
  },
  {
    "Organization": "North-1",
    "Manager Name": "Parveen Bansal",
    "Manager Level": "MD",
    "Dealer Name": "Bansal Motors-Karnal",
    "SCode": "1S1092",
    "State": "Haryana",
    "City": "Karnal",
    "Contact No.": "9812561119"
  },
  {
    "Organization": "North-1",
    "Manager Name": "Shashi / Sanjeev",
    "Manager Level": "EOS Site Incharge",
    "Dealer Name": "Bansal Motors-Karnal",
    "SCode": "1S1092",
    "State": "Haryana",
    "City": "Karnal",
    "Contact No.": "8053038005,9812999358"
  },
  {
    "Organization": "North-1",
    "Manager Name": "Sunny Verma",
    "Manager Level": "ASM",
    "Dealer Name": "Bansal Motors-Karnal",
    "SCode": "1S1092",
    "State": "Haryana",
    "City": "Karnal",
    "Contact No.": "7276047837"
  },
  {
    "Organization": "North-1",
    "Manager Name": "Adarsh Prasad",
    "Manager Level": "RSM",
    "Dealer Name": "Bansal Motors-Karnal",
    "SCode": "1S1092",
    "State": "Haryana",
    "City": "Karnal",
    "Contact No.": "9717996321"
  },
  {
    "Organization": "North-1",
    "Manager Name": "Sujeet Pandey",
    "Manager Level": "WM",
    "Dealer Name": "Bansal Motors-Karnal",
    "SCode": "1S1092",
    "State": "Haryana",
    "City": "Karnal",
    "Contact No.": "9050099560"
  },
  {
    "Organization": "North-1",
    "Manager Name": "Dheeraj Tehlan / Amitesh Kumar Sharma",
    "Manager Level": "CSM",
    "Dealer Name": "Bansal Motors-Karnal",
    "SCode": "1S1092",
    "State": "Haryana",
    "City": "Karnal",
    "Contact No.": "9671788557,9691357849"
  },
  {
    "Organization": "North-1",
    "Manager Name": "Gaurav Bansal",
    "Manager Level": "MD",
    "Dealer Name": "Bansal Motors-Sonipat",
    "SCode": "1S1151",
    "State": "Haryana",
    "City": "Sonipat",
    "Contact No.": "9992168000"
  },
  {
    "Organization": "North-1",
    "Manager Name": "Sunny Verma",
    "Manager Level": "ASM",
    "Dealer Name": "Bansal Motors-Sonipat",
    "SCode": "1S1151",
    "State": "Haryana",
    "City": "Sonipat",
    "Contact No.": "7276047837"
  },
  {
    "Organization": "North-1",
    "Manager Name": "Atul Kumar",
    "Manager Level": "EOS Site Incharge",
    "Dealer Name": "Bansal Motors-Sonipat",
    "SCode": "1S1151",
    "State": "Haryana",
    "City": "Sonipat",
    "Contact No.": "7419066500"
  },
  {
    "Organization": "North-1",
    "Manager Name": "Pradeep Singh",
    "Manager Level": "CSM",
    "Dealer Name": "Bansal Motors-Sonipat",
    "SCode": "1S1151",
    "State": "Haryana",
    "City": "Sonipat",
    "Contact No.": "9027524042"
  },
  {
    "Organization": "North-1",
    "Manager Name": "Adarsh Prasad",
    "Manager Level": "RSM",
    "Dealer Name": "Bansal Motors-Sonipat",
    "SCode": "1S1151",
    "State": "Haryana",
    "City": "Sonipat",
    "Contact No.": "9717996321"
  },
  {
    "Organization": "North-1",
    "Manager Name": "Vimal Rawat / Sujeet Pandey",
    "Manager Level": "WM",
    "Dealer Name": "Bansal Motors-Sonipat",
    "SCode": "1S1151",
    "State": "Haryana",
    "City": "Sonipat",
    "Contact No.": "9050095444,9050099560"
  },
  {
    "Organization": "North-1",
    "Manager Name": "Adarsh Prasad",
    "Manager Level": "RSM",
    "Dealer Name": "Bansal Motors-Yamunanagar",
    "SCode": "1S1145",
    "State": "Haryana",
    "City": "Yamunanagar",
    "Contact No.": "9717996321"
  },
  {
    "Organization": "North-1",
    "Manager Name": "Dheeraj Tehlan / Amitesh Kumar Sharma",
    "Manager Level": "CSM",
    "Dealer Name": "Bansal Motors-Yamunanagar",
    "SCode": "1S1145",
    "State": "Haryana",
    "City": "Yamunanagar",
    "Contact No.": "9671788557,9691357849"
  },
  {
    "Organization": "North-1",
    "Manager Name": "Sunder Sharma",
    "Manager Level": "WM",
    "Dealer Name": "Bansal Motors-Yamunanagar",
    "SCode": "1S1145",
    "State": "Haryana",
    "City": "Yamunanagar",
    "Contact No.": "8222812400"
  },
  {
    "Organization": "North-1",
    "Manager Name": "Sunny Verma",
    "Manager Level": "ASM",
    "Dealer Name": "Bansal Motors-Yamunanagar",
    "SCode": "1S1145",
    "State": "Haryana",
    "City": "Yamunanagar",
    "Contact No.": "7276047837"
  },
  {
    "Organization": "West-2",
    "Manager Name": "Vikram Patel",
    "Manager Level": "CSM",
    "Dealer Name": "Barwani Motors-Barwani",
    "SCode": "1S5057",
    "State": "Madhya Pradesh",
    "City": "Barwani",
    "Contact No.": "9179023836"
  },
  {
    "Organization": "West-2",
    "Manager Name": "Shubham Soni",
    "Manager Level": "WM",
    "Dealer Name": "Barwani Motors-Barwani",
    "SCode": "1S5057",
    "State": "Madhya Pradesh",
    "City": "Barwani",
    "Contact No.": "8711042222,7415442278"
  },
  {
    "Organization": "West-2",
    "Manager Name": "KAPIL YADAV",
    "Manager Level": "MD",
    "Dealer Name": "Barwani Motors-Barwani",
    "SCode": "1S5057",
    "State": "Madhya Pradesh",
    "City": "Barwani",
    "Contact No.": "9425087498"
  },
  {
    "Organization": "West-2",
    "Manager Name": "Vivek Kumar",
    "Manager Level": "ASM",
    "Dealer Name": "Barwani Motors-Barwani",
    "SCode": "1S5057",
    "State": "Madhya Pradesh",
    "City": "Barwani",
    "Contact No.": "8171110903"
  },
  {
    "Organization": "West-2",
    "Manager Name": "Ajay Bhayel",
    "Manager Level": "EOS Site Incharge",
    "Dealer Name": "Barwani Motors-Barwani",
    "SCode": "1S5057",
    "State": "Madhya Pradesh",
    "City": "Barwani",
    "Contact No.": "7471162374,8711042222"
  },
  {
    "Organization": "West-2",
    "Manager Name": "Sudhir Kumar",
    "Manager Level": "RSM",
    "Dealer Name": "Barwani Motors-Barwani",
    "SCode": "1S5057",
    "State": "Madhya Pradesh",
    "City": "Barwani",
    "Contact No.": "9752542733"
  },
  {
    "Organization": "North-2",
    "Manager Name": "Surendra Kumar Goutam",
    "Manager Level": "WM",
    "Dealer Name": "Beekay Motors-Lucknow",
    "SCode": "1S1045",
    "State": "Uttar Pradesh",
    "City": "Lucknow",
    "Contact No.": "7570003966"
  },
  {
    "Organization": "North-2",
    "Manager Name": "Ajay Prakash",
    "Manager Level": "EOS Site Incharge",
    "Dealer Name": "Beekay Motors-Lucknow",
    "SCode": "1S1045",
    "State": "Uttar Pradesh",
    "City": "Lucknow",
    "Contact No.": "7570003984"
  },
  {
    "Organization": "North-2",
    "Manager Name": "Satendra Pratap (D) / Saket Singh (N)",
    "Manager Level": "CSM",
    "Dealer Name": "Beekay Motors-Lucknow",
    "SCode": "1S1045",
    "State": "Uttar Pradesh",
    "City": "Lucknow",
    "Contact No.": "9454616745,8709859215"
  },
  {
    "Organization": "North-2",
    "Manager Name": "Krishnendu Saha",
    "Manager Level": "RSM",
    "Dealer Name": "Beekay Motors-Lucknow",
    "SCode": "1S1045",
    "State": "Uttar Pradesh",
    "City": "Lucknow",
    "Contact No.": "7980433425"
  },
  {
    "Organization": "North-2",
    "Manager Name": "Nitin Gupta",
    "Manager Level": "ASM",
    "Dealer Name": "Beekay Motors-Lucknow",
    "SCode": "1S1045",
    "State": "Uttar Pradesh",
    "City": "Lucknow",
    "Contact No.": "7080811550"
  },
  {
    "Organization": "North-2",
    "Manager Name": "Bhavnish Mahendiratta",
    "Manager Level": "MD",
    "Dealer Name": "Beekay Motors-Lucknow",
    "SCode": "1S1045",
    "State": "Uttar Pradesh",
    "City": "Lucknow",
    "Contact No.": "9935066100"
  },
  {
    "Organization": "West-2",
    "Manager Name": "Sudhir Kumar",
    "Manager Level": "RSM",
    "Dealer Name": "Bhaktinandan Automobile-Rajula",
    "SCode": "1S3417",
    "State": "Gujarat",
    "City": "Amreli",
    "Contact No.": "9752542733"
  },
  {
    "Organization": "West-2",
    "Manager Name": "Vipul Barot",
    "Manager Level": "ASM",
    "Dealer Name": "Bhaktinandan Automobile-Rajula",
    "SCode": "1S3417",
    "State": "Gujarat",
    "City": "Amreli",
    "Contact No.": "9638341568"
  },
  {
    "Organization": "West-2",
    "Manager Name": "Pritesh Solanki",
    "Manager Level": "CSM",
    "Dealer Name": "Bhaktinandan Automobile-Rajula",
    "SCode": "1S3417",
    "State": "Gujarat",
    "City": "Amreli",
    "Contact No.": "8369331811"
  },
  {
    "Organization": "West-2",
    "Manager Name": "Shivrajbhai Khuman",
    "Manager Level": "MD",
    "Dealer Name": "Bhaktinandan Automobile-Rajula",
    "SCode": "1S3417",
    "State": "Gujarat",
    "City": "Amreli",
    "Contact No.": "7203915323"
  },
  {
    "Organization": "West-2",
    "Manager Name": "Jasmat Shiyal",
    "Manager Level": "WM",
    "Dealer Name": "Bhaktinandan Automobile-Rajula",
    "SCode": "1S3417",
    "State": "Gujarat",
    "City": "Amreli",
    "Contact No.": "9512436222"
  },
  {
    "Organization": "South-2",
    "Manager Name": "Shanmuk",
    "Manager Level": "EOS Site Incharge",
    "Dealer Name": "Bharath Pride Vizag Pvt Ltd-Srikakulam",
    "SCode": "1S6237",
    "State": "Andhra Pradesh",
    "City": "Srikakulam",
    "Contact No.": "7337445990"
  },
  {
    "Organization": "South-2",
    "Manager Name": "N Narayanan",
    "Manager Level": "RSM",
    "Dealer Name": "Bharath Pride Vizag Pvt Ltd-Srikakulam",
    "SCode": "1S6237",
    "State": "Andhra Pradesh",
    "City": "Srikakulam",
    "Contact No.": "8123036700"
  },
  {
    "Organization": "South-2",
    "Manager Name": "Shaik Maqsood",
    "Manager Level": "ASM",
    "Dealer Name": "Bharath Pride Vizag Pvt Ltd-Srikakulam",
    "SCode": "1S6237",
    "State": "Andhra Pradesh",
    "City": "Srikakulam",
    "Contact No.": "9989311516"
  },
  {
    "Organization": "South-2",
    "Manager Name": "Naveen B (D) / Prem Kumar (N)",
    "Manager Level": "CSM",
    "Dealer Name": "Bharath Pride Vizag Pvt Ltd-Srikakulam",
    "SCode": "1S6237",
    "State": "Andhra Pradesh",
    "City": "Srikakulam",
    "Contact No.": "7893227879,9154141679"
  },
  {
    "Organization": "South-2",
    "Manager Name": "Sadanand",
    "Manager Level": "MD",
    "Dealer Name": "Bharath Pride Vizag Pvt Ltd-Srikakulam",
    "SCode": "1S6237",
    "State": "Andhra Pradesh",
    "City": "Srikakulam",
    "Contact No.": "7702384444"
  },
  {
    "Organization": "South-2",
    "Manager Name": "Ravi / Srikanth",
    "Manager Level": "WM",
    "Dealer Name": "Bharath Pride Vizag Pvt Ltd-Srikakulam",
    "SCode": "1S6237",
    "State": "Andhra Pradesh",
    "City": "Srikakulam",
    "Contact No.": "9849591495,9949734481"
  },
  {
    "Organization": "South-2",
    "Manager Name": "Shaik Maqsood",
    "Manager Level": "ASM",
    "Dealer Name": "Bharath Pride Vizag Pvt Ltd-Visakhapatnam",
    "SCode": "1S6229",
    "State": "Andhra Pradesh",
    "City": "Visakhapatnam",
    "Contact No.": "9989311516"
  },
  {
    "Organization": "South-2",
    "Manager Name": "Mastan / Srikanth",
    "Manager Level": "WM",
    "Dealer Name": "Bharath Pride Vizag Pvt Ltd-Visakhapatnam",
    "SCode": "1S6229",
    "State": "Andhra Pradesh",
    "City": "Visakhapatnam",
    "Contact No.": "7337449913,9949734481"
  },
  {
    "Organization": "South-2",
    "Manager Name": "Naveen",
    "Manager Level": "EOS Site Incharge",
    "Dealer Name": "Bharath Pride Vizag Pvt Ltd-Visakhapatnam",
    "SCode": "1S6229",
    "State": "Andhra Pradesh",
    "City": "Visakhapatnam",
    "Contact No.": "7337449936"
  },
  {
    "Organization": "South-2",
    "Manager Name": "Sadanand / Rajesh",
    "Manager Level": "MD",
    "Dealer Name": "Bharath Pride Vizag Pvt Ltd-Visakhapatnam",
    "SCode": "1S6229",
    "State": "Andhra Pradesh",
    "City": "Visakhapatnam",
    "Contact No.": "9885759991,9440195391"
  },
  {
    "Organization": "South-2",
    "Manager Name": "N Narayanan",
    "Manager Level": "RSM",
    "Dealer Name": "Bharath Pride Vizag Pvt Ltd-Visakhapatnam",
    "SCode": "1S6229",
    "State": "Andhra Pradesh",
    "City": "Visakhapatnam",
    "Contact No.": "8123036700"
  },
  {
    "Organization": "South-2",
    "Manager Name": "Naveen B (D) / Prem Kumar (N)",
    "Manager Level": "CSM",
    "Dealer Name": "Bharath Pride Vizag Pvt Ltd-Visakhapatnam",
    "SCode": "1S6229",
    "State": "Andhra Pradesh",
    "City": "Visakhapatnam",
    "Contact No.": "7893227879,9154141679"
  },
  {
    "Organization": "South-2",
    "Manager Name": "C.Srinivas",
    "Manager Level": "MD",
    "Dealer Name": "CJN Hitech Motors Pvt Ltd-Anantapur",
    "SCode": "1S6139",
    "State": "Andhra Pradesh",
    "City": "Anantapur",
    "Contact No.": "9014211033"
  },
  {
    "Organization": "South-2",
    "Manager Name": "Shaik Maqsood",
    "Manager Level": "ASM",
    "Dealer Name": "CJN Hitech Motors Pvt Ltd-Anantapur",
    "SCode": "1S6139",
    "State": "Andhra Pradesh",
    "City": "Anantapur",
    "Contact No.": "9989311516"
  },
  {
    "Organization": "South-2",
    "Manager Name": "Vazeer",
    "Manager Level": "EOS Site Incharge",
    "Dealer Name": "CJN Hitech Motors Pvt Ltd-Anantapur",
    "SCode": "1S6139",
    "State": "Andhra Pradesh",
    "City": "Anantapur",
    "Contact No.": "7729986846"
  },
  {
    "Organization": "South-2",
    "Manager Name": "Saravana Kumar (D) / Prem Kumar (N)",
    "Manager Level": "CSM",
    "Dealer Name": "CJN Hitech Motors Pvt Ltd-Anantapur",
    "SCode": "1S6139",
    "State": "Andhra Pradesh",
    "City": "Anantapur",
    "Contact No.": "6383282073,9154141679"
  },
  {
    "Organization": "South-2",
    "Manager Name": "N Narayanan",
    "Manager Level": "RSM",
    "Dealer Name": "CJN Hitech Motors Pvt Ltd-Anantapur",
    "SCode": "1S6139",
    "State": "Andhra Pradesh",
    "City": "Anantapur",
    "Contact No.": "8123036700"
  },
  {
    "Organization": "South-2",
    "Manager Name": "Chandra Mohan",
    "Manager Level": "WM",
    "Dealer Name": "CJN Hitech Motors Pvt Ltd-Anantapur",
    "SCode": "1S6139",
    "State": "Andhra Pradesh",
    "City": "Anantapur",
    "Contact No.": "7729986848"
  },
  {
    "Organization": "South-2",
    "Manager Name": "V.Madhusudhan",
    "Manager Level": "MD",
    "Dealer Name": "CJN Hitech Motors Pvt Ltd-Chittoor",
    "SCode": "1S6140",
    "State": "Andhra Pradesh",
    "City": "Chittoor",
    "Contact No.": "9849492623"
  },
  {
    "Organization": "South-2",
    "Manager Name": "N Narayanan",
    "Manager Level": "RSM",
    "Dealer Name": "CJN Hitech Motors Pvt Ltd-Chittoor",
    "SCode": "1S6140",
    "State": "Andhra Pradesh",
    "City": "Chittoor",
    "Contact No.": "8123036700"
  },
  {
    "Organization": "South-2",
    "Manager Name": "V.Madhusudhan (D) / D.RAGHUNATH (N)",
    "Manager Level": "WM",
    "Dealer Name": "CJN Hitech Motors Pvt Ltd-Chittoor",
    "SCode": "1S6140",
    "State": "Andhra Pradesh",
    "City": "Chittoor",
    "Contact No.": "9849492623,9014211037"
  },
  {
    "Organization": "South-2",
    "Manager Name": "Prakash (D) / Guna (N)",
    "Manager Level": "EOS Site Incharge",
    "Dealer Name": "CJN Hitech Motors Pvt Ltd-Chittoor",
    "SCode": "1S6140",
    "State": "Andhra Pradesh",
    "City": "Chittoor",
    "Contact No.": "9000708666,9381447210"
  },
  {
    "Organization": "South-2",
    "Manager Name": "Shaik Maqsood",
    "Manager Level": "ASM",
    "Dealer Name": "CJN Hitech Motors Pvt Ltd-Chittoor",
    "SCode": "1S6140",
    "State": "Andhra Pradesh",
    "City": "Chittoor",
    "Contact No.": "9989311516"
  },
  {
    "Organization": "South-2",
    "Manager Name": "Jampani Naveen Varma (D) / Prem Kumar (N)",
    "Manager Level": "CSM",
    "Dealer Name": "CJN Hitech Motors Pvt Ltd-Chittoor",
    "SCode": "1S6140",
    "State": "Andhra Pradesh",
    "City": "Chittoor",
    "Contact No.": "9154101885,9154141679"
  },
  {
    "Organization": "South-2",
    "Manager Name": "C.Srinivas",
    "Manager Level": "MD",
    "Dealer Name": "CJN Hitech Motors Pvt Ltd-Madanapalli",
    "SCode": "1S6141",
    "State": "Andhra Pradesh",
    "City": "Madanapalle",
    "Contact No.": "9014211033"
  },
  {
    "Organization": "South-2",
    "Manager Name": "Mahesh",
    "Manager Level": "WM",
    "Dealer Name": "CJN Hitech Motors Pvt Ltd-Madanapalli",
    "SCode": "1S6141",
    "State": "Andhra Pradesh",
    "City": "Madanapalle",
    "Contact No.": "7702509222"
  },
  {
    "Organization": "South-2",
    "Manager Name": "Shaik Maqsood",
    "Manager Level": "ASM",
    "Dealer Name": "CJN Hitech Motors Pvt Ltd-Madanapalli",
    "SCode": "1S6141",
    "State": "Andhra Pradesh",
    "City": "Madanapalle",
    "Contact No.": "9989311516"
  },
  {
    "Organization": "South-2",
    "Manager Name": "Saravana Kumar (D) / Prem Kumar (N)",
    "Manager Level": "CSM",
    "Dealer Name": "CJN Hitech Motors Pvt Ltd-Madanapalli",
    "SCode": "1S6141",
    "State": "Andhra Pradesh",
    "City": "Madanapalle",
    "Contact No.": "6383282073,9154141679"
  },
  {
    "Organization": "South-2",
    "Manager Name": "N Narayanan",
    "Manager Level": "RSM",
    "Dealer Name": "CJN Hitech Motors Pvt Ltd-Madanapalli",
    "SCode": "1S6141",
    "State": "Andhra Pradesh",
    "City": "Madanapalle",
    "Contact No.": "8123036700"
  },
  {
    "Organization": "South-2",
    "Manager Name": "Mahesh",
    "Manager Level": "EOS Site Incharge",
    "Dealer Name": "CJN Hitech Motors Pvt Ltd-Madanapalli",
    "SCode": "1S6141",
    "State": "Andhra Pradesh",
    "City": "Madanapalle",
    "Contact No.": "7702509222"
  },
  {
    "Organization": "South-2",
    "Manager Name": "N Narayanan",
    "Manager Level": "RSM",
    "Dealer Name": "CJN Hitech Motors Pvt Ltd-Nellore",
    "SCode": "1S6142",
    "State": "Andhra Pradesh",
    "City": "Nellore",
    "Contact No.": "8123036700"
  },
  {
    "Organization": "South-2",
    "Manager Name": "Jampani Naveen Varma (D) / Prem Kumar (N)",
    "Manager Level": "CSM",
    "Dealer Name": "CJN Hitech Motors Pvt Ltd-Nellore",
    "SCode": "1S6142",
    "State": "Andhra Pradesh",
    "City": "Nellore",
    "Contact No.": "9154101885,9154141679"
  },
  {
    "Organization": "South-2",
    "Manager Name": "V.Madhusudhan",
    "Manager Level": "MD",
    "Dealer Name": "CJN Hitech Motors Pvt Ltd-Nellore",
    "SCode": "1S6142",
    "State": "Andhra Pradesh",
    "City": "Nellore",
    "Contact No.": "9849492623"
  },
  {
    "Organization": "South-2",
    "Manager Name": "V.Madhusudhan (D) / G.Gopal Krishna (N)",
    "Manager Level": "WM",
    "Dealer Name": "CJN Hitech Motors Pvt Ltd-Nellore",
    "SCode": "1S6142",
    "State": "Andhra Pradesh",
    "City": "Nellore",
    "Contact No.": "9849492623,9849492624"
  },
  {
    "Organization": "South-2",
    "Manager Name": "Shaik Maqsood",
    "Manager Level": "ASM",
    "Dealer Name": "CJN Hitech Motors Pvt Ltd-Nellore",
    "SCode": "1S6142",
    "State": "Andhra Pradesh",
    "City": "Nellore",
    "Contact No.": "9989311516"
  },
  {
    "Organization": "South-2",
    "Manager Name": "G.Ramesh (D) / Uday (N)",
    "Manager Level": "EOS Site Incharge",
    "Dealer Name": "CJN Hitech Motors Pvt Ltd-Nellore",
    "SCode": "1S6142",
    "State": "Andhra Pradesh",
    "City": "Nellore",
    "Contact No.": "9985551145,7287980095"
  },
  {
    "Organization": "South-2",
    "Manager Name": "N Narayanan",
    "Manager Level": "RSM",
    "Dealer Name": "CJN Hitech Motors Pvt Ltd-Ongole",
    "SCode": "1S6143",
    "State": "Andhra Pradesh",
    "City": "Ongole",
    "Contact No.": "8123036700"
  },
  {
    "Organization": "South-2",
    "Manager Name": "Praveen (D) / Chanyaka (N)",
    "Manager Level": "EOS Site Incharge",
    "Dealer Name": "CJN Hitech Motors Pvt Ltd-Ongole",
    "SCode": "1S6143",
    "State": "Andhra Pradesh",
    "City": "Ongole",
    "Contact No.": "9849500358,9989585221"
  },
  {
    "Organization": "South-2",
    "Manager Name": "Jampani Naveen Varma (D) / Prem Kumar (N)",
    "Manager Level": "CSM",
    "Dealer Name": "CJN Hitech Motors Pvt Ltd-Ongole",
    "SCode": "1S6143",
    "State": "Andhra Pradesh",
    "City": "Ongole",
    "Contact No.": "9154101885,9154141679"
  },
  {
    "Organization": "South-2",
    "Manager Name": "V.Madhusudhan (D) / A.RAMA KRISHAN (N)",
    "Manager Level": "WM",
    "Dealer Name": "CJN Hitech Motors Pvt Ltd-Ongole",
    "SCode": "1S6143",
    "State": "Andhra Pradesh",
    "City": "Ongole",
    "Contact No.": "9849492623,9989990338"
  },
  {
    "Organization": "South-2",
    "Manager Name": "Shaik Maqsood",
    "Manager Level": "ASM",
    "Dealer Name": "CJN Hitech Motors Pvt Ltd-Ongole",
    "SCode": "1S6143",
    "State": "Andhra Pradesh",
    "City": "Ongole",
    "Contact No.": "9989311516"
  },
  {
    "Organization": "South-2",
    "Manager Name": "V.Madhusudhan",
    "Manager Level": "MD",
    "Dealer Name": "CJN Hitech Motors Pvt Ltd-Ongole",
    "SCode": "1S6143",
    "State": "Andhra Pradesh",
    "City": "Ongole",
    "Contact No.": "9849492623"
  },
  {
    "Organization": "South-2",
    "Manager Name": "N Narayanan",
    "Manager Level": "RSM",
    "Dealer Name": "CJN Hitech Motors Pvt Ltd-Tirupathi",
    "SCode": "1S6137",
    "State": "Andhra Pradesh",
    "City": "Tirupati",
    "Contact No.": "8123036700"
  },
  {
    "Organization": "South-2",
    "Manager Name": "V.Madhusudhan (D) / V. NARENDARA (N)",
    "Manager Level": "WM",
    "Dealer Name": "CJN Hitech Motors Pvt Ltd-Tirupathi",
    "SCode": "1S6137",
    "State": "Andhra Pradesh",
    "City": "Tirupati",
    "Contact No.": "9849492623,9849492625"
  },
  {
    "Organization": "South-2",
    "Manager Name": "Shaik Maqsood",
    "Manager Level": "ASM",
    "Dealer Name": "CJN Hitech Motors Pvt Ltd-Tirupathi",
    "SCode": "1S6137",
    "State": "Andhra Pradesh",
    "City": "Tirupati",
    "Contact No.": "9989311516"
  },
  {
    "Organization": "South-2",
    "Manager Name": "Jampani Naveen Varma (D) / Prem Kumar (N)",
    "Manager Level": "CSM",
    "Dealer Name": "CJN Hitech Motors Pvt Ltd-Tirupathi",
    "SCode": "1S6137",
    "State": "Andhra Pradesh",
    "City": "Tirupati",
    "Contact No.": "9154101885,9154141679"
  },
  {
    "Organization": "South-2",
    "Manager Name": "V.MADHUSUDHAN",
    "Manager Level": "MD",
    "Dealer Name": "CJN Hitech Motors Pvt Ltd-Tirupathi",
    "SCode": "1S6137",
    "State": "Andhra Pradesh",
    "City": "Tirupati",
    "Contact No.": "9849492623"
  },
  {
    "Organization": "South-2",
    "Manager Name": "Balaji (D) / Ahmed (N)",
    "Manager Level": "EOS Site Incharge",
    "Dealer Name": "CJN Hitech Motors Pvt Ltd-Tirupathi",
    "SCode": "1S6137",
    "State": "Andhra Pradesh",
    "City": "Tirupati",
    "Contact No.": "9398560346,9618271560"
  },
  {
    "Organization": "North-1",
    "Manager Name": "Jaganpreet Singh",
    "Manager Level": "CSM",
    "Dealer Name": "Choudhary Agencies (BUS)-Punchkula",
    "SCode": "1S1280",
    "State": "Haryana",
    "City": "Panchkula",
    "Contact No.": "9993610567"
  },
  {
    "Organization": "North-1",
    "Manager Name": "Adarsh Prasad",
    "Manager Level": "RSM",
    "Dealer Name": "Choudhary Agencies (BUS)-Punchkula",
    "SCode": "1S1280",
    "State": "Haryana",
    "City": "Panchkula",
    "Contact No.": "9717996321"
  },
  {
    "Organization": "North-1",
    "Manager Name": "Anil Yadav",
    "Manager Level": "WM",
    "Dealer Name": "Choudhary Agencies (BUS)-Punchkula",
    "SCode": "1S1280",
    "State": "Haryana",
    "City": "Panchkula",
    "Contact No.": "9254076441"
  },
  {
    "Organization": "North-1",
    "Manager Name": "Suneel Singh",
    "Manager Level": "MD",
    "Dealer Name": "Choudhary Agencies (BUS)-Punchkula",
    "SCode": "1S1280",
    "State": "Haryana",
    "City": "Panchkula",
    "Contact No.": "9305659344"
  },
  {
    "Organization": "North-1",
    "Manager Name": "Jaiprakash Singh",
    "Manager Level": "ASM",
    "Dealer Name": "Choudhary Agencies (BUS)-Punchkula",
    "SCode": "1S1280",
    "State": "Haryana",
    "City": "Panchkula",
    "Contact No.": "9650245353"
  },
  {
    "Organization": "North-1",
    "Manager Name": "Balwindra",
    "Manager Level": "EOS Site Incharge",
    "Dealer Name": "Choudhary Agencies (BUS)-Punchkula",
    "SCode": "1S1280",
    "State": "Haryana",
    "City": "Panchkula",
    "Contact No.": "9254990251"
  },
  {
    "Organization": "North-1",
    "Manager Name": "Aditya Upmanyu",
    "Manager Level": "CSM",
    "Dealer Name": "Choudhary Agencies-Dharuhera",
    "SCode": "1S1285",
    "State": "Haryana",
    "City": "Bhiwani",
    "Contact No.": "8433067854"
  },
  {
    "Organization": "North-1",
    "Manager Name": "Adarsh Prasad",
    "Manager Level": "RSM",
    "Dealer Name": "Choudhary Agencies-Dharuhera",
    "SCode": "1S1285",
    "State": "Haryana",
    "City": "Bhiwani",
    "Contact No.": "9717996321"
  },
  {
    "Organization": "North-1",
    "Manager Name": "Sunny Verma",
    "Manager Level": "ASM",
    "Dealer Name": "Choudhary Agencies-Dharuhera",
    "SCode": "1S1285",
    "State": "Haryana",
    "City": "Bhiwani",
    "Contact No.": "7276047837"
  },
  {
    "Organization": "North-1",
    "Manager Name": "Prabhat Singh",
    "Manager Level": "WM",
    "Dealer Name": "Choudhary Agencies-Dharuhera",
    "SCode": "1S1285",
    "State": "Haryana",
    "City": "Bhiwani",
    "Contact No.": "9254990255"
  },
  {
    "Organization": "North-1",
    "Manager Name": "Suneel Singh",
    "Manager Level": "MD",
    "Dealer Name": "Choudhary Agencies-Dharuhera",
    "SCode": "1S1285",
    "State": "Haryana",
    "City": "Bhiwani",
    "Contact No.": "9305659344"
  },
  {
    "Organization": "North-1",
    "Manager Name": "Alok Singh",
    "Manager Level": "EOS Site Incharge",
    "Dealer Name": "Choudhary Agencies-Dharuhera",
    "SCode": "1S1285",
    "State": "Haryana",
    "City": "Bhiwani",
    "Contact No.": "9254990254"
  },
  {
    "Organization": "North-1",
    "Manager Name": "Amit Mehla",
    "Manager Level": "MD",
    "Dealer Name": "Choudhary Agencies-Sonipat",
    "SCode": "1S1246",
    "State": "Haryana",
    "City": "Sonipat",
    "Contact No.": "9991601000"
  },
  {
    "Organization": "North-1",
    "Manager Name": "Sunny Verma",
    "Manager Level": "ASM",
    "Dealer Name": "Choudhary Agencies-Sonipat",
    "SCode": "1S1246",
    "State": "Haryana",
    "City": "Sonipat",
    "Contact No.": "7276047837"
  },
  {
    "Organization": "North-1",
    "Manager Name": "Adarsh Prasad",
    "Manager Level": "RSM",
    "Dealer Name": "Choudhary Agencies-Sonipat",
    "SCode": "1S1246",
    "State": "Haryana",
    "City": "Sonipat",
    "Contact No.": "9717996321"
  },
  {
    "Organization": "North-1",
    "Manager Name": "Pankaj Kumar / Sunil Kumar",
    "Manager Level": "WM",
    "Dealer Name": "Choudhary Agencies-Sonipat",
    "SCode": "1S1246",
    "State": "Haryana",
    "City": "Sonipat",
    "Contact No.": "9034394947,9305659344"
  },
  {
    "Organization": "North-1",
    "Manager Name": "Kuldeep (EVS) / Pradeep Singh",
    "Manager Level": "CSM",
    "Dealer Name": "Choudhary Agencies-Sonipat",
    "SCode": "1S1246",
    "State": "Haryana",
    "City": "Sonipat",
    "Contact No.": "8009044182,9027524042"
  },
  {
    "Organization": "North-1",
    "Manager Name": "Pradeep Singh",
    "Manager Level": "CSM",
    "Dealer Name": "Choudhary Agencies-Sonipat",
    "SCode": "1S1246",
    "State": "Haryana",
    "City": "Sonipat",
    "Contact No.": "9027524042"
  },
  {
    "Organization": "West-1",
    "Manager Name": "Padmanathan Kulkarni",
    "Manager Level": "WM",
    "Dealer Name": "Chowgule Industries Pvt Ltd (ProX)-Pune",
    "SCode": "1S3444",
    "State": "Maharashtra",
    "City": "Pune",
    "Contact No.": "7391083248"
  },
  {
    "Organization": "West-1",
    "Manager Name": "Sujan Saha",
    "Manager Level": "RSM",
    "Dealer Name": "Chowgule Industries Pvt Ltd (ProX)-Pune",
    "SCode": "1S3444",
    "State": "Maharashtra",
    "City": "Pune",
    "Contact No.": "9903978950"
  },
  {
    "Organization": "West-1",
    "Manager Name": "Umesh Kshirsagar",
    "Manager Level": "MD",
    "Dealer Name": "Chowgule Industries Pvt Ltd (ProX)-Pune",
    "SCode": "1S3444",
    "State": "Maharashtra",
    "City": "Pune",
    "Contact No.": "9730535177"
  },
  {
    "Organization": "West-1",
    "Manager Name": "Rushikesh Shardul",
    "Manager Level": "CSM",
    "Dealer Name": "Chowgule Industries Pvt Ltd (ProX)-Pune",
    "SCode": "1S3444",
    "State": "Maharashtra",
    "City": "Pune",
    "Contact No.": "7391854576"
  },
  {
    "Organization": "West-1",
    "Manager Name": "Harsh / Swapnil",
    "Manager Level": "EOS Site Incharge",
    "Dealer Name": "Chowgule Industries Pvt Ltd (ProX)-Pune",
    "SCode": "1S3444",
    "State": "Maharashtra",
    "City": "Pune",
    "Contact No.": "7397802607,9022133846"
  },
  {
    "Organization": "West-1",
    "Manager Name": "Kshitij Bankhele",
    "Manager Level": "CSM",
    "Dealer Name": "Chowgule Industries-North Goa",
    "SCode": "1S3357",
    "State": "Goa",
    "City": "Verna",
    "Contact No.": "9833405966"
  },
  {
    "Organization": "West-1",
    "Manager Name": "Suhas Ramchandra Mane",
    "Manager Level": "RSM",
    "Dealer Name": "Chowgule Industries-North Goa",
    "SCode": "1S3357",
    "State": "Goa",
    "City": "Verna",
    "Contact No.": "8454812225"
  },
  {
    "Organization": "West-1",
    "Manager Name": "Mrinal Kunwar",
    "Manager Level": "ASM",
    "Dealer Name": "Chowgule Industries-North Goa",
    "SCode": "1S3357",
    "State": "Goa",
    "City": "Verna",
    "Contact No.": "8002023303"
  },
  {
    "Organization": "West-1",
    "Manager Name": "Maruti Telang",
    "Manager Level": "MD",
    "Dealer Name": "Chowgule Industries-North Goa",
    "SCode": "1S3357",
    "State": "Goa",
    "City": "Verna",
    "Contact No.": "9850966993"
  },
  {
    "Organization": "West-1",
    "Manager Name": "Tejas Sawant / Anthony W",
    "Manager Level": "EOS Site Incharge",
    "Dealer Name": "Chowgule Industries-North Goa",
    "SCode": "1S3357",
    "State": "Goa",
    "City": "Verna",
    "Contact No.": "9764856662,8208957569"
  },
  {
    "Organization": "West-1",
    "Manager Name": "Babu Patil",
    "Manager Level": "WM",
    "Dealer Name": "Chowgule Industries-North Goa",
    "SCode": "1S3357",
    "State": "Goa",
    "City": "Verna",
    "Contact No.": "9545453458"
  },
  {
    "Organization": "West-1",
    "Manager Name": "Vijay Avhad / Adil Sheikh",
    "Manager Level": "CSM",
    "Dealer Name": "Chowgule Industries-Satara",
    "SCode": "1S3425",
    "State": "Maharashtra",
    "City": "Satara",
    "Contact No.": "7558550367,9325446342"
  },
  {
    "Organization": "West-1",
    "Manager Name": "Harish Sawant",
    "Manager Level": "MD",
    "Dealer Name": "Chowgule Industries-Satara",
    "SCode": "1S3425",
    "State": "Maharashtra",
    "City": "Satara",
    "Contact No.": "9850966991"
  },
  {
    "Organization": "West-1",
    "Manager Name": "Sainath / Akshay",
    "Manager Level": "EOS Site Incharge",
    "Dealer Name": "Chowgule Industries-Satara",
    "SCode": "1S3425",
    "State": "Maharashtra",
    "City": "Satara",
    "Contact No.": "8600018576,9762016631"
  },
  {
    "Organization": "West-1",
    "Manager Name": "Shankar/Prasad",
    "Manager Level": "WM",
    "Dealer Name": "Chowgule Industries-Satara",
    "SCode": "1S3425",
    "State": "Maharashtra",
    "City": "Satara",
    "Contact No.": "7758986512,9730351961"
  },
  {
    "Organization": "West-1",
    "Manager Name": "Suhas Ramchandra Mane",
    "Manager Level": "RSM",
    "Dealer Name": "Chowgule Industries-Satara",
    "SCode": "1S3425",
    "State": "Maharashtra",
    "City": "Satara",
    "Contact No.": "8454812225"
  },
  {
    "Organization": "West-1",
    "Manager Name": "Mrinal Kunwar",
    "Manager Level": "ASM",
    "Dealer Name": "Chowgule Industries-Satara",
    "SCode": "1S3425",
    "State": "Maharashtra",
    "City": "Satara",
    "Contact No.": "8002023303"
  },
  {
    "Organization": "West-1",
    "Manager Name": "Manohar Painguinkar",
    "Manager Level": "WM",
    "Dealer Name": "Chowgule Industries-South Goa",
    "SCode": "1S3348",
    "State": "Goa",
    "City": "Verna",
    "Contact No.": "9850966985"
  },
  {
    "Organization": "West-1",
    "Manager Name": "Kshitij Bankhele",
    "Manager Level": "CSM",
    "Dealer Name": "Chowgule Industries-South Goa",
    "SCode": "1S3348",
    "State": "Goa",
    "City": "Verna",
    "Contact No.": "9833405966"
  },
  {
    "Organization": "West-1",
    "Manager Name": "GURUPRASAD MAHALE /  GURUPRASAD NAIK",
    "Manager Level": "EOS Site Incharge",
    "Dealer Name": "Chowgule Industries-South Goa",
    "SCode": "1S3348",
    "State": "Goa",
    "City": "Verna",
    "Contact No.": "8411995781,7798037436"
  },
  {
    "Organization": "West-1",
    "Manager Name": "Maruti Telang",
    "Manager Level": "MD",
    "Dealer Name": "Chowgule Industries-South Goa",
    "SCode": "1S3348",
    "State": "Goa",
    "City": "Verna",
    "Contact No.": "9850966993"
  },
  {
    "Organization": "West-1",
    "Manager Name": "Suhas Ramchandra Mane",
    "Manager Level": "RSM",
    "Dealer Name": "Chowgule Industries-South Goa",
    "SCode": "1S3348",
    "State": "Goa",
    "City": "Verna",
    "Contact No.": "8454812225"
  },
  {
    "Organization": "West-1",
    "Manager Name": "Mrinal Kunwar",
    "Manager Level": "ASM",
    "Dealer Name": "Chowgule Industries-South Goa",
    "SCode": "1S3348",
    "State": "Goa",
    "City": "Verna",
    "Contact No.": "8002023303"
  },
  {
    "Organization": "East-2",
    "Manager Name": "Vicky Ravidas",
    "Manager Level": "CSM",
    "Dealer Name": "DRS Millennium Pvt Ltd-Bokaro",
    "SCode": "1S2201",
    "State": "Jharkhand",
    "City": "Bokaro",
    "Contact No.": "9939377899"
  },
  {
    "Organization": "East-2",
    "Manager Name": "Niket Kumar",
    "Manager Level": "RSM",
    "Dealer Name": "DRS Millennium Pvt Ltd-Bokaro",
    "SCode": "1S2201",
    "State": "Jharkhand",
    "City": "Bokaro",
    "Contact No.": "8427733112"
  },
  {
    "Organization": "East-2",
    "Manager Name": "Shravan kumar Akela",
    "Manager Level": "ASM",
    "Dealer Name": "DRS Millennium Pvt Ltd-Bokaro",
    "SCode": "1S2201",
    "State": "Jharkhand",
    "City": "Bokaro",
    "Contact No.": "9771422291"
  },
  {
    "Organization": "East-2",
    "Manager Name": "DIVISH SABHLOK",
    "Manager Level": "MD",
    "Dealer Name": "DRS Millennium Pvt Ltd-Bokaro",
    "SCode": "1S2201",
    "State": "Jharkhand",
    "City": "Bokaro",
    "Contact No.": "9899793431"
  },
  {
    "Organization": "East-2",
    "Manager Name": "UJJAL SINGH",
    "Manager Level": "WM",
    "Dealer Name": "DRS Millennium Pvt Ltd-Bokaro",
    "SCode": "1S2201",
    "State": "Jharkhand",
    "City": "Bokaro",
    "Contact No.": "9113179248"
  },
  {
    "Organization": "East-2",
    "Manager Name": "Niket Kumar",
    "Manager Level": "RSM",
    "Dealer Name": "DRS Millennium Pvt Ltd-Dhanbad",
    "SCode": "1S2074",
    "State": "Jharkhand",
    "City": "Dhanbad",
    "Contact No.": "8427733112"
  },
  {
    "Organization": "East-2",
    "Manager Name": "Kamlesh Yadav",
    "Manager Level": "WM",
    "Dealer Name": "DRS Millennium Pvt Ltd-Dhanbad",
    "SCode": "1S2074",
    "State": "Jharkhand",
    "City": "Dhanbad",
    "Contact No.": "7707002148"
  },
  {
    "Organization": "East-2",
    "Manager Name": "Vicky Ravidas",
    "Manager Level": "CSM",
    "Dealer Name": "DRS Millennium Pvt Ltd-Dhanbad",
    "SCode": "1S2074",
    "State": "Jharkhand",
    "City": "Dhanbad",
    "Contact No.": "9939377899"
  },
  {
    "Organization": "East-2",
    "Manager Name": "Mr. Mridul Banerjee",
    "Manager Level": "MD",
    "Dealer Name": "DRS Millennium Pvt Ltd-Dhanbad",
    "SCode": "1S2074",
    "State": "Jharkhand",
    "City": "Dhanbad",
    "Contact No.": "9304836783"
  },
  {
    "Organization": "East-2",
    "Manager Name": "MD Parwez Nasim",
    "Manager Level": "EOS Site Incharge",
    "Dealer Name": "DRS Millennium Pvt Ltd-Dhanbad",
    "SCode": "1S2074",
    "State": "Jharkhand",
    "City": "Dhanbad",
    "Contact No.": "7979962675"
  },
  {
    "Organization": "East-2",
    "Manager Name": "Shravan kumar Akela",
    "Manager Level": "ASM",
    "Dealer Name": "DRS Millennium Pvt Ltd-Dhanbad",
    "SCode": "1S2074",
    "State": "Jharkhand",
    "City": "Dhanbad",
    "Contact No.": "9771422291"
  },
  {
    "Organization": "East-2",
    "Manager Name": "Shravan Kumar",
    "Manager Level": "EOS Site Incharge",
    "Dealer Name": "DRS Millennium Pvt Ltd-Hazaribag",
    "SCode": "1S3307",
    "State": "Jharkhand",
    "City": "Hazaribag",
    "Contact No.": "8877053311"
  },
  {
    "Organization": "East-2",
    "Manager Name": "Shravan Kumar Akela",
    "Manager Level": "ASM",
    "Dealer Name": "DRS Millennium Pvt Ltd-Hazaribag",
    "SCode": "1S3307",
    "State": "Jharkhand",
    "City": "Hazaribag",
    "Contact No.": "9771422291"
  },
  {
    "Organization": "East-2",
    "Manager Name": "Vicky Ravidas",
    "Manager Level": "CSM",
    "Dealer Name": "DRS Millennium Pvt Ltd-Hazaribag",
    "SCode": "1S3307",
    "State": "Jharkhand",
    "City": "Hazaribag",
    "Contact No.": "9939377899"
  },
  {
    "Organization": "East-2",
    "Manager Name": "Palash Dey / Susanta Singha",
    "Manager Level": "WM",
    "Dealer Name": "DRS Millennium Pvt Ltd-Hazaribag",
    "SCode": "1S3307",
    "State": "Jharkhand",
    "City": "Hazaribag",
    "Contact No.": "9334014176,7061502233"
  },
  {
    "Organization": "East-2",
    "Manager Name": "Mridul Banerjee",
    "Manager Level": "MD",
    "Dealer Name": "DRS Millennium Pvt Ltd-Hazaribag",
    "SCode": "1S3307",
    "State": "Jharkhand",
    "City": "Hazaribag",
    "Contact No.": "9304836783"
  },
  {
    "Organization": "East-2",
    "Manager Name": "Niket Kumar",
    "Manager Level": "RSM",
    "Dealer Name": "DRS Millennium Pvt Ltd-Hazaribag",
    "SCode": "1S3307",
    "State": "Jharkhand",
    "City": "Hazaribag",
    "Contact No.": "8427733112"
  },
  {
    "Organization": "East-1",
    "Manager Name": "Yogeshwar Singh",
    "Manager Level": "RSM",
    "Dealer Name": "Deshpriya Engineering Workshop-Contai",
    "SCode": "1S2222",
    "State": "West Bengal",
    "City": "Nandakumar",
    "Contact No.": "9717966997"
  },
  {
    "Organization": "East-1",
    "Manager Name": "Nanigopal Majhi",
    "Manager Level": "WM",
    "Dealer Name": "Deshpriya Engineering Workshop-Contai",
    "SCode": "1S2222",
    "State": "West Bengal",
    "City": "Nandakumar",
    "Contact No.": "8170039902"
  },
  {
    "Organization": "East-1",
    "Manager Name": "Kuntal Deb",
    "Manager Level": "CSM",
    "Dealer Name": "Deshpriya Engineering Workshop-Contai",
    "SCode": "1S2222",
    "State": "West Bengal",
    "City": "Nandakumar",
    "Contact No.": "6291810496"
  },
  {
    "Organization": "East-1",
    "Manager Name": "Mr. Sayed Rahamtulla",
    "Manager Level": "MD",
    "Dealer Name": "Deshpriya Engineering Workshop-Contai",
    "SCode": "1S2222",
    "State": "West Bengal",
    "City": "Nandakumar",
    "Contact No.": "9434118468"
  },
  {
    "Organization": "East-1",
    "Manager Name": "Abhirup Ghosh",
    "Manager Level": "ASM",
    "Dealer Name": "Deshpriya Engineering Workshop-Contai",
    "SCode": "1S2222",
    "State": "West Bengal",
    "City": "Nandakumar",
    "Contact No.": "9073378080"
  },
  {
    "Organization": "East-1",
    "Manager Name": "Kuntal Deb",
    "Manager Level": "CSM",
    "Dealer Name": "Deshpriya Engineering Workshop-Nandakumar",
    "SCode": "1S2060",
    "State": "West Bengal",
    "City": "Nandakumar",
    "Contact No.": "6291810496"
  },
  {
    "Organization": "East-1",
    "Manager Name": "Dipankar Panda",
    "Manager Level": "WM",
    "Dealer Name": "Deshpriya Engineering Workshop-Nandakumar",
    "SCode": "1S2060",
    "State": "West Bengal",
    "City": "Nandakumar",
    "Contact No.": "8170039904"
  },
  {
    "Organization": "East-1",
    "Manager Name": "Mr. Sayed Rahamtulla",
    "Manager Level": "MD",
    "Dealer Name": "Deshpriya Engineering Workshop-Nandakumar",
    "SCode": "1S2060",
    "State": "West Bengal",
    "City": "Nandakumar",
    "Contact No.": "9434118468"
  },
  {
    "Organization": "East-1",
    "Manager Name": "Abhirup Ghosh",
    "Manager Level": "ASM",
    "Dealer Name": "Deshpriya Engineering Workshop-Nandakumar",
    "SCode": "1S2060",
    "State": "West Bengal",
    "City": "Nandakumar",
    "Contact No.": "9073378080"
  },
  {
    "Organization": "East-1",
    "Manager Name": "Yogeshwar Singh",
    "Manager Level": "RSM",
    "Dealer Name": "Deshpriya Engineering Workshop-Nandakumar",
    "SCode": "1S2060",
    "State": "West Bengal",
    "City": "Nandakumar",
    "Contact No.": "9717966997"
  },
  {
    "Organization": "West-1",
    "Manager Name": "Suhas Ramchandra Mane",
    "Manager Level": "RSM",
    "Dealer Name": "Dosti Motors-Tembhurni",
    "SCode": "1S3412",
    "State": "Maharashtra",
    "City": "Solapur",
    "Contact No.": "8454812225"
  },
  {
    "Organization": "West-1",
    "Manager Name": "Vinod  Walke / Rahul Walke",
    "Manager Level": "MD",
    "Dealer Name": "Dosti Motors-Tembhurni",
    "SCode": "1S3412",
    "State": "Maharashtra",
    "City": "Solapur",
    "Contact No.": "9561188997,9420093172"
  },
  {
    "Organization": "West-1",
    "Manager Name": "Dneshawar / Sai",
    "Manager Level": "WM",
    "Dealer Name": "Dosti Motors-Tembhurni",
    "SCode": "1S3412",
    "State": "Maharashtra",
    "City": "Solapur",
    "Contact No.": "8956490797,8956490791"
  },
  {
    "Organization": "West-1",
    "Manager Name": "Shrishail Honnagol",
    "Manager Level": "ASM",
    "Dealer Name": "Dosti Motors-Tembhurni",
    "SCode": "1S3412",
    "State": "Maharashtra",
    "City": "Solapur",
    "Contact No.": "7700906442"
  },
  {
    "Organization": "West-1",
    "Manager Name": "Tanveer",
    "Manager Level": "EOS Site Incharge",
    "Dealer Name": "Dosti Motors-Tembhurni",
    "SCode": "1S3412",
    "State": "Maharashtra",
    "City": "Solapur",
    "Contact No.": "8956490795"
  },
  {
    "Organization": "West-1",
    "Manager Name": "Datta Nikam",
    "Manager Level": "CSM",
    "Dealer Name": "Dosti Motors-Tembhurni",
    "SCode": "1S3412",
    "State": "Maharashtra",
    "City": "Solapur",
    "Contact No.": "7389946335"
  },
  {
    "Organization": "East-1",
    "Manager Name": "Dambar Pradhan",
    "Manager Level": "MD",
    "Dealer Name": "Druk Indo Automobile-Barobisha",
    "SCode": "1S2235",
    "State": "West Bengal",
    "City": "Alipurduar",
    "Contact No.": "9233784677"
  },
  {
    "Organization": "East-1",
    "Manager Name": "Sujoy Dey",
    "Manager Level": "EOS Site Incharge",
    "Dealer Name": "Druk Indo Automobile-Barobisha",
    "SCode": "1S2235",
    "State": "West Bengal",
    "City": "Alipurduar",
    "Contact No.": "9143416647"
  },
  {
    "Organization": "East-1",
    "Manager Name": "Soumodeep Sinha",
    "Manager Level": "CSM",
    "Dealer Name": "Druk Indo Automobile-Barobisha",
    "SCode": "1S2235",
    "State": "West Bengal",
    "City": "Alipurduar",
    "Contact No.": "9831385426"
  },
  {
    "Organization": "East-1",
    "Manager Name": "Yogeshwar Singh",
    "Manager Level": "RSM",
    "Dealer Name": "Druk Indo Automobile-Barobisha",
    "SCode": "1S2235",
    "State": "West Bengal",
    "City": "Alipurduar",
    "Contact No.": "9717966997"
  },
  {
    "Organization": "East-1",
    "Manager Name": "Abhirup Ghosh",
    "Manager Level": "ASM",
    "Dealer Name": "Druk Indo Automobile-Barobisha",
    "SCode": "1S2235",
    "State": "West Bengal",
    "City": "Alipurduar",
    "Contact No.": "9073378080"
  },
  {
    "Organization": "East-1",
    "Manager Name": "Rishi Kumar",
    "Manager Level": "WM",
    "Dealer Name": "Druk Indo Automobile-Barobisha",
    "SCode": "1S2235",
    "State": "West Bengal",
    "City": "Alipurduar",
    "Contact No.": "7564910950"
  },
  {
    "Organization": "East-1",
    "Manager Name": "Siddharth Pradhan",
    "Manager Level": "EOS Site Incharge",
    "Dealer Name": "Druk Indo Automobile-Dalsingpara",
    "SCode": "1S2202",
    "State": "West Bengal",
    "City": "Alipurduar",
    "Contact No.": "8016175828"
  },
  {
    "Organization": "East-1",
    "Manager Name": "Yogeshwar Singh",
    "Manager Level": "RSM",
    "Dealer Name": "Druk Indo Automobile-Dalsingpara",
    "SCode": "1S2202",
    "State": "West Bengal",
    "City": "Alipurduar",
    "Contact No.": "9717966997"
  },
  {
    "Organization": "East-1",
    "Manager Name": "Rishi Kumar",
    "Manager Level": "WM",
    "Dealer Name": "Druk Indo Automobile-Dalsingpara",
    "SCode": "1S2202",
    "State": "West Bengal",
    "City": "Alipurduar",
    "Contact No.": "7564910950"
  },
  {
    "Organization": "East-1",
    "Manager Name": "Abhirup Ghosh",
    "Manager Level": "ASM",
    "Dealer Name": "Druk Indo Automobile-Dalsingpara",
    "SCode": "1S2202",
    "State": "West Bengal",
    "City": "Alipurduar",
    "Contact No.": "9073378080"
  },
  {
    "Organization": "East-1",
    "Manager Name": "Soumodeep Sinha",
    "Manager Level": "CSM",
    "Dealer Name": "Druk Indo Automobile-Dalsingpara",
    "SCode": "1S2202",
    "State": "West Bengal",
    "City": "Alipurduar",
    "Contact No.": "9831385426"
  },
  {
    "Organization": "East-1",
    "Manager Name": "Dambar Pradhan",
    "Manager Level": "MD",
    "Dealer Name": "Druk Indo Automobile-Dalsingpara",
    "SCode": "1S2202",
    "State": "West Bengal",
    "City": "Alipurduar",
    "Contact No.": "9233784677"
  },
  {
    "Organization": "East-1",
    "Manager Name": "Sagar Roy",
    "Manager Level": "EOS Site Incharge",
    "Dealer Name": "Druk Indo Automobile-Dhupguri",
    "SCode": "1S2256",
    "State": "West Bengal",
    "City": "Mainaguri",
    "Contact No.": "8597750951"
  },
  {
    "Organization": "East-1",
    "Manager Name": "Hritik Kumar / Pravin Pradhan",
    "Manager Level": "WM",
    "Dealer Name": "Druk Indo Automobile-Dhupguri",
    "SCode": "1S2256",
    "State": "West Bengal",
    "City": "Mainaguri",
    "Contact No.": "7371877997,9679913056"
  },
  {
    "Organization": "East-1",
    "Manager Name": "Dambar Pradhan",
    "Manager Level": "MD",
    "Dealer Name": "Druk Indo Automobile-Dhupguri",
    "SCode": "1S2256",
    "State": "West Bengal",
    "City": "Mainaguri",
    "Contact No.": "9233784677"
  },
  {
    "Organization": "East-1",
    "Manager Name": "Abhirup Ghosh",
    "Manager Level": "ASM",
    "Dealer Name": "Druk Indo Automobile-Dhupguri",
    "SCode": "1S2256",
    "State": "West Bengal",
    "City": "Mainaguri",
    "Contact No.": "9073378080"
  },
  {
    "Organization": "East-1",
    "Manager Name": "Soumodeep Sinha",
    "Manager Level": "CSM",
    "Dealer Name": "Druk Indo Automobile-Dhupguri",
    "SCode": "1S2256",
    "State": "West Bengal",
    "City": "Mainaguri",
    "Contact No.": "9831385426"
  },
  {
    "Organization": "East-1",
    "Manager Name": "Yogeshwar Singh",
    "Manager Level": "RSM",
    "Dealer Name": "Druk Indo Automobile-Dhupguri",
    "SCode": "1S2256",
    "State": "West Bengal",
    "City": "Mainaguri",
    "Contact No.": "9717966997"
  },
  {
    "Organization": "East-1",
    "Manager Name": "LRS Rao / Yogesh Sarode",
    "Manager Level": "WM",
    "Dealer Name": "East/South - Eicher Power Solutions",
    "SCode": "1S0030",
    "State": "Assam",
    "City": "Barpeta",
    "Contact No.": "9826618816,9172996936"
  },
  {
    "Organization": "East-1",
    "Manager Name": "Arindam Roy",
    "Manager Level": "CSM",
    "Dealer Name": "East/South - Eicher Power Solutions",
    "SCode": "1S0030",
    "State": "Assam",
    "City": "Barpeta",
    "Contact No.": "8944052652"
  },
  {
    "Organization": "North-1",
    "Manager Name": "Vaibhav Katyal",
    "Manager Level": "ASM",
    "Dealer Name": "Eicher Kashmir Motors-Srinagar",
    "SCode": "1S1222",
    "State": "Jammu and Kashmir",
    "City": "Srinagar",
    "Contact No.": "9219500351"
  },
  {
    "Organization": "North-1",
    "Manager Name": "Ravdeep Singh",
    "Manager Level": "CSM",
    "Dealer Name": "Eicher Kashmir Motors-Srinagar",
    "SCode": "1S1222",
    "State": "Jammu and Kashmir",
    "City": "Srinagar",
    "Contact No.": "6363111313"
  },
  {
    "Organization": "North-1",
    "Manager Name": "Javed Iqbal",
    "Manager Level": "WM",
    "Dealer Name": "Eicher Kashmir Motors-Srinagar",
    "SCode": "1S1222",
    "State": "Jammu and Kashmir",
    "City": "Srinagar",
    "Contact No.": "7006429690"
  },
  {
    "Organization": "North-1",
    "Manager Name": "Adarsh Prasad",
    "Manager Level": "RSM",
    "Dealer Name": "Eicher Kashmir Motors-Srinagar",
    "SCode": "1S1222",
    "State": "Jammu and Kashmir",
    "City": "Srinagar",
    "Contact No.": "9717996321"
  },
  {
    "Organization": "North-1",
    "Manager Name": "Rayees",
    "Manager Level": "EOS Site Incharge",
    "Dealer Name": "Eicher Kashmir Motors-Srinagar",
    "SCode": "1S1222",
    "State": "Jammu and Kashmir",
    "City": "Srinagar",
    "Contact No.": "7006570025"
  },
  {
    "Organization": "North-1",
    "Manager Name": "Ufair Ajaz",
    "Manager Level": "MD",
    "Dealer Name": "Eicher Kashmir Motors-Srinagar",
    "SCode": "1S1222",
    "State": "Jammu and Kashmir",
    "City": "Srinagar",
    "Contact No.": "9796737308"
  },
  {
    "Organization": "West-1",
    "Manager Name": "Rambali Choudhery",
    "Manager Level": "EOS Site Incharge",
    "Dealer Name": "Fort Point Automotive Pvt Ltd-Bhiwandi",
    "SCode": "1S3114",
    "State": "Maharashtra",
    "City": "Bhiwandi",
    "Contact No.": "9594974686"
  },
  {
    "Organization": "West-1",
    "Manager Name": "Syeed Asif Ali",
    "Manager Level": "CSM",
    "Dealer Name": "Fort Point Automotive Pvt Ltd-Bhiwandi",
    "SCode": "1S3114",
    "State": "Maharashtra",
    "City": "Bhiwandi",
    "Contact No.": "8817057027"
  },
  {
    "Organization": "West-1",
    "Manager Name": "Sahil Bisht",
    "Manager Level": "ASM",
    "Dealer Name": "Fort Point Automotive Pvt Ltd-Bhiwandi",
    "SCode": "1S3114",
    "State": "Maharashtra",
    "City": "Bhiwandi",
    "Contact No.": "7304491771"
  },
  {
    "Organization": "West-1",
    "Manager Name": "Pankaj Surve / Ram Kumar Vishwakarma",
    "Manager Level": "WM",
    "Dealer Name": "Fort Point Automotive Pvt Ltd-Bhiwandi",
    "SCode": "1S3114",
    "State": "Maharashtra",
    "City": "Bhiwandi",
    "Contact No.": "9594993114,9594993227"
  },
  {
    "Organization": "West-1",
    "Manager Name": "Anil Jadhav / Bharat Jain",
    "Manager Level": "MD",
    "Dealer Name": "Fort Point Automotive Pvt Ltd-Bhiwandi",
    "SCode": "1S3114",
    "State": "Maharashtra",
    "City": "Bhiwandi",
    "Contact No.": "8108210404,9594800000"
  },
  {
    "Organization": "West-1",
    "Manager Name": "Suhas Ramchandra Mane",
    "Manager Level": "RSM",
    "Dealer Name": "Fort Point Automotive Pvt Ltd-Bhiwandi",
    "SCode": "1S3114",
    "State": "Maharashtra",
    "City": "Bhiwandi",
    "Contact No.": "8454812225"
  },
  {
    "Organization": "West-1",
    "Manager Name": "Sahil Bisht",
    "Manager Level": "ASM",
    "Dealer Name": "Fort Point Automotive Pvt Ltd-Govandi",
    "SCode": "1S3060",
    "State": "Maharashtra",
    "City": "Kurla",
    "Contact No.": "7304491771"
  },
  {
    "Organization": "West-1",
    "Manager Name": "Vijay Palkar / Sandesh Ghanekar",
    "Manager Level": "WM",
    "Dealer Name": "Fort Point Automotive Pvt Ltd-Govandi",
    "SCode": "1S3060",
    "State": "Maharashtra",
    "City": "Kurla",
    "Contact No.": "9594974526,9594974536"
  },
  {
    "Organization": "West-1",
    "Manager Name": "Sumanth Koneti",
    "Manager Level": "CSM",
    "Dealer Name": "Fort Point Automotive Pvt Ltd-Govandi",
    "SCode": "1S3060",
    "State": "Maharashtra",
    "City": "Kurla",
    "Contact No.": "9594732555"
  },
  {
    "Organization": "West-1",
    "Manager Name": "Anil Jadhav / Bharat Jain",
    "Manager Level": "MD",
    "Dealer Name": "Fort Point Automotive Pvt Ltd-Govandi",
    "SCode": "1S3060",
    "State": "Maharashtra",
    "City": "Kurla",
    "Contact No.": "8108210404,9594800000"
  },
  {
    "Organization": "West-1",
    "Manager Name": "Prem Bondekar",
    "Manager Level": "EOS Site Incharge",
    "Dealer Name": "Fort Point Automotive Pvt Ltd-Govandi",
    "SCode": "1S3060",
    "State": "Maharashtra",
    "City": "Kurla",
    "Contact No.": "9594974537,7304448796"
  },
  {
    "Organization": "West-1",
    "Manager Name": "Suhas Ramchandra Mane",
    "Manager Level": "RSM",
    "Dealer Name": "Fort Point Automotive Pvt Ltd-Govandi",
    "SCode": "1S3060",
    "State": "Maharashtra",
    "City": "Kurla",
    "Contact No.": "8454812225"
  },
  {
    "Organization": "West-1",
    "Manager Name": "Abhishek Digankar / Hemant Chavan",
    "Manager Level": "WM",
    "Dealer Name": "Fort Point Automotive Pvt Ltd-Rohinjan",
    "SCode": "1S3062",
    "State": "Maharashtra",
    "City": "Rohinjan",
    "Contact No.": "7039098774,7039098716"
  },
  {
    "Organization": "West-1",
    "Manager Name": "Sahil Bisht",
    "Manager Level": "ASM",
    "Dealer Name": "Fort Point Automotive Pvt Ltd-Rohinjan",
    "SCode": "1S3062",
    "State": "Maharashtra",
    "City": "Rohinjan",
    "Contact No.": "7304491771"
  },
  {
    "Organization": "West-1",
    "Manager Name": "Swayam Pawase / Vijay Baghat",
    "Manager Level": "EOS Site Incharge",
    "Dealer Name": "Fort Point Automotive Pvt Ltd-Rohinjan",
    "SCode": "1S3062",
    "State": "Maharashtra",
    "City": "Rohinjan",
    "Contact No.": "8655471318,7304448798"
  },
  {
    "Organization": "West-1",
    "Manager Name": "Anil Jadhav",
    "Manager Level": "MD",
    "Dealer Name": "Fort Point Automotive Pvt Ltd-Rohinjan",
    "SCode": "1S3062",
    "State": "Maharashtra",
    "City": "Rohinjan",
    "Contact No.": "8108210404"
  },
  {
    "Organization": "West-1",
    "Manager Name": "Syeed Asif Ali",
    "Manager Level": "CSM",
    "Dealer Name": "Fort Point Automotive Pvt Ltd-Rohinjan",
    "SCode": "1S3062",
    "State": "Maharashtra",
    "City": "Rohinjan",
    "Contact No.": "8817057027"
  },
  {
    "Organization": "West-1",
    "Manager Name": "Suhas Ramchandra Mane",
    "Manager Level": "RSM",
    "Dealer Name": "Fort Point Automotive Pvt Ltd-Rohinjan",
    "SCode": "1S3062",
    "State": "Maharashtra",
    "City": "Rohinjan",
    "Contact No.": "8454812225"
  },
  {
    "Organization": "East-1",
    "Manager Name": "Abhirup Ghosh",
    "Manager Level": "ASM",
    "Dealer Name": "Future Automobile Agency-Alampur",
    "SCode": "1S2075",
    "State": "West Bengal",
    "City": "Howrah",
    "Contact No.": "9073378080"
  },
  {
    "Organization": "East-1",
    "Manager Name": "TARA SANKAR CHATTERJEE",
    "Manager Level": "WM",
    "Dealer Name": "Future Automobile Agency-Alampur",
    "SCode": "1S2075",
    "State": "West Bengal",
    "City": "Howrah",
    "Contact No.": "9007022153,9088248821"
  },
  {
    "Organization": "East-1",
    "Manager Name": "Yogeshwar Singh",
    "Manager Level": "RSM",
    "Dealer Name": "Future Automobile Agency-Alampur",
    "SCode": "1S2075",
    "State": "West Bengal",
    "City": "Howrah",
    "Contact No.": "9717966997"
  },
  {
    "Organization": "East-1",
    "Manager Name": "Akash Das",
    "Manager Level": "CSM",
    "Dealer Name": "Future Automobile Agency-Alampur",
    "SCode": "1S2075",
    "State": "West Bengal",
    "City": "Howrah",
    "Contact No.": "7439543497"
  },
  {
    "Organization": "East-1",
    "Manager Name": "K K Daga",
    "Manager Level": "MD",
    "Dealer Name": "Future Automobile Agency-Alampur",
    "SCode": "1S2075",
    "State": "West Bengal",
    "City": "Howrah",
    "Contact No.": "9007022172"
  },
  {
    "Organization": "East-1",
    "Manager Name": "Sunil Das",
    "Manager Level": "WM",
    "Dealer Name": "Future Automobile Agency-Barasat",
    "SCode": "1S2300",
    "State": "West Bengal",
    "City": "Barasat",
    "Contact No.": "6292025709"
  },
  {
    "Organization": "East-1",
    "Manager Name": "Yogeshwar Singh",
    "Manager Level": "RSM",
    "Dealer Name": "Future Automobile Agency-Barasat",
    "SCode": "1S2300",
    "State": "West Bengal",
    "City": "Barasat",
    "Contact No.": "9717966997"
  },
  {
    "Organization": "East-1",
    "Manager Name": "K.K. Daga",
    "Manager Level": "MD",
    "Dealer Name": "Future Automobile Agency-Barasat",
    "SCode": "1S2300",
    "State": "West Bengal",
    "City": "Barasat",
    "Contact No.": "9007022171"
  },
  {
    "Organization": "East-1",
    "Manager Name": "Akash Das",
    "Manager Level": "CSM",
    "Dealer Name": "Future Automobile Agency-Barasat",
    "SCode": "1S2300",
    "State": "West Bengal",
    "City": "Barasat",
    "Contact No.": "7439543497"
  },
  {
    "Organization": "East-1",
    "Manager Name": "Abhirup Ghosh",
    "Manager Level": "ASM",
    "Dealer Name": "Future Automobile Agency-Barasat",
    "SCode": "1S2300",
    "State": "West Bengal",
    "City": "Barasat",
    "Contact No.": "9073378080"
  },
  {
    "Organization": "East-1",
    "Manager Name": "Ujjal Mondal",
    "Manager Level": "EOS Site Incharge",
    "Dealer Name": "Future Automobile Agency-Barasat",
    "SCode": "1S2300",
    "State": "West Bengal",
    "City": "Barasat",
    "Contact No.": "6292025707"
  },
  {
    "Organization": "East-1",
    "Manager Name": "Akash Das",
    "Manager Level": "CSM",
    "Dealer Name": "Future Automobile Agency-Chamrail",
    "SCode": "1S2071",
    "State": "West Bengal",
    "City": "Kolkata",
    "Contact No.": "7439543497"
  },
  {
    "Organization": "East-1",
    "Manager Name": "Yogeshwar Singh",
    "Manager Level": "RSM",
    "Dealer Name": "Future Automobile Agency-Chamrail",
    "SCode": "1S2071",
    "State": "West Bengal",
    "City": "Kolkata",
    "Contact No.": "9717966997"
  },
  {
    "Organization": "East-1",
    "Manager Name": "Abhirup Ghosh",
    "Manager Level": "ASM",
    "Dealer Name": "Future Automobile Agency-Chamrail",
    "SCode": "1S2071",
    "State": "West Bengal",
    "City": "Kolkata",
    "Contact No.": "9073378080"
  },
  {
    "Organization": "East-1",
    "Manager Name": "Mr. K K Daga",
    "Manager Level": "MD",
    "Dealer Name": "Future Automobile Agency-Chamrail",
    "SCode": "1S2071",
    "State": "West Bengal",
    "City": "Kolkata",
    "Contact No.": "9007022171"
  },
  {
    "Organization": "East-1",
    "Manager Name": "Subham Das",
    "Manager Level": "WM",
    "Dealer Name": "Future Automobile Agency-Chamrail",
    "SCode": "1S2071",
    "State": "West Bengal",
    "City": "Kolkata",
    "Contact No.": "9830241633"
  },
  {
    "Organization": "East-1",
    "Manager Name": "Prabir Singh Dey",
    "Manager Level": "MD",
    "Dealer Name": "Future Automobile Agency-Kharagpur",
    "SCode": "1S2087",
    "State": "West Bengal",
    "City": "Kharagpur",
    "Contact No.": "9674990986"
  },
  {
    "Organization": "East-1",
    "Manager Name": "Yogeshwar Singh",
    "Manager Level": "RSM",
    "Dealer Name": "Future Automobile Agency-Kharagpur",
    "SCode": "1S2087",
    "State": "West Bengal",
    "City": "Kharagpur",
    "Contact No.": "9717966997"
  },
  {
    "Organization": "East-1",
    "Manager Name": "Kuntal Deb",
    "Manager Level": "CSM",
    "Dealer Name": "Future Automobile Agency-Kharagpur",
    "SCode": "1S2087",
    "State": "West Bengal",
    "City": "Kharagpur",
    "Contact No.": "6291810496"
  },
  {
    "Organization": "East-1",
    "Manager Name": "Abhirup Ghosh",
    "Manager Level": "ASM",
    "Dealer Name": "Future Automobile Agency-Kharagpur",
    "SCode": "1S2087",
    "State": "West Bengal",
    "City": "Kharagpur",
    "Contact No.": "9073378080"
  },
  {
    "Organization": "East-1",
    "Manager Name": "Ajay Mahato / Sayan Chaterjee",
    "Manager Level": "WM",
    "Dealer Name": "Future Automobile Agency-Kharagpur",
    "SCode": "1S2087",
    "State": "West Bengal",
    "City": "Kharagpur",
    "Contact No.": "8100798288,9007022163"
  },
  {
    "Organization": "East-1",
    "Manager Name": "Netai Gayen",
    "Manager Level": "WM",
    "Dealer Name": "Future Automobile Agency-Sirakole",
    "SCode": "1S2103",
    "State": "West Bengal",
    "City": "South 24 parganas",
    "Contact No.": "8334056858,6290366805"
  },
  {
    "Organization": "East-1",
    "Manager Name": "Yogeshwar Singh",
    "Manager Level": "RSM",
    "Dealer Name": "Future Automobile Agency-Sirakole",
    "SCode": "1S2103",
    "State": "West Bengal",
    "City": "South 24 parganas",
    "Contact No.": "9717966997"
  },
  {
    "Organization": "East-1",
    "Manager Name": "K K Daga",
    "Manager Level": "MD",
    "Dealer Name": "Future Automobile Agency-Sirakole",
    "SCode": "1S2103",
    "State": "West Bengal",
    "City": "South 24 parganas",
    "Contact No.": "9007022171"
  },
  {
    "Organization": "East-1",
    "Manager Name": "Akash Das",
    "Manager Level": "CSM",
    "Dealer Name": "Future Automobile Agency-Sirakole",
    "SCode": "1S2103",
    "State": "West Bengal",
    "City": "South 24 parganas",
    "Contact No.": "7439543497"
  },
  {
    "Organization": "East-1",
    "Manager Name": "Abhirup Ghosh",
    "Manager Level": "ASM",
    "Dealer Name": "Future Automobile Agency-Sirakole",
    "SCode": "1S2103",
    "State": "West Bengal",
    "City": "South 24 parganas",
    "Contact No.": "9073378080"
  },
  {
    "Organization": "East-1",
    "Manager Name": "Suman Mandal / Ranjan Singh",
    "Manager Level": "WM",
    "Dealer Name": "GD Motors-Bangaigaon",
    "SCode": "1S2301",
    "State": "Assam",
    "City": "Bongaigaon",
    "Contact No.": "6290752682,6901281876"
  },
  {
    "Organization": "East-1",
    "Manager Name": "Ayan Ghosh / Vishal Kumar",
    "Manager Level": "CSM",
    "Dealer Name": "GD Motors-Bangaigaon",
    "SCode": "1S2301",
    "State": "Assam",
    "City": "Bongaigaon",
    "Contact No.": "8597603635,7630027054"
  },
  {
    "Organization": "East-1",
    "Manager Name": "Yogeshwar Singh",
    "Manager Level": "RSM",
    "Dealer Name": "GD Motors-Bangaigaon",
    "SCode": "1S2301",
    "State": "Assam",
    "City": "Bongaigaon",
    "Contact No.": "9717966997"
  },
  {
    "Organization": "East-1",
    "Manager Name": "Rakesh Ghosh",
    "Manager Level": "ASM",
    "Dealer Name": "GD Motors-Bangaigaon",
    "SCode": "1S2301",
    "State": "Assam",
    "City": "Bongaigaon",
    "Contact No.": "9477374098"
  },
  {
    "Organization": "East-1",
    "Manager Name": "Suraj Chetry / Savinder Singh Setthy",
    "Manager Level": "MD",
    "Dealer Name": "GD Motors-Bangaigaon",
    "SCode": "1S2301",
    "State": "Assam",
    "City": "Bongaigaon",
    "Contact No.": "9435104854,9864031944"
  },
  {
    "Organization": "East-1",
    "Manager Name": "Dipankar Rava",
    "Manager Level": "EOS Site Incharge",
    "Dealer Name": "GD Motors-Bangaigaon",
    "SCode": "1S2301",
    "State": "Assam",
    "City": "Bongaigaon",
    "Contact No.": "7635872986"
  },
  {
    "Organization": "East-1",
    "Manager Name": "Suman Mondal / Ranjan Singh",
    "Manager Level": "WM",
    "Dealer Name": "GD Motors-Barpeta",
    "SCode": "1S2176",
    "State": "Assam",
    "City": "Barpeta",
    "Contact No.": "7099024931,6901281876"
  },
  {
    "Organization": "East-1",
    "Manager Name": "Dipankar Rava / Dayanand Kumar",
    "Manager Level": "EOS Site Incharge",
    "Dealer Name": "GD Motors-Barpeta",
    "SCode": "1S2176",
    "State": "Assam",
    "City": "Barpeta",
    "Contact No.": "7635872986,7099024931"
  },
  {
    "Organization": "East-1",
    "Manager Name": "Rakesh Ghosh",
    "Manager Level": "ASM",
    "Dealer Name": "GD Motors-Barpeta",
    "SCode": "1S2176",
    "State": "Assam",
    "City": "Barpeta",
    "Contact No.": "9477374098"
  },
  {
    "Organization": "East-1",
    "Manager Name": "Yogeshwar Singh",
    "Manager Level": "RSM",
    "Dealer Name": "GD Motors-Barpeta",
    "SCode": "1S2176",
    "State": "Assam",
    "City": "Barpeta",
    "Contact No.": "9717966997"
  },
  {
    "Organization": "East-1",
    "Manager Name": "Suraj Chetry / Savinder Singh Setthy",
    "Manager Level": "MD",
    "Dealer Name": "GD Motors-Barpeta",
    "SCode": "1S2176",
    "State": "Assam",
    "City": "Barpeta",
    "Contact No.": "9435104854,9864031944"
  },
  {
    "Organization": "East-1",
    "Manager Name": "Ayan Ghosh / Vishal Kumar",
    "Manager Level": "CSM",
    "Dealer Name": "GD Motors-Barpeta",
    "SCode": "1S2176",
    "State": "Assam",
    "City": "Barpeta",
    "Contact No.": "8597603635,7630027054"
  },
  {
    "Organization": "East-1",
    "Manager Name": "Suraj Chetry / Savinder Singh Setthy",
    "Manager Level": "MD",
    "Dealer Name": "GD Motors-Dibrugarh",
    "SCode": "1S2175",
    "State": "Assam",
    "City": "Dibrugarh",
    "Contact No.": "9435104854,9864031944"
  },
  {
    "Organization": "East-1",
    "Manager Name": "Yogeshwar Singh",
    "Manager Level": "RSM",
    "Dealer Name": "GD Motors-Dibrugarh",
    "SCode": "1S2175",
    "State": "Assam",
    "City": "Dibrugarh",
    "Contact No.": "9717966997"
  },
  {
    "Organization": "East-1",
    "Manager Name": "Pinku Borah",
    "Manager Level": "WM",
    "Dealer Name": "GD Motors-Dibrugarh",
    "SCode": "1S2175",
    "State": "Assam",
    "City": "Dibrugarh",
    "Contact No.": "6901260132"
  },
  {
    "Organization": "East-1",
    "Manager Name": "Rakesh Ghosh",
    "Manager Level": "ASM",
    "Dealer Name": "GD Motors-Dibrugarh",
    "SCode": "1S2175",
    "State": "Assam",
    "City": "Dibrugarh",
    "Contact No.": "9477374098"
  },
  {
    "Organization": "East-1",
    "Manager Name": "Pritam Ghosal / Vishal Kumar",
    "Manager Level": "CSM",
    "Dealer Name": "GD Motors-Dibrugarh",
    "SCode": "1S2175",
    "State": "Assam",
    "City": "Dibrugarh",
    "Contact No.": "9734050784,7630027054"
  },
  {
    "Organization": "East-1",
    "Manager Name": "Manash Jyoti Gogoi / Rituraj Thengal",
    "Manager Level": "EOS Site Incharge",
    "Dealer Name": "GD Motors-Dibrugarh",
    "SCode": "1S2175",
    "State": "Assam",
    "City": "Dibrugarh",
    "Contact No.": "7099010084,9387990190"
  },
  {
    "Organization": "East-1",
    "Manager Name": "Ranjan Singh / Suprio Nath",
    "Manager Level": "WM",
    "Dealer Name": "GD Motors-Guwahati",
    "SCode": "1S2162",
    "State": "Assam",
    "City": "Guwahati",
    "Contact No.": "6901281876,7099020686"
  },
  {
    "Organization": "East-1",
    "Manager Name": "Suraj Chetry",
    "Manager Level": "MD",
    "Dealer Name": "GD Motors-Guwahati",
    "SCode": "1S2162",
    "State": "Assam",
    "City": "Guwahati",
    "Contact No.": "9435104854"
  },
  {
    "Organization": "East-1",
    "Manager Name": "Yogeshwar Singh",
    "Manager Level": "RSM",
    "Dealer Name": "GD Motors-Guwahati",
    "SCode": "1S2162",
    "State": "Assam",
    "City": "Guwahati",
    "Contact No.": "9717966997"
  },
  {
    "Organization": "East-1",
    "Manager Name": "Sumit Kumar Paul / Vishal Kumar",
    "Manager Level": "CSM",
    "Dealer Name": "GD Motors-Guwahati",
    "SCode": "1S2162",
    "State": "Assam",
    "City": "Guwahati",
    "Contact No.": "9752445160,7630027054"
  },
  {
    "Organization": "East-1",
    "Manager Name": "Rakesh Ghosh",
    "Manager Level": "ASM",
    "Dealer Name": "GD Motors-Guwahati",
    "SCode": "1S2162",
    "State": "Assam",
    "City": "Guwahati",
    "Contact No.": "9477374098"
  },
  {
    "Organization": "East-1",
    "Manager Name": "Faijul Haque Sodial / R Singh",
    "Manager Level": "EOS Site Incharge",
    "Dealer Name": "GD Motors-Guwahati",
    "SCode": "1S2162",
    "State": "Assam",
    "City": "Guwahati",
    "Contact No.": "7099020685,7099010308"
  },
  {
    "Organization": "East-1",
    "Manager Name": "Suraj Chettri",
    "Manager Level": "MD",
    "Dealer Name": "GD Motors-Juwai",
    "SCode": "1S2259",
    "State": "Meghalaya",
    "City": "Shillong",
    "Contact No.": "9435104854"
  },
  {
    "Organization": "East-1",
    "Manager Name": "Ranjan Singh / Suprio Nath",
    "Manager Level": "WM",
    "Dealer Name": "GD Motors-Juwai",
    "SCode": "1S2259",
    "State": "Meghalaya",
    "City": "Shillong",
    "Contact No.": "6901281876,7099020686"
  },
  {
    "Organization": "East-1",
    "Manager Name": "Sumit Kumar Paul / Vishal Kumar",
    "Manager Level": "CSM",
    "Dealer Name": "GD Motors-Juwai",
    "SCode": "1S2259",
    "State": "Meghalaya",
    "City": "Shillong",
    "Contact No.": "9752445160,7630027054"
  },
  {
    "Organization": "East-1",
    "Manager Name": "Rakesh Ghosh",
    "Manager Level": "ASM",
    "Dealer Name": "GD Motors-Juwai",
    "SCode": "1S2259",
    "State": "Meghalaya",
    "City": "Shillong",
    "Contact No.": "9477374098"
  },
  {
    "Organization": "East-1",
    "Manager Name": "Yogeshwar Singh",
    "Manager Level": "RSM",
    "Dealer Name": "GD Motors-Juwai",
    "SCode": "1S2259",
    "State": "Meghalaya",
    "City": "Shillong",
    "Contact No.": "9717966997"
  },
  {
    "Organization": "East-1",
    "Manager Name": "Faijul Haque Sodial / R Singh",
    "Manager Level": "EOS Site Incharge",
    "Dealer Name": "GD Motors-Juwai",
    "SCode": "1S2259",
    "State": "Meghalaya",
    "City": "Shillong",
    "Contact No.": "7099020685,7099010308"
  },
  {
    "Organization": "East-1",
    "Manager Name": "Suraj Chetry / Savinder Singh Setthy",
    "Manager Level": "MD",
    "Dealer Name": "GD Motors-Kharupetia",
    "SCode": "1S2262",
    "State": "Assam",
    "City": "Guwahati",
    "Contact No.": "9435104854,9864031944"
  },
  {
    "Organization": "East-1",
    "Manager Name": "Sumit Kumar Paul / Vishal Kumar",
    "Manager Level": "CSM",
    "Dealer Name": "GD Motors-Kharupetia",
    "SCode": "1S2262",
    "State": "Assam",
    "City": "Guwahati",
    "Contact No.": "9752445160,7630027054"
  },
  {
    "Organization": "East-1",
    "Manager Name": "Shushil Baniya",
    "Manager Level": "WM",
    "Dealer Name": "GD Motors-Kharupetia",
    "SCode": "1S2262",
    "State": "Assam",
    "City": "Guwahati",
    "Contact No.": "8135974592"
  },
  {
    "Organization": "East-1",
    "Manager Name": "Abinash Deka",
    "Manager Level": "EOS Site Incharge",
    "Dealer Name": "GD Motors-Kharupetia",
    "SCode": "1S2262",
    "State": "Assam",
    "City": "Guwahati",
    "Contact No.": "9957557735"
  },
  {
    "Organization": "East-1",
    "Manager Name": "Rakesh Ghosh",
    "Manager Level": "ASM",
    "Dealer Name": "GD Motors-Kharupetia",
    "SCode": "1S2262",
    "State": "Assam",
    "City": "Guwahati",
    "Contact No.": "9477374098"
  },
  {
    "Organization": "East-1",
    "Manager Name": "Yogeshwar Singh",
    "Manager Level": "RSM",
    "Dealer Name": "GD Motors-Kharupetia",
    "SCode": "1S2262",
    "State": "Assam",
    "City": "Guwahati",
    "Contact No.": "9717966997"
  },
  {
    "Organization": "East-2",
    "Manager Name": "Keshav Jee",
    "Manager Level": "CSM",
    "Dealer Name": "GK Associates-Mahendragarh",
    "SCode": "1S2166",
    "State": "Chhattisgarh",
    "City": "Manendragarh",
    "Contact No.": "8986011219"
  },
  {
    "Organization": "East-2",
    "Manager Name": "Hanuman Das Pandey",
    "Manager Level": "WM",
    "Dealer Name": "GK Associates-Mahendragarh",
    "SCode": "1S2166",
    "State": "Chhattisgarh",
    "City": "Manendragarh",
    "Contact No.": "8827275822"
  },
  {
    "Organization": "East-2",
    "Manager Name": "Abhay Pratap Singh",
    "Manager Level": "EOS Site Incharge",
    "Dealer Name": "GK Associates-Mahendragarh",
    "SCode": "1S2166",
    "State": "Chhattisgarh",
    "City": "Manendragarh",
    "Contact No.": "6266273810"
  },
  {
    "Organization": "East-2",
    "Manager Name": "Rachit Kumar",
    "Manager Level": "ASM",
    "Dealer Name": "GK Associates-Mahendragarh",
    "SCode": "1S2166",
    "State": "Chhattisgarh",
    "City": "Manendragarh",
    "Contact No.": "9534341234"
  },
  {
    "Organization": "East-2",
    "Manager Name": "Niket Kumar",
    "Manager Level": "RSM",
    "Dealer Name": "GK Associates-Mahendragarh",
    "SCode": "1S2166",
    "State": "Chhattisgarh",
    "City": "Manendragarh",
    "Contact No.": "8427733112"
  },
  {
    "Organization": "East-2",
    "Manager Name": "Karamjeet singh kalra",
    "Manager Level": "MD",
    "Dealer Name": "GK Associates-Mahendragarh",
    "SCode": "1S2166",
    "State": "Chhattisgarh",
    "City": "Manendragarh",
    "Contact No.": "9977504811"
  },
  {
    "Organization": "East-2",
    "Manager Name": "Niket Kumar",
    "Manager Level": "RSM",
    "Dealer Name": "GK Automotive Pvt Ltd-Durg",
    "SCode": "1S2239",
    "State": "Chhattisgarh",
    "City": "Durg",
    "Contact No.": "8427733112"
  },
  {
    "Organization": "East-2",
    "Manager Name": "Nilesh Gajandekar",
    "Manager Level": "MD",
    "Dealer Name": "GK Automotive Pvt Ltd-Durg",
    "SCode": "1S2239",
    "State": "Chhattisgarh",
    "City": "Durg",
    "Contact No.": "7722885566"
  },
  {
    "Organization": "East-2",
    "Manager Name": "Rachit Kumar",
    "Manager Level": "ASM",
    "Dealer Name": "GK Automotive Pvt Ltd-Durg",
    "SCode": "1S2239",
    "State": "Chhattisgarh",
    "City": "Durg",
    "Contact No.": "9534341234"
  },
  {
    "Organization": "East-2",
    "Manager Name": "Sachin Jibhakate",
    "Manager Level": "WM",
    "Dealer Name": "GK Automotive Pvt Ltd-Durg",
    "SCode": "1S2239",
    "State": "Chhattisgarh",
    "City": "Durg",
    "Contact No.": "6260944421"
  },
  {
    "Organization": "East-2",
    "Manager Name": "Vinay Ramteke",
    "Manager Level": "EOS Site Incharge",
    "Dealer Name": "GK Automotive Pvt Ltd-Durg",
    "SCode": "1S2239",
    "State": "Chhattisgarh",
    "City": "Durg",
    "Contact No.": "8815104805"
  },
  {
    "Organization": "East-2",
    "Manager Name": "Gaurav Singh Rathore",
    "Manager Level": "CSM",
    "Dealer Name": "GK Automotive Pvt Ltd-Durg",
    "SCode": "1S2239",
    "State": "Chhattisgarh",
    "City": "Durg",
    "Contact No.": "8085332358"
  },
  {
    "Organization": "East-2",
    "Manager Name": "Nilesh Gajandekar / Suraj Parwani",
    "Manager Level": "MD",
    "Dealer Name": "GK Automotive Pvt Ltd-Raipur",
    "SCode": "1S5032",
    "State": "Chhattisgarh",
    "City": "Raipur",
    "Contact No.": "7722885566,9826897000"
  },
  {
    "Organization": "East-2",
    "Manager Name": "Niket Kumar",
    "Manager Level": "RSM",
    "Dealer Name": "GK Automotive Pvt Ltd-Raipur",
    "SCode": "1S5032",
    "State": "Chhattisgarh",
    "City": "Raipur",
    "Contact No.": "8427733112"
  },
  {
    "Organization": "East-2",
    "Manager Name": "Tarunesh Chikate",
    "Manager Level": "WM",
    "Dealer Name": "GK Automotive Pvt Ltd-Raipur",
    "SCode": "1S5032",
    "State": "Chhattisgarh",
    "City": "Raipur",
    "Contact No.": "7000629100"
  },
  {
    "Organization": "East-2",
    "Manager Name": "Prajjwal Vilas Konde",
    "Manager Level": "CSM",
    "Dealer Name": "GK Automotive Pvt Ltd-Raipur",
    "SCode": "1S5032",
    "State": "Chhattisgarh",
    "City": "Raipur",
    "Contact No.": "9359505529"
  },
  {
    "Organization": "East-2",
    "Manager Name": "Amit Bisen (D) / Ashwani Koram (N)",
    "Manager Level": "EOS Site Incharge",
    "Dealer Name": "GK Automotive Pvt Ltd-Raipur",
    "SCode": "1S5032",
    "State": "Chhattisgarh",
    "City": "Raipur",
    "Contact No.": "9340372863,9977147311"
  },
  {
    "Organization": "East-2",
    "Manager Name": "Rachit Kumar",
    "Manager Level": "ASM",
    "Dealer Name": "GK Automotive Pvt Ltd-Raipur",
    "SCode": "1S5032",
    "State": "Chhattisgarh",
    "City": "Raipur",
    "Contact No.": "9534341234"
  },
  {
    "Organization": "East-2",
    "Manager Name": "Tahir Ansari",
    "Manager Level": "WM",
    "Dealer Name": "GK Automotive Pvt Ltd-Rajnandgaon",
    "SCode": "1S2224",
    "State": "Chhattisgarh",
    "City": "Rajnandgaon",
    "Contact No.": "8966986536"
  },
  {
    "Organization": "East-2",
    "Manager Name": "Rachit Kumar",
    "Manager Level": "ASM",
    "Dealer Name": "GK Automotive Pvt Ltd-Rajnandgaon",
    "SCode": "1S2224",
    "State": "Chhattisgarh",
    "City": "Rajnandgaon",
    "Contact No.": "9534341234"
  },
  {
    "Organization": "East-2",
    "Manager Name": "Rahul Patke",
    "Manager Level": "EOS Site Incharge",
    "Dealer Name": "GK Automotive Pvt Ltd-Rajnandgaon",
    "SCode": "1S2224",
    "State": "Chhattisgarh",
    "City": "Rajnandgaon",
    "Contact No.": "8305349922"
  },
  {
    "Organization": "East-2",
    "Manager Name": "Nilesh",
    "Manager Level": "MD",
    "Dealer Name": "GK Automotive Pvt Ltd-Rajnandgaon",
    "SCode": "1S2224",
    "State": "Chhattisgarh",
    "City": "Rajnandgaon",
    "Contact No.": "7722885566"
  },
  {
    "Organization": "East-2",
    "Manager Name": "Aayush Gupta",
    "Manager Level": "CSM",
    "Dealer Name": "GK Automotive Pvt Ltd-Rajnandgaon",
    "SCode": "1S2224",
    "State": "Chhattisgarh",
    "City": "Rajnandgaon",
    "Contact No.": "7471163964"
  },
  {
    "Organization": "East-2",
    "Manager Name": "Niket Kumar",
    "Manager Level": "RSM",
    "Dealer Name": "GK Automotive Pvt Ltd-Rajnandgaon",
    "SCode": "1S2224",
    "State": "Chhattisgarh",
    "City": "Rajnandgaon",
    "Contact No.": "8427733112"
  },
  {
    "Organization": "East-2",
    "Manager Name": "Rachit Kumar",
    "Manager Level": "ASM",
    "Dealer Name": "GK Automotive-Baloda Bazar",
    "SCode": "1S2269",
    "State": "Chhattisgarh",
    "City": "Bilaspur",
    "Contact No.": "9534341234"
  },
  {
    "Organization": "East-2",
    "Manager Name": "Nilesh Gajandekar",
    "Manager Level": "MD",
    "Dealer Name": "GK Automotive-Baloda Bazar",
    "SCode": "1S2269",
    "State": "Chhattisgarh",
    "City": "Bilaspur",
    "Contact No.": "7722885566"
  },
  {
    "Organization": "East-2",
    "Manager Name": "Satyam Soni",
    "Manager Level": "WM",
    "Dealer Name": "GK Automotive-Baloda Bazar",
    "SCode": "1S2269",
    "State": "Chhattisgarh",
    "City": "Bilaspur",
    "Contact No.": "8817856296,7000629100"
  },
  {
    "Organization": "East-2",
    "Manager Name": "Tarun Kumar Sahu",
    "Manager Level": "EOS Site Incharge",
    "Dealer Name": "GK Automotive-Baloda Bazar",
    "SCode": "1S2269",
    "State": "Chhattisgarh",
    "City": "Bilaspur",
    "Contact No.": "9238108267"
  },
  {
    "Organization": "East-2",
    "Manager Name": "Prajjwal Vilas Konde",
    "Manager Level": "CSM",
    "Dealer Name": "GK Automotive-Baloda Bazar",
    "SCode": "1S2269",
    "State": "Chhattisgarh",
    "City": "Bilaspur",
    "Contact No.": "9359505529"
  },
  {
    "Organization": "East-2",
    "Manager Name": "Niket Kumar",
    "Manager Level": "RSM",
    "Dealer Name": "GK Automotive-Baloda Bazar",
    "SCode": "1S2269",
    "State": "Chhattisgarh",
    "City": "Bilaspur",
    "Contact No.": "8427733112"
  },
  {
    "Organization": "North-1",
    "Manager Name": "Vishav Garg",
    "Manager Level": "MD",
    "Dealer Name": "Garg Automobile-Patran",
    "SCode": "1S1239",
    "State": "Punjab",
    "City": "Pattran",
    "Contact No.": "9888086833"
  },
  {
    "Organization": "North-1",
    "Manager Name": "Vaibhav Katyal",
    "Manager Level": "ASM",
    "Dealer Name": "Garg Automobile-Patran",
    "SCode": "1S1239",
    "State": "Punjab",
    "City": "Pattran",
    "Contact No.": "9219500351"
  },
  {
    "Organization": "North-1",
    "Manager Name": "Heera Singh",
    "Manager Level": "WM",
    "Dealer Name": "Garg Automobile-Patran",
    "SCode": "1S1239",
    "State": "Punjab",
    "City": "Pattran",
    "Contact No.": "7009348515"
  },
  {
    "Organization": "North-1",
    "Manager Name": "Adarsh Prasad",
    "Manager Level": "RSM",
    "Dealer Name": "Garg Automobile-Patran",
    "SCode": "1S1239",
    "State": "Punjab",
    "City": "Pattran",
    "Contact No.": "9717996321"
  },
  {
    "Organization": "North-1",
    "Manager Name": "Amit Kumar",
    "Manager Level": "CSM",
    "Dealer Name": "Garg Automobile-Patran",
    "SCode": "1S1239",
    "State": "Punjab",
    "City": "Pattran",
    "Contact No.": "8475085847"
  },
  {
    "Organization": "West-2",
    "Manager Name": "Vishal Kulkarni",
    "Manager Level": "ASM",
    "Dealer Name": "Geedee Trucking Pvt Ltd-Chhindwara",
    "SCode": "1S5071",
    "State": "Madhya Pradesh",
    "City": "Chhindwara",
    "Contact No.": "8349997686"
  },
  {
    "Organization": "West-2",
    "Manager Name": "Sujeet Bahutra",
    "Manager Level": "WM",
    "Dealer Name": "Geedee Trucking Pvt Ltd-Chhindwara",
    "SCode": "1S5071",
    "State": "Madhya Pradesh",
    "City": "Chhindwara",
    "Contact No.": "9201995073"
  },
  {
    "Organization": "West-2",
    "Manager Name": "Ashutosh Tiwari",
    "Manager Level": "MD",
    "Dealer Name": "Geedee Trucking Pvt Ltd-Chhindwara",
    "SCode": "1S5071",
    "State": "Madhya Pradesh",
    "City": "Chhindwara",
    "Contact No.": "9425003447"
  },
  {
    "Organization": "West-2",
    "Manager Name": "Sudhir Kumar",
    "Manager Level": "RSM",
    "Dealer Name": "Geedee Trucking Pvt Ltd-Chhindwara",
    "SCode": "1S5071",
    "State": "Madhya Pradesh",
    "City": "Chhindwara",
    "Contact No.": "9752542733"
  },
  {
    "Organization": "West-2",
    "Manager Name": "Jamshed",
    "Manager Level": "EOS Site Incharge",
    "Dealer Name": "Geedee Trucking Pvt Ltd-Chhindwara",
    "SCode": "1S5071",
    "State": "Madhya Pradesh",
    "City": "Chhindwara",
    "Contact No.": "9201995074"
  },
  {
    "Organization": "West-2",
    "Manager Name": "Saurabh Dwivedi",
    "Manager Level": "CSM",
    "Dealer Name": "Geedee Trucking Pvt Ltd-Chhindwara",
    "SCode": "1S5071",
    "State": "Madhya Pradesh",
    "City": "Chhindwara",
    "Contact No.": "9407322767"
  },
  {
    "Organization": "West-2",
    "Manager Name": "Sudhir Kumar",
    "Manager Level": "RSM",
    "Dealer Name": "Geedee Trucking Pvt Ltd-Jabalpur",
    "SCode": "1S5072",
    "State": "Madhya Pradesh",
    "City": "Jabalpur",
    "Contact No.": "9752542733"
  },
  {
    "Organization": "West-2",
    "Manager Name": "Atul",
    "Manager Level": "EOS Site Incharge",
    "Dealer Name": "Geedee Trucking Pvt Ltd-Jabalpur",
    "SCode": "1S5072",
    "State": "Madhya Pradesh",
    "City": "Jabalpur",
    "Contact No.": "6262000657"
  },
  {
    "Organization": "West-2",
    "Manager Name": "Ashutosh Tiwari",
    "Manager Level": "MD",
    "Dealer Name": "Geedee Trucking Pvt Ltd-Jabalpur",
    "SCode": "1S5072",
    "State": "Madhya Pradesh",
    "City": "Jabalpur",
    "Contact No.": "9425003447"
  },
  {
    "Organization": "West-2",
    "Manager Name": "Saurabh Dwivedi",
    "Manager Level": "CSM",
    "Dealer Name": "Geedee Trucking Pvt Ltd-Jabalpur",
    "SCode": "1S5072",
    "State": "Madhya Pradesh",
    "City": "Jabalpur",
    "Contact No.": "9407322767"
  },
  {
    "Organization": "West-2",
    "Manager Name": "Vishal Kulkarni",
    "Manager Level": "ASM",
    "Dealer Name": "Geedee Trucking Pvt Ltd-Jabalpur",
    "SCode": "1S5072",
    "State": "Madhya Pradesh",
    "City": "Jabalpur",
    "Contact No.": "8349997686"
  },
  {
    "Organization": "West-2",
    "Manager Name": "Amit Tiwari",
    "Manager Level": "WM",
    "Dealer Name": "Geedee Trucking Pvt Ltd-Jabalpur",
    "SCode": "1S5072",
    "State": "Madhya Pradesh",
    "City": "Jabalpur",
    "Contact No.": "6262000659"
  },
  {
    "Organization": "West-2",
    "Manager Name": "Jaydeep Chavda",
    "Manager Level": "CSM",
    "Dealer Name": "Gir Motors-Morbi",
    "SCode": "1S3462",
    "State": "Gujarat",
    "City": "Morbi",
    "Contact No.": "7567379010"
  },
  {
    "Organization": "West-2",
    "Manager Name": "Husain Sama",
    "Manager Level": "WM",
    "Dealer Name": "Gir Motors-Morbi",
    "SCode": "1S3462",
    "State": "Gujarat",
    "City": "Morbi",
    "Contact No.": "9979174404"
  },
  {
    "Organization": "West-2",
    "Manager Name": "Vipul Barot",
    "Manager Level": "ASM",
    "Dealer Name": "Gir Motors-Morbi",
    "SCode": "1S3462",
    "State": "Gujarat",
    "City": "Morbi",
    "Contact No.": "9638341568"
  },
  {
    "Organization": "West-2",
    "Manager Name": "Sudhir Kumar",
    "Manager Level": "RSM",
    "Dealer Name": "Gir Motors-Morbi",
    "SCode": "1S3462",
    "State": "Gujarat",
    "City": "Morbi",
    "Contact No.": "9752542733"
  },
  {
    "Organization": "West-2",
    "Manager Name": "Ashif Mothiya",
    "Manager Level": "EOS Site Incharge",
    "Dealer Name": "Gir Motors-Morbi",
    "SCode": "1S3462",
    "State": "Gujarat",
    "City": "Morbi",
    "Contact No.": "9328111534"
  },
  {
    "Organization": "West-2",
    "Manager Name": "Majid Sama",
    "Manager Level": "MD",
    "Dealer Name": "Gir Motors-Morbi",
    "SCode": "1S3462",
    "State": "Gujarat",
    "City": "Morbi",
    "Contact No.": "8000025892"
  },
  {
    "Organization": "West-2",
    "Manager Name": "Atul Tekade / Anup Modakwar",
    "Manager Level": "WM",
    "Dealer Name": "Girnar Motors-Akola",
    "SCode": "1S3115",
    "State": "Vidarbha",
    "City": "Akola",
    "Contact No.": "9545979313,9765009213"
  },
  {
    "Organization": "West-2",
    "Manager Name": "Vishal Kulkarni",
    "Manager Level": "ASM",
    "Dealer Name": "Girnar Motors-Akola",
    "SCode": "1S3115",
    "State": "Vidarbha",
    "City": "Akola",
    "Contact No.": "8349997686"
  },
  {
    "Organization": "West-2",
    "Manager Name": "Mr. Nikunj Chandak",
    "Manager Level": "MD",
    "Dealer Name": "Girnar Motors-Akola",
    "SCode": "1S3115",
    "State": "Vidarbha",
    "City": "Akola",
    "Contact No.": "9923111413"
  },
  {
    "Organization": "West-2",
    "Manager Name": "Vaibhao Prabhakar Karanjekar",
    "Manager Level": "CSM",
    "Dealer Name": "Girnar Motors-Akola",
    "SCode": "1S3115",
    "State": "Vidarbha",
    "City": "Akola",
    "Contact No.": "8698425989"
  },
  {
    "Organization": "West-2",
    "Manager Name": "Sudhir Kumar",
    "Manager Level": "RSM",
    "Dealer Name": "Girnar Motors-Akola",
    "SCode": "1S3115",
    "State": "Vidarbha",
    "City": "Akola",
    "Contact No.": "9752542733"
  },
  {
    "Organization": "West-2",
    "Manager Name": "Amol Naikwad / Umesh Mundhada",
    "Manager Level": "MD",
    "Dealer Name": "Girnar Motors-Bhandara Road",
    "SCode": "1S3403",
    "State": "Vidarbha",
    "City": "Nagpur",
    "Contact No.": "9607005113,9822695813"
  },
  {
    "Organization": "West-2",
    "Manager Name": "Vishal Kulkarni",
    "Manager Level": "ASM",
    "Dealer Name": "Girnar Motors-Bhandara Road",
    "SCode": "1S3403",
    "State": "Vidarbha",
    "City": "Nagpur",
    "Contact No.": "8349997686"
  },
  {
    "Organization": "West-2",
    "Manager Name": "Mohd Talib",
    "Manager Level": "CSM",
    "Dealer Name": "Girnar Motors-Bhandara Road",
    "SCode": "1S3403",
    "State": "Vidarbha",
    "City": "Nagpur",
    "Contact No.": "9922366655"
  },
  {
    "Organization": "West-2",
    "Manager Name": "Sudhir Kumar",
    "Manager Level": "RSM",
    "Dealer Name": "Girnar Motors-Bhandara Road",
    "SCode": "1S3403",
    "State": "Vidarbha",
    "City": "Nagpur",
    "Contact No.": "9752542733"
  },
  {
    "Organization": "West-2",
    "Manager Name": "Sandeep Lichde",
    "Manager Level": "WM",
    "Dealer Name": "Girnar Motors-Bhandara Road",
    "SCode": "1S3403",
    "State": "Vidarbha",
    "City": "Nagpur",
    "Contact No.": "9923109313"
  },
  {
    "Organization": "West-2",
    "Manager Name": "Shubham / Vipul",
    "Manager Level": "EOS Site Incharge",
    "Dealer Name": "Girnar Motors-Bhandara Road",
    "SCode": "1S3403",
    "State": "Vidarbha",
    "City": "Nagpur",
    "Contact No.": "7757977983"
  },
  {
    "Organization": "West-2",
    "Manager Name": "Amol Naikwad / Nikunj Chandak",
    "Manager Level": "MD",
    "Dealer Name": "Girnar Motors-Chandrapur",
    "SCode": "1S3313",
    "State": "Vidarbha",
    "City": "Chandrapur",
    "Contact No.": "9607005113,9923111413"
  },
  {
    "Organization": "West-2",
    "Manager Name": "Vaibhao Prabhakar Karanjekar",
    "Manager Level": "CSM",
    "Dealer Name": "Girnar Motors-Chandrapur",
    "SCode": "1S3313",
    "State": "Vidarbha",
    "City": "Chandrapur",
    "Contact No.": "8698425989"
  },
  {
    "Organization": "West-2",
    "Manager Name": "Anup Modakwar",
    "Manager Level": "WM",
    "Dealer Name": "Girnar Motors-Chandrapur",
    "SCode": "1S3313",
    "State": "Vidarbha",
    "City": "Chandrapur",
    "Contact No.": "9673992531"
  },
  {
    "Organization": "West-2",
    "Manager Name": "Sofen (D) / Yashwant (N)",
    "Manager Level": "EOS Site Incharge",
    "Dealer Name": "Girnar Motors-Chandrapur",
    "SCode": "1S3313",
    "State": "Vidarbha",
    "City": "Chandrapur",
    "Contact No.": "9527487130,9923005559"
  },
  {
    "Organization": "West-2",
    "Manager Name": "Vishal Kulkarni",
    "Manager Level": "ASM",
    "Dealer Name": "Girnar Motors-Chandrapur",
    "SCode": "1S3313",
    "State": "Vidarbha",
    "City": "Chandrapur",
    "Contact No.": "8349997686"
  },
  {
    "Organization": "West-2",
    "Manager Name": "Sudhir Kumar",
    "Manager Level": "RSM",
    "Dealer Name": "Girnar Motors-Chandrapur",
    "SCode": "1S3313",
    "State": "Vidarbha",
    "City": "Chandrapur",
    "Contact No.": "9752542733"
  },
  {
    "Organization": "West-2",
    "Manager Name": "Sudhir Kumar",
    "Manager Level": "RSM",
    "Dealer Name": "Girnar Motors-Nagpur",
    "SCode": "1S3076",
    "State": "Vidarbha",
    "City": "Nagpur",
    "Contact No.": "9752542733"
  },
  {
    "Organization": "West-2",
    "Manager Name": "Raj kumar / Deep Mandepe",
    "Manager Level": "WM",
    "Dealer Name": "Girnar Motors-Nagpur",
    "SCode": "1S3076",
    "State": "Vidarbha",
    "City": "Nagpur",
    "Contact No.": "7030706113,9923000422"
  },
  {
    "Organization": "West-2",
    "Manager Name": "Amol Naikwad",
    "Manager Level": "MD",
    "Dealer Name": "Girnar Motors-Nagpur",
    "SCode": "1S3076",
    "State": "Vidarbha",
    "City": "Nagpur",
    "Contact No.": "9607005113"
  },
  {
    "Organization": "West-2",
    "Manager Name": "Mohd Talib Sidiqqui",
    "Manager Level": "CSM",
    "Dealer Name": "Girnar Motors-Nagpur",
    "SCode": "1S3076",
    "State": "Vidarbha",
    "City": "Nagpur",
    "Contact No.": "9922366655"
  },
  {
    "Organization": "West-2",
    "Manager Name": "Vishal Kulkarni",
    "Manager Level": "ASM",
    "Dealer Name": "Girnar Motors-Nagpur",
    "SCode": "1S3076",
    "State": "Vidarbha",
    "City": "Nagpur",
    "Contact No.": "8349997686"
  },
  {
    "Organization": "West-2",
    "Manager Name": "Sumit Kachawa",
    "Manager Level": "WM",
    "Dealer Name": "Gitanjali Motors-Mandsaur",
    "SCode": "1S5066",
    "State": "Madhya Pradesh",
    "City": "Mandsaur",
    "Contact No.": "6232018861"
  },
  {
    "Organization": "West-2",
    "Manager Name": "Sudhir Kumar",
    "Manager Level": "RSM",
    "Dealer Name": "Gitanjali Motors-Mandsaur",
    "SCode": "1S5066",
    "State": "Madhya Pradesh",
    "City": "Mandsaur",
    "Contact No.": "9752542733"
  },
  {
    "Organization": "West-2",
    "Manager Name": "Chaten Rathod",
    "Manager Level": "EOS Site Incharge",
    "Dealer Name": "Gitanjali Motors-Mandsaur",
    "SCode": "1S5066",
    "State": "Madhya Pradesh",
    "City": "Mandsaur",
    "Contact No.": "6232018862"
  },
  {
    "Organization": "West-2",
    "Manager Name": "Divyanshu Malviy",
    "Manager Level": "CSM",
    "Dealer Name": "Gitanjali Motors-Mandsaur",
    "SCode": "1S5066",
    "State": "Madhya Pradesh",
    "City": "Mandsaur",
    "Contact No.": "7999436496"
  },
  {
    "Organization": "West-2",
    "Manager Name": "Vivek Kumar",
    "Manager Level": "ASM",
    "Dealer Name": "Gitanjali Motors-Mandsaur",
    "SCode": "1S5066",
    "State": "Madhya Pradesh",
    "City": "Mandsaur",
    "Contact No.": "8171110903"
  },
  {
    "Organization": "West-2",
    "Manager Name": "Manish Mujwadiya",
    "Manager Level": "MD",
    "Dealer Name": "Gitanjali Motors-Mandsaur",
    "SCode": "1S5066",
    "State": "Madhya Pradesh",
    "City": "Mandsaur",
    "Contact No.": "9826010801"
  },
  {
    "Organization": "West-2",
    "Manager Name": "Manish Mujwadiya",
    "Manager Level": "MD",
    "Dealer Name": "Gitanjali Motors-Ratlam",
    "SCode": "1S5102",
    "State": "Madhya Pradesh",
    "City": "Ratlam",
    "Contact No.": "9826010801"
  },
  {
    "Organization": "West-2",
    "Manager Name": "Sudhir Kumar",
    "Manager Level": "RSM",
    "Dealer Name": "Gitanjali Motors-Ratlam",
    "SCode": "1S5102",
    "State": "Madhya Pradesh",
    "City": "Ratlam",
    "Contact No.": "9752542733"
  },
  {
    "Organization": "West-2",
    "Manager Name": "Vivek Kumar",
    "Manager Level": "ASM",
    "Dealer Name": "Gitanjali Motors-Ratlam",
    "SCode": "1S5102",
    "State": "Madhya Pradesh",
    "City": "Ratlam",
    "Contact No.": "8171110903"
  },
  {
    "Organization": "West-2",
    "Manager Name": "Jayshree Rathod",
    "Manager Level": "EOS Site Incharge",
    "Dealer Name": "Gitanjali Motors-Ratlam",
    "SCode": "1S5102",
    "State": "Madhya Pradesh",
    "City": "Ratlam",
    "Contact No.": "7400848972"
  },
  {
    "Organization": "West-2",
    "Manager Name": "Lakhan Singh",
    "Manager Level": "WM",
    "Dealer Name": "Gitanjali Motors-Ratlam",
    "SCode": "1S5102",
    "State": "Madhya Pradesh",
    "City": "Ratlam",
    "Contact No.": "7400848971"
  },
  {
    "Organization": "West-2",
    "Manager Name": "Divyanshu Malviy",
    "Manager Level": "CSM",
    "Dealer Name": "Gitanjali Motors-Ratlam",
    "SCode": "1S5102",
    "State": "Madhya Pradesh",
    "City": "Ratlam",
    "Contact No.": "7999436496"
  },
  {
    "Organization": "South-1",
    "Manager Name": "Rajesh S",
    "Manager Level": "WM",
    "Dealer Name": "Haribalakrishna Automobiles-Kovilpatti",
    "SCode": "1S4144",
    "State": "Tamil Nadu",
    "City": "Sattur",
    "Contact No.": "9150066424"
  },
  {
    "Organization": "South-1",
    "Manager Name": "Mareeswaran V",
    "Manager Level": "EOS Site Incharge",
    "Dealer Name": "Haribalakrishna Automobiles-Kovilpatti",
    "SCode": "1S4144",
    "State": "Tamil Nadu",
    "City": "Sattur",
    "Contact No.": "7200970056"
  },
  {
    "Organization": "South-1",
    "Manager Name": "Radhakrishnan",
    "Manager Level": "RSM",
    "Dealer Name": "Haribalakrishna Automobiles-Kovilpatti",
    "SCode": "1S4144",
    "State": "Tamil Nadu",
    "City": "Sattur",
    "Contact No.": "9840730250"
  },
  {
    "Organization": "South-1",
    "Manager Name": "Siddharth S (D) / Yuvaraj B (N)",
    "Manager Level": "CSM",
    "Dealer Name": "Haribalakrishna Automobiles-Kovilpatti",
    "SCode": "1S4144",
    "State": "Tamil Nadu",
    "City": "Sattur",
    "Contact No.": "7418811185,9543338783"
  },
  {
    "Organization": "South-1",
    "Manager Name": "Manthiram T",
    "Manager Level": "MD",
    "Dealer Name": "Haribalakrishna Automobiles-Kovilpatti",
    "SCode": "1S4144",
    "State": "Tamil Nadu",
    "City": "Sattur",
    "Contact No.": "9442176699"
  },
  {
    "Organization": "South-1",
    "Manager Name": "Vasantha Kumar T",
    "Manager Level": "ASM",
    "Dealer Name": "Haribalakrishna Automobiles-Kovilpatti",
    "SCode": "1S4144",
    "State": "Tamil Nadu",
    "City": "Sattur",
    "Contact No.": "9790754777"
  },
  {
    "Organization": "South-1",
    "Manager Name": "Vasantha Kumar T",
    "Manager Level": "ASM",
    "Dealer Name": "Haribalakrishna Automobiles-Nagarcoil",
    "SCode": "1S4054",
    "State": "Tamil Nadu",
    "City": "Nagercoil",
    "Contact No.": "9790754777"
  },
  {
    "Organization": "South-1",
    "Manager Name": "Vignesh J",
    "Manager Level": "MD",
    "Dealer Name": "Haribalakrishna Automobiles-Nagarcoil",
    "SCode": "1S4054",
    "State": "Tamil Nadu",
    "City": "Nagercoil",
    "Contact No.": "9442216699"
  },
  {
    "Organization": "South-1",
    "Manager Name": "Radhakrishnan",
    "Manager Level": "RSM",
    "Dealer Name": "Haribalakrishna Automobiles-Nagarcoil",
    "SCode": "1S4054",
    "State": "Tamil Nadu",
    "City": "Nagercoil",
    "Contact No.": "9840730250"
  },
  {
    "Organization": "South-1",
    "Manager Name": "Siddharth S (D) / Yuvaraj B (N)",
    "Manager Level": "CSM",
    "Dealer Name": "Haribalakrishna Automobiles-Nagarcoil",
    "SCode": "1S4054",
    "State": "Tamil Nadu",
    "City": "Nagercoil",
    "Contact No.": "7418811185,9543338783"
  },
  {
    "Organization": "South-1",
    "Manager Name": "Rajesh I / Manthiram T",
    "Manager Level": "WM",
    "Dealer Name": "Haribalakrishna Automobiles-Nagarcoil",
    "SCode": "1S4054",
    "State": "Tamil Nadu",
    "City": "Nagercoil",
    "Contact No.": "9442163399,9442176699"
  },
  {
    "Organization": "South-1",
    "Manager Name": "Siva Thanu",
    "Manager Level": "EOS Site Incharge",
    "Dealer Name": "Haribalakrishna Automobiles-Nagarcoil",
    "SCode": "1S4054",
    "State": "Tamil Nadu",
    "City": "Nagercoil",
    "Contact No.": "9442626699"
  },
  {
    "Organization": "South-1",
    "Manager Name": "Siddharth S (D) / Yuvaraj B (N)",
    "Manager Level": "CSM",
    "Dealer Name": "Haribalakrishna Automobiles-Tenkasi",
    "SCode": "1S4115",
    "State": "Tamil Nadu",
    "City": "Tenkasi",
    "Contact No.": "7418811185,9543338783"
  },
  {
    "Organization": "South-1",
    "Manager Name": "Manthiram T",
    "Manager Level": "MD",
    "Dealer Name": "Haribalakrishna Automobiles-Tenkasi",
    "SCode": "1S4115",
    "State": "Tamil Nadu",
    "City": "Tenkasi",
    "Contact No.": "9442176699"
  },
  {
    "Organization": "South-1",
    "Manager Name": "Ashok",
    "Manager Level": "EOS Site Incharge",
    "Dealer Name": "Haribalakrishna Automobiles-Tenkasi",
    "SCode": "1S4115",
    "State": "Tamil Nadu",
    "City": "Tenkasi",
    "Contact No.": "9150013272"
  },
  {
    "Organization": "South-1",
    "Manager Name": "Radhakrishnan",
    "Manager Level": "RSM",
    "Dealer Name": "Haribalakrishna Automobiles-Tenkasi",
    "SCode": "1S4115",
    "State": "Tamil Nadu",
    "City": "Tenkasi",
    "Contact No.": "9840730250"
  },
  {
    "Organization": "South-1",
    "Manager Name": "Vasantha Kumar T",
    "Manager Level": "ASM",
    "Dealer Name": "Haribalakrishna Automobiles-Tenkasi",
    "SCode": "1S4115",
    "State": "Tamil Nadu",
    "City": "Tenkasi",
    "Contact No.": "9790754777"
  },
  {
    "Organization": "South-1",
    "Manager Name": "Raj Kumar",
    "Manager Level": "WM",
    "Dealer Name": "Haribalakrishna Automobiles-Tenkasi",
    "SCode": "1S4115",
    "State": "Tamil Nadu",
    "City": "Tenkasi",
    "Contact No.": "9489085699"
  },
  {
    "Organization": "South-1",
    "Manager Name": "Siddharth S (D) / Yuvaraj B (N)",
    "Manager Level": "CSM",
    "Dealer Name": "Haribalakrishna Automobiles-Tirunelveli",
    "SCode": "1S4039",
    "State": "Tamil Nadu",
    "City": "Tirunelveli",
    "Contact No.": "7418811185,9543338783"
  },
  {
    "Organization": "South-1",
    "Manager Name": "Hari Babu",
    "Manager Level": "WM",
    "Dealer Name": "Haribalakrishna Automobiles-Tirunelveli",
    "SCode": "1S4039",
    "State": "Tamil Nadu",
    "City": "Tirunelveli",
    "Contact No.": "9442525599"
  },
  {
    "Organization": "South-1",
    "Manager Name": "Manthiram T",
    "Manager Level": "MD",
    "Dealer Name": "Haribalakrishna Automobiles-Tirunelveli",
    "SCode": "1S4039",
    "State": "Tamil Nadu",
    "City": "Tirunelveli",
    "Contact No.": "9442176699"
  },
  {
    "Organization": "South-1",
    "Manager Name": "Vasantha Kumar T",
    "Manager Level": "ASM",
    "Dealer Name": "Haribalakrishna Automobiles-Tirunelveli",
    "SCode": "1S4039",
    "State": "Tamil Nadu",
    "City": "Tirunelveli",
    "Contact No.": "9790754777"
  },
  {
    "Organization": "South-1",
    "Manager Name": "Radhakrishnan",
    "Manager Level": "RSM",
    "Dealer Name": "Haribalakrishna Automobiles-Tirunelveli",
    "SCode": "1S4039",
    "State": "Tamil Nadu",
    "City": "Tirunelveli",
    "Contact No.": "9840730250"
  },
  {
    "Organization": "South-1",
    "Manager Name": "Balaji R",
    "Manager Level": "EOS Site Incharge",
    "Dealer Name": "Haribalakrishna Automobiles-Tirunelveli",
    "SCode": "1S4039",
    "State": "Tamil Nadu",
    "City": "Tirunelveli",
    "Contact No.": "9442976699"
  },
  {
    "Organization": "South-1",
    "Manager Name": "Velmurugan T",
    "Manager Level": "WM",
    "Dealer Name": "Haribalakrishna Automobiles-Tuticorin",
    "SCode": "1S4055",
    "State": "Tamil Nadu",
    "City": "Tuticorin",
    "Contact No.": "9524866993"
  },
  {
    "Organization": "South-1",
    "Manager Name": "Siddharth S (D) / Yuvaraj B (N)",
    "Manager Level": "CSM",
    "Dealer Name": "Haribalakrishna Automobiles-Tuticorin",
    "SCode": "1S4055",
    "State": "Tamil Nadu",
    "City": "Tuticorin",
    "Contact No.": "7418811185,9543338783"
  },
  {
    "Organization": "South-1",
    "Manager Name": "Radhakrishnan",
    "Manager Level": "RSM",
    "Dealer Name": "Haribalakrishna Automobiles-Tuticorin",
    "SCode": "1S4055",
    "State": "Tamil Nadu",
    "City": "Tuticorin",
    "Contact No.": "9840730250"
  },
  {
    "Organization": "South-1",
    "Manager Name": "Raja",
    "Manager Level": "EOS Site Incharge",
    "Dealer Name": "Haribalakrishna Automobiles-Tuticorin",
    "SCode": "1S4055",
    "State": "Tamil Nadu",
    "City": "Tuticorin",
    "Contact No.": "9442187799"
  },
  {
    "Organization": "South-1",
    "Manager Name": "Vasantha Kumar T",
    "Manager Level": "ASM",
    "Dealer Name": "Haribalakrishna Automobiles-Tuticorin",
    "SCode": "1S4055",
    "State": "Tamil Nadu",
    "City": "Tuticorin",
    "Contact No.": "9790754777"
  },
  {
    "Organization": "South-1",
    "Manager Name": "Manthiram T",
    "Manager Level": "MD",
    "Dealer Name": "Haribalakrishna Automobiles-Tuticorin",
    "SCode": "1S4055",
    "State": "Tamil Nadu",
    "City": "Tuticorin",
    "Contact No.": "9442176699"
  },
  {
    "Organization": "East-1",
    "Manager Name": "Ranjan Sharma",
    "Manager Level": "CSM",
    "Dealer Name": "Highway Motors-Kalain",
    "SCode": "1S2250",
    "State": "Assam",
    "City": "Silchar",
    "Contact No.": "7903904529"
  },
  {
    "Organization": "East-1",
    "Manager Name": "Rakesh Ghosh",
    "Manager Level": "ASM",
    "Dealer Name": "Highway Motors-Kalain",
    "SCode": "1S2250",
    "State": "Assam",
    "City": "Silchar",
    "Contact No.": "9477374098"
  },
  {
    "Organization": "East-1",
    "Manager Name": "Babul Sinha",
    "Manager Level": "EOS Site Incharge",
    "Dealer Name": "Highway Motors-Kalain",
    "SCode": "1S2250",
    "State": "Assam",
    "City": "Silchar",
    "Contact No.": "9366474549"
  },
  {
    "Organization": "East-1",
    "Manager Name": "Sankar Prasad Purkayastha / Nasim Ahmed Barlaskar",
    "Manager Level": "MD",
    "Dealer Name": "Highway Motors-Kalain",
    "SCode": "1S2250",
    "State": "Assam",
    "City": "Silchar",
    "Contact No.": "8638891325,9435070825"
  },
  {
    "Organization": "East-1",
    "Manager Name": "Yogeshwar Singh",
    "Manager Level": "RSM",
    "Dealer Name": "Highway Motors-Kalain",
    "SCode": "1S2250",
    "State": "Assam",
    "City": "Silchar",
    "Contact No.": "9717966997"
  },
  {
    "Organization": "East-1",
    "Manager Name": "Aminul Mazumder",
    "Manager Level": "WM",
    "Dealer Name": "Highway Motors-Kalain",
    "SCode": "1S2250",
    "State": "Assam",
    "City": "Silchar",
    "Contact No.": "7002642378"
  },
  {
    "Organization": "East-1",
    "Manager Name": "Yogeshwar Singh",
    "Manager Level": "RSM",
    "Dealer Name": "Highway Motors-Silchar",
    "SCode": "1S2228",
    "State": "Assam",
    "City": "Silchar",
    "Contact No.": "9717966997"
  },
  {
    "Organization": "East-1",
    "Manager Name": "Sankar Prasad Purkayastha / Nasim Ahmed Barlaskar",
    "Manager Level": "MD",
    "Dealer Name": "Highway Motors-Silchar",
    "SCode": "1S2228",
    "State": "Assam",
    "City": "Silchar",
    "Contact No.": "8638891325,9435070825"
  },
  {
    "Organization": "East-1",
    "Manager Name": "NAKBU HUSSAIN / SADIQUL ISLAM BARBHUIYA",
    "Manager Level": "EOS Site Incharge",
    "Dealer Name": "Highway Motors-Silchar",
    "SCode": "1S2228",
    "State": "Assam",
    "City": "Silchar",
    "Contact No.": "9401810632,7002614883"
  },
  {
    "Organization": "East-1",
    "Manager Name": "AMINUL MAZUMDAR",
    "Manager Level": "WM",
    "Dealer Name": "Highway Motors-Silchar",
    "SCode": "1S2228",
    "State": "Assam",
    "City": "Silchar",
    "Contact No.": "7002642378"
  },
  {
    "Organization": "East-1",
    "Manager Name": "Rakesh Ghosh",
    "Manager Level": "ASM",
    "Dealer Name": "Highway Motors-Silchar",
    "SCode": "1S2228",
    "State": "Assam",
    "City": "Silchar",
    "Contact No.": "9477374098"
  },
  {
    "Organization": "East-1",
    "Manager Name": "Ranjan Sharma",
    "Manager Level": "CSM",
    "Dealer Name": "Highway Motors-Silchar",
    "SCode": "1S2228",
    "State": "Assam",
    "City": "Silchar",
    "Contact No.": "7903904529"
  },
  {
    "Organization": "East-1",
    "Manager Name": "Anand Vivek",
    "Manager Level": "WM",
    "Dealer Name": "Hind Motors-Patna",
    "SCode": "1S2314",
    "State": "Bihar",
    "City": "Patna",
    "Contact No.": "8877696976"
  },
  {
    "Organization": "East-1",
    "Manager Name": "Krishna Bhushan",
    "Manager Level": "ASM",
    "Dealer Name": "Hind Motors-Patna",
    "SCode": "1S2314",
    "State": "Bihar",
    "City": "Patna",
    "Contact No.": "6202531709"
  },
  {
    "Organization": "East-1",
    "Manager Name": "Rishav Raj",
    "Manager Level": "MD",
    "Dealer Name": "Hind Motors-Patna",
    "SCode": "1S2314",
    "State": "Bihar",
    "City": "Patna",
    "Contact No.": "9386743322"
  },
  {
    "Organization": "East-1",
    "Manager Name": "Sanjiv Kumar",
    "Manager Level": "CSM",
    "Dealer Name": "Hind Motors-Patna",
    "SCode": "1S2314",
    "State": "Bihar",
    "City": "Patna",
    "Contact No.": "6202531711"
  },
  {
    "Organization": "East-1",
    "Manager Name": "Yogeshwar Singh",
    "Manager Level": "RSM",
    "Dealer Name": "Hind Motors-Patna",
    "SCode": "1S2314",
    "State": "Bihar",
    "City": "Patna",
    "Contact No.": "9717966997"
  },
  {
    "Organization": "East-2",
    "Manager Name": "Sumit Kumar",
    "Manager Level": "CSM",
    "Dealer Name": "Horizon Trucking-Daltonganj",
    "SCode": "1S2205",
    "State": "Jharkhand",
    "City": "Medininagar (daltonganj)",
    "Contact No.": "9798466831"
  },
  {
    "Organization": "East-2",
    "Manager Name": "Prem Prakash Pandey",
    "Manager Level": "EOS Site Incharge",
    "Dealer Name": "Horizon Trucking-Daltonganj",
    "SCode": "1S2205",
    "State": "Jharkhand",
    "City": "Medininagar (daltonganj)",
    "Contact No.": "9031622101,7541810125"
  },
  {
    "Organization": "East-2",
    "Manager Name": "Sachit Jain",
    "Manager Level": "MD",
    "Dealer Name": "Horizon Trucking-Daltonganj",
    "SCode": "1S2205",
    "State": "Jharkhand",
    "City": "Medininagar (daltonganj)",
    "Contact No.": "7260804101"
  },
  {
    "Organization": "East-2",
    "Manager Name": "Satrudhan Kumar Singh",
    "Manager Level": "WM",
    "Dealer Name": "Horizon Trucking-Daltonganj",
    "SCode": "1S2205",
    "State": "Jharkhand",
    "City": "Medininagar (daltonganj)",
    "Contact No.": "9973814101"
  },
  {
    "Organization": "East-2",
    "Manager Name": "Niket Kumar",
    "Manager Level": "RSM",
    "Dealer Name": "Horizon Trucking-Daltonganj",
    "SCode": "1S2205",
    "State": "Jharkhand",
    "City": "Medininagar (daltonganj)",
    "Contact No.": "8427733112"
  },
  {
    "Organization": "East-2",
    "Manager Name": "Shravan kumar Akela",
    "Manager Level": "ASM",
    "Dealer Name": "Horizon Trucking-Daltonganj",
    "SCode": "1S2205",
    "State": "Jharkhand",
    "City": "Medininagar (daltonganj)",
    "Contact No.": "9771422291"
  },
  {
    "Organization": "East-2",
    "Manager Name": "Sumit Kumar",
    "Manager Level": "CSM",
    "Dealer Name": "Horizon Trucking-Jamshedpur",
    "SCode": "1S2141",
    "State": "Jharkhand",
    "City": "Jamshedpur",
    "Contact No.": "9798466831"
  },
  {
    "Organization": "East-2",
    "Manager Name": "Amarjeet Kumar / Bikram",
    "Manager Level": "EOS Site Incharge",
    "Dealer Name": "Horizon Trucking-Jamshedpur",
    "SCode": "1S2141",
    "State": "Jharkhand",
    "City": "Jamshedpur",
    "Contact No.": "9973704101,9534230101"
  },
  {
    "Organization": "East-2",
    "Manager Name": "Niket Kumar",
    "Manager Level": "RSM",
    "Dealer Name": "Horizon Trucking-Jamshedpur",
    "SCode": "1S2141",
    "State": "Jharkhand",
    "City": "Jamshedpur",
    "Contact No.": "8427733112"
  },
  {
    "Organization": "East-2",
    "Manager Name": "Sachit Jain",
    "Manager Level": "MD",
    "Dealer Name": "Horizon Trucking-Jamshedpur",
    "SCode": "1S2141",
    "State": "Jharkhand",
    "City": "Jamshedpur",
    "Contact No.": "7260804101"
  },
  {
    "Organization": "East-2",
    "Manager Name": "Surjeet Sahoo / Dhiraj Bhatacharjee",
    "Manager Level": "WM",
    "Dealer Name": "Horizon Trucking-Jamshedpur",
    "SCode": "1S2141",
    "State": "Jharkhand",
    "City": "Jamshedpur",
    "Contact No.": "7260803101,9297530101"
  },
  {
    "Organization": "East-2",
    "Manager Name": "Shravan kumar Akela",
    "Manager Level": "ASM",
    "Dealer Name": "Horizon Trucking-Jamshedpur",
    "SCode": "1S2141",
    "State": "Jharkhand",
    "City": "Jamshedpur",
    "Contact No.": "9771422291"
  },
  {
    "Organization": "East-2",
    "Manager Name": "Sachit Jain",
    "Manager Level": "MD",
    "Dealer Name": "Horizon Trucking-Ranchi",
    "SCode": "1S2140",
    "State": "Jharkhand",
    "City": "Ranchi",
    "Contact No.": "7541810126"
  },
  {
    "Organization": "East-2",
    "Manager Name": "Permanand Sahu",
    "Manager Level": "EOS Site Incharge",
    "Dealer Name": "Horizon Trucking-Ranchi",
    "SCode": "1S2140",
    "State": "Jharkhand",
    "City": "Ranchi",
    "Contact No.": "7541810123"
  },
  {
    "Organization": "East-2",
    "Manager Name": "Damodar Chaudhary / Himanshu Shekhar Singh",
    "Manager Level": "WM",
    "Dealer Name": "Horizon Trucking-Ranchi",
    "SCode": "1S2140",
    "State": "Jharkhand",
    "City": "Ranchi",
    "Contact No.": "9031604101,7260804101"
  },
  {
    "Organization": "East-2",
    "Manager Name": "Sumit Kumar",
    "Manager Level": "CSM",
    "Dealer Name": "Horizon Trucking-Ranchi",
    "SCode": "1S2140",
    "State": "Jharkhand",
    "City": "Ranchi",
    "Contact No.": "9798466831"
  },
  {
    "Organization": "East-2",
    "Manager Name": "Niket Kumar",
    "Manager Level": "RSM",
    "Dealer Name": "Horizon Trucking-Ranchi",
    "SCode": "1S2140",
    "State": "Jharkhand",
    "City": "Ranchi",
    "Contact No.": "8427733112"
  },
  {
    "Organization": "East-2",
    "Manager Name": "Shravan kumar Akela",
    "Manager Level": "ASM",
    "Dealer Name": "Horizon Trucking-Ranchi",
    "SCode": "1S2140",
    "State": "Jharkhand",
    "City": "Ranchi",
    "Contact No.": "9771422291"
  },
  {
    "Organization": "West-2",
    "Manager Name": "Pankaj Vishwakarma",
    "Manager Level": "EOS Site Incharge",
    "Dealer Name": "Indian Trucking-Seoni",
    "SCode": "1S5118",
    "State": "Madhya Pradesh",
    "City": "Seoni",
    "Contact No.": "9238113877,9238113874"
  },
  {
    "Organization": "West-2",
    "Manager Name": "Saurabh Dwivedi",
    "Manager Level": "CSM",
    "Dealer Name": "Indian Trucking-Seoni",
    "SCode": "1S5118",
    "State": "Madhya Pradesh",
    "City": "Seoni",
    "Contact No.": "9407322767"
  },
  {
    "Organization": "West-2",
    "Manager Name": "Vasit Khan",
    "Manager Level": "MD",
    "Dealer Name": "Indian Trucking-Seoni",
    "SCode": "1S5118",
    "State": "Madhya Pradesh",
    "City": "Seoni",
    "Contact No.": "8989007463"
  },
  {
    "Organization": "West-2",
    "Manager Name": "Sudhir Kumar",
    "Manager Level": "RSM",
    "Dealer Name": "Indian Trucking-Seoni",
    "SCode": "1S5118",
    "State": "Madhya Pradesh",
    "City": "Seoni",
    "Contact No.": "9752542733"
  },
  {
    "Organization": "West-2",
    "Manager Name": "Sachin Harinkhede",
    "Manager Level": "WM",
    "Dealer Name": "Indian Trucking-Seoni",
    "SCode": "1S5118",
    "State": "Madhya Pradesh",
    "City": "Seoni",
    "Contact No.": "8629929447"
  },
  {
    "Organization": "West-2",
    "Manager Name": "Vishal Kulkarni",
    "Manager Level": "ASM",
    "Dealer Name": "Indian Trucking-Seoni",
    "SCode": "1S5118",
    "State": "Madhya Pradesh",
    "City": "Seoni",
    "Contact No.": "8349997686"
  },
  {
    "Organization": "East-2",
    "Manager Name": "Shravan Kumar Akela",
    "Manager Level": "ASM",
    "Dealer Name": "JDS Automobiles Pvt Ltd-Dumka",
    "SCode": "1S2296",
    "State": "Jharkhand",
    "City": "Dumka",
    "Contact No.": "9771422291"
  },
  {
    "Organization": "East-2",
    "Manager Name": "Bam Shankar Sahai",
    "Manager Level": "MD",
    "Dealer Name": "JDS Automobiles Pvt Ltd-Dumka",
    "SCode": "1S2296",
    "State": "Jharkhand",
    "City": "Dumka",
    "Contact No.": "7678337568"
  },
  {
    "Organization": "East-2",
    "Manager Name": "Niket Kumar",
    "Manager Level": "RSM",
    "Dealer Name": "JDS Automobiles Pvt Ltd-Dumka",
    "SCode": "1S2296",
    "State": "Jharkhand",
    "City": "Dumka",
    "Contact No.": "8427733112"
  },
  {
    "Organization": "East-2",
    "Manager Name": "Bishwanath Sahay Raman",
    "Manager Level": "WM",
    "Dealer Name": "JDS Automobiles Pvt Ltd-Dumka",
    "SCode": "1S2296",
    "State": "Jharkhand",
    "City": "Dumka",
    "Contact No.": "8051727476"
  },
  {
    "Organization": "East-2",
    "Manager Name": "Nirmal Soren",
    "Manager Level": "EOS Site Incharge",
    "Dealer Name": "JDS Automobiles Pvt Ltd-Dumka",
    "SCode": "1S2296",
    "State": "Jharkhand",
    "City": "Dumka",
    "Contact No.": "8084870256"
  },
  {
    "Organization": "East-2",
    "Manager Name": "Sumit Kumar",
    "Manager Level": "CSM",
    "Dealer Name": "JDS Automobiles Pvt Ltd-Dumka",
    "SCode": "1S2296",
    "State": "Jharkhand",
    "City": "Dumka",
    "Contact No.": "9798466831"
  },
  {
    "Organization": "South-1",
    "Manager Name": "Rajan S T",
    "Manager Level": "MD",
    "Dealer Name": "Jai Commercial (HD/BUS)-Parivakkam",
    "SCode": "1S4118",
    "State": "Tamil Nadu",
    "City": "Chennai",
    "Contact No.": "9841218830"
  },
  {
    "Organization": "South-1",
    "Manager Name": "Praveen",
    "Manager Level": "EOS Site Incharge",
    "Dealer Name": "Jai Commercial (HD/BUS)-Parivakkam",
    "SCode": "1S4118",
    "State": "Tamil Nadu",
    "City": "Chennai",
    "Contact No.": "9280089645"
  },
  {
    "Organization": "South-1",
    "Manager Name": "Vasantha Kumar T",
    "Manager Level": "ASM",
    "Dealer Name": "Jai Commercial (HD/BUS)-Parivakkam",
    "SCode": "1S4118",
    "State": "Tamil Nadu",
    "City": "Chennai",
    "Contact No.": "9790754777"
  },
  {
    "Organization": "South-1",
    "Manager Name": "Radhakrishnan",
    "Manager Level": "RSM",
    "Dealer Name": "Jai Commercial (HD/BUS)-Parivakkam",
    "SCode": "1S4118",
    "State": "Tamil Nadu",
    "City": "Chennai",
    "Contact No.": "9840730250"
  },
  {
    "Organization": "South-1",
    "Manager Name": "Shankar",
    "Manager Level": "WM",
    "Dealer Name": "Jai Commercial (HD/BUS)-Parivakkam",
    "SCode": "1S4118",
    "State": "Tamil Nadu",
    "City": "Chennai",
    "Contact No.": "7806805411"
  },
  {
    "Organization": "South-1",
    "Manager Name": "Aslam Azeez (D) / Yuvaraj B (N)",
    "Manager Level": "CSM",
    "Dealer Name": "Jai Commercial (HD/BUS)-Parivakkam",
    "SCode": "1S4118",
    "State": "Tamil Nadu",
    "City": "Chennai",
    "Contact No.": "7200228631,9543338783"
  },
  {
    "Organization": "South-1",
    "Manager Name": "Rajan S T",
    "Manager Level": "MD",
    "Dealer Name": "Jai Commercial (LMD/BUS)-Chennai",
    "SCode": "1S4109",
    "State": "Tamil Nadu",
    "City": "Chennai",
    "Contact No.": "9841218830"
  },
  {
    "Organization": "South-1",
    "Manager Name": "Radhakrishnan",
    "Manager Level": "RSM",
    "Dealer Name": "Jai Commercial (LMD/BUS)-Chennai",
    "SCode": "1S4109",
    "State": "Tamil Nadu",
    "City": "Chennai",
    "Contact No.": "9840730250"
  },
  {
    "Organization": "South-1",
    "Manager Name": "Aslam Azeez (D) / Yuvaraj B (N)",
    "Manager Level": "CSM",
    "Dealer Name": "Jai Commercial (LMD/BUS)-Chennai",
    "SCode": "1S4109",
    "State": "Tamil Nadu",
    "City": "Chennai",
    "Contact No.": "7200228631,9543338783"
  },
  {
    "Organization": "South-1",
    "Manager Name": "Sherin / Keshav Prakash",
    "Manager Level": "WM",
    "Dealer Name": "Jai Commercial (LMD/BUS)-Chennai",
    "SCode": "1S4109",
    "State": "Tamil Nadu",
    "City": "Chennai",
    "Contact No.": "9786809326,7810027051"
  },
  {
    "Organization": "South-1",
    "Manager Name": "Vasantha Kumar T",
    "Manager Level": "ASM",
    "Dealer Name": "Jai Commercial (LMD/BUS)-Chennai",
    "SCode": "1S4109",
    "State": "Tamil Nadu",
    "City": "Chennai",
    "Contact No.": "9790754777"
  },
  {
    "Organization": "South-1",
    "Manager Name": "Karthikeyan S",
    "Manager Level": "EOS Site Incharge",
    "Dealer Name": "Jai Commercial (LMD/BUS)-Chennai",
    "SCode": "1S4109",
    "State": "Tamil Nadu",
    "City": "Chennai",
    "Contact No.": "9361801843"
  },
  {
    "Organization": "South-1",
    "Manager Name": "Rajan",
    "Manager Level": "MD",
    "Dealer Name": "Jai Commercial-Kanchipuram",
    "SCode": "1S4133",
    "State": "Tamil Nadu",
    "City": "Kanchipuram",
    "Contact No.": "9841218830"
  },
  {
    "Organization": "South-1",
    "Manager Name": "Praveen",
    "Manager Level": "EOS Site Incharge",
    "Dealer Name": "Jai Commercial-Kanchipuram",
    "SCode": "1S4133",
    "State": "Tamil Nadu",
    "City": "Kanchipuram",
    "Contact No.": "7806805416"
  },
  {
    "Organization": "South-1",
    "Manager Name": "Radhakrishnan",
    "Manager Level": "RSM",
    "Dealer Name": "Jai Commercial-Kanchipuram",
    "SCode": "1S4133",
    "State": "Tamil Nadu",
    "City": "Kanchipuram",
    "Contact No.": "9840730250"
  },
  {
    "Organization": "South-1",
    "Manager Name": "Vijay G (D) / Yuvaraj B (N)",
    "Manager Level": "CSM",
    "Dealer Name": "Jai Commercial-Kanchipuram",
    "SCode": "1S4133",
    "State": "Tamil Nadu",
    "City": "Kanchipuram",
    "Contact No.": "8754242362,9543338783"
  },
  {
    "Organization": "South-1",
    "Manager Name": "Vasantha Kumar T",
    "Manager Level": "ASM",
    "Dealer Name": "Jai Commercial-Kanchipuram",
    "SCode": "1S4133",
    "State": "Tamil Nadu",
    "City": "Kanchipuram",
    "Contact No.": "9790754777"
  },
  {
    "Organization": "South-1",
    "Manager Name": "Praveen / Guna",
    "Manager Level": "WM",
    "Dealer Name": "Jai Commercial-Kanchipuram",
    "SCode": "1S4133",
    "State": "Tamil Nadu",
    "City": "Kanchipuram",
    "Contact No.": "9361801839,7810027053"
  },
  {
    "Organization": "South-1",
    "Manager Name": "S Harish (D) / Yuvaraj B (N)",
    "Manager Level": "CSM",
    "Dealer Name": "Jai Commercial-M Nagar",
    "SCode": "1S4110",
    "State": "Tamil Nadu",
    "City": "Urapakkam",
    "Contact No.": "9003555107,9543338783"
  },
  {
    "Organization": "South-1",
    "Manager Name": "Vasantha Kumar T",
    "Manager Level": "ASM",
    "Dealer Name": "Jai Commercial-M Nagar",
    "SCode": "1S4110",
    "State": "Tamil Nadu",
    "City": "Urapakkam",
    "Contact No.": "9790754777"
  },
  {
    "Organization": "South-1",
    "Manager Name": "Radhakrishnan",
    "Manager Level": "RSM",
    "Dealer Name": "Jai Commercial-M Nagar",
    "SCode": "1S4110",
    "State": "Tamil Nadu",
    "City": "Urapakkam",
    "Contact No.": "9840730250"
  },
  {
    "Organization": "South-1",
    "Manager Name": "Rajan",
    "Manager Level": "MD",
    "Dealer Name": "Jai Commercial-M Nagar",
    "SCode": "1S4110",
    "State": "Tamil Nadu",
    "City": "Urapakkam",
    "Contact No.": "9841218830"
  },
  {
    "Organization": "South-1",
    "Manager Name": "Thangadurai / Doss Prakash",
    "Manager Level": "EOS Site Incharge",
    "Dealer Name": "Jai Commercial-M Nagar",
    "SCode": "1S4110",
    "State": "Tamil Nadu",
    "City": "Urapakkam",
    "Contact No.": "9345960252,6381386191"
  },
  {
    "Organization": "South-1",
    "Manager Name": "Sukumar",
    "Manager Level": "WM",
    "Dealer Name": "Jai Commercial-M Nagar",
    "SCode": "1S4110",
    "State": "Tamil Nadu",
    "City": "Urapakkam",
    "Contact No.": "7806805412"
  },
  {
    "Organization": "South-1",
    "Manager Name": "Mr. Saravanan",
    "Manager Level": "WM",
    "Dealer Name": "Jailaxmi Auto Works and Agencies Pvt Ltd (LMD)-Salem(I)",
    "SCode": "1S4028",
    "State": "Tamil Nadu",
    "City": "Salem",
    "Contact No.": "9994077477"
  },
  {
    "Organization": "South-1",
    "Manager Name": "M. Jeeva (D) / Shanmuganathan (N)",
    "Manager Level": "EOS Site Incharge",
    "Dealer Name": "Jailaxmi Auto Works and Agencies Pvt Ltd (LMD)-Salem(I)",
    "SCode": "1S4028",
    "State": "Tamil Nadu",
    "City": "Salem",
    "Contact No.": "9994177666,7358966659"
  },
  {
    "Organization": "South-1",
    "Manager Name": "Radhakrishnan",
    "Manager Level": "RSM",
    "Dealer Name": "Jailaxmi Auto Works and Agencies Pvt Ltd (LMD)-Salem(I)",
    "SCode": "1S4028",
    "State": "Tamil Nadu",
    "City": "Salem",
    "Contact No.": "9840730250"
  },
  {
    "Organization": "South-1",
    "Manager Name": "KP Sharma",
    "Manager Level": "ASM",
    "Dealer Name": "Jailaxmi Auto Works and Agencies Pvt Ltd (LMD)-Salem(I)",
    "SCode": "1S4028",
    "State": "Tamil Nadu",
    "City": "Salem",
    "Contact No.": "9567475444"
  },
  {
    "Organization": "South-1",
    "Manager Name": "Gokul K (D) / Yuvaraj B (N)",
    "Manager Level": "CSM",
    "Dealer Name": "Jailaxmi Auto Works and Agencies Pvt Ltd (LMD)-Salem(I)",
    "SCode": "1S4028",
    "State": "Tamil Nadu",
    "City": "Salem",
    "Contact No.": "9003555286,9543338783"
  },
  {
    "Organization": "South-1",
    "Manager Name": "Saravanan",
    "Manager Level": "MD",
    "Dealer Name": "Jailaxmi Auto Works and Agencies Pvt Ltd (LMD)-Salem(I)",
    "SCode": "1S4028",
    "State": "Tamil Nadu",
    "City": "Salem",
    "Contact No.": "8220049475"
  },
  {
    "Organization": "South-1",
    "Manager Name": "Karthikeyan K",
    "Manager Level": "EOS Site Incharge",
    "Dealer Name": "Jailaxmi Auto Works and Agencies Pvt Ltd (ProX)-Salem",
    "SCode": "1S4147",
    "State": "Tamil Nadu",
    "City": "Salem",
    "Contact No.": "7418016977"
  },
  {
    "Organization": "South-1",
    "Manager Name": "Sathishkumar M",
    "Manager Level": "WM",
    "Dealer Name": "Jailaxmi Auto Works and Agencies Pvt Ltd (ProX)-Salem",
    "SCode": "1S4147",
    "State": "Tamil Nadu",
    "City": "Salem",
    "Contact No.": "7418016531"
  },
  {
    "Organization": "South-1",
    "Manager Name": "Udhayakumar N",
    "Manager Level": "CSM",
    "Dealer Name": "Jailaxmi Auto Works and Agencies Pvt Ltd (ProX)-Salem",
    "SCode": "1S4147",
    "State": "Tamil Nadu",
    "City": "Salem",
    "Contact No.": "9384144925"
  },
  {
    "Organization": "South-1",
    "Manager Name": "Chitheswaran N",
    "Manager Level": "MD",
    "Dealer Name": "Jailaxmi Auto Works and Agencies Pvt Ltd (ProX)-Salem",
    "SCode": "1S4147",
    "State": "Tamil Nadu",
    "City": "Salem",
    "Contact No.": "8015610490"
  },
  {
    "Organization": "South-1",
    "Manager Name": "Dharmarajan",
    "Manager Level": "MD",
    "Dealer Name": "Jailaxmi Auto Works and Agencies Pvt Ltd-Cuddalore",
    "SCode": "1S4119",
    "State": "Tamil Nadu",
    "City": "Cuddalore",
    "Contact No.": "9944407470"
  },
  {
    "Organization": "South-1",
    "Manager Name": "M. Jeeva (D) / Shanmuganathan (N)",
    "Manager Level": "EOS Site Incharge",
    "Dealer Name": "Jailaxmi Auto Works and Agencies Pvt Ltd-Cuddalore",
    "SCode": "1S4119",
    "State": "Tamil Nadu",
    "City": "Cuddalore",
    "Contact No.": "9994177666,7358966659"
  },
  {
    "Organization": "South-1",
    "Manager Name": "Devaraj Sekar (D) / Yuvaraj B (N)",
    "Manager Level": "CSM",
    "Dealer Name": "Jailaxmi Auto Works and Agencies Pvt Ltd-Cuddalore",
    "SCode": "1S4119",
    "State": "Tamil Nadu",
    "City": "Cuddalore",
    "Contact No.": "7305111688,9543338783"
  },
  {
    "Organization": "South-1",
    "Manager Name": "KP Sharma",
    "Manager Level": "ASM",
    "Dealer Name": "Jailaxmi Auto Works and Agencies Pvt Ltd-Cuddalore",
    "SCode": "1S4119",
    "State": "Tamil Nadu",
    "City": "Cuddalore",
    "Contact No.": "9567475444"
  },
  {
    "Organization": "South-1",
    "Manager Name": "Hariharan",
    "Manager Level": "WM",
    "Dealer Name": "Jailaxmi Auto Works and Agencies Pvt Ltd-Cuddalore",
    "SCode": "1S4119",
    "State": "Tamil Nadu",
    "City": "Cuddalore",
    "Contact No.": "8220955531"
  },
  {
    "Organization": "South-1",
    "Manager Name": "Radhakrishnan",
    "Manager Level": "RSM",
    "Dealer Name": "Jailaxmi Auto Works and Agencies Pvt Ltd-Cuddalore",
    "SCode": "1S4119",
    "State": "Tamil Nadu",
    "City": "Cuddalore",
    "Contact No.": "9840730250"
  },
  {
    "Organization": "South-1",
    "Manager Name": "Devaraj",
    "Manager Level": "CSM",
    "Dealer Name": "Jailaxmi Auto Works and Agencies Pvt Ltd-Dharampuri",
    "SCode": "1S4156",
    "State": "Tamil Nadu",
    "City": "Dharmapuri",
    "Contact No.": "7305111688"
  },
  {
    "Organization": "South-1",
    "Manager Name": "Radhakrishnan",
    "Manager Level": "RSM",
    "Dealer Name": "Jailaxmi Auto Works and Agencies Pvt Ltd-Dharampuri",
    "SCode": "1S4156",
    "State": "Tamil Nadu",
    "City": "Dharmapuri",
    "Contact No.": "9840730250"
  },
  {
    "Organization": "South-1",
    "Manager Name": "Thamaraiselvan",
    "Manager Level": "EOS Site Incharge",
    "Dealer Name": "Jailaxmi Auto Works and Agencies Pvt Ltd-Dharampuri",
    "SCode": "1S4156",
    "State": "Tamil Nadu",
    "City": "Dharmapuri",
    "Contact No.": "6384000030"
  },
  {
    "Organization": "South-1",
    "Manager Name": "K P Sharma",
    "Manager Level": "ASM",
    "Dealer Name": "Jailaxmi Auto Works and Agencies Pvt Ltd-Dharampuri",
    "SCode": "1S4156",
    "State": "Tamil Nadu",
    "City": "Dharmapuri",
    "Contact No.": "9567475444"
  },
  {
    "Organization": "South-1",
    "Manager Name": "Saravanan A.S",
    "Manager Level": "MD",
    "Dealer Name": "Jailaxmi Auto Works and Agencies Pvt Ltd-Dharampuri",
    "SCode": "1S4156",
    "State": "Tamil Nadu",
    "City": "Dharmapuri",
    "Contact No.": "8220049475"
  },
  {
    "Organization": "South-1",
    "Manager Name": "Vikram.T",
    "Manager Level": "EOS Site Incharge",
    "Dealer Name": "Jailaxmi Auto Works and Agencies Pvt Ltd-Dharampuri",
    "SCode": "1S4156",
    "State": "Tamil Nadu",
    "City": "Dharmapuri",
    "Contact No.": "7418017690"
  },
  {
    "Organization": "South-1",
    "Manager Name": "Ramesh / Subash",
    "Manager Level": "WM",
    "Dealer Name": "Jailaxmi Auto Works and Agencies Pvt Ltd-Dindigul",
    "SCode": "1S4113",
    "State": "Tamil Nadu",
    "City": "Dindigul",
    "Contact No.": "7358389857,9677888232"
  },
  {
    "Organization": "South-1",
    "Manager Name": "Suresh",
    "Manager Level": "MD",
    "Dealer Name": "Jailaxmi Auto Works and Agencies Pvt Ltd-Dindigul",
    "SCode": "1S4113",
    "State": "Tamil Nadu",
    "City": "Dindigul",
    "Contact No.": "9789772777"
  },
  {
    "Organization": "South-1",
    "Manager Name": "KP Sharma",
    "Manager Level": "ASM",
    "Dealer Name": "Jailaxmi Auto Works and Agencies Pvt Ltd-Dindigul",
    "SCode": "1S4113",
    "State": "Tamil Nadu",
    "City": "Dindigul",
    "Contact No.": "9567475444"
  },
  {
    "Organization": "South-1",
    "Manager Name": "M. Jeeva (D) / Shanmuganathan (N)",
    "Manager Level": "EOS Site Incharge",
    "Dealer Name": "Jailaxmi Auto Works and Agencies Pvt Ltd-Dindigul",
    "SCode": "1S4113",
    "State": "Tamil Nadu",
    "City": "Dindigul",
    "Contact No.": "9994177666,7358966659"
  },
  {
    "Organization": "South-1",
    "Manager Name": "Gokul K (D) / Yuvaraj B (N)",
    "Manager Level": "CSM",
    "Dealer Name": "Jailaxmi Auto Works and Agencies Pvt Ltd-Dindigul",
    "SCode": "1S4113",
    "State": "Tamil Nadu",
    "City": "Dindigul",
    "Contact No.": "9003555286,9543338783"
  },
  {
    "Organization": "South-1",
    "Manager Name": "Radhakrishnan",
    "Manager Level": "RSM",
    "Dealer Name": "Jailaxmi Auto Works and Agencies Pvt Ltd-Dindigul",
    "SCode": "1S4113",
    "State": "Tamil Nadu",
    "City": "Dindigul",
    "Contact No.": "9840730250"
  },
  {
    "Organization": "South-1",
    "Manager Name": "Arun Prasad",
    "Manager Level": "WM",
    "Dealer Name": "Jailaxmi Auto Works and Agencies Pvt Ltd-Hosur",
    "SCode": "1S4082",
    "State": "Tamil Nadu",
    "City": "Hosur",
    "Contact No.": "6384000018"
  },
  {
    "Organization": "South-1",
    "Manager Name": "M. Jeeva (D) / Shanmuganathan (N)",
    "Manager Level": "EOS Site Incharge",
    "Dealer Name": "Jailaxmi Auto Works and Agencies Pvt Ltd-Hosur",
    "SCode": "1S4082",
    "State": "Tamil Nadu",
    "City": "Hosur",
    "Contact No.": "9994177666,7358966659"
  },
  {
    "Organization": "South-1",
    "Manager Name": "Devaraj Sekar (D) / Yuvaraj B (N)",
    "Manager Level": "CSM",
    "Dealer Name": "Jailaxmi Auto Works and Agencies Pvt Ltd-Hosur",
    "SCode": "1S4082",
    "State": "Tamil Nadu",
    "City": "Hosur",
    "Contact No.": "7305111688,9543338783"
  },
  {
    "Organization": "South-1",
    "Manager Name": "Ravibala",
    "Manager Level": "MD",
    "Dealer Name": "Jailaxmi Auto Works and Agencies Pvt Ltd-Hosur",
    "SCode": "1S4082",
    "State": "Tamil Nadu",
    "City": "Hosur",
    "Contact No.": "6384000019"
  },
  {
    "Organization": "South-1",
    "Manager Name": "KP Sharma",
    "Manager Level": "ASM",
    "Dealer Name": "Jailaxmi Auto Works and Agencies Pvt Ltd-Hosur",
    "SCode": "1S4082",
    "State": "Tamil Nadu",
    "City": "Hosur",
    "Contact No.": "9567475444"
  },
  {
    "Organization": "South-1",
    "Manager Name": "Radhakrishnan",
    "Manager Level": "RSM",
    "Dealer Name": "Jailaxmi Auto Works and Agencies Pvt Ltd-Hosur",
    "SCode": "1S4082",
    "State": "Tamil Nadu",
    "City": "Hosur",
    "Contact No.": "9840730250"
  },
  {
    "Organization": "South-1",
    "Manager Name": "Shanmugam",
    "Manager Level": "MD",
    "Dealer Name": "Jailaxmi Auto Works and Agencies Pvt Ltd-Karur",
    "SCode": "1S4016",
    "State": "Tamil Nadu",
    "City": "Karur",
    "Contact No.": "9894017470"
  },
  {
    "Organization": "South-1",
    "Manager Name": "Santhosh (D) / Yuvaraj B (N)",
    "Manager Level": "CSM",
    "Dealer Name": "Jailaxmi Auto Works and Agencies Pvt Ltd-Karur",
    "SCode": "1S4016",
    "State": "Tamil Nadu",
    "City": "Karur",
    "Contact No.": "7418384448,9543338783"
  },
  {
    "Organization": "South-1",
    "Manager Name": "Radhakrishnan",
    "Manager Level": "RSM",
    "Dealer Name": "Jailaxmi Auto Works and Agencies Pvt Ltd-Karur",
    "SCode": "1S4016",
    "State": "Tamil Nadu",
    "City": "Karur",
    "Contact No.": "9840730250"
  },
  {
    "Organization": "South-1",
    "Manager Name": "KP Sharma",
    "Manager Level": "ASM",
    "Dealer Name": "Jailaxmi Auto Works and Agencies Pvt Ltd-Karur",
    "SCode": "1S4016",
    "State": "Tamil Nadu",
    "City": "Karur",
    "Contact No.": "9567475444"
  },
  {
    "Organization": "South-1",
    "Manager Name": "Soundar / Santha Kumar",
    "Manager Level": "WM",
    "Dealer Name": "Jailaxmi Auto Works and Agencies Pvt Ltd-Karur",
    "SCode": "1S4016",
    "State": "Tamil Nadu",
    "City": "Karur",
    "Contact No.": "9994077277,8248619401"
  },
  {
    "Organization": "South-1",
    "Manager Name": "M. Jeeva (D) / Shanmuganathan (N)",
    "Manager Level": "EOS Site Incharge",
    "Dealer Name": "Jailaxmi Auto Works and Agencies Pvt Ltd-Karur",
    "SCode": "1S4016",
    "State": "Tamil Nadu",
    "City": "Karur",
    "Contact No.": "9994177666,7358966659"
  },
  {
    "Organization": "South-1",
    "Manager Name": "Radhakrishnan",
    "Manager Level": "RSM",
    "Dealer Name": "Jailaxmi Auto Works and Agencies Pvt Ltd-Krishnagiri",
    "SCode": "1S4056",
    "State": "Tamil Nadu",
    "City": "Krishnagiri",
    "Contact No.": "9840730250"
  },
  {
    "Organization": "South-1",
    "Manager Name": "Pradeep",
    "Manager Level": "WM",
    "Dealer Name": "Jailaxmi Auto Works and Agencies Pvt Ltd-Krishnagiri",
    "SCode": "1S4056",
    "State": "Tamil Nadu",
    "City": "Krishnagiri",
    "Contact No.": "9994077577"
  },
  {
    "Organization": "South-1",
    "Manager Name": "KP Sharma",
    "Manager Level": "ASM",
    "Dealer Name": "Jailaxmi Auto Works and Agencies Pvt Ltd-Krishnagiri",
    "SCode": "1S4056",
    "State": "Tamil Nadu",
    "City": "Krishnagiri",
    "Contact No.": "9567475444"
  },
  {
    "Organization": "South-1",
    "Manager Name": "Ravibala",
    "Manager Level": "MD",
    "Dealer Name": "Jailaxmi Auto Works and Agencies Pvt Ltd-Krishnagiri",
    "SCode": "1S4056",
    "State": "Tamil Nadu",
    "City": "Krishnagiri",
    "Contact No.": "6384000019"
  },
  {
    "Organization": "South-1",
    "Manager Name": "Gokul K (D) / Yuvaraj B (N)",
    "Manager Level": "CSM",
    "Dealer Name": "Jailaxmi Auto Works and Agencies Pvt Ltd-Krishnagiri",
    "SCode": "1S4056",
    "State": "Tamil Nadu",
    "City": "Krishnagiri",
    "Contact No.": "9003555286,9543338783"
  },
  {
    "Organization": "South-1",
    "Manager Name": "M. Jeeva (D) / Shanmuganathan (N)",
    "Manager Level": "EOS Site Incharge",
    "Dealer Name": "Jailaxmi Auto Works and Agencies Pvt Ltd-Krishnagiri",
    "SCode": "1S4056",
    "State": "Tamil Nadu",
    "City": "Krishnagiri",
    "Contact No.": "9994177666,7358966659"
  },
  {
    "Organization": "South-1",
    "Manager Name": "Suresh",
    "Manager Level": "MD",
    "Dealer Name": "Jailaxmi Auto Works and Agencies Pvt Ltd-Namakkal",
    "SCode": "1S4057",
    "State": "Tamil Nadu",
    "City": "Namakkal",
    "Contact No.": "9789772777"
  },
  {
    "Organization": "South-1",
    "Manager Name": "KP Sharma",
    "Manager Level": "ASM",
    "Dealer Name": "Jailaxmi Auto Works and Agencies Pvt Ltd-Namakkal",
    "SCode": "1S4057",
    "State": "Tamil Nadu",
    "City": "Namakkal",
    "Contact No.": "9567475444"
  },
  {
    "Organization": "South-1",
    "Manager Name": "Santhosh (D) / Yuvaraj B (N)",
    "Manager Level": "CSM",
    "Dealer Name": "Jailaxmi Auto Works and Agencies Pvt Ltd-Namakkal",
    "SCode": "1S4057",
    "State": "Tamil Nadu",
    "City": "Namakkal",
    "Contact No.": "7418384448,9543338783"
  },
  {
    "Organization": "South-1",
    "Manager Name": "Ajith Kumar",
    "Manager Level": "EOS Site Incharge",
    "Dealer Name": "Jailaxmi Auto Works and Agencies Pvt Ltd-Namakkal",
    "SCode": "1S4057",
    "State": "Tamil Nadu",
    "City": "Namakkal",
    "Contact No.": "7845580834"
  },
  {
    "Organization": "South-1",
    "Manager Name": "Radhakrishnan",
    "Manager Level": "RSM",
    "Dealer Name": "Jailaxmi Auto Works and Agencies Pvt Ltd-Namakkal",
    "SCode": "1S4057",
    "State": "Tamil Nadu",
    "City": "Namakkal",
    "Contact No.": "9840730250"
  },
  {
    "Organization": "South-1",
    "Manager Name": "Ramesh",
    "Manager Level": "WM",
    "Dealer Name": "Jailaxmi Auto Works and Agencies Pvt Ltd-Namakkal",
    "SCode": "1S4057",
    "State": "Tamil Nadu",
    "City": "Namakkal",
    "Contact No.": "9994077377"
  },
  {
    "Organization": "South-1",
    "Manager Name": "Ramesh",
    "Manager Level": "WM",
    "Dealer Name": "Jailaxmi Auto Works and Agencies Pvt Ltd-Salem(II)",
    "SCode": "1S4069",
    "State": "Tamil Nadu",
    "City": "Salem",
    "Contact No.": "9994406789"
  },
  {
    "Organization": "South-1",
    "Manager Name": "KP Sharma",
    "Manager Level": "ASM",
    "Dealer Name": "Jailaxmi Auto Works and Agencies Pvt Ltd-Salem(II)",
    "SCode": "1S4069",
    "State": "Tamil Nadu",
    "City": "Salem",
    "Contact No.": "9567475444"
  },
  {
    "Organization": "South-1",
    "Manager Name": "Radhakrishnan",
    "Manager Level": "RSM",
    "Dealer Name": "Jailaxmi Auto Works and Agencies Pvt Ltd-Salem(II)",
    "SCode": "1S4069",
    "State": "Tamil Nadu",
    "City": "Salem",
    "Contact No.": "9840730250"
  },
  {
    "Organization": "South-1",
    "Manager Name": "Saravanan",
    "Manager Level": "MD",
    "Dealer Name": "Jailaxmi Auto Works and Agencies Pvt Ltd-Salem(II)",
    "SCode": "1S4069",
    "State": "Tamil Nadu",
    "City": "Salem",
    "Contact No.": "8220049475"
  },
  {
    "Organization": "South-1",
    "Manager Name": "Devaraj Sekar (D) / Yuvaraj B (N)",
    "Manager Level": "CSM",
    "Dealer Name": "Jailaxmi Auto Works and Agencies Pvt Ltd-Salem(II)",
    "SCode": "1S4069",
    "State": "Tamil Nadu",
    "City": "Salem",
    "Contact No.": "7305111688,9543338783"
  },
  {
    "Organization": "South-1",
    "Manager Name": "Karthick",
    "Manager Level": "EOS Site Incharge",
    "Dealer Name": "Jailaxmi Auto Works and Agencies Pvt Ltd-Salem(II)",
    "SCode": "1S4069",
    "State": "Tamil Nadu",
    "City": "Salem",
    "Contact No.": "8220049476"
  },
  {
    "Organization": "South-1",
    "Manager Name": "Radhakrishnan",
    "Manager Level": "RSM",
    "Dealer Name": "Jailaxmi Auto Works and Agencies Pvt Ltd-Villupuram",
    "SCode": "1S4068",
    "State": "Tamil Nadu",
    "City": "Villupuram",
    "Contact No.": "9840730250"
  },
  {
    "Organization": "South-1",
    "Manager Name": "KP Sharma",
    "Manager Level": "ASM",
    "Dealer Name": "Jailaxmi Auto Works and Agencies Pvt Ltd-Villupuram",
    "SCode": "1S4068",
    "State": "Tamil Nadu",
    "City": "Villupuram",
    "Contact No.": "9567475444"
  },
  {
    "Organization": "South-1",
    "Manager Name": "Devaraj Sekar (D)\t/ Yuvaraj B (N)",
    "Manager Level": "CSM",
    "Dealer Name": "Jailaxmi Auto Works and Agencies Pvt Ltd-Villupuram",
    "SCode": "1S4068",
    "State": "Tamil Nadu",
    "City": "Villupuram",
    "Contact No.": "7305111688,9543338783"
  },
  {
    "Organization": "South-1",
    "Manager Name": "Dharmarajan",
    "Manager Level": "MD",
    "Dealer Name": "Jailaxmi Auto Works and Agencies Pvt Ltd-Villupuram",
    "SCode": "1S4068",
    "State": "Tamil Nadu",
    "City": "Villupuram",
    "Contact No.": "9944407470"
  },
  {
    "Organization": "South-1",
    "Manager Name": "Velmurugan",
    "Manager Level": "WM",
    "Dealer Name": "Jailaxmi Auto Works and Agencies Pvt Ltd-Villupuram",
    "SCode": "1S4068",
    "State": "Tamil Nadu",
    "City": "Villupuram",
    "Contact No.": "9500722556"
  },
  {
    "Organization": "South-1",
    "Manager Name": "M. Jeeva (D) / Shanmuganathan (N)",
    "Manager Level": "EOS Site Incharge",
    "Dealer Name": "Jailaxmi Auto Works and Agencies Pvt Ltd-Villupuram",
    "SCode": "1S4068",
    "State": "Tamil Nadu",
    "City": "Villupuram",
    "Contact No.": "9994177666,7358966659"
  },
  {
    "Organization": "North-2",
    "Manager Name": "Mukesh Saxena",
    "Manager Level": "ASM",
    "Dealer Name": "Janhvi Autowheels-Dehradun",
    "SCode": "1S7060",
    "State": "Uttarakhand",
    "City": "Dehradun",
    "Contact No.": "9599117560"
  },
  {
    "Organization": "North-2",
    "Manager Name": "Prashant Gautam",
    "Manager Level": "EOS Site Incharge",
    "Dealer Name": "Janhvi Autowheels-Dehradun",
    "SCode": "1S7060",
    "State": "Uttarakhand",
    "City": "Dehradun",
    "Contact No.": "8864908852"
  },
  {
    "Organization": "North-2",
    "Manager Name": "Jaikaranveer Singh",
    "Manager Level": "MD",
    "Dealer Name": "Janhvi Autowheels-Dehradun",
    "SCode": "1S7060",
    "State": "Uttarakhand",
    "City": "Dehradun",
    "Contact No.": "9520977995"
  },
  {
    "Organization": "North-2",
    "Manager Name": "Deepak Devrani",
    "Manager Level": "WM",
    "Dealer Name": "Janhvi Autowheels-Dehradun",
    "SCode": "1S7060",
    "State": "Uttarakhand",
    "City": "Dehradun",
    "Contact No.": "9520985824"
  },
  {
    "Organization": "North-2",
    "Manager Name": "Prashant (D) / Saket Singh (N)",
    "Manager Level": "CSM",
    "Dealer Name": "Janhvi Autowheels-Dehradun",
    "SCode": "1S7060",
    "State": "Uttarakhand",
    "City": "Dehradun",
    "Contact No.": "8169914179,8709859215"
  },
  {
    "Organization": "North-2",
    "Manager Name": "Kuldeep (EVS) / Prashant",
    "Manager Level": "CSM",
    "Dealer Name": "Janhvi Autowheels-Dehradun",
    "SCode": "1S7060",
    "State": "Uttarakhand",
    "City": "Dehradun",
    "Contact No.": "8009044182,8169914179"
  },
  {
    "Organization": "North-2",
    "Manager Name": "Krishnendu Saha",
    "Manager Level": "RSM",
    "Dealer Name": "Janhvi Autowheels-Dehradun",
    "SCode": "1S7060",
    "State": "Uttarakhand",
    "City": "Dehradun",
    "Contact No.": "7980433425"
  },
  {
    "Organization": "North-2",
    "Manager Name": "Jaikaranveer Singh",
    "Manager Level": "MD",
    "Dealer Name": "Janhvi Autowheels-Haridwar",
    "SCode": "1S7069",
    "State": "Uttarakhand",
    "City": "Haridwar",
    "Contact No.": "9520977995"
  },
  {
    "Organization": "North-2",
    "Manager Name": "Amit Nain",
    "Manager Level": "WM",
    "Dealer Name": "Janhvi Autowheels-Haridwar",
    "SCode": "1S7069",
    "State": "Uttarakhand",
    "City": "Haridwar",
    "Contact No.": "7217454933"
  },
  {
    "Organization": "North-2",
    "Manager Name": "Krishnendu Saha",
    "Manager Level": "RSM",
    "Dealer Name": "Janhvi Autowheels-Haridwar",
    "SCode": "1S7069",
    "State": "Uttarakhand",
    "City": "Haridwar",
    "Contact No.": "7980433425"
  },
  {
    "Organization": "North-2",
    "Manager Name": "Prashant (D) / Saket Singh (N)",
    "Manager Level": "CSM",
    "Dealer Name": "Janhvi Autowheels-Haridwar",
    "SCode": "1S7069",
    "State": "Uttarakhand",
    "City": "Haridwar",
    "Contact No.": "8169914179,8709859215"
  },
  {
    "Organization": "North-2",
    "Manager Name": "Mukesh Saxena",
    "Manager Level": "ASM",
    "Dealer Name": "Janhvi Autowheels-Haridwar",
    "SCode": "1S7069",
    "State": "Uttarakhand",
    "City": "Haridwar",
    "Contact No.": "9599117560"
  },
  {
    "Organization": "North-2",
    "Manager Name": "Sourabh Rana",
    "Manager Level": "EOS Site Incharge",
    "Dealer Name": "Janhvi Autowheels-Haridwar",
    "SCode": "1S7069",
    "State": "Uttarakhand",
    "City": "Haridwar",
    "Contact No.": "9084731255"
  },
  {
    "Organization": "North-2",
    "Manager Name": "Prashant / Saket Singh (N)",
    "Manager Level": "CSM",
    "Dealer Name": "Janhvi Autowheels-Srinagar",
    "SCode": "1S7078",
    "State": "Uttarakhand",
    "City": "Srinagar",
    "Contact No.": "8169914179,8709859215"
  },
  {
    "Organization": "North-2",
    "Manager Name": "Jagjeet Anand",
    "Manager Level": "WM",
    "Dealer Name": "Janhvi Autowheels-Srinagar",
    "SCode": "1S7078",
    "State": "Uttarakhand",
    "City": "Srinagar",
    "Contact No.": "9520977995"
  },
  {
    "Organization": "North-2",
    "Manager Name": "Krishnendu Saha",
    "Manager Level": "RSM",
    "Dealer Name": "Janhvi Autowheels-Srinagar",
    "SCode": "1S7078",
    "State": "Uttarakhand",
    "City": "Srinagar",
    "Contact No.": "7980433425"
  },
  {
    "Organization": "North-2",
    "Manager Name": "Shiv Singh",
    "Manager Level": "EOS Site Incharge",
    "Dealer Name": "Janhvi Autowheels-Srinagar",
    "SCode": "1S7078",
    "State": "Uttarakhand",
    "City": "Srinagar",
    "Contact No.": "9520985822"
  },
  {
    "Organization": "North-2",
    "Manager Name": "Mukesh Saxena",
    "Manager Level": "ASM",
    "Dealer Name": "Janhvi Autowheels-Srinagar",
    "SCode": "1S7078",
    "State": "Uttarakhand",
    "City": "Srinagar",
    "Contact No.": "9599117560"
  },
  {
    "Organization": "North-2",
    "Manager Name": "Jaikaranveer Singh",
    "Manager Level": "MD",
    "Dealer Name": "Janhvi Autowheels-Srinagar",
    "SCode": "1S7078",
    "State": "Uttarakhand",
    "City": "Srinagar",
    "Contact No.": "9520977995"
  },
  {
    "Organization": "East-1",
    "Manager Name": "Yogeshwar Singh",
    "Manager Level": "RSM",
    "Dealer Name": "Jayshree Motors-Durgapur",
    "SCode": "1S2020",
    "State": "West Bengal",
    "City": "Durgapur",
    "Contact No.": "9717966997"
  },
  {
    "Organization": "East-1",
    "Manager Name": "Mr.Utpal Basu",
    "Manager Level": "MD",
    "Dealer Name": "Jayshree Motors-Durgapur",
    "SCode": "1S2020",
    "State": "West Bengal",
    "City": "Durgapur",
    "Contact No.": "9434788316"
  },
  {
    "Organization": "East-1",
    "Manager Name": "Avishek Paul",
    "Manager Level": "CSM",
    "Dealer Name": "Jayshree Motors-Durgapur",
    "SCode": "1S2020",
    "State": "West Bengal",
    "City": "Durgapur",
    "Contact No.": "8252059007"
  },
  {
    "Organization": "East-1",
    "Manager Name": "Chandan Mondal",
    "Manager Level": "WM",
    "Dealer Name": "Jayshree Motors-Durgapur",
    "SCode": "1S2020",
    "State": "West Bengal",
    "City": "Durgapur",
    "Contact No.": "8373070036"
  },
  {
    "Organization": "East-1",
    "Manager Name": "Abhirup Ghosh",
    "Manager Level": "ASM",
    "Dealer Name": "Jayshree Motors-Durgapur",
    "SCode": "1S2020",
    "State": "West Bengal",
    "City": "Durgapur",
    "Contact No.": "9073378080"
  },
  {
    "Organization": "West-2",
    "Manager Name": "Sudhir Kumar",
    "Manager Level": "RSM",
    "Dealer Name": "Jeewan Motors-Bhopal",
    "SCode": "1S5021",
    "State": "Madhya Pradesh",
    "City": "Bhopal",
    "Contact No.": "9752542733"
  },
  {
    "Organization": "West-2",
    "Manager Name": "Vivek Kumar",
    "Manager Level": "ASM",
    "Dealer Name": "Jeewan Motors-Bhopal",
    "SCode": "1S5021",
    "State": "Madhya Pradesh",
    "City": "Bhopal",
    "Contact No.": "8171110903"
  },
  {
    "Organization": "West-2",
    "Manager Name": "Sidharth Chaturvedi",
    "Manager Level": "MD",
    "Dealer Name": "Jeewan Motors-Bhopal",
    "SCode": "1S5021",
    "State": "Madhya Pradesh",
    "City": "Bhopal",
    "Contact No.": "9826017799"
  },
  {
    "Organization": "West-2",
    "Manager Name": "Sumit Bhargav / Raghav Mandal",
    "Manager Level": "EOS Site Incharge",
    "Dealer Name": "Jeewan Motors-Bhopal",
    "SCode": "1S5021",
    "State": "Madhya Pradesh",
    "City": "Bhopal",
    "Contact No.": "6232006494,9111011481"
  },
  {
    "Organization": "West-2",
    "Manager Name": "Jitendra Sharma",
    "Manager Level": "CSM",
    "Dealer Name": "Jeewan Motors-Bhopal",
    "SCode": "1S5021",
    "State": "Madhya Pradesh",
    "City": "Bhopal",
    "Contact No.": "9971385887"
  },
  {
    "Organization": "West-2",
    "Manager Name": "Pankaj Barai",
    "Manager Level": "WM",
    "Dealer Name": "Jeewan Motors-Bhopal",
    "SCode": "1S5021",
    "State": "Madhya Pradesh",
    "City": "Bhopal",
    "Contact No.": "9926001450"
  },
  {
    "Organization": "West-2",
    "Manager Name": "Anil Kumar (EVS) / Rohan Devadkar",
    "Manager Level": "CSM",
    "Dealer Name": "Jeewan Motors-Bhopal",
    "SCode": "1S5021",
    "State": "Madhya Pradesh",
    "City": "Bhopal",
    "Contact No.": "8115044314,9172991404"
  },
  {
    "Organization": "East-1",
    "Manager Name": "Paukholun Gangte",
    "Manager Level": "WM",
    "Dealer Name": "Joseph Automobiles-Aizawl",
    "SCode": "1S2286",
    "State": "Mizoram",
    "City": "Aizawl",
    "Contact No.": "8731992428"
  },
  {
    "Organization": "East-1",
    "Manager Name": "Debnath Sahu",
    "Manager Level": "EOS Site Incharge",
    "Dealer Name": "Joseph Automobiles-Aizawl",
    "SCode": "1S2286",
    "State": "Mizoram",
    "City": "Aizawl",
    "Contact No.": "9366788918"
  },
  {
    "Organization": "East-1",
    "Manager Name": "Rakesh Ghosh",
    "Manager Level": "ASM",
    "Dealer Name": "Joseph Automobiles-Aizawl",
    "SCode": "1S2286",
    "State": "Mizoram",
    "City": "Aizawl",
    "Contact No.": "9477374098"
  },
  {
    "Organization": "East-1",
    "Manager Name": "Petter Thangzamuana / Joseph Keisuankhuala",
    "Manager Level": "MD",
    "Dealer Name": "Joseph Automobiles-Aizawl",
    "SCode": "1S2286",
    "State": "Mizoram",
    "City": "Aizawl",
    "Contact No.": "9560276697,8837056991"
  },
  {
    "Organization": "East-1",
    "Manager Name": "Yogeshwar Singh",
    "Manager Level": "RSM",
    "Dealer Name": "Joseph Automobiles-Aizawl",
    "SCode": "1S2286",
    "State": "Mizoram",
    "City": "Aizawl",
    "Contact No.": "9717966997"
  },
  {
    "Organization": "East-1",
    "Manager Name": "Ranjan Sharma",
    "Manager Level": "CSM",
    "Dealer Name": "Joseph Automobiles-Aizawl",
    "SCode": "1S2286",
    "State": "Mizoram",
    "City": "Aizawl",
    "Contact No.": "7903904529"
  },
  {
    "Organization": "North-1",
    "Manager Name": "Rahul (D) / Arun (N)",
    "Manager Level": "EOS Site Incharge",
    "Dealer Name": "Jyoti Motors-Manesar",
    "SCode": "1S1278",
    "State": "Haryana",
    "City": "Gurgaon",
    "Contact No.": "8307536603,8178629392"
  },
  {
    "Organization": "North-1",
    "Manager Name": "Garima Bhaisware (D) / Shubham Raj (N)",
    "Manager Level": "CSM",
    "Dealer Name": "Jyoti Motors-Manesar",
    "SCode": "1S1278",
    "State": "Haryana",
    "City": "Gurgaon",
    "Contact No.": "8319126536,7303535819"
  },
  {
    "Organization": "North-1",
    "Manager Name": "Adarsh Prasad (D) / Sunil Verma (N)",
    "Manager Level": "RSM",
    "Dealer Name": "Jyoti Motors-Manesar",
    "SCode": "1S1278",
    "State": "Haryana",
    "City": "Gurgaon",
    "Contact No.": "9122734371,7742688688"
  },
  {
    "Organization": "North-1",
    "Manager Name": "Vivek Saxena",
    "Manager Level": "WM",
    "Dealer Name": "Jyoti Motors-Manesar",
    "SCode": "1S1278",
    "State": "Haryana",
    "City": "Gurgaon",
    "Contact No.": "7827546326"
  },
  {
    "Organization": "North-1",
    "Manager Name": "Sunil Verma (D) / Garima Bhaisware (N)",
    "Manager Level": "ASM",
    "Dealer Name": "Jyoti Motors-Manesar",
    "SCode": "1S1278",
    "State": "Haryana",
    "City": "Gurgaon",
    "Contact No.": "7742688688,8319126536"
  },
  {
    "Organization": "North-1",
    "Manager Name": "Prateek Munjal",
    "Manager Level": "MD",
    "Dealer Name": "Jyoti Motors-Manesar",
    "SCode": "1S1278",
    "State": "Haryana",
    "City": "Gurgaon",
    "Contact No.": "9599268265"
  },
  {
    "Organization": "North-1",
    "Manager Name": "Gulshan Munjal",
    "Manager Level": "MD",
    "Dealer Name": "Jyoti Motors-Sohna",
    "SCode": "1S1208",
    "State": "Haryana",
    "City": "Sohna",
    "Contact No.": "8053735011"
  },
  {
    "Organization": "North-1",
    "Manager Name": "Adarsh Prasad",
    "Manager Level": "RSM",
    "Dealer Name": "Jyoti Motors-Sohna",
    "SCode": "1S1208",
    "State": "Haryana",
    "City": "Sohna",
    "Contact No.": "9717996321"
  },
  {
    "Organization": "North-1",
    "Manager Name": "Mustakeem",
    "Manager Level": "EOS Site Incharge",
    "Dealer Name": "Jyoti Motors-Sohna",
    "SCode": "1S1208",
    "State": "Haryana",
    "City": "Sohna",
    "Contact No.": "9991457629"
  },
  {
    "Organization": "North-1",
    "Manager Name": "Sachin Kumar",
    "Manager Level": "WM",
    "Dealer Name": "Jyoti Motors-Sohna",
    "SCode": "1S1208",
    "State": "Haryana",
    "City": "Sohna",
    "Contact No.": "9991978484"
  },
  {
    "Organization": "North-1",
    "Manager Name": "Vishesh Jain / Shubham Raj (N)",
    "Manager Level": "CSM",
    "Dealer Name": "Jyoti Motors-Sohna",
    "SCode": "1S1208",
    "State": "Haryana",
    "City": "Sohna",
    "Contact No.": "9650289866,7303535819"
  },
  {
    "Organization": "North-1",
    "Manager Name": "Sunil Verma",
    "Manager Level": "ASM",
    "Dealer Name": "Jyoti Motors-Sohna",
    "SCode": "1S1208",
    "State": "Haryana",
    "City": "Sohna",
    "Contact No.": "7742688688"
  },
  {
    "Organization": "North-1",
    "Manager Name": "Sher Singh",
    "Manager Level": "EOS Site Incharge",
    "Dealer Name": "K K Motors-Kullu and Manali",
    "SCode": "1S1131",
    "State": "Himachal Pradesh",
    "City": "Kullu and manali",
    "Contact No.": "9816700519"
  },
  {
    "Organization": "North-1",
    "Manager Name": "Vaibhav Katyal",
    "Manager Level": "ASM",
    "Dealer Name": "K K Motors-Kullu and Manali",
    "SCode": "1S1131",
    "State": "Himachal Pradesh",
    "City": "Kullu and manali",
    "Contact No.": "9219500351"
  },
  {
    "Organization": "North-1",
    "Manager Name": "Adarsh Prasad",
    "Manager Level": "RSM",
    "Dealer Name": "K K Motors-Kullu and Manali",
    "SCode": "1S1131",
    "State": "Himachal Pradesh",
    "City": "Kullu and manali",
    "Contact No.": "9717996321"
  },
  {
    "Organization": "North-1",
    "Manager Name": "Lalit Kumar",
    "Manager Level": "CSM",
    "Dealer Name": "K K Motors-Kullu and Manali",
    "SCode": "1S1131",
    "State": "Himachal Pradesh",
    "City": "Kullu and manali",
    "Contact No.": "9625070004"
  },
  {
    "Organization": "North-1",
    "Manager Name": "Sumit Vaidya / Sher Singh",
    "Manager Level": "WM",
    "Dealer Name": "K K Motors-Kullu and Manali",
    "SCode": "1S1131",
    "State": "Himachal Pradesh",
    "City": "Kullu and manali",
    "Contact No.": "9857205050,9805501499"
  },
  {
    "Organization": "North-1",
    "Manager Name": "Sumit Vaidya",
    "Manager Level": "MD",
    "Dealer Name": "K K Motors-Kullu and Manali",
    "SCode": "1S1131",
    "State": "Himachal Pradesh",
    "City": "Kullu and manali",
    "Contact No.": "9857205050"
  },
  {
    "Organization": "East-2",
    "Manager Name": "Sanjay Singh / Amit Rai",
    "Manager Level": "MD",
    "Dealer Name": "KNS Vinayak Commercial Pvt Ltd-Ambikapur",
    "SCode": "1S2281",
    "State": "Chhattisgarh",
    "City": "Ambikapur",
    "Contact No.": "7525036461,9109997166"
  },
  {
    "Organization": "East-2",
    "Manager Name": "Rachit Kumar",
    "Manager Level": "ASM",
    "Dealer Name": "KNS Vinayak Commercial Pvt Ltd-Ambikapur",
    "SCode": "1S2281",
    "State": "Chhattisgarh",
    "City": "Ambikapur",
    "Contact No.": "9534341234"
  },
  {
    "Organization": "East-2",
    "Manager Name": "Jai Vardhan Deo",
    "Manager Level": "CSM",
    "Dealer Name": "KNS Vinayak Commercial Pvt Ltd-Ambikapur",
    "SCode": "1S2281",
    "State": "Chhattisgarh",
    "City": "Ambikapur",
    "Contact No.": "7978743807"
  },
  {
    "Organization": "East-2",
    "Manager Name": "Naveen",
    "Manager Level": "EOS Site Incharge",
    "Dealer Name": "KNS Vinayak Commercial Pvt Ltd-Ambikapur",
    "SCode": "1S2281",
    "State": "Chhattisgarh",
    "City": "Ambikapur",
    "Contact No.": "6266674272"
  },
  {
    "Organization": "East-2",
    "Manager Name": "Abhishek Das",
    "Manager Level": "WM",
    "Dealer Name": "KNS Vinayak Commercial Pvt Ltd-Ambikapur",
    "SCode": "1S2281",
    "State": "Chhattisgarh",
    "City": "Ambikapur",
    "Contact No.": "9617018845"
  },
  {
    "Organization": "East-2",
    "Manager Name": "Niket Kumar",
    "Manager Level": "RSM",
    "Dealer Name": "KNS Vinayak Commercial Pvt Ltd-Ambikapur",
    "SCode": "1S2281",
    "State": "Chhattisgarh",
    "City": "Ambikapur",
    "Contact No.": "8427733112"
  },
  {
    "Organization": "East-2",
    "Manager Name": "Niket Kumar",
    "Manager Level": "RSM",
    "Dealer Name": "KNS Vinayak Commercial Pvt Ltd-Korba",
    "SCode": "1S2169",
    "State": "Chhattisgarh",
    "City": "Korba",
    "Contact No.": "8427733112"
  },
  {
    "Organization": "East-2",
    "Manager Name": "Pradeep Yadav / Santosh Sahu",
    "Manager Level": "EOS Site Incharge",
    "Dealer Name": "KNS Vinayak Commercial Pvt Ltd-Korba",
    "SCode": "1S2169",
    "State": "Chhattisgarh",
    "City": "Korba",
    "Contact No.": "6260067515,9399246442"
  },
  {
    "Organization": "East-2",
    "Manager Name": "Rachit Kumar",
    "Manager Level": "ASM",
    "Dealer Name": "KNS Vinayak Commercial Pvt Ltd-Korba",
    "SCode": "1S2169",
    "State": "Chhattisgarh",
    "City": "Korba",
    "Contact No.": "9534341234"
  },
  {
    "Organization": "East-2",
    "Manager Name": "Jai Vardhan Deo",
    "Manager Level": "CSM",
    "Dealer Name": "KNS Vinayak Commercial Pvt Ltd-Korba",
    "SCode": "1S2169",
    "State": "Chhattisgarh",
    "City": "Korba",
    "Contact No.": "7978743807"
  },
  {
    "Organization": "East-2",
    "Manager Name": "Sanjay Singh / Amit Rai",
    "Manager Level": "MD",
    "Dealer Name": "KNS Vinayak Commercial Pvt Ltd-Korba",
    "SCode": "1S2169",
    "State": "Chhattisgarh",
    "City": "Korba",
    "Contact No.": "7525036461,9109997166"
  },
  {
    "Organization": "East-2",
    "Manager Name": "Sharanjeet Singh",
    "Manager Level": "WM",
    "Dealer Name": "KNS Vinayak Commercial Pvt Ltd-Korba",
    "SCode": "1S2169",
    "State": "Chhattisgarh",
    "City": "Korba",
    "Contact No.": "7000443107"
  },
  {
    "Organization": "East-2",
    "Manager Name": "Niket Kumar",
    "Manager Level": "RSM",
    "Dealer Name": "Kartar Motors-Bilaspur",
    "SCode": "1S5034",
    "State": "Chhattisgarh",
    "City": "Bilaspur",
    "Contact No.": "8427733112"
  },
  {
    "Organization": "East-2",
    "Manager Name": "Rachit Kumar",
    "Manager Level": "ASM",
    "Dealer Name": "Kartar Motors-Bilaspur",
    "SCode": "1S5034",
    "State": "Chhattisgarh",
    "City": "Bilaspur",
    "Contact No.": "9534341234"
  },
  {
    "Organization": "East-2",
    "Manager Name": "Daljeet Singh Kalra",
    "Manager Level": "MD",
    "Dealer Name": "Kartar Motors-Bilaspur",
    "SCode": "1S5034",
    "State": "Chhattisgarh",
    "City": "Bilaspur",
    "Contact No.": "9179056912"
  },
  {
    "Organization": "East-2",
    "Manager Name": "Ashok Kumar",
    "Manager Level": "CSM",
    "Dealer Name": "Kartar Motors-Bilaspur",
    "SCode": "1S5034",
    "State": "Chhattisgarh",
    "City": "Bilaspur",
    "Contact No.": "8006914173"
  },
  {
    "Organization": "East-2",
    "Manager Name": "Brindaban Rana",
    "Manager Level": "WM",
    "Dealer Name": "Kartar Motors-Bilaspur",
    "SCode": "1S5034",
    "State": "Chhattisgarh",
    "City": "Bilaspur",
    "Contact No.": "9238749251"
  },
  {
    "Organization": "East-2",
    "Manager Name": "Niket Kumar",
    "Manager Level": "RSM",
    "Dealer Name": "Kartar Motors-Raigarh",
    "SCode": "1S5010",
    "State": "Chhattisgarh",
    "City": "Raigarh",
    "Contact No.": "8427733112"
  },
  {
    "Organization": "East-2",
    "Manager Name": "Phani Gorthi",
    "Manager Level": "MD",
    "Dealer Name": "Kartar Motors-Raigarh",
    "SCode": "1S5010",
    "State": "Chhattisgarh",
    "City": "Raigarh",
    "Contact No.": "6305065962"
  },
  {
    "Organization": "East-2",
    "Manager Name": "Akash Patle",
    "Manager Level": "EOS Site Incharge",
    "Dealer Name": "Kartar Motors-Raigarh",
    "SCode": "1S5010",
    "State": "Chhattisgarh",
    "City": "Raigarh",
    "Contact No.": "9685627594"
  },
  {
    "Organization": "East-2",
    "Manager Name": "Rachit Kumar",
    "Manager Level": "ASM",
    "Dealer Name": "Kartar Motors-Raigarh",
    "SCode": "1S5010",
    "State": "Chhattisgarh",
    "City": "Raigarh",
    "Contact No.": "9534341234"
  },
  {
    "Organization": "East-2",
    "Manager Name": "Rakesh Patle",
    "Manager Level": "WM",
    "Dealer Name": "Kartar Motors-Raigarh",
    "SCode": "1S5010",
    "State": "Chhattisgarh",
    "City": "Raigarh",
    "Contact No.": "8109591028"
  },
  {
    "Organization": "East-2",
    "Manager Name": "Ashok Kumar",
    "Manager Level": "CSM",
    "Dealer Name": "Kartar Motors-Raigarh",
    "SCode": "1S5010",
    "State": "Chhattisgarh",
    "City": "Raigarh",
    "Contact No.": "8006914173"
  },
  {
    "Organization": "West-2",
    "Manager Name": "Sudhir Kumar",
    "Manager Level": "RSM",
    "Dealer Name": "Kesharwani Automotive Pvt Ltd-Satna",
    "SCode": "1S5090",
    "State": "Madhya Pradesh",
    "City": "Satna",
    "Contact No.": "9752542733"
  },
  {
    "Organization": "West-2",
    "Manager Name": "Anurag Vishwakarma",
    "Manager Level": "MD",
    "Dealer Name": "Kesharwani Automotive Pvt Ltd-Satna",
    "SCode": "1S5090",
    "State": "Madhya Pradesh",
    "City": "Satna",
    "Contact No.": "7400530184"
  },
  {
    "Organization": "West-2",
    "Manager Name": "Vishal Kulkarni",
    "Manager Level": "ASM",
    "Dealer Name": "Kesharwani Automotive Pvt Ltd-Satna",
    "SCode": "1S5090",
    "State": "Madhya Pradesh",
    "City": "Satna",
    "Contact No.": "8349997686"
  },
  {
    "Organization": "West-2",
    "Manager Name": "Vijay Shukla",
    "Manager Level": "EOS Site Incharge",
    "Dealer Name": "Kesharwani Automotive Pvt Ltd-Satna",
    "SCode": "1S5090",
    "State": "Madhya Pradesh",
    "City": "Satna",
    "Contact No.": "7400530180"
  },
  {
    "Organization": "West-2",
    "Manager Name": "Anurag Vishwakarma",
    "Manager Level": "WM",
    "Dealer Name": "Kesharwani Automotive Pvt Ltd-Satna",
    "SCode": "1S5090",
    "State": "Madhya Pradesh",
    "City": "Satna",
    "Contact No.": "7400530184"
  },
  {
    "Organization": "West-2",
    "Manager Name": "Mohd Talib Sidiqqui",
    "Manager Level": "CSM",
    "Dealer Name": "Kesharwani Automotive Pvt Ltd-Satna",
    "SCode": "1S5090",
    "State": "Madhya Pradesh",
    "City": "Satna",
    "Contact No.": "9922366655"
  },
  {
    "Organization": "West-2",
    "Manager Name": "Amar Kesharwani",
    "Manager Level": "MD",
    "Dealer Name": "Kesharwani Automotive Pvt Ltd-Shahdol",
    "SCode": "1S5110",
    "State": "Madhya Pradesh",
    "City": "Shahdol",
    "Contact No.": "9131042396"
  },
  {
    "Organization": "West-2",
    "Manager Name": "Vishwajeet Sharma",
    "Manager Level": "WM",
    "Dealer Name": "Kesharwani Automotive Pvt Ltd-Shahdol",
    "SCode": "1S5110",
    "State": "Madhya Pradesh",
    "City": "Shahdol",
    "Contact No.": "7701082224"
  },
  {
    "Organization": "West-2",
    "Manager Name": "Shashikant Patel",
    "Manager Level": "EOS Site Incharge",
    "Dealer Name": "Kesharwani Automotive Pvt Ltd-Shahdol",
    "SCode": "1S5110",
    "State": "Madhya Pradesh",
    "City": "Shahdol",
    "Contact No.": "9589928876"
  },
  {
    "Organization": "West-2",
    "Manager Name": "Vishal Kulkarni",
    "Manager Level": "ASM",
    "Dealer Name": "Kesharwani Automotive Pvt Ltd-Shahdol",
    "SCode": "1S5110",
    "State": "Madhya Pradesh",
    "City": "Shahdol",
    "Contact No.": "8349997686"
  },
  {
    "Organization": "West-2",
    "Manager Name": "Mohd Talib Sidiqqui",
    "Manager Level": "CSM",
    "Dealer Name": "Kesharwani Automotive Pvt Ltd-Shahdol",
    "SCode": "1S5110",
    "State": "Madhya Pradesh",
    "City": "Shahdol",
    "Contact No.": "9922366655"
  },
  {
    "Organization": "West-2",
    "Manager Name": "Sudhir Kumar",
    "Manager Level": "RSM",
    "Dealer Name": "Kesharwani Automotive Pvt Ltd-Shahdol",
    "SCode": "1S5110",
    "State": "Madhya Pradesh",
    "City": "Shahdol",
    "Contact No.": "9752542733"
  },
  {
    "Organization": "South-1",
    "Manager Name": "Radhakrishnan",
    "Manager Level": "RSM",
    "Dealer Name": "Krishnaa Automobile-Kumbakonam",
    "SCode": "1S4116",
    "State": "Tamil Nadu",
    "City": "Kumbakonam",
    "Contact No.": "9840730250"
  },
  {
    "Organization": "South-1",
    "Manager Name": "Velmurugan",
    "Manager Level": "WM",
    "Dealer Name": "Krishnaa Automobile-Kumbakonam",
    "SCode": "1S4116",
    "State": "Tamil Nadu",
    "City": "Kumbakonam",
    "Contact No.": "8489900067"
  },
  {
    "Organization": "South-1",
    "Manager Name": "Siddharth S (D) / Yuvaraj B (N)",
    "Manager Level": "CSM",
    "Dealer Name": "Krishnaa Automobile-Kumbakonam",
    "SCode": "1S4116",
    "State": "Tamil Nadu",
    "City": "Kumbakonam",
    "Contact No.": "7418811185,9543338783"
  },
  {
    "Organization": "South-1",
    "Manager Name": "Sibiraj.G / Balaji P",
    "Manager Level": "EOS Site Incharge",
    "Dealer Name": "Krishnaa Automobile-Kumbakonam",
    "SCode": "1S4116",
    "State": "Tamil Nadu",
    "City": "Kumbakonam",
    "Contact No.": "8489400019,8489984646"
  },
  {
    "Organization": "South-1",
    "Manager Name": "Vasantha Kumar T",
    "Manager Level": "ASM",
    "Dealer Name": "Krishnaa Automobile-Kumbakonam",
    "SCode": "1S4116",
    "State": "Tamil Nadu",
    "City": "Kumbakonam",
    "Contact No.": "9790754777"
  },
  {
    "Organization": "South-1",
    "Manager Name": "Suresh",
    "Manager Level": "MD",
    "Dealer Name": "Krishnaa Automobile-Kumbakonam",
    "SCode": "1S4116",
    "State": "Tamil Nadu",
    "City": "Kumbakonam",
    "Contact No.": "8489400025"
  },
  {
    "Organization": "South-1",
    "Manager Name": "Suresh",
    "Manager Level": "MD",
    "Dealer Name": "Krishnaa Automobile-Perambalur",
    "SCode": "1S4129",
    "State": "Tamil Nadu",
    "City": "Perambalur",
    "Contact No.": "8489400025"
  },
  {
    "Organization": "South-1",
    "Manager Name": "Siddharth S (D) / Yuvaraj B (N)",
    "Manager Level": "CSM",
    "Dealer Name": "Krishnaa Automobile-Perambalur",
    "SCode": "1S4129",
    "State": "Tamil Nadu",
    "City": "Perambalur",
    "Contact No.": "7418811185,9543338783"
  },
  {
    "Organization": "South-1",
    "Manager Name": "Vasantha Kumar T",
    "Manager Level": "ASM",
    "Dealer Name": "Krishnaa Automobile-Perambalur",
    "SCode": "1S4129",
    "State": "Tamil Nadu",
    "City": "Perambalur",
    "Contact No.": "9790754777"
  },
  {
    "Organization": "South-1",
    "Manager Name": "Rakesh",
    "Manager Level": "EOS Site Incharge",
    "Dealer Name": "Krishnaa Automobile-Perambalur",
    "SCode": "1S4129",
    "State": "Tamil Nadu",
    "City": "Perambalur",
    "Contact No.": "8489925353"
  },
  {
    "Organization": "South-1",
    "Manager Name": "Anand K / Velmurugan A",
    "Manager Level": "WM",
    "Dealer Name": "Krishnaa Automobile-Perambalur",
    "SCode": "1S4129",
    "State": "Tamil Nadu",
    "City": "Perambalur",
    "Contact No.": "8489907075,8489900067"
  },
  {
    "Organization": "South-1",
    "Manager Name": "Radhakrishnan",
    "Manager Level": "RSM",
    "Dealer Name": "Krishnaa Automobile-Perambalur",
    "SCode": "1S4129",
    "State": "Tamil Nadu",
    "City": "Perambalur",
    "Contact No.": "9840730250"
  },
  {
    "Organization": "South-1",
    "Manager Name": "Siddharth S (D) / Yuvaraj B (N)",
    "Manager Level": "CSM",
    "Dealer Name": "Krishnaa Automobile-Trichy",
    "SCode": "1S4112",
    "State": "Tamil Nadu",
    "City": "Trichy",
    "Contact No.": "7418811185,9543338783"
  },
  {
    "Organization": "South-1",
    "Manager Name": "Vasantha Kumar T",
    "Manager Level": "ASM",
    "Dealer Name": "Krishnaa Automobile-Trichy",
    "SCode": "1S4112",
    "State": "Tamil Nadu",
    "City": "Trichy",
    "Contact No.": "9790754777"
  },
  {
    "Organization": "South-1",
    "Manager Name": "Suresh",
    "Manager Level": "MD",
    "Dealer Name": "Krishnaa Automobile-Trichy",
    "SCode": "1S4112",
    "State": "Tamil Nadu",
    "City": "Trichy",
    "Contact No.": "8489400025"
  },
  {
    "Organization": "South-1",
    "Manager Name": "Radhakrishnan",
    "Manager Level": "RSM",
    "Dealer Name": "Krishnaa Automobile-Trichy",
    "SCode": "1S4112",
    "State": "Tamil Nadu",
    "City": "Trichy",
    "Contact No.": "9840730250"
  },
  {
    "Organization": "South-1",
    "Manager Name": "Karthik / Tamil",
    "Manager Level": "EOS Site Incharge",
    "Dealer Name": "Krishnaa Automobile-Trichy",
    "SCode": "1S4112",
    "State": "Tamil Nadu",
    "City": "Trichy",
    "Contact No.": "8489900076,8925840971"
  },
  {
    "Organization": "South-1",
    "Manager Name": "Arun",
    "Manager Level": "WM",
    "Dealer Name": "Krishnaa Automobile-Trichy",
    "SCode": "1S4112",
    "State": "Tamil Nadu",
    "City": "Trichy",
    "Contact No.": "8489900051"
  },
  {
    "Organization": "North-2",
    "Manager Name": "Mohit / Prashant",
    "Manager Level": "EOS Site Incharge",
    "Dealer Name": "Kusum Ventures LLP-Saharanpur",
    "SCode": "1S7061",
    "State": "Uttar Pradesh",
    "City": "Saharanpur",
    "Contact No.": "7827941620,7428999724"
  },
  {
    "Organization": "North-2",
    "Manager Name": "Sanjay Singh / Kapil Rastogi",
    "Manager Level": "MD",
    "Dealer Name": "Kusum Ventures LLP-Saharanpur",
    "SCode": "1S7061",
    "State": "Uttar Pradesh",
    "City": "Saharanpur",
    "Contact No.": "7428999709,7428999708"
  },
  {
    "Organization": "North-2",
    "Manager Name": "Krishnendu Saha",
    "Manager Level": "RSM",
    "Dealer Name": "Kusum Ventures LLP-Saharanpur",
    "SCode": "1S7061",
    "State": "Uttar Pradesh",
    "City": "Saharanpur",
    "Contact No.": "7980433425"
  },
  {
    "Organization": "North-2",
    "Manager Name": "Prashant Mamgain (D) / Saket Singh (N)",
    "Manager Level": "CSM",
    "Dealer Name": "Kusum Ventures LLP-Saharanpur",
    "SCode": "1S7061",
    "State": "Uttar Pradesh",
    "City": "Saharanpur",
    "Contact No.": "8169914179,8709859215"
  },
  {
    "Organization": "North-2",
    "Manager Name": "Deepak Devrani",
    "Manager Level": "WM",
    "Dealer Name": "Kusum Ventures LLP-Saharanpur",
    "SCode": "1S7061",
    "State": "Uttar Pradesh",
    "City": "Saharanpur",
    "Contact No.": "7428999703"
  },
  {
    "Organization": "North-2",
    "Manager Name": "Mukesh Saxena",
    "Manager Level": "ASM",
    "Dealer Name": "Kusum Ventures LLP-Saharanpur",
    "SCode": "1S7061",
    "State": "Uttar Pradesh",
    "City": "Saharanpur",
    "Contact No.": "9599117560"
  },
  {
    "Organization": "South-1",
    "Manager Name": "Sreekumar",
    "Manager Level": "MD",
    "Dealer Name": "Kuttikkatt Motors-Kollam",
    "SCode": "1S4105",
    "State": "Kerala",
    "City": "Kollam",
    "Contact No.": "7593844652"
  },
  {
    "Organization": "South-1",
    "Manager Name": "Radhakrishnan",
    "Manager Level": "RSM",
    "Dealer Name": "Kuttikkatt Motors-Kollam",
    "SCode": "1S4105",
    "State": "Kerala",
    "City": "Kollam",
    "Contact No.": "9840730250"
  },
  {
    "Organization": "South-1",
    "Manager Name": "Mr. Aneesh",
    "Manager Level": "WM",
    "Dealer Name": "Kuttikkatt Motors-Kollam",
    "SCode": "1S4105",
    "State": "Kerala",
    "City": "Kollam",
    "Contact No.": "7593844664"
  },
  {
    "Organization": "South-1",
    "Manager Name": "R Bharath Kumar (D) / Yuvaraj B (N)",
    "Manager Level": "CSM",
    "Dealer Name": "Kuttikkatt Motors-Kollam",
    "SCode": "1S4105",
    "State": "Kerala",
    "City": "Kollam",
    "Contact No.": "7418807333,9543338783"
  },
  {
    "Organization": "South-1",
    "Manager Name": "MR. Georgy Zachariah",
    "Manager Level": "ASM",
    "Dealer Name": "Kuttikkatt Motors-Kollam",
    "SCode": "1S4105",
    "State": "Kerala",
    "City": "Kollam",
    "Contact No.": "9895398896"
  },
  {
    "Organization": "South-1",
    "Manager Name": "Radhakrishnan",
    "Manager Level": "RSM",
    "Dealer Name": "Kuttikkatt Motors-Pathanamthitta",
    "SCode": "1S4106",
    "State": "Kerala",
    "City": "Pathanamthitta",
    "Contact No.": "9840730250"
  },
  {
    "Organization": "South-1",
    "Manager Name": "Sreekumar",
    "Manager Level": "MD",
    "Dealer Name": "Kuttikkatt Motors-Pathanamthitta",
    "SCode": "1S4106",
    "State": "Kerala",
    "City": "Pathanamthitta",
    "Contact No.": "7593844652"
  },
  {
    "Organization": "South-1",
    "Manager Name": "MR. Georgy Zachariah",
    "Manager Level": "ASM",
    "Dealer Name": "Kuttikkatt Motors-Pathanamthitta",
    "SCode": "1S4106",
    "State": "Kerala",
    "City": "Pathanamthitta",
    "Contact No.": "9895398896"
  },
  {
    "Organization": "South-1",
    "Manager Name": "Jaya shanker",
    "Manager Level": "WM",
    "Dealer Name": "Kuttikkatt Motors-Pathanamthitta",
    "SCode": "1S4106",
    "State": "Kerala",
    "City": "Pathanamthitta",
    "Contact No.": "7593844665"
  },
  {
    "Organization": "South-1",
    "Manager Name": "R Bharath Kumar (D) / Yuvaraj B (N)",
    "Manager Level": "CSM",
    "Dealer Name": "Kuttikkatt Motors-Pathanamthitta",
    "SCode": "1S4106",
    "State": "Kerala",
    "City": "Pathanamthitta",
    "Contact No.": "7418807333,9543338783"
  },
  {
    "Organization": "South-1",
    "Manager Name": "Radhakrishnan",
    "Manager Level": "RSM",
    "Dealer Name": "Kuttikkatt Motors-Thiruvananthapuram",
    "SCode": "1S4104",
    "State": "Kerala",
    "City": "Kollam",
    "Contact No.": "9840730250"
  },
  {
    "Organization": "South-1",
    "Manager Name": "Sreekumar",
    "Manager Level": "MD",
    "Dealer Name": "Kuttikkatt Motors-Thiruvananthapuram",
    "SCode": "1S4104",
    "State": "Kerala",
    "City": "Kollam",
    "Contact No.": "7593844652"
  },
  {
    "Organization": "South-1",
    "Manager Name": "MR. Georgy Zachariah",
    "Manager Level": "ASM",
    "Dealer Name": "Kuttikkatt Motors-Thiruvananthapuram",
    "SCode": "1S4104",
    "State": "Kerala",
    "City": "Kollam",
    "Contact No.": "9895398896"
  },
  {
    "Organization": "South-1",
    "Manager Name": "R Bharath Kumar (D) / Yuvaraj B (N)",
    "Manager Level": "CSM",
    "Dealer Name": "Kuttikkatt Motors-Thiruvananthapuram",
    "SCode": "1S4104",
    "State": "Kerala",
    "City": "Kollam",
    "Contact No.": "7418807333,9543338783"
  },
  {
    "Organization": "South-1",
    "Manager Name": "Pratheesh",
    "Manager Level": "WM",
    "Dealer Name": "Kuttikkatt Motors-Thiruvananthapuram",
    "SCode": "1S4104",
    "State": "Kerala",
    "City": "Kollam",
    "Contact No.": "7593844004"
  },
  {
    "Organization": "North-1",
    "Manager Name": "Sunil Verma",
    "Manager Level": "ASM",
    "Dealer Name": "MCTC EXIM Pvt Ltd-Bilaspur",
    "SCode": "1S1263",
    "State": "Haryana",
    "City": "Gurgaon",
    "Contact No.": "7742688688"
  },
  {
    "Organization": "North-1",
    "Manager Name": "Aman Kumar (D) / Ankit Kumar ( N)",
    "Manager Level": "EOS Site Incharge",
    "Dealer Name": "MCTC EXIM Pvt Ltd-Bilaspur",
    "SCode": "1S1263",
    "State": "Haryana",
    "City": "Gurgaon",
    "Contact No.": "8529434456,9216730768"
  },
  {
    "Organization": "North-1",
    "Manager Name": "Upendra Sharma (D) / Shubham Raj (N)",
    "Manager Level": "CSM",
    "Dealer Name": "MCTC EXIM Pvt Ltd-Bilaspur",
    "SCode": "1S1263",
    "State": "Haryana",
    "City": "Gurgaon",
    "Contact No.": "7417830773,7303535819"
  },
  {
    "Organization": "North-1",
    "Manager Name": "Adarsh Prasad",
    "Manager Level": "RSM",
    "Dealer Name": "MCTC EXIM Pvt Ltd-Bilaspur",
    "SCode": "1S1263",
    "State": "Haryana",
    "City": "Gurgaon",
    "Contact No.": "9717996321"
  },
  {
    "Organization": "North-1",
    "Manager Name": "Shivam Maheshwari",
    "Manager Level": "WM",
    "Dealer Name": "MCTC EXIM Pvt Ltd-Bilaspur",
    "SCode": "1S1263",
    "State": "Haryana",
    "City": "Gurgaon",
    "Contact No.": "8899691333"
  },
  {
    "Organization": "North-1",
    "Manager Name": "MD Chand (D) / Sunil Prasad (N)",
    "Manager Level": "MD",
    "Dealer Name": "MCTC EXIM Pvt Ltd-Bilaspur",
    "SCode": "1S1263",
    "State": "Haryana",
    "City": "Gurgaon",
    "Contact No.": "7428497280,7765899370"
  },
  {
    "Organization": "North-1",
    "Manager Name": "Akshay Kumar (D) / Shubham Raj (N)",
    "Manager Level": "CSM",
    "Dealer Name": "MCTC EXIM Pvt Ltd-Faridabad",
    "SCode": "1S1271",
    "State": "Haryana",
    "City": "Faridabad",
    "Contact No.": "9625343453,7303535819"
  },
  {
    "Organization": "North-1",
    "Manager Name": "Adarsh Prasad (D) / Sunil Verma (N)",
    "Manager Level": "RSM",
    "Dealer Name": "MCTC EXIM Pvt Ltd-Faridabad",
    "SCode": "1S1271",
    "State": "Haryana",
    "City": "Faridabad",
    "Contact No.": "9717996321,7742688688"
  },
  {
    "Organization": "North-1",
    "Manager Name": "Sunil Verma (D) / Akshay Kumar (N)",
    "Manager Level": "ASM",
    "Dealer Name": "MCTC EXIM Pvt Ltd-Faridabad",
    "SCode": "1S1271",
    "State": "Haryana",
    "City": "Faridabad",
    "Contact No.": "7742688688,9625343453"
  },
  {
    "Organization": "North-1",
    "Manager Name": "Naresh",
    "Manager Level": "MD",
    "Dealer Name": "MCTC EXIM Pvt Ltd-Faridabad",
    "SCode": "1S1271",
    "State": "Haryana",
    "City": "Faridabad",
    "Contact No.": "9582887007"
  },
  {
    "Organization": "North-1",
    "Manager Name": "Nazim / Vimal",
    "Manager Level": "EOS Site Incharge",
    "Dealer Name": "MCTC EXIM Pvt Ltd-Faridabad",
    "SCode": "1S1271",
    "State": "Haryana",
    "City": "Faridabad",
    "Contact No.": "9266300255,9266300254"
  },
  {
    "Organization": "North-1",
    "Manager Name": "Ankit / Yousuf",
    "Manager Level": "WM",
    "Dealer Name": "MCTC EXIM Pvt Ltd-Faridabad",
    "SCode": "1S1271",
    "State": "Haryana",
    "City": "Faridabad",
    "Contact No.": "9560887262,7053222183"
  },
  {
    "Organization": "North-1",
    "Manager Name": "Sunil Verma",
    "Manager Level": "ASM",
    "Dealer Name": "MCTC Exim Pvt Ltd-Dwarka Bamnoli",
    "SCode": "1S1265",
    "State": "Delhi",
    "City": "Delhi",
    "Contact No.": "7742688688"
  },
  {
    "Organization": "North-1",
    "Manager Name": "Adarsh Prasad",
    "Manager Level": "RSM",
    "Dealer Name": "MCTC Exim Pvt Ltd-Dwarka Bamnoli",
    "SCode": "1S1265",
    "State": "Delhi",
    "City": "Delhi",
    "Contact No.": "9717996321"
  },
  {
    "Organization": "North-1",
    "Manager Name": "Avesh Kumar (D) / Shubham Raj (N)",
    "Manager Level": "CSM",
    "Dealer Name": "MCTC Exim Pvt Ltd-Dwarka Bamnoli",
    "SCode": "1S1265",
    "State": "Delhi",
    "City": "Delhi",
    "Contact No.": "9958010311,7303535819"
  },
  {
    "Organization": "North-1",
    "Manager Name": "Gulshan",
    "Manager Level": "MD",
    "Dealer Name": "MCTC Exim Pvt Ltd-Dwarka Bamnoli",
    "SCode": "1S1265",
    "State": "Delhi",
    "City": "Delhi",
    "Contact No.": "9899712371"
  },
  {
    "Organization": "North-1",
    "Manager Name": "Pravesh / Nutan",
    "Manager Level": "WM",
    "Dealer Name": "MCTC Exim Pvt Ltd-Dwarka Bamnoli",
    "SCode": "1S1265",
    "State": "Delhi",
    "City": "Delhi",
    "Contact No.": "7428497279,7428496345"
  },
  {
    "Organization": "North-1",
    "Manager Name": "Bhanu (D) / Anuj (N)",
    "Manager Level": "EOS Site Incharge",
    "Dealer Name": "MCTC Exim Pvt Ltd-Dwarka Bamnoli",
    "SCode": "1S1265",
    "State": "Delhi",
    "City": "Delhi",
    "Contact No.": "7428496339,7428698620"
  },
  {
    "Organization": "West-2",
    "Manager Name": "Paresh Prajapati / Shahnawaj",
    "Manager Level": "WM",
    "Dealer Name": "MG Automobiles-Godhara",
    "SCode": "1S3407",
    "State": "Gujarat",
    "City": "Godhra",
    "Contact No.": "9081608700,9081508700"
  },
  {
    "Organization": "West-2",
    "Manager Name": "Ajay Gamit",
    "Manager Level": "CSM",
    "Dealer Name": "MG Automobiles-Godhara",
    "SCode": "1S3407",
    "State": "Gujarat",
    "City": "Godhra",
    "Contact No.": "9265850546"
  },
  {
    "Organization": "West-2",
    "Manager Name": "Divyesh Shah",
    "Manager Level": "ASM",
    "Dealer Name": "MG Automobiles-Godhara",
    "SCode": "1S3407",
    "State": "Gujarat",
    "City": "Godhra",
    "Contact No.": "7600287682"
  },
  {
    "Organization": "West-2",
    "Manager Name": "Sudhir Kumar",
    "Manager Level": "RSM",
    "Dealer Name": "MG Automobiles-Godhara",
    "SCode": "1S3407",
    "State": "Gujarat",
    "City": "Godhra",
    "Contact No.": "9752542733"
  },
  {
    "Organization": "West-2",
    "Manager Name": "Mainuddin Kazi",
    "Manager Level": "EOS Site Incharge",
    "Dealer Name": "MG Automobiles-Godhara",
    "SCode": "1S3407",
    "State": "Gujarat",
    "City": "Godhra",
    "Contact No.": "9081208700"
  },
  {
    "Organization": "West-2",
    "Manager Name": "Aamir Mansur",
    "Manager Level": "MD",
    "Dealer Name": "MG Automobiles-Godhara",
    "SCode": "1S3407",
    "State": "Gujarat",
    "City": "Godhra",
    "Contact No.": "9484885786"
  },
  {
    "Organization": "South-2",
    "Manager Name": "Ikkurthy Srikanth",
    "Manager Level": "ASM",
    "Dealer Name": "MGB Motor and Auto Agencies Pvt Ltd-Dichpally",
    "SCode": "1S6167",
    "State": "Telangana",
    "City": "Nizamabad",
    "Contact No.": "9550801110"
  },
  {
    "Organization": "South-2",
    "Manager Name": "Rama Krishna / Govind Machani",
    "Manager Level": "MD",
    "Dealer Name": "MGB Motor and Auto Agencies Pvt Ltd-Dichpally",
    "SCode": "1S6167",
    "State": "Telangana",
    "City": "Nizamabad",
    "Contact No.": "9052416644,9848866885"
  },
  {
    "Organization": "South-2",
    "Manager Name": "Pranav Prabhakar Nikam (D) / Bhashipangu Upendar (N)",
    "Manager Level": "CSM",
    "Dealer Name": "MGB Motor and Auto Agencies Pvt Ltd-Dichpally",
    "SCode": "1S6167",
    "State": "Telangana",
    "City": "Nizamabad",
    "Contact No.": "9561899778,9154141679"
  },
  {
    "Organization": "South-2",
    "Manager Name": "Vinod Kumar",
    "Manager Level": "WM",
    "Dealer Name": "MGB Motor and Auto Agencies Pvt Ltd-Dichpally",
    "SCode": "1S6167",
    "State": "Telangana",
    "City": "Nizamabad",
    "Contact No.": "8978193459"
  },
  {
    "Organization": "South-2",
    "Manager Name": "N Narayanan",
    "Manager Level": "RSM",
    "Dealer Name": "MGB Motor and Auto Agencies Pvt Ltd-Dichpally",
    "SCode": "1S6167",
    "State": "Telangana",
    "City": "Nizamabad",
    "Contact No.": "8123036700"
  },
  {
    "Organization": "South-2",
    "Manager Name": "Ikkurthy Srikanth",
    "Manager Level": "ASM",
    "Dealer Name": "MGB Motor and Auto Agencies Pvt Ltd-Hyderabad",
    "SCode": "1S6193",
    "State": "Telangana",
    "City": "Hyderabad",
    "Contact No.": "9550801110"
  },
  {
    "Organization": "South-2",
    "Manager Name": "Durga Vara Prasad",
    "Manager Level": "WM",
    "Dealer Name": "MGB Motor and Auto Agencies Pvt Ltd-Hyderabad",
    "SCode": "1S6193",
    "State": "Telangana",
    "City": "Hyderabad",
    "Contact No.": "9154949212"
  },
  {
    "Organization": "South-2",
    "Manager Name": "N Narayanan",
    "Manager Level": "RSM",
    "Dealer Name": "MGB Motor and Auto Agencies Pvt Ltd-Hyderabad",
    "SCode": "1S6193",
    "State": "Telangana",
    "City": "Hyderabad",
    "Contact No.": "8123036700"
  },
  {
    "Organization": "South-2",
    "Manager Name": "Rama Krishna / Govind Machani",
    "Manager Level": "MD",
    "Dealer Name": "MGB Motor and Auto Agencies Pvt Ltd-Hyderabad",
    "SCode": "1S6193",
    "State": "Telangana",
    "City": "Hyderabad",
    "Contact No.": "9052416644,9848866885"
  },
  {
    "Organization": "South-2",
    "Manager Name": "Pranav Prabhakar Nikam (D) / Bhashipangu Upendar (N)",
    "Manager Level": "CSM",
    "Dealer Name": "MGB Motor and Auto Agencies Pvt Ltd-Hyderabad",
    "SCode": "1S6193",
    "State": "Telangana",
    "City": "Hyderabad",
    "Contact No.": "9561899778,9154141679"
  },
  {
    "Organization": "South-2",
    "Manager Name": "Samba Shiva Rao",
    "Manager Level": "EOS Site Incharge",
    "Dealer Name": "MGB Motor and Auto Agencies Pvt Ltd-Hyderabad",
    "SCode": "1S6193",
    "State": "Telangana",
    "City": "Hyderabad",
    "Contact No.": "7032220661"
  },
  {
    "Organization": "South-2",
    "Manager Name": "T Bhaskar",
    "Manager Level": "WM",
    "Dealer Name": "MGB Motor and Auto Agencies Pvt Ltd-Karimnagar",
    "SCode": "1S6168",
    "State": "Telangana",
    "City": "Karimnagar",
    "Contact No.": "9032333806"
  },
  {
    "Organization": "South-2",
    "Manager Name": "Naresh",
    "Manager Level": "EOS Site Incharge",
    "Dealer Name": "MGB Motor and Auto Agencies Pvt Ltd-Karimnagar",
    "SCode": "1S6168",
    "State": "Telangana",
    "City": "Karimnagar",
    "Contact No.": "9885095290"
  },
  {
    "Organization": "South-2",
    "Manager Name": "Rama Krishna / Govind Machani",
    "Manager Level": "MD",
    "Dealer Name": "MGB Motor and Auto Agencies Pvt Ltd-Karimnagar",
    "SCode": "1S6168",
    "State": "Telangana",
    "City": "Karimnagar",
    "Contact No.": "9052416644,9848866885"
  },
  {
    "Organization": "South-2",
    "Manager Name": "N Narayanan",
    "Manager Level": "RSM",
    "Dealer Name": "MGB Motor and Auto Agencies Pvt Ltd-Karimnagar",
    "SCode": "1S6168",
    "State": "Telangana",
    "City": "Karimnagar",
    "Contact No.": "8123036700"
  },
  {
    "Organization": "South-2",
    "Manager Name": "Ikkurthy Srikanth",
    "Manager Level": "ASM",
    "Dealer Name": "MGB Motor and Auto Agencies Pvt Ltd-Karimnagar",
    "SCode": "1S6168",
    "State": "Telangana",
    "City": "Karimnagar",
    "Contact No.": "9550801110"
  },
  {
    "Organization": "South-2",
    "Manager Name": "Pranav Prabhakar Nikam (D) / Bhashipangu Upendar (N)",
    "Manager Level": "CSM",
    "Dealer Name": "MGB Motor and Auto Agencies Pvt Ltd-Karimnagar",
    "SCode": "1S6168",
    "State": "Telangana",
    "City": "Karimnagar",
    "Contact No.": "9561899778,9154141679"
  },
  {
    "Organization": "South-2",
    "Manager Name": "Ikkurthy Srikanth",
    "Manager Level": "ASM",
    "Dealer Name": "MGB Motor and Auto Agencies Pvt Ltd-Patancheru",
    "SCode": "1S6166",
    "State": "Telangana",
    "City": "Patancheru",
    "Contact No.": "9550801110"
  },
  {
    "Organization": "South-2",
    "Manager Name": "Rambabu / Rama Krishna",
    "Manager Level": "WM",
    "Dealer Name": "MGB Motor and Auto Agencies Pvt Ltd-Patancheru",
    "SCode": "1S6166",
    "State": "Telangana",
    "City": "Patancheru",
    "Contact No.": "8885700556,9052416644"
  },
  {
    "Organization": "South-2",
    "Manager Name": "Vinay",
    "Manager Level": "EOS Site Incharge",
    "Dealer Name": "MGB Motor and Auto Agencies Pvt Ltd-Patancheru",
    "SCode": "1S6166",
    "State": "Telangana",
    "City": "Patancheru",
    "Contact No.": "7331111845"
  },
  {
    "Organization": "South-2",
    "Manager Name": "Rama Krishna / Govind Machani",
    "Manager Level": "MD",
    "Dealer Name": "MGB Motor and Auto Agencies Pvt Ltd-Patancheru",
    "SCode": "1S6166",
    "State": "Telangana",
    "City": "Patancheru",
    "Contact No.": "9052416644,9848866885"
  },
  {
    "Organization": "South-2",
    "Manager Name": "N Narayanan",
    "Manager Level": "RSM",
    "Dealer Name": "MGB Motor and Auto Agencies Pvt Ltd-Patancheru",
    "SCode": "1S6166",
    "State": "Telangana",
    "City": "Patancheru",
    "Contact No.": "8123036700"
  },
  {
    "Organization": "South-2",
    "Manager Name": "K Balaji Ravi Shankar (D) / Bhashipangu Upendar (N)",
    "Manager Level": "CSM",
    "Dealer Name": "MGB Motor and Auto Agencies Pvt Ltd-Patancheru",
    "SCode": "1S6166",
    "State": "Telangana",
    "City": "Patancheru",
    "Contact No.": "9959355562,9154141679"
  },
  {
    "Organization": "South-2",
    "Manager Name": "Ikkurthy Srikanth",
    "Manager Level": "ASM",
    "Dealer Name": "MGB Motor and Auto Agencies-Kurnool",
    "SCode": "1S6169",
    "State": "Andhra Pradesh",
    "City": "Kurnool",
    "Contact No.": "9550801110"
  },
  {
    "Organization": "South-2",
    "Manager Name": "K Balaji Ravi Shankar (D) / Bhashipangu Upendar (N)",
    "Manager Level": "CSM",
    "Dealer Name": "MGB Motor and Auto Agencies-Kurnool",
    "SCode": "1S6169",
    "State": "Andhra Pradesh",
    "City": "Kurnool",
    "Contact No.": "9959355562,9154141679"
  },
  {
    "Organization": "South-2",
    "Manager Name": "N Narayanan",
    "Manager Level": "RSM",
    "Dealer Name": "MGB Motor and Auto Agencies-Kurnool",
    "SCode": "1S6169",
    "State": "Andhra Pradesh",
    "City": "Kurnool",
    "Contact No.": "8123036700"
  },
  {
    "Organization": "South-2",
    "Manager Name": "Nageswar Reddy",
    "Manager Level": "WM",
    "Dealer Name": "MGB Motor and Auto Agencies-Kurnool",
    "SCode": "1S6169",
    "State": "Andhra Pradesh",
    "City": "Kurnool",
    "Contact No.": "9100167808"
  },
  {
    "Organization": "South-2",
    "Manager Name": "Rama Krishna / Govind Machani",
    "Manager Level": "MD",
    "Dealer Name": "MGB Motor and Auto Agencies-Kurnool",
    "SCode": "1S6169",
    "State": "Andhra Pradesh",
    "City": "Kurnool",
    "Contact No.": "9052416644,9848866885"
  },
  {
    "Organization": "South-2",
    "Manager Name": "Rajesh Tommandru",
    "Manager Level": "CSM",
    "Dealer Name": "MGB Motors and Auto Agencies Pvt Ltd (ProX)-Hyderabad",
    "SCode": "1S6246",
    "State": "Telangana",
    "City": "Hyderabad",
    "Contact No.": "8247783956"
  },
  {
    "Organization": "South-2",
    "Manager Name": "Adinarayana Murthy",
    "Manager Level": "WM",
    "Dealer Name": "MGB Motors and Auto Agencies Pvt Ltd (ProX)-Hyderabad",
    "SCode": "1S6246",
    "State": "Telangana",
    "City": "Hyderabad",
    "Contact No.": "7416259955"
  },
  {
    "Organization": "South-2",
    "Manager Name": "Sujan Saha",
    "Manager Level": "RSM",
    "Dealer Name": "MGB Motors and Auto Agencies Pvt Ltd (ProX)-Hyderabad",
    "SCode": "1S6246",
    "State": "Telangana",
    "City": "Hyderabad",
    "Contact No.": "9903978950"
  },
  {
    "Organization": "South-2",
    "Manager Name": "K.Ram Mohan Reddy",
    "Manager Level": "MD",
    "Dealer Name": "MGB Motors and Auto Agencies Pvt Ltd (ProX)-Hyderabad",
    "SCode": "1S6246",
    "State": "Telangana",
    "City": "Hyderabad",
    "Contact No.": "8527655855"
  },
  {
    "Organization": "East-2",
    "Manager Name": "Bikash Kumar Nayak",
    "Manager Level": "CSM",
    "Dealer Name": "Mahaveer Auto-Barbil",
    "SCode": "1S2184",
    "State": "Odisha",
    "City": "Barbil",
    "Contact No.": "8888871462"
  },
  {
    "Organization": "East-2",
    "Manager Name": "Sanjoy Nayek",
    "Manager Level": "ASM",
    "Dealer Name": "Mahaveer Auto-Barbil",
    "SCode": "1S2184",
    "State": "Odisha",
    "City": "Barbil",
    "Contact No.": "8001165218"
  },
  {
    "Organization": "East-2",
    "Manager Name": "Sunil Pattnaik",
    "Manager Level": "MD",
    "Dealer Name": "Mahaveer Auto-Barbil",
    "SCode": "1S2184",
    "State": "Odisha",
    "City": "Barbil",
    "Contact No.": "7752026300"
  },
  {
    "Organization": "East-2",
    "Manager Name": "Nirakara Mohanta",
    "Manager Level": "EOS Site Incharge",
    "Dealer Name": "Mahaveer Auto-Barbil",
    "SCode": "1S2184",
    "State": "Odisha",
    "City": "Barbil",
    "Contact No.": "7682827649"
  },
  {
    "Organization": "East-2",
    "Manager Name": "Dilip Biswal",
    "Manager Level": "WM",
    "Dealer Name": "Mahaveer Auto-Barbil",
    "SCode": "1S2184",
    "State": "Odisha",
    "City": "Barbil",
    "Contact No.": "7752026303"
  },
  {
    "Organization": "East-2",
    "Manager Name": "Niket Kumar",
    "Manager Level": "RSM",
    "Dealer Name": "Mahaveer Auto-Barbil",
    "SCode": "1S2184",
    "State": "Odisha",
    "City": "Barbil",
    "Contact No.": "8427733112"
  },
  {
    "Organization": "East-2",
    "Manager Name": "Sunil Prasad",
    "Manager Level": "WM",
    "Dealer Name": "Mahaveer Automobiles-Angul",
    "SCode": "1S2096",
    "State": "Odisha",
    "City": "Anugul",
    "Contact No.": "7752026312"
  },
  {
    "Organization": "East-2",
    "Manager Name": "MD Noor",
    "Manager Level": "EOS Site Incharge",
    "Dealer Name": "Mahaveer Automobiles-Angul",
    "SCode": "1S2096",
    "State": "Odisha",
    "City": "Anugul",
    "Contact No.": "7682827660"
  },
  {
    "Organization": "East-2",
    "Manager Name": "Sanjoy Nayek",
    "Manager Level": "ASM",
    "Dealer Name": "Mahaveer Automobiles-Angul",
    "SCode": "1S2096",
    "State": "Odisha",
    "City": "Anugul",
    "Contact No.": "8001165218"
  },
  {
    "Organization": "East-2",
    "Manager Name": "Niket Kumar",
    "Manager Level": "RSM",
    "Dealer Name": "Mahaveer Automobiles-Angul",
    "SCode": "1S2096",
    "State": "Odisha",
    "City": "Anugul",
    "Contact No.": "8427733112"
  },
  {
    "Organization": "East-2",
    "Manager Name": "Bikash Kumar Nayak",
    "Manager Level": "CSM",
    "Dealer Name": "Mahaveer Automobiles-Angul",
    "SCode": "1S2096",
    "State": "Odisha",
    "City": "Anugul",
    "Contact No.": "8888871462"
  },
  {
    "Organization": "East-2",
    "Manager Name": "Sunil Pattnaik",
    "Manager Level": "MD",
    "Dealer Name": "Mahaveer Automobiles-Angul",
    "SCode": "1S2096",
    "State": "Odisha",
    "City": "Anugul",
    "Contact No.": "7752026300"
  },
  {
    "Organization": "East-2",
    "Manager Name": "Niket Kumar",
    "Manager Level": "RSM",
    "Dealer Name": "Mahaveer Automobiles-Dhenkanal",
    "SCode": "1S2185",
    "State": "Odisha",
    "City": "Dhenkanal",
    "Contact No.": "8427733112"
  },
  {
    "Organization": "East-2",
    "Manager Name": "Chinmaya Pattanaik",
    "Manager Level": "EOS Site Incharge",
    "Dealer Name": "Mahaveer Automobiles-Dhenkanal",
    "SCode": "1S2185",
    "State": "Odisha",
    "City": "Dhenkanal",
    "Contact No.": "7852919120"
  },
  {
    "Organization": "East-2",
    "Manager Name": "Bikash Kumar Nayak",
    "Manager Level": "CSM",
    "Dealer Name": "Mahaveer Automobiles-Dhenkanal",
    "SCode": "1S2185",
    "State": "Odisha",
    "City": "Dhenkanal",
    "Contact No.": "8888871462"
  },
  {
    "Organization": "East-2",
    "Manager Name": "Chinmay Pattanaik",
    "Manager Level": "WM",
    "Dealer Name": "Mahaveer Automobiles-Dhenkanal",
    "SCode": "1S2185",
    "State": "Odisha",
    "City": "Dhenkanal",
    "Contact No.": "7205164149"
  },
  {
    "Organization": "East-2",
    "Manager Name": "Sunil Pattnaik",
    "Manager Level": "MD",
    "Dealer Name": "Mahaveer Automobiles-Dhenkanal",
    "SCode": "1S2185",
    "State": "Odisha",
    "City": "Dhenkanal",
    "Contact No.": "7752026300"
  },
  {
    "Organization": "East-2",
    "Manager Name": "Sanjoy Nayek",
    "Manager Level": "ASM",
    "Dealer Name": "Mahaveer Automobiles-Dhenkanal",
    "SCode": "1S2185",
    "State": "Odisha",
    "City": "Dhenkanal",
    "Contact No.": "8001165218"
  },
  {
    "Organization": "East-2",
    "Manager Name": "Sunil Pattnaik",
    "Manager Level": "MD",
    "Dealer Name": "Mahaveer Automobiles-Keonjhar",
    "SCode": "1S2116",
    "State": "Odisha",
    "City": "Kendujhar",
    "Contact No.": "7752026300"
  },
  {
    "Organization": "East-2",
    "Manager Name": "Sanjoy Nayek",
    "Manager Level": "ASM",
    "Dealer Name": "Mahaveer Automobiles-Keonjhar",
    "SCode": "1S2116",
    "State": "Odisha",
    "City": "Kendujhar",
    "Contact No.": "8001165218"
  },
  {
    "Organization": "East-2",
    "Manager Name": "Saroj Behera",
    "Manager Level": "EOS Site Incharge",
    "Dealer Name": "Mahaveer Automobiles-Keonjhar",
    "SCode": "1S2116",
    "State": "Odisha",
    "City": "Kendujhar",
    "Contact No.": "7682827659"
  },
  {
    "Organization": "East-2",
    "Manager Name": "Bikash Kumar Nayak",
    "Manager Level": "CSM",
    "Dealer Name": "Mahaveer Automobiles-Keonjhar",
    "SCode": "1S2116",
    "State": "Odisha",
    "City": "Kendujhar",
    "Contact No.": "8888871462"
  },
  {
    "Organization": "East-2",
    "Manager Name": "Saroj Behera",
    "Manager Level": "WM",
    "Dealer Name": "Mahaveer Automobiles-Keonjhar",
    "SCode": "1S2116",
    "State": "Odisha",
    "City": "Kendujhar",
    "Contact No.": "7978336678"
  },
  {
    "Organization": "East-2",
    "Manager Name": "Niket Kumar",
    "Manager Level": "RSM",
    "Dealer Name": "Mahaveer Automobiles-Keonjhar",
    "SCode": "1S2116",
    "State": "Odisha",
    "City": "Kendujhar",
    "Contact No.": "8427733112"
  },
  {
    "Organization": "East-2",
    "Manager Name": "Rajan Kumar",
    "Manager Level": "EOS Site Incharge",
    "Dealer Name": "Mahaveer Automobiles-Talcher",
    "SCode": "1S2156",
    "State": "Odisha",
    "City": "Talcher",
    "Contact No.": "7682827655"
  },
  {
    "Organization": "East-2",
    "Manager Name": "Satrudhan Kumar",
    "Manager Level": "WM",
    "Dealer Name": "Mahaveer Automobiles-Talcher",
    "SCode": "1S2156",
    "State": "Odisha",
    "City": "Talcher",
    "Contact No.": "7682827656"
  },
  {
    "Organization": "East-2",
    "Manager Name": "Niket Kumar",
    "Manager Level": "RSM",
    "Dealer Name": "Mahaveer Automobiles-Talcher",
    "SCode": "1S2156",
    "State": "Odisha",
    "City": "Talcher",
    "Contact No.": "8427733112"
  },
  {
    "Organization": "East-2",
    "Manager Name": "Sunil Pattnaik",
    "Manager Level": "MD",
    "Dealer Name": "Mahaveer Automobiles-Talcher",
    "SCode": "1S2156",
    "State": "Odisha",
    "City": "Talcher",
    "Contact No.": "7752026300"
  },
  {
    "Organization": "East-2",
    "Manager Name": "Sanjoy Nayek",
    "Manager Level": "ASM",
    "Dealer Name": "Mahaveer Automobiles-Talcher",
    "SCode": "1S2156",
    "State": "Odisha",
    "City": "Talcher",
    "Contact No.": "8001165218"
  },
  {
    "Organization": "East-2",
    "Manager Name": "Bikash Kumar Nayak",
    "Manager Level": "CSM",
    "Dealer Name": "Mahaveer Automobiles-Talcher",
    "SCode": "1S2156",
    "State": "Odisha",
    "City": "Talcher",
    "Contact No.": "8888871462"
  },
  {
    "Organization": "North-1",
    "Manager Name": "Adarsh Prasad",
    "Manager Level": "RSM",
    "Dealer Name": "Malwa Motors-Abohar",
    "SCode": "1S1188",
    "State": "Punjab",
    "City": "Abohar",
    "Contact No.": "9717996321"
  },
  {
    "Organization": "North-1",
    "Manager Name": "Harmail Singh",
    "Manager Level": "MD",
    "Dealer Name": "Malwa Motors-Abohar",
    "SCode": "1S1188",
    "State": "Punjab",
    "City": "Abohar",
    "Contact No.": "9317122043"
  },
  {
    "Organization": "North-1",
    "Manager Name": "Vaibhav Katyal",
    "Manager Level": "ASM",
    "Dealer Name": "Malwa Motors-Abohar",
    "SCode": "1S1188",
    "State": "Punjab",
    "City": "Abohar",
    "Contact No.": "9219500351"
  },
  {
    "Organization": "North-1",
    "Manager Name": "Kapil Dev",
    "Manager Level": "WM",
    "Dealer Name": "Malwa Motors-Abohar",
    "SCode": "1S1188",
    "State": "Punjab",
    "City": "Abohar",
    "Contact No.": "9317128043"
  },
  {
    "Organization": "North-1",
    "Manager Name": "Deepak Jain",
    "Manager Level": "CSM",
    "Dealer Name": "Malwa Motors-Abohar",
    "SCode": "1S1188",
    "State": "Punjab",
    "City": "Abohar",
    "Contact No.": "9501640021"
  },
  {
    "Organization": "North-1",
    "Manager Name": "Deepak Jain",
    "Manager Level": "CSM",
    "Dealer Name": "Malwa Motors-Bhatinda",
    "SCode": "1S1135",
    "State": "Punjab",
    "City": "Bathinda",
    "Contact No.": "9501640021"
  },
  {
    "Organization": "North-1",
    "Manager Name": "Mr.Gurpeet Singh",
    "Manager Level": "WM",
    "Dealer Name": "Malwa Motors-Bhatinda",
    "SCode": "1S1135",
    "State": "Punjab",
    "City": "Bathinda",
    "Contact No.": "9317119043"
  },
  {
    "Organization": "North-1",
    "Manager Name": "Vaibhav Katyal",
    "Manager Level": "ASM",
    "Dealer Name": "Malwa Motors-Bhatinda",
    "SCode": "1S1135",
    "State": "Punjab",
    "City": "Bathinda",
    "Contact No.": "9219500351"
  },
  {
    "Organization": "North-1",
    "Manager Name": "Adarsh Prasad",
    "Manager Level": "RSM",
    "Dealer Name": "Malwa Motors-Bhatinda",
    "SCode": "1S1135",
    "State": "Punjab",
    "City": "Bathinda",
    "Contact No.": "9717996321"
  },
  {
    "Organization": "North-1",
    "Manager Name": "Jaspal Singh",
    "Manager Level": "MD",
    "Dealer Name": "Malwa Motors-Bhatinda",
    "SCode": "1S1135",
    "State": "Punjab",
    "City": "Bathinda",
    "Contact No.": "9316000043"
  },
  {
    "Organization": "North-2",
    "Manager Name": "Shakti singh / Rakesh Saini",
    "Manager Level": "WM",
    "Dealer Name": "Manish Motors-Dausa",
    "SCode": "1S7033",
    "State": "Rajasthan",
    "City": "Dausa",
    "Contact No.": "9610469783,9782862399"
  },
  {
    "Organization": "North-2",
    "Manager Name": "Rajesh Gurjar",
    "Manager Level": "MD",
    "Dealer Name": "Manish Motors-Dausa",
    "SCode": "1S7033",
    "State": "Rajasthan",
    "City": "Dausa",
    "Contact No.": "9799875977"
  },
  {
    "Organization": "North-2",
    "Manager Name": "Amit Pandey",
    "Manager Level": "ASM",
    "Dealer Name": "Manish Motors-Dausa",
    "SCode": "1S7033",
    "State": "Rajasthan",
    "City": "Dausa",
    "Contact No.": "9099979633"
  },
  {
    "Organization": "North-2",
    "Manager Name": "Krishnendu Saha",
    "Manager Level": "RSM",
    "Dealer Name": "Manish Motors-Dausa",
    "SCode": "1S7033",
    "State": "Rajasthan",
    "City": "Dausa",
    "Contact No.": "7980433425"
  },
  {
    "Organization": "North-2",
    "Manager Name": "Rinku Kumar (D) / Shivam Bhardwaj (N)",
    "Manager Level": "CSM",
    "Dealer Name": "Manish Motors-Dausa",
    "SCode": "1S7033",
    "State": "Rajasthan",
    "City": "Dausa",
    "Contact No.": "9015965095,7878175706"
  },
  {
    "Organization": "West-2",
    "Manager Name": "Narendra Patil / Girdhari Singh",
    "Manager Level": "WM",
    "Dealer Name": "Manya Automobile Pvt Ltd-Ankleshwar",
    "SCode": "1S3381",
    "State": "Gujarat",
    "City": "Ankleshwar",
    "Contact No.": "6358945343,6358945456"
  },
  {
    "Organization": "West-2",
    "Manager Name": "Munif Kadiwal / Shivam Tiwari",
    "Manager Level": "EOS Site Incharge",
    "Dealer Name": "Manya Automobile Pvt Ltd-Ankleshwar",
    "SCode": "1S3381",
    "State": "Gujarat",
    "City": "Ankleshwar",
    "Contact No.": "6358945459,8780951304"
  },
  {
    "Organization": "West-2",
    "Manager Name": "Divyesh Shah",
    "Manager Level": "ASM",
    "Dealer Name": "Manya Automobile Pvt Ltd-Ankleshwar",
    "SCode": "1S3381",
    "State": "Gujarat",
    "City": "Ankleshwar",
    "Contact No.": "7600287682"
  },
  {
    "Organization": "West-2",
    "Manager Name": "Parth Shah",
    "Manager Level": "MD",
    "Dealer Name": "Manya Automobile Pvt Ltd-Ankleshwar",
    "SCode": "1S3381",
    "State": "Gujarat",
    "City": "Ankleshwar",
    "Contact No.": "9427809709"
  },
  {
    "Organization": "West-2",
    "Manager Name": "Dharmadeepsinh / Shabbir Patel",
    "Manager Level": "CSM",
    "Dealer Name": "Manya Automobile Pvt Ltd-Ankleshwar",
    "SCode": "1S3381",
    "State": "Gujarat",
    "City": "Ankleshwar",
    "Contact No.": "7096094988,9537728717"
  },
  {
    "Organization": "West-2",
    "Manager Name": "Sudhir Kumar",
    "Manager Level": "RSM",
    "Dealer Name": "Manya Automobile Pvt Ltd-Ankleshwar",
    "SCode": "1S3381",
    "State": "Gujarat",
    "City": "Ankleshwar",
    "Contact No.": "9752542733"
  },
  {
    "Organization": "West-2",
    "Manager Name": "Divyesh Shah",
    "Manager Level": "ASM",
    "Dealer Name": "Manya Automobile Pvt Ltd-Bharuch",
    "SCode": "1S3375",
    "State": "Gujarat",
    "City": "Bharuch",
    "Contact No.": "7600287682"
  },
  {
    "Organization": "West-2",
    "Manager Name": "Sudhir Kumar",
    "Manager Level": "RSM",
    "Dealer Name": "Manya Automobile Pvt Ltd-Bharuch",
    "SCode": "1S3375",
    "State": "Gujarat",
    "City": "Bharuch",
    "Contact No.": "9752542733"
  },
  {
    "Organization": "West-2",
    "Manager Name": "Dharmadeepsinh / Shabbir Patel",
    "Manager Level": "CSM",
    "Dealer Name": "Manya Automobile Pvt Ltd-Bharuch",
    "SCode": "1S3375",
    "State": "Gujarat",
    "City": "Bharuch",
    "Contact No.": "7096094988,9537728717"
  },
  {
    "Organization": "West-2",
    "Manager Name": "Deepak / Faizan",
    "Manager Level": "EOS Site Incharge",
    "Dealer Name": "Manya Automobile Pvt Ltd-Bharuch",
    "SCode": "1S3375",
    "State": "Gujarat",
    "City": "Bharuch",
    "Contact No.": "6358335171,7622977336"
  },
  {
    "Organization": "West-2",
    "Manager Name": "Bhupesh Shah / Faiyaz Pathan",
    "Manager Level": "WM",
    "Dealer Name": "Manya Automobile Pvt Ltd-Bharuch",
    "SCode": "1S3375",
    "State": "Gujarat",
    "City": "Bharuch",
    "Contact No.": "9909719258,9825827778"
  },
  {
    "Organization": "West-2",
    "Manager Name": "Parth Shah",
    "Manager Level": "MD",
    "Dealer Name": "Manya Automobile Pvt Ltd-Bharuch",
    "SCode": "1S3375",
    "State": "Gujarat",
    "City": "Bharuch",
    "Contact No.": "9427809709"
  },
  {
    "Organization": "West-2",
    "Manager Name": "Ejaj Khan",
    "Manager Level": "CSM",
    "Dealer Name": "Marksmen Trucking-Gwalior",
    "SCode": "1S5086",
    "State": "Madhya Pradesh",
    "City": "Gwalior",
    "Contact No.": "9340262172"
  },
  {
    "Organization": "West-2",
    "Manager Name": "Vivek Kumar",
    "Manager Level": "ASM",
    "Dealer Name": "Marksmen Trucking-Gwalior",
    "SCode": "1S5086",
    "State": "Madhya Pradesh",
    "City": "Gwalior",
    "Contact No.": "8171110903"
  },
  {
    "Organization": "West-2",
    "Manager Name": "Sudhir Kumar",
    "Manager Level": "RSM",
    "Dealer Name": "Marksmen Trucking-Gwalior",
    "SCode": "1S5086",
    "State": "Madhya Pradesh",
    "City": "Gwalior",
    "Contact No.": "9752542733"
  },
  {
    "Organization": "West-2",
    "Manager Name": "Karan Grover",
    "Manager Level": "MD",
    "Dealer Name": "Marksmen Trucking-Gwalior",
    "SCode": "1S5086",
    "State": "Madhya Pradesh",
    "City": "Gwalior",
    "Contact No.": "9893911155"
  },
  {
    "Organization": "West-2",
    "Manager Name": "Kuvar Singh / Satendra Singh",
    "Manager Level": "EOS Site Incharge",
    "Dealer Name": "Marksmen Trucking-Gwalior",
    "SCode": "1S5086",
    "State": "Madhya Pradesh",
    "City": "Gwalior",
    "Contact No.": "9425119761,9399022106"
  },
  {
    "Organization": "West-2",
    "Manager Name": "Aamir",
    "Manager Level": "WM",
    "Dealer Name": "Marksmen Trucking-Gwalior",
    "SCode": "1S5086",
    "State": "Madhya Pradesh",
    "City": "Gwalior",
    "Contact No.": "9109996366"
  },
  {
    "Organization": "West-1",
    "Manager Name": "Sahil Bisht",
    "Manager Level": "ASM",
    "Dealer Name": "Mars Motocare Pvt Ltd-Khopoli",
    "SCode": "1S3374",
    "State": "Maharashtra",
    "City": "Talegaon dabhade",
    "Contact No.": "7304491771"
  },
  {
    "Organization": "West-1",
    "Manager Name": "Suhas Ramchandra Mane",
    "Manager Level": "RSM",
    "Dealer Name": "Mars Motocare Pvt Ltd-Khopoli",
    "SCode": "1S3374",
    "State": "Maharashtra",
    "City": "Talegaon dabhade",
    "Contact No.": "8454812225"
  },
  {
    "Organization": "West-1",
    "Manager Name": "Vijaykumar Pandey",
    "Manager Level": "MD",
    "Dealer Name": "Mars Motocare Pvt Ltd-Khopoli",
    "SCode": "1S3374",
    "State": "Maharashtra",
    "City": "Talegaon dabhade",
    "Contact No.": "7304057563"
  },
  {
    "Organization": "West-1",
    "Manager Name": "Minar",
    "Manager Level": "WM",
    "Dealer Name": "Mars Motocare Pvt Ltd-Khopoli",
    "SCode": "1S3374",
    "State": "Maharashtra",
    "City": "Talegaon dabhade",
    "Contact No.": "8308064795"
  },
  {
    "Organization": "West-1",
    "Manager Name": "Shravani Rane / Prabhat Dubey",
    "Manager Level": "CSM",
    "Dealer Name": "Mars Motocare Pvt Ltd-Khopoli",
    "SCode": "1S3374",
    "State": "Maharashtra",
    "City": "Talegaon dabhade",
    "Contact No.": "9930251032,9559174863"
  },
  {
    "Organization": "West-1",
    "Manager Name": "Rahul Mirje",
    "Manager Level": "MD",
    "Dealer Name": "Mirje Ventures Pvt Ltd (ProX)-Kolhapur",
    "SCode": "1S3463",
    "State": "Maharashtra",
    "City": "Kolhapur",
    "Contact No.": "9422582009"
  },
  {
    "Organization": "West-1",
    "Manager Name": "Rushikesh Shardul",
    "Manager Level": "CSM",
    "Dealer Name": "Mirje Ventures Pvt Ltd (ProX)-Kolhapur",
    "SCode": "1S3463",
    "State": "Maharashtra",
    "City": "Kolhapur",
    "Contact No.": "7391854576"
  },
  {
    "Organization": "West-1",
    "Manager Name": "Sujan Saha",
    "Manager Level": "RSM",
    "Dealer Name": "Mirje Ventures Pvt Ltd (ProX)-Kolhapur",
    "SCode": "1S3463",
    "State": "Maharashtra",
    "City": "Kolhapur",
    "Contact No.": "9903978950"
  },
  {
    "Organization": "West-1",
    "Manager Name": "Omkar Lakhan",
    "Manager Level": "EOS Site Incharge",
    "Dealer Name": "Mirje Ventures Pvt Ltd (ProX)-Kolhapur",
    "SCode": "1S3463",
    "State": "Maharashtra",
    "City": "Kolhapur",
    "Contact No.": "9921524385"
  },
  {
    "Organization": "West-1",
    "Manager Name": "Amit Kumbhar",
    "Manager Level": "WM",
    "Dealer Name": "Mirje Ventures Pvt Ltd (ProX)-Kolhapur",
    "SCode": "1S3463",
    "State": "Maharashtra",
    "City": "Kolhapur",
    "Contact No.": "9923201771"
  },
  {
    "Organization": "East-1",
    "Manager Name": "Dibyendu Bhattacharya / Lokesh Mittal",
    "Manager Level": "MD",
    "Dealer Name": "Mittal Eicher",
    "SCode": "1S2275",
    "State": "Assam",
    "City": "Guwahati",
    "Contact No.": "9287982040,9365947300"
  },
  {
    "Organization": "East-1",
    "Manager Name": "Anjanav Chagmai / Vishal Kumar",
    "Manager Level": "CSM",
    "Dealer Name": "Mittal Eicher",
    "SCode": "1S2275",
    "State": "Assam",
    "City": "Guwahati",
    "Contact No.": "8822053356,7630027054"
  },
  {
    "Organization": "East-1",
    "Manager Name": "Yogeshwar Singh",
    "Manager Level": "RSM",
    "Dealer Name": "Mittal Eicher",
    "SCode": "1S2275",
    "State": "Assam",
    "City": "Guwahati",
    "Contact No.": "9717966997"
  },
  {
    "Organization": "East-1",
    "Manager Name": "Hirek Bhagwati",
    "Manager Level": "WM",
    "Dealer Name": "Mittal Eicher",
    "SCode": "1S2275",
    "State": "Assam",
    "City": "Guwahati",
    "Contact No.": "9287982022"
  },
  {
    "Organization": "East-1",
    "Manager Name": "Pankaj Das",
    "Manager Level": "EOS Site Incharge",
    "Dealer Name": "Mittal Eicher",
    "SCode": "1S2275",
    "State": "Assam",
    "City": "Guwahati",
    "Contact No.": "8876042818"
  },
  {
    "Organization": "East-1",
    "Manager Name": "Rakesh Ghosh",
    "Manager Level": "ASM",
    "Dealer Name": "Mittal Eicher",
    "SCode": "1S2275",
    "State": "Assam",
    "City": "Guwahati",
    "Contact No.": "9477374098"
  },
  {
    "Organization": "North-1",
    "Manager Name": "Vishal Mishra",
    "Manager Level": "WM",
    "Dealer Name": "Modern Auto-Ambala",
    "SCode": "1S1091",
    "State": "Haryana",
    "City": "Ambala",
    "Contact No.": "8059052888"
  },
  {
    "Organization": "North-1",
    "Manager Name": "Adarsh Prasad",
    "Manager Level": "RSM",
    "Dealer Name": "Modern Auto-Ambala",
    "SCode": "1S1091",
    "State": "Haryana",
    "City": "Ambala",
    "Contact No.": "9717996321"
  },
  {
    "Organization": "North-1",
    "Manager Name": "Dheeraj Tehlan / Amitesh Kumar Sharma",
    "Manager Level": "CSM",
    "Dealer Name": "Modern Auto-Ambala",
    "SCode": "1S1091",
    "State": "Haryana",
    "City": "Ambala",
    "Contact No.": "9671788557,9691357849"
  },
  {
    "Organization": "North-1",
    "Manager Name": "G L Sachdeva / Madhusudan Vij",
    "Manager Level": "MD",
    "Dealer Name": "Modern Auto-Ambala",
    "SCode": "1S1091",
    "State": "Haryana",
    "City": "Ambala",
    "Contact No.": "9896626526"
  },
  {
    "Organization": "North-1",
    "Manager Name": "Manpreet Singh",
    "Manager Level": "EOS Site Incharge",
    "Dealer Name": "Modern Auto-Ambala",
    "SCode": "1S1091",
    "State": "Haryana",
    "City": "Ambala",
    "Contact No.": "9315016055,9315016056"
  },
  {
    "Organization": "North-1",
    "Manager Name": "Sunny Verma",
    "Manager Level": "ASM",
    "Dealer Name": "Modern Auto-Ambala",
    "SCode": "1S1091",
    "State": "Haryana",
    "City": "Ambala",
    "Contact No.": "7276047837"
  },
  {
    "Organization": "North-1",
    "Manager Name": "Dheeraj Tehlan",
    "Manager Level": "CSM",
    "Dealer Name": "Mohan Four Wheel-Hissar",
    "SCode": "1S1167",
    "State": "Haryana",
    "City": "Hisar",
    "Contact No.": "8708685878"
  },
  {
    "Organization": "North-1",
    "Manager Name": "Himanshu Garg",
    "Manager Level": "MD",
    "Dealer Name": "Mohan Four Wheel-Hissar",
    "SCode": "1S1167",
    "State": "Haryana",
    "City": "Hisar",
    "Contact No.": "9812300060"
  },
  {
    "Organization": "North-1",
    "Manager Name": "Adarsh Prasad",
    "Manager Level": "RSM",
    "Dealer Name": "Mohan Four Wheel-Hissar",
    "SCode": "1S1167",
    "State": "Haryana",
    "City": "Hisar",
    "Contact No.": "9717996321"
  },
  {
    "Organization": "North-1",
    "Manager Name": "Sunny Verma",
    "Manager Level": "ASM",
    "Dealer Name": "Mohan Four Wheel-Hissar",
    "SCode": "1S1167",
    "State": "Haryana",
    "City": "Hisar",
    "Contact No.": "7276047837"
  },
  {
    "Organization": "North-1",
    "Manager Name": "Pradeep",
    "Manager Level": "WM",
    "Dealer Name": "Mohan Four Wheel-Hissar",
    "SCode": "1S1167",
    "State": "Haryana",
    "City": "Hisar",
    "Contact No.": "8222800178"
  },
  {
    "Organization": "North-1",
    "Manager Name": "Sunil Kumar",
    "Manager Level": "EOS Site Incharge",
    "Dealer Name": "Mohan Four Wheel-Hissar",
    "SCode": "1S1167",
    "State": "Haryana",
    "City": "Hisar",
    "Contact No.": "7015993504"
  },
  {
    "Organization": "North-1",
    "Manager Name": "Dheeraj Sharma",
    "Manager Level": "MD",
    "Dealer Name": "Mohan Tractors Private Limited (ProX)-Delhi",
    "SCode": "1S1277",
    "State": "Delhi",
    "City": "Delhi",
    "Contact No.": "8287945600"
  },
  {
    "Organization": "North-1",
    "Manager Name": "Satguru Saran",
    "Manager Level": "CSM",
    "Dealer Name": "Mohan Tractors Private Limited (ProX)-Delhi",
    "SCode": "1S1277",
    "State": "Delhi",
    "City": "Delhi",
    "Contact No.": "8795520001"
  },
  {
    "Organization": "North-1",
    "Manager Name": "Sujan Saha",
    "Manager Level": "RSM",
    "Dealer Name": "Mohan Tractors Private Limited (ProX)-Delhi",
    "SCode": "1S1277",
    "State": "Delhi",
    "City": "Delhi",
    "Contact No.": "9903978950"
  },
  {
    "Organization": "North-1",
    "Manager Name": "Rajan Kumar",
    "Manager Level": "WM",
    "Dealer Name": "Mohan Tractors Private Limited (ProX)-Delhi",
    "SCode": "1S1277",
    "State": "Delhi",
    "City": "Delhi",
    "Contact No.": "7678536731"
  },
  {
    "Organization": "North-1",
    "Manager Name": "Sujan Saha",
    "Manager Level": "RSM",
    "Dealer Name": "Mohan Tractors Private Limited (ProX)-Gurugram",
    "SCode": "1S1283",
    "State": "Haryana",
    "City": "Gurgaon",
    "Contact No.": "9903978950"
  },
  {
    "Organization": "North-1",
    "Manager Name": "Rahul Kumar",
    "Manager Level": "WM",
    "Dealer Name": "Mohan Tractors Private Limited (ProX)-Gurugram",
    "SCode": "1S1283",
    "State": "Haryana",
    "City": "Gurgaon",
    "Contact No.": "9354147851"
  },
  {
    "Organization": "North-1",
    "Manager Name": "Satguru Saran",
    "Manager Level": "CSM",
    "Dealer Name": "Mohan Tractors Private Limited (ProX)-Gurugram",
    "SCode": "1S1283",
    "State": "Haryana",
    "City": "Gurgaon",
    "Contact No.": "8795520001"
  },
  {
    "Organization": "North-1",
    "Manager Name": "Krishan Kumar",
    "Manager Level": "MD",
    "Dealer Name": "Mohan Tractors Private Limited (ProX)-Gurugram",
    "SCode": "1S1283",
    "State": "Haryana",
    "City": "Gurgaon",
    "Contact No.": "8607700732"
  },
  {
    "Organization": "North-1",
    "Manager Name": "Sufiyan",
    "Manager Level": "EOS Site Incharge",
    "Dealer Name": "Mohan Tractors Private Limited (ProX)-Gurugram",
    "SCode": "1S1283",
    "State": "Haryana",
    "City": "Gurgaon",
    "Contact No.": "9354147851"
  },
  {
    "Organization": "North-1",
    "Manager Name": "Adarsh Prasad",
    "Manager Level": "RSM",
    "Dealer Name": "Mohan Tractors Pvt Ltd-Delhi",
    "SCode": "1S1218",
    "State": "Delhi",
    "City": "Delhi",
    "Contact No.": "9717996321"
  },
  {
    "Organization": "North-1",
    "Manager Name": "Pankaj Kumar",
    "Manager Level": "WM",
    "Dealer Name": "Mohan Tractors Pvt Ltd-Delhi",
    "SCode": "1S1218",
    "State": "Delhi",
    "City": "Delhi",
    "Contact No.": "8929704941"
  },
  {
    "Organization": "North-1",
    "Manager Name": "Sunil Verma",
    "Manager Level": "ASM",
    "Dealer Name": "Mohan Tractors Pvt Ltd-Delhi",
    "SCode": "1S1218",
    "State": "Delhi",
    "City": "Delhi",
    "Contact No.": "7742688688"
  },
  {
    "Organization": "North-1",
    "Manager Name": "Punnet Arora / Shubham Raj (N)",
    "Manager Level": "CSM",
    "Dealer Name": "Mohan Tractors Pvt Ltd-Delhi",
    "SCode": "1S1218",
    "State": "Delhi",
    "City": "Delhi",
    "Contact No.": "9818476376,7303535819"
  },
  {
    "Organization": "North-1",
    "Manager Name": "Sunil Ruhil",
    "Manager Level": "EOS Site Incharge",
    "Dealer Name": "Mohan Tractors Pvt Ltd-Delhi",
    "SCode": "1S1218",
    "State": "Delhi",
    "City": "Delhi",
    "Contact No.": "9711180958"
  },
  {
    "Organization": "North-1",
    "Manager Name": "Dheeraj",
    "Manager Level": "MD",
    "Dealer Name": "Mohan Tractors Pvt Ltd-Delhi",
    "SCode": "1S1218",
    "State": "Delhi",
    "City": "Delhi",
    "Contact No.": "8287945600"
  },
  {
    "Organization": "North-1",
    "Manager Name": "Krishan Kumar / Vimal Mehta",
    "Manager Level": "MD",
    "Dealer Name": "Mohan Tractors Pvt Ltd-Gurugram",
    "SCode": "1S1219",
    "State": "Haryana",
    "City": "Gurgaon",
    "Contact No.": "8607700732,9812000381"
  },
  {
    "Organization": "North-1",
    "Manager Name": "Sunil Verma",
    "Manager Level": "ASM",
    "Dealer Name": "Mohan Tractors Pvt Ltd-Gurugram",
    "SCode": "1S1219",
    "State": "Haryana",
    "City": "Gurgaon",
    "Contact No.": "7742688688"
  },
  {
    "Organization": "North-1",
    "Manager Name": "Rohit / Joginder",
    "Manager Level": "EOS Site Incharge",
    "Dealer Name": "Mohan Tractors Pvt Ltd-Gurugram",
    "SCode": "1S1219",
    "State": "Haryana",
    "City": "Gurgaon",
    "Contact No.": "7807064309,8929543942"
  },
  {
    "Organization": "North-1",
    "Manager Name": "Harish",
    "Manager Level": "WM",
    "Dealer Name": "Mohan Tractors Pvt Ltd-Gurugram",
    "SCode": "1S1219",
    "State": "Haryana",
    "City": "Gurgaon",
    "Contact No.": "9711185606"
  },
  {
    "Organization": "North-1",
    "Manager Name": "Adarsh Prasad",
    "Manager Level": "RSM",
    "Dealer Name": "Mohan Tractors Pvt Ltd-Gurugram",
    "SCode": "1S1219",
    "State": "Haryana",
    "City": "Gurgaon",
    "Contact No.": "9717996321"
  },
  {
    "Organization": "North-1",
    "Manager Name": "Ashish Maurya (D) / Shubham Raj (N)",
    "Manager Level": "CSM",
    "Dealer Name": "Mohan Tractors Pvt Ltd-Gurugram",
    "SCode": "1S1219",
    "State": "Haryana",
    "City": "Gurgaon",
    "Contact No.": "8571905253,7303535819"
  },
  {
    "Organization": "North-1",
    "Manager Name": "Mobashir Siddiqui (EVS) / Suyash Ray",
    "Manager Level": "CSM",
    "Dealer Name": "Mohan Tractors Pvt Ltd-Rangpuri",
    "SCode": "1S1233",
    "State": "Delhi",
    "City": "Rangpuri",
    "Contact No.": "8144239584,9962880277"
  },
  {
    "Organization": "North-1",
    "Manager Name": "Sunil Verma",
    "Manager Level": "ASM",
    "Dealer Name": "Mohan Tractors Pvt Ltd-Rangpuri",
    "SCode": "1S1233",
    "State": "Delhi",
    "City": "Rangpuri",
    "Contact No.": "7742688688"
  },
  {
    "Organization": "North-1",
    "Manager Name": "Avesh Kumar (D) / Shubham Raj (N)",
    "Manager Level": "CSM",
    "Dealer Name": "Mohan Tractors Pvt Ltd-Rangpuri",
    "SCode": "1S1233",
    "State": "Delhi",
    "City": "Rangpuri",
    "Contact No.": "9958010311,7303535819"
  },
  {
    "Organization": "North-1",
    "Manager Name": "Adarsh Prasad",
    "Manager Level": "RSM",
    "Dealer Name": "Mohan Tractors Pvt Ltd-Rangpuri",
    "SCode": "1S1233",
    "State": "Delhi",
    "City": "Rangpuri",
    "Contact No.": "9717996321"
  },
  {
    "Organization": "North-1",
    "Manager Name": "Vicky",
    "Manager Level": "EOS Site Incharge",
    "Dealer Name": "Mohan Tractors Pvt Ltd-Rangpuri",
    "SCode": "1S1233",
    "State": "Delhi",
    "City": "Rangpuri",
    "Contact No.": "9625941295"
  },
  {
    "Organization": "North-1",
    "Manager Name": "Dheeraj Ruhela",
    "Manager Level": "MD",
    "Dealer Name": "Mohan Tractors Pvt Ltd-Rangpuri",
    "SCode": "1S1233",
    "State": "Delhi",
    "City": "Rangpuri",
    "Contact No.": "8287945600"
  },
  {
    "Organization": "North-1",
    "Manager Name": "Sandeep Sharma / Manoj Sharma",
    "Manager Level": "WM",
    "Dealer Name": "Mohan Tractors Pvt Ltd-Rangpuri",
    "SCode": "1S1233",
    "State": "Delhi",
    "City": "Rangpuri",
    "Contact No.": "9625941290,9896277775"
  },
  {
    "Organization": "North-1",
    "Manager Name": "Krishan",
    "Manager Level": "MD",
    "Dealer Name": "Mohan Tractors Pvt Ltd-Sohna",
    "SCode": "1S1228",
    "State": "Haryana",
    "City": "Sohna",
    "Contact No.": "8607700732"
  },
  {
    "Organization": "North-1",
    "Manager Name": "Adarsh Prasad",
    "Manager Level": "RSM",
    "Dealer Name": "Mohan Tractors Pvt Ltd-Sohna",
    "SCode": "1S1228",
    "State": "Haryana",
    "City": "Sohna",
    "Contact No.": "9717996321"
  },
  {
    "Organization": "North-1",
    "Manager Name": "Saurabh Pathak / Anwar Hussain",
    "Manager Level": "WM",
    "Dealer Name": "Mohan Tractors Pvt Ltd-Sohna",
    "SCode": "1S1228",
    "State": "Haryana",
    "City": "Sohna",
    "Contact No.": "8076148090,8076146613"
  },
  {
    "Organization": "North-1",
    "Manager Name": "Ashish Maurya / Shubham Raj (N)",
    "Manager Level": "CSM",
    "Dealer Name": "Mohan Tractors Pvt Ltd-Sohna",
    "SCode": "1S1228",
    "State": "Haryana",
    "City": "Sohna",
    "Contact No.": "8571905253,7303535819"
  },
  {
    "Organization": "North-1",
    "Manager Name": "Sunil Verma",
    "Manager Level": "ASM",
    "Dealer Name": "Mohan Tractors Pvt Ltd-Sohna",
    "SCode": "1S1228",
    "State": "Haryana",
    "City": "Sohna",
    "Contact No.": "7742688688"
  },
  {
    "Organization": "South-2",
    "Manager Name": "Vishal",
    "Manager Level": "WM",
    "Dealer Name": "Ms Manjunath Motors-Hubli",
    "SCode": "1S6036",
    "State": "Karnataka",
    "City": "Hubli-dharwad",
    "Contact No.": "9035076314"
  },
  {
    "Organization": "South-2",
    "Manager Name": "Eranna",
    "Manager Level": "EOS Site Incharge",
    "Dealer Name": "Ms Manjunath Motors-Hubli",
    "SCode": "1S6036",
    "State": "Karnataka",
    "City": "Hubli-dharwad",
    "Contact No.": "8971953548"
  },
  {
    "Organization": "South-2",
    "Manager Name": "Basavaraja B S (D) / Mahamadali T Maniyar (N)",
    "Manager Level": "CSM",
    "Dealer Name": "Ms Manjunath Motors-Hubli",
    "SCode": "1S6036",
    "State": "Karnataka",
    "City": "Hubli-dharwad",
    "Contact No.": "8971001188,9972619686"
  },
  {
    "Organization": "South-2",
    "Manager Name": "PRABHU S MUGALKHOD",
    "Manager Level": "ASM",
    "Dealer Name": "Ms Manjunath Motors-Hubli",
    "SCode": "1S6036",
    "State": "Karnataka",
    "City": "Hubli-dharwad",
    "Contact No.": "9980512550"
  },
  {
    "Organization": "South-2",
    "Manager Name": "N Narayanan",
    "Manager Level": "RSM",
    "Dealer Name": "Ms Manjunath Motors-Hubli",
    "SCode": "1S6036",
    "State": "Karnataka",
    "City": "Hubli-dharwad",
    "Contact No.": "8123036700"
  },
  {
    "Organization": "South-2",
    "Manager Name": "Sadiq Bilagi / Suraj Kalal",
    "Manager Level": "MD",
    "Dealer Name": "Ms Manjunath Motors-Hubli",
    "SCode": "1S6036",
    "State": "Karnataka",
    "City": "Hubli-dharwad",
    "Contact No.": "9845166606,7019810480"
  },
  {
    "Organization": "North-2",
    "Manager Name": "Vijay Sharma",
    "Manager Level": "MD",
    "Dealer Name": "Mumal Motors-Ajmer",
    "SCode": "1S1117",
    "State": "Rajasthan",
    "City": "Ajmer",
    "Contact No.": "9351713944"
  },
  {
    "Organization": "North-2",
    "Manager Name": "Jairam Singh Rawat",
    "Manager Level": "WM",
    "Dealer Name": "Mumal Motors-Ajmer",
    "SCode": "1S1117",
    "State": "Rajasthan",
    "City": "Ajmer",
    "Contact No.": "9309451086"
  },
  {
    "Organization": "North-2",
    "Manager Name": "Shivam Bhardwaj / Nandkishor",
    "Manager Level": "CSM",
    "Dealer Name": "Mumal Motors-Ajmer",
    "SCode": "1S1117",
    "State": "Rajasthan",
    "City": "Ajmer",
    "Contact No.": "7878175706,7389944049"
  },
  {
    "Organization": "North-2",
    "Manager Name": "Rajkumar Vaishnav",
    "Manager Level": "ASM",
    "Dealer Name": "Mumal Motors-Ajmer",
    "SCode": "1S1117",
    "State": "Rajasthan",
    "City": "Ajmer",
    "Contact No.": "9636756000"
  },
  {
    "Organization": "North-2",
    "Manager Name": "Krishnendu Saha",
    "Manager Level": "RSM",
    "Dealer Name": "Mumal Motors-Ajmer",
    "SCode": "1S1117",
    "State": "Rajasthan",
    "City": "Ajmer",
    "Contact No.": "7980433425"
  },
  {
    "Organization": "North-2",
    "Manager Name": "Rajkumar Vaishnav",
    "Manager Level": "ASM",
    "Dealer Name": "Mumal Motors-Kishangarh",
    "SCode": "1S1179",
    "State": "Rajasthan",
    "City": "kishangarh",
    "Contact No.": "9636756000"
  },
  {
    "Organization": "North-2",
    "Manager Name": "Vijay Sharma",
    "Manager Level": "MD",
    "Dealer Name": "Mumal Motors-Kishangarh",
    "SCode": "1S1179",
    "State": "Rajasthan",
    "City": "kishangarh",
    "Contact No.": "9351713944"
  },
  {
    "Organization": "North-2",
    "Manager Name": "Pawan Kumar / Nathu Choudhary",
    "Manager Level": "WM",
    "Dealer Name": "Mumal Motors-Kishangarh",
    "SCode": "1S1179",
    "State": "Rajasthan",
    "City": "kishangarh",
    "Contact No.": "9116695288,8290771999"
  },
  {
    "Organization": "North-2",
    "Manager Name": "Shivam Bhardwaj / Nandkishor",
    "Manager Level": "CSM",
    "Dealer Name": "Mumal Motors-Kishangarh",
    "SCode": "1S1179",
    "State": "Rajasthan",
    "City": "kishangarh",
    "Contact No.": "7878175706,7389944049"
  },
  {
    "Organization": "North-2",
    "Manager Name": "Krishnendu Saha",
    "Manager Level": "RSM",
    "Dealer Name": "Mumal Motors-Kishangarh",
    "SCode": "1S1179",
    "State": "Rajasthan",
    "City": "kishangarh",
    "Contact No.": "7980433425"
  },
  {
    "Organization": "North-2",
    "Manager Name": "Ram Tirath",
    "Manager Level": "WM",
    "Dealer Name": "Narvada Motors Pvt Ltd-Faizabad",
    "SCode": "1S1061",
    "State": "Uttar Pradesh",
    "City": "Faizabad",
    "Contact No.": "9935096042"
  },
  {
    "Organization": "North-2",
    "Manager Name": "Gagan Gupta",
    "Manager Level": "MD",
    "Dealer Name": "Narvada Motors Pvt Ltd-Faizabad",
    "SCode": "1S1061",
    "State": "Uttar Pradesh",
    "City": "Faizabad",
    "Contact No.": "9935096047"
  },
  {
    "Organization": "North-2",
    "Manager Name": "Bheem Singh",
    "Manager Level": "EOS Site Incharge",
    "Dealer Name": "Narvada Motors Pvt Ltd-Faizabad",
    "SCode": "1S1061",
    "State": "Uttar Pradesh",
    "City": "Faizabad",
    "Contact No.": "9506994063"
  },
  {
    "Organization": "North-2",
    "Manager Name": "Krishnendu Saha",
    "Manager Level": "RSM",
    "Dealer Name": "Narvada Motors Pvt Ltd-Faizabad",
    "SCode": "1S1061",
    "State": "Uttar Pradesh",
    "City": "Faizabad",
    "Contact No.": "7980433425"
  },
  {
    "Organization": "North-2",
    "Manager Name": "Nitin Gupta",
    "Manager Level": "ASM",
    "Dealer Name": "Narvada Motors Pvt Ltd-Faizabad",
    "SCode": "1S1061",
    "State": "Uttar Pradesh",
    "City": "Faizabad",
    "Contact No.": "7080811550"
  },
  {
    "Organization": "North-2",
    "Manager Name": "Prayas Tripathi (D) / Saket Singh (N)",
    "Manager Level": "CSM",
    "Dealer Name": "Narvada Motors Pvt Ltd-Faizabad",
    "SCode": "1S1061",
    "State": "Uttar Pradesh",
    "City": "Faizabad",
    "Contact No.": "8957486148,8709859215"
  },
  {
    "Organization": "North-2",
    "Manager Name": "Umashankar Singh / Sandeep Kumar",
    "Manager Level": "EOS Site Incharge",
    "Dealer Name": "Narvada Motors Pvt Ltd-Lucknow",
    "SCode": "1S1049",
    "State": "Uttar Pradesh",
    "City": "Lucknow",
    "Contact No.": "6390005009,6390005008"
  },
  {
    "Organization": "North-2",
    "Manager Name": "Krishnendu Saha",
    "Manager Level": "RSM",
    "Dealer Name": "Narvada Motors Pvt Ltd-Lucknow",
    "SCode": "1S1049",
    "State": "Uttar Pradesh",
    "City": "Lucknow",
    "Contact No.": "7980433425"
  },
  {
    "Organization": "North-2",
    "Manager Name": "Gagan Gupta",
    "Manager Level": "MD",
    "Dealer Name": "Narvada Motors Pvt Ltd-Lucknow",
    "SCode": "1S1049",
    "State": "Uttar Pradesh",
    "City": "Lucknow",
    "Contact No.": "9935096047"
  },
  {
    "Organization": "North-2",
    "Manager Name": "Nitin Gupta",
    "Manager Level": "ASM",
    "Dealer Name": "Narvada Motors Pvt Ltd-Lucknow",
    "SCode": "1S1049",
    "State": "Uttar Pradesh",
    "City": "Lucknow",
    "Contact No.": "7080811550"
  },
  {
    "Organization": "North-2",
    "Manager Name": "Noman",
    "Manager Level": "WM",
    "Dealer Name": "Narvada Motors Pvt Ltd-Lucknow",
    "SCode": "1S1049",
    "State": "Uttar Pradesh",
    "City": "Lucknow",
    "Contact No.": "7518000773"
  },
  {
    "Organization": "North-2",
    "Manager Name": "Prayas Tripathi (D) / Saket Singh (N)",
    "Manager Level": "CSM",
    "Dealer Name": "Narvada Motors Pvt Ltd-Lucknow",
    "SCode": "1S1049",
    "State": "Uttar Pradesh",
    "City": "Lucknow",
    "Contact No.": "8957486148,8709859215"
  },
  {
    "Organization": "North-2",
    "Manager Name": "Sujan Saha",
    "Manager Level": "RSM",
    "Dealer Name": "Narveda Motors Pvt Ltd (ProX)-Lucknow",
    "SCode": "1S7122",
    "State": "Uttar Pradesh",
    "City": "Lucknow",
    "Contact No.": "9903978950"
  },
  {
    "Organization": "North-2",
    "Manager Name": "Abhishek Gupta",
    "Manager Level": "EOS Site Incharge",
    "Dealer Name": "Narveda Motors Pvt Ltd (ProX)-Lucknow",
    "SCode": "1S7122",
    "State": "Uttar Pradesh",
    "City": "Lucknow",
    "Contact No.": "9452321669"
  },
  {
    "Organization": "North-2",
    "Manager Name": "K.K Mishra",
    "Manager Level": "MD",
    "Dealer Name": "Narveda Motors Pvt Ltd (ProX)-Lucknow",
    "SCode": "1S7122",
    "State": "Uttar Pradesh",
    "City": "Lucknow",
    "Contact No.": "9919999131"
  },
  {
    "Organization": "North-2",
    "Manager Name": "Sandeep Kumar Patel",
    "Manager Level": "CSM",
    "Dealer Name": "Narveda Motors Pvt Ltd (ProX)-Lucknow",
    "SCode": "1S7122",
    "State": "Uttar Pradesh",
    "City": "Lucknow",
    "Contact No.": "6389181405"
  },
  {
    "Organization": "North-2",
    "Manager Name": "Ravi Kant Pandey",
    "Manager Level": "WM",
    "Dealer Name": "Narveda Motors Pvt Ltd (ProX)-Lucknow",
    "SCode": "1S7122",
    "State": "Uttar Pradesh",
    "City": "Lucknow",
    "Contact No.": "9151808449"
  },
  {
    "Organization": "North-2",
    "Manager Name": "Abhay Yadav (D) / Saket Singh (N)",
    "Manager Level": "CSM",
    "Dealer Name": "Narveda Motors Pvt Ltd-Sikandarpur",
    "SCode": "1S1212",
    "State": "Uttar Pradesh",
    "City": "Lucknow",
    "Contact No.": "8267948718,8709859215"
  },
  {
    "Organization": "North-2",
    "Manager Name": "Nitin Gupta",
    "Manager Level": "ASM",
    "Dealer Name": "Narveda Motors Pvt Ltd-Sikandarpur",
    "SCode": "1S1212",
    "State": "Uttar Pradesh",
    "City": "Lucknow",
    "Contact No.": "7080811550"
  },
  {
    "Organization": "North-2",
    "Manager Name": "Anoop Kumar",
    "Manager Level": "EOS Site Incharge",
    "Dealer Name": "Narveda Motors Pvt Ltd-Sikandarpur",
    "SCode": "1S1212",
    "State": "Uttar Pradesh",
    "City": "Lucknow",
    "Contact No.": "8078637691"
  },
  {
    "Organization": "North-2",
    "Manager Name": "Krishnendu Saha",
    "Manager Level": "RSM",
    "Dealer Name": "Narveda Motors Pvt Ltd-Sikandarpur",
    "SCode": "1S1212",
    "State": "Uttar Pradesh",
    "City": "Lucknow",
    "Contact No.": "7980433425"
  },
  {
    "Organization": "North-2",
    "Manager Name": "MOHD MOHSIN KHAN",
    "Manager Level": "WM",
    "Dealer Name": "Narveda Motors Pvt Ltd-Sikandarpur",
    "SCode": "1S1212",
    "State": "Uttar Pradesh",
    "City": "Lucknow",
    "Contact No.": "6390005043"
  },
  {
    "Organization": "North-2",
    "Manager Name": "Gagan Gupta",
    "Manager Level": "MD",
    "Dealer Name": "Narveda Motors Pvt Ltd-Sikandarpur",
    "SCode": "1S1212",
    "State": "Uttar Pradesh",
    "City": "Lucknow",
    "Contact No.": "9935096047"
  },
  {
    "Organization": "North-2",
    "Manager Name": "Abhay Yadav (D) / Saket Singh (N)",
    "Manager Level": "CSM",
    "Dealer Name": "Narveda Motors Pvt Ltd-Sitapur",
    "SCode": "1S7086",
    "State": "Uttar Pradesh",
    "City": "Sitapur",
    "Contact No.": "8267948718,8709859215"
  },
  {
    "Organization": "North-2",
    "Manager Name": "Nitin Gupta",
    "Manager Level": "ASM",
    "Dealer Name": "Narveda Motors Pvt Ltd-Sitapur",
    "SCode": "1S7086",
    "State": "Uttar Pradesh",
    "City": "Sitapur",
    "Contact No.": "7080811550"
  },
  {
    "Organization": "North-2",
    "Manager Name": "Karuna Nidhi Adim",
    "Manager Level": "EOS Site Incharge",
    "Dealer Name": "Narveda Motors Pvt Ltd-Sitapur",
    "SCode": "1S7086",
    "State": "Uttar Pradesh",
    "City": "Sitapur",
    "Contact No.": "9151117583"
  },
  {
    "Organization": "North-2",
    "Manager Name": "Krishnendu Saha",
    "Manager Level": "RSM",
    "Dealer Name": "Narveda Motors Pvt Ltd-Sitapur",
    "SCode": "1S7086",
    "State": "Uttar Pradesh",
    "City": "Sitapur",
    "Contact No.": "7980433425"
  },
  {
    "Organization": "North-2",
    "Manager Name": "Rahul Pal",
    "Manager Level": "WM",
    "Dealer Name": "Narveda Motors Pvt Ltd-Sitapur",
    "SCode": "1S7086",
    "State": "Uttar Pradesh",
    "City": "Sitapur",
    "Contact No.": "9151117574"
  },
  {
    "Organization": "North-2",
    "Manager Name": "Gagan Gupta",
    "Manager Level": "MD",
    "Dealer Name": "Narveda Motors Pvt Ltd-Sitapur",
    "SCode": "1S7086",
    "State": "Uttar Pradesh",
    "City": "Sitapur",
    "Contact No.": "9935096047"
  },
  {
    "Organization": "North-2",
    "Manager Name": "Nitin Gupta",
    "Manager Level": "ASM",
    "Dealer Name": "Narveda Motors Pvt Ltd-Sultanpur",
    "SCode": "1S7071",
    "State": "Uttar Pradesh",
    "City": "Sultanpur",
    "Contact No.": "7080811550"
  },
  {
    "Organization": "North-2",
    "Manager Name": "Prayas Tripathi (D) / Saket Singh (N)",
    "Manager Level": "CSM",
    "Dealer Name": "Narveda Motors Pvt Ltd-Sultanpur",
    "SCode": "1S7071",
    "State": "Uttar Pradesh",
    "City": "Sultanpur",
    "Contact No.": "8957486148,8709859215"
  },
  {
    "Organization": "North-2",
    "Manager Name": "Jay Prakash Yadav",
    "Manager Level": "EOS Site Incharge",
    "Dealer Name": "Narveda Motors Pvt Ltd-Sultanpur",
    "SCode": "1S7071",
    "State": "Uttar Pradesh",
    "City": "Sultanpur",
    "Contact No.": "9151110578"
  },
  {
    "Organization": "North-2",
    "Manager Name": "Krishnendu Saha",
    "Manager Level": "RSM",
    "Dealer Name": "Narveda Motors Pvt Ltd-Sultanpur",
    "SCode": "1S7071",
    "State": "Uttar Pradesh",
    "City": "Sultanpur",
    "Contact No.": "7980433425"
  },
  {
    "Organization": "North-2",
    "Manager Name": "Gagan Gupta",
    "Manager Level": "MD",
    "Dealer Name": "Narveda Motors Pvt Ltd-Sultanpur",
    "SCode": "1S7071",
    "State": "Uttar Pradesh",
    "City": "Sultanpur",
    "Contact No.": "9935096047"
  },
  {
    "Organization": "North-2",
    "Manager Name": "Satyam Singh",
    "Manager Level": "WM",
    "Dealer Name": "Narveda Motors Pvt Ltd-Sultanpur",
    "SCode": "1S7071",
    "State": "Uttar Pradesh",
    "City": "Sultanpur",
    "Contact No.": "9151110435"
  },
  {
    "Organization": "East-1",
    "Manager Name": "Krishna Bhushan",
    "Manager Level": "ASM",
    "Dealer Name": "Navarya Auto Pvt Ltd-Sasaram",
    "SCode": "1S2313",
    "State": "Bihar",
    "City": "Sasaram",
    "Contact No.": "6202531709"
  },
  {
    "Organization": "East-1",
    "Manager Name": "Motilal Tiwari",
    "Manager Level": "MD",
    "Dealer Name": "Navarya Auto Pvt Ltd-Sasaram",
    "SCode": "1S2313",
    "State": "Bihar",
    "City": "Sasaram",
    "Contact No.": "7766919201"
  },
  {
    "Organization": "East-1",
    "Manager Name": "Yogeshwar Singh",
    "Manager Level": "RSM",
    "Dealer Name": "Navarya Auto Pvt Ltd-Sasaram",
    "SCode": "1S2313",
    "State": "Bihar",
    "City": "Sasaram",
    "Contact No.": "9717966997"
  },
  {
    "Organization": "East-1",
    "Manager Name": "Sanjeev Kumar",
    "Manager Level": "CSM",
    "Dealer Name": "Navarya Auto Pvt Ltd-Sasaram",
    "SCode": "1S2313",
    "State": "Bihar",
    "City": "Sasaram",
    "Contact No.": "6202531711"
  },
  {
    "Organization": "East-1",
    "Manager Name": "Rahul Kumar",
    "Manager Level": "EOS Site Incharge",
    "Dealer Name": "Navarya Auto Pvt Ltd-Sasaram",
    "SCode": "1S2313",
    "State": "Bihar",
    "City": "Sasaram",
    "Contact No.": "9031602962"
  },
  {
    "Organization": "East-1",
    "Manager Name": "Rabindra Sinha",
    "Manager Level": "WM",
    "Dealer Name": "Navarya Auto Pvt Ltd-Sasaram",
    "SCode": "1S2313",
    "State": "Bihar",
    "City": "Sasaram",
    "Contact No.": "7766919206"
  },
  {
    "Organization": "East-1",
    "Manager Name": "Abhirup Ghosh",
    "Manager Level": "ASM",
    "Dealer Name": "New L N Motorparts-P. Midnapur-Mechogram",
    "SCode": "1S2059",
    "State": "West Bengal",
    "City": "Uttar mechogram",
    "Contact No.": "9073378080"
  },
  {
    "Organization": "East-1",
    "Manager Name": "Rashbihari Ghosh",
    "Manager Level": "MD",
    "Dealer Name": "New L N Motorparts-P. Midnapur-Mechogram",
    "SCode": "1S2059",
    "State": "West Bengal",
    "City": "Uttar mechogram",
    "Contact No.": "9474506659"
  },
  {
    "Organization": "East-1",
    "Manager Name": "Apurba Bhaumik",
    "Manager Level": "WM",
    "Dealer Name": "New L N Motorparts-P. Midnapur-Mechogram",
    "SCode": "1S2059",
    "State": "West Bengal",
    "City": "Uttar mechogram",
    "Contact No.": "9735966322"
  },
  {
    "Organization": "East-1",
    "Manager Name": "Subhendu Maity / Susovan Dey",
    "Manager Level": "EOS Site Incharge",
    "Dealer Name": "New L N Motorparts-P. Midnapur-Mechogram",
    "SCode": "1S2059",
    "State": "West Bengal",
    "City": "Uttar mechogram",
    "Contact No.": "9002687874,7074542863"
  },
  {
    "Organization": "East-1",
    "Manager Name": "Kuntal Deb",
    "Manager Level": "CSM",
    "Dealer Name": "New L N Motorparts-P. Midnapur-Mechogram",
    "SCode": "1S2059",
    "State": "West Bengal",
    "City": "Uttar mechogram",
    "Contact No.": "6291810496"
  },
  {
    "Organization": "East-1",
    "Manager Name": "Yogeshwar Singh",
    "Manager Level": "RSM",
    "Dealer Name": "New L N Motorparts-P. Midnapur-Mechogram",
    "SCode": "1S2059",
    "State": "West Bengal",
    "City": "Uttar mechogram",
    "Contact No.": "9717966997"
  },
  {
    "Organization": "East-1",
    "Manager Name": "Yogeshwar Singh",
    "Manager Level": "RSM",
    "Dealer Name": "New Mahamaya Auto Works-Medinipur",
    "SCode": "1S2161",
    "State": "West Bengal",
    "City": "Medinipur",
    "Contact No.": "9717966997"
  },
  {
    "Organization": "East-1",
    "Manager Name": "Abhirup Ghosh",
    "Manager Level": "ASM",
    "Dealer Name": "New Mahamaya Auto Works-Medinipur",
    "SCode": "1S2161",
    "State": "West Bengal",
    "City": "Medinipur",
    "Contact No.": "9073378080"
  },
  {
    "Organization": "East-1",
    "Manager Name": "SANJAY RANA",
    "Manager Level": "WM",
    "Dealer Name": "New Mahamaya Auto Works-Medinipur",
    "SCode": "1S2161",
    "State": "West Bengal",
    "City": "Medinipur",
    "Contact No.": "9547875947"
  },
  {
    "Organization": "East-1",
    "Manager Name": "SUKANTA SARKAR",
    "Manager Level": "MD",
    "Dealer Name": "New Mahamaya Auto Works-Medinipur",
    "SCode": "1S2161",
    "State": "West Bengal",
    "City": "Medinipur",
    "Contact No.": "9732728758"
  },
  {
    "Organization": "East-1",
    "Manager Name": "Kuntal Deb",
    "Manager Level": "CSM",
    "Dealer Name": "New Mahamaya Auto Works-Medinipur",
    "SCode": "1S2161",
    "State": "West Bengal",
    "City": "Medinipur",
    "Contact No.": "6291810496"
  },
  {
    "Organization": "North-1",
    "Manager Name": "LRS Rao / Yogesh Sarode",
    "Manager Level": "WM",
    "Dealer Name": "North - Eicher Power Solutions",
    "SCode": "1S0040",
    "State": "Haryana",
    "City": "Ambala",
    "Contact No.": "9826618816,9172996936"
  },
  {
    "Organization": "North-1",
    "Manager Name": "Ashish Deshpande",
    "Manager Level": "CSM",
    "Dealer Name": "North - Eicher Power Solutions",
    "SCode": "1S0040",
    "State": "Haryana",
    "City": "Ambala",
    "Contact No.": "9981521347"
  },
  {
    "Organization": "East-2",
    "Manager Name": "Shaik Nasiruddin",
    "Manager Level": "WM",
    "Dealer Name": "Ooriba Motors-Chhatrapur",
    "SCode": "1S2280",
    "State": "Odisha",
    "City": "Brahmapur",
    "Contact No.": "9124568406"
  },
  {
    "Organization": "East-2",
    "Manager Name": "Niket Kumar",
    "Manager Level": "RSM",
    "Dealer Name": "Ooriba Motors-Chhatrapur",
    "SCode": "1S2280",
    "State": "Odisha",
    "City": "Brahmapur",
    "Contact No.": "8427733112"
  },
  {
    "Organization": "East-2",
    "Manager Name": "Gangadhar Mohanty",
    "Manager Level": "EOS Site Incharge",
    "Dealer Name": "Ooriba Motors-Chhatrapur",
    "SCode": "1S2280",
    "State": "Odisha",
    "City": "Brahmapur",
    "Contact No.": "8018112985,9124568421"
  },
  {
    "Organization": "East-2",
    "Manager Name": "Sanjoy Nayek",
    "Manager Level": "ASM",
    "Dealer Name": "Ooriba Motors-Chhatrapur",
    "SCode": "1S2280",
    "State": "Odisha",
    "City": "Brahmapur",
    "Contact No.": "8001165218"
  },
  {
    "Organization": "East-2",
    "Manager Name": "Rudra Dash",
    "Manager Level": "MD",
    "Dealer Name": "Ooriba Motors-Chhatrapur",
    "SCode": "1S2280",
    "State": "Odisha",
    "City": "Brahmapur",
    "Contact No.": "7077002350"
  },
  {
    "Organization": "East-2",
    "Manager Name": "Arpan Biswal",
    "Manager Level": "CSM",
    "Dealer Name": "Ooriba Motors-Chhatrapur",
    "SCode": "1S2280",
    "State": "Odisha",
    "City": "Brahmapur",
    "Contact No.": "7008536363"
  },
  {
    "Organization": "East-2",
    "Manager Name": "Arpan Biswal",
    "Manager Level": "CSM",
    "Dealer Name": "Ooriba Motors-Jeypore",
    "SCode": "1S2257",
    "State": "Odisha",
    "City": "Rayagada",
    "Contact No.": "7008536363"
  },
  {
    "Organization": "East-2",
    "Manager Name": "Sanjoy Nayek",
    "Manager Level": "ASM",
    "Dealer Name": "Ooriba Motors-Jeypore",
    "SCode": "1S2257",
    "State": "Odisha",
    "City": "Rayagada",
    "Contact No.": "8001165218"
  },
  {
    "Organization": "East-2",
    "Manager Name": "Rudra Dash",
    "Manager Level": "MD",
    "Dealer Name": "Ooriba Motors-Jeypore",
    "SCode": "1S2257",
    "State": "Odisha",
    "City": "Rayagada",
    "Contact No.": "7077002350"
  },
  {
    "Organization": "East-2",
    "Manager Name": "Niket Kumar",
    "Manager Level": "RSM",
    "Dealer Name": "Ooriba Motors-Jeypore",
    "SCode": "1S2257",
    "State": "Odisha",
    "City": "Rayagada",
    "Contact No.": "8427733112"
  },
  {
    "Organization": "East-2",
    "Manager Name": "Mukund Podh",
    "Manager Level": "EOS Site Incharge",
    "Dealer Name": "Ooriba Motors-Jeypore",
    "SCode": "1S2257",
    "State": "Odisha",
    "City": "Rayagada",
    "Contact No.": "9124568418,9124568439"
  },
  {
    "Organization": "East-2",
    "Manager Name": "Mahender Yadav",
    "Manager Level": "WM",
    "Dealer Name": "Ooriba Motors-Jeypore",
    "SCode": "1S2257",
    "State": "Odisha",
    "City": "Rayagada",
    "Contact No.": "9827791938"
  },
  {
    "Organization": "East-2",
    "Manager Name": "Arpan Biswal",
    "Manager Level": "CSM",
    "Dealer Name": "Ooriba Motors-Rayagada",
    "SCode": "1S2290",
    "State": "Odisha",
    "City": "Rayagada",
    "Contact No.": "7008536363"
  },
  {
    "Organization": "East-2",
    "Manager Name": "Niket Kumar",
    "Manager Level": "RSM",
    "Dealer Name": "Ooriba Motors-Rayagada",
    "SCode": "1S2290",
    "State": "Odisha",
    "City": "Rayagada",
    "Contact No.": "8427733112"
  },
  {
    "Organization": "East-2",
    "Manager Name": "Sanjoy Nayek",
    "Manager Level": "ASM",
    "Dealer Name": "Ooriba Motors-Rayagada",
    "SCode": "1S2290",
    "State": "Odisha",
    "City": "Rayagada",
    "Contact No.": "8001165218"
  },
  {
    "Organization": "East-2",
    "Manager Name": "Vikram",
    "Manager Level": "WM",
    "Dealer Name": "Ooriba Motors-Rayagada",
    "SCode": "1S2290",
    "State": "Odisha",
    "City": "Rayagada",
    "Contact No.": "9668181777"
  },
  {
    "Organization": "East-2",
    "Manager Name": "Sankar Tekri",
    "Manager Level": "EOS Site Incharge",
    "Dealer Name": "Ooriba Motors-Rayagada",
    "SCode": "1S2290",
    "State": "Odisha",
    "City": "Rayagada",
    "Contact No.": "8658694172,9124568420"
  },
  {
    "Organization": "East-2",
    "Manager Name": "Rudra Dash",
    "Manager Level": "MD",
    "Dealer Name": "Ooriba Motors-Rayagada",
    "SCode": "1S2290",
    "State": "Odisha",
    "City": "Rayagada",
    "Contact No.": "7077002350"
  },
  {
    "Organization": "North-2",
    "Manager Name": "Nitin Gupta",
    "Manager Level": "ASM",
    "Dealer Name": "Orai Automobiles-Orai",
    "SCode": "1S7087",
    "State": "Uttar Pradesh",
    "City": "Orai",
    "Contact No.": "7080811550"
  },
  {
    "Organization": "North-2",
    "Manager Name": "Jitendra Mishra (D) / Saket Singh (N)",
    "Manager Level": "CSM",
    "Dealer Name": "Orai Automobiles-Orai",
    "SCode": "1S7087",
    "State": "Uttar Pradesh",
    "City": "Orai",
    "Contact No.": "9005547771,8709859215"
  },
  {
    "Organization": "North-2",
    "Manager Name": "Noor Ahamed",
    "Manager Level": "WM",
    "Dealer Name": "Orai Automobiles-Orai",
    "SCode": "1S7087",
    "State": "Uttar Pradesh",
    "City": "Orai",
    "Contact No.": "9798264640"
  },
  {
    "Organization": "North-2",
    "Manager Name": "Deepak Yadav",
    "Manager Level": "EOS Site Incharge",
    "Dealer Name": "Orai Automobiles-Orai",
    "SCode": "1S7087",
    "State": "Uttar Pradesh",
    "City": "Orai",
    "Contact No.": "7080079333"
  },
  {
    "Organization": "North-2",
    "Manager Name": "Vipin Kumar Gupta",
    "Manager Level": "MD",
    "Dealer Name": "Orai Automobiles-Orai",
    "SCode": "1S7087",
    "State": "Uttar Pradesh",
    "City": "Orai",
    "Contact No.": "9170022122"
  },
  {
    "Organization": "North-2",
    "Manager Name": "Krishnendu Saha",
    "Manager Level": "RSM",
    "Dealer Name": "Orai Automobiles-Orai",
    "SCode": "1S7087",
    "State": "Uttar Pradesh",
    "City": "Orai",
    "Contact No.": "7980433425"
  },
  {
    "Organization": "South-1",
    "Manager Name": "Radhakrishnan",
    "Manager Level": "RSM",
    "Dealer Name": "PSN Automobiles P.Ltd-Allapuzha",
    "SCode": "1S4058",
    "State": "Kerala",
    "City": "Alappuzha",
    "Contact No.": "9840730250"
  },
  {
    "Organization": "South-1",
    "Manager Name": "Ponraj (D) / Yuvaraj B (N)",
    "Manager Level": "CSM",
    "Dealer Name": "PSN Automobiles P.Ltd-Allapuzha",
    "SCode": "1S4058",
    "State": "Kerala",
    "City": "Alappuzha",
    "Contact No.": "7356111315,9543338783"
  },
  {
    "Organization": "South-1",
    "Manager Name": "MR. Georgy Zachariah",
    "Manager Level": "ASM",
    "Dealer Name": "PSN Automobiles P.Ltd-Allapuzha",
    "SCode": "1S4058",
    "State": "Kerala",
    "City": "Alappuzha",
    "Contact No.": "9895398896"
  },
  {
    "Organization": "South-1",
    "Manager Name": "Abhijith Ajith / Stibin Saju",
    "Manager Level": "EOS Site Incharge",
    "Dealer Name": "PSN Automobiles P.Ltd-Allapuzha",
    "SCode": "1S4058",
    "State": "Kerala",
    "City": "Alappuzha",
    "Contact No.": "9946967000,7736769994"
  },
  {
    "Organization": "South-1",
    "Manager Name": "Ubaid / Benny",
    "Manager Level": "WM",
    "Dealer Name": "PSN Automobiles P.Ltd-Allapuzha",
    "SCode": "1S4058",
    "State": "Kerala",
    "City": "Alappuzha",
    "Contact No.": "9746470244,9746470240"
  },
  {
    "Organization": "South-1",
    "Manager Name": "Syam / Jimmy",
    "Manager Level": "MD",
    "Dealer Name": "PSN Automobiles P.Ltd-Allapuzha",
    "SCode": "1S4058",
    "State": "Kerala",
    "City": "Alappuzha",
    "Contact No.": "9895020288,9895440444"
  },
  {
    "Organization": "South-1",
    "Manager Name": "MR. Georgy Zachariah",
    "Manager Level": "ASM",
    "Dealer Name": "PSN Automobiles P.Ltd-Kalamasery",
    "SCode": "1S4062",
    "State": "Kerala",
    "City": "kalamassery",
    "Contact No.": "9895398896"
  },
  {
    "Organization": "South-1",
    "Manager Name": "Akhlesh (EVS) / Ponraj K",
    "Manager Level": "CSM",
    "Dealer Name": "PSN Automobiles P.Ltd-Kalamasery",
    "SCode": "1S4062",
    "State": "Kerala",
    "City": "kalamassery",
    "Contact No.": "8962237440,7356111315"
  },
  {
    "Organization": "South-1",
    "Manager Name": "Radhakrishnan",
    "Manager Level": "RSM",
    "Dealer Name": "PSN Automobiles P.Ltd-Kalamasery",
    "SCode": "1S4062",
    "State": "Kerala",
    "City": "kalamassery",
    "Contact No.": "9840730250"
  },
  {
    "Organization": "South-1",
    "Manager Name": "Ponraj K (D) / Yuvaraj B (N)",
    "Manager Level": "CSM",
    "Dealer Name": "PSN Automobiles P.Ltd-Kalamasery",
    "SCode": "1S4062",
    "State": "Kerala",
    "City": "kalamassery",
    "Contact No.": "7356111315,9543338783"
  },
  {
    "Organization": "South-1",
    "Manager Name": "Abhijith Ajith / Stibin Saju",
    "Manager Level": "EOS Site Incharge",
    "Dealer Name": "PSN Automobiles P.Ltd-Kalamasery",
    "SCode": "1S4062",
    "State": "Kerala",
    "City": "kalamassery",
    "Contact No.": "9946967000,7736769994"
  },
  {
    "Organization": "South-1",
    "Manager Name": "Aneesh / Varun",
    "Manager Level": "WM",
    "Dealer Name": "PSN Automobiles P.Ltd-Kalamasery",
    "SCode": "1S4062",
    "State": "Kerala",
    "City": "kalamassery",
    "Contact No.": "7736099904,9895206122"
  },
  {
    "Organization": "South-1",
    "Manager Name": "Syam / Jimmy",
    "Manager Level": "MD",
    "Dealer Name": "PSN Automobiles P.Ltd-Kalamasery",
    "SCode": "1S4062",
    "State": "Kerala",
    "City": "kalamassery",
    "Contact No.": "9895020288,9895440444"
  },
  {
    "Organization": "South-1",
    "Manager Name": "Rahul / Vijaykumar",
    "Manager Level": "WM",
    "Dealer Name": "PSN Automobiles P.Ltd-Palakkad",
    "SCode": "1S4059",
    "State": "Kerala",
    "City": "Palakkad",
    "Contact No.": "9746470242,9746470232"
  },
  {
    "Organization": "South-1",
    "Manager Name": "Radhakrishnan",
    "Manager Level": "RSM",
    "Dealer Name": "PSN Automobiles P.Ltd-Palakkad",
    "SCode": "1S4059",
    "State": "Kerala",
    "City": "Palakkad",
    "Contact No.": "9840730250"
  },
  {
    "Organization": "South-1",
    "Manager Name": "MR. Georgy Zachariah",
    "Manager Level": "ASM",
    "Dealer Name": "PSN Automobiles P.Ltd-Palakkad",
    "SCode": "1S4059",
    "State": "Kerala",
    "City": "Palakkad",
    "Contact No.": "9895398896"
  },
  {
    "Organization": "South-1",
    "Manager Name": "Bibin Das",
    "Manager Level": "EOS Site Incharge",
    "Dealer Name": "PSN Automobiles P.Ltd-Palakkad",
    "SCode": "1S4059",
    "State": "Kerala",
    "City": "Palakkad",
    "Contact No.": "7025027779"
  },
  {
    "Organization": "South-1",
    "Manager Name": "Shyam Mohan / Jimmy Jose",
    "Manager Level": "MD",
    "Dealer Name": "PSN Automobiles P.Ltd-Palakkad",
    "SCode": "1S4059",
    "State": "Kerala",
    "City": "Palakkad",
    "Contact No.": "9895020288,9895440444"
  },
  {
    "Organization": "South-1",
    "Manager Name": "Aebal Christy C J (D) / Yuvaraj B (N)",
    "Manager Level": "CSM",
    "Dealer Name": "PSN Automobiles P.Ltd-Palakkad",
    "SCode": "1S4059",
    "State": "Kerala",
    "City": "Palakkad",
    "Contact No.": "7358046976,9543338783"
  },
  {
    "Organization": "South-1",
    "Manager Name": "Radhakrishnan",
    "Manager Level": "RSM",
    "Dealer Name": "PSN Automobiles P.Ltd-Perumbavoor",
    "SCode": "1S4063",
    "State": "Kerala",
    "City": "Kalady",
    "Contact No.": "9840730250"
  },
  {
    "Organization": "South-1",
    "Manager Name": "Abin / Paulson",
    "Manager Level": "WM",
    "Dealer Name": "PSN Automobiles P.Ltd-Perumbavoor",
    "SCode": "1S4063",
    "State": "Kerala",
    "City": "Kalady",
    "Contact No.": "9995444829,9895191233"
  },
  {
    "Organization": "South-1",
    "Manager Name": "MR. Georgy Zachariah",
    "Manager Level": "ASM",
    "Dealer Name": "PSN Automobiles P.Ltd-Perumbavoor",
    "SCode": "1S4063",
    "State": "Kerala",
    "City": "Kalady",
    "Contact No.": "9895398896"
  },
  {
    "Organization": "South-1",
    "Manager Name": "Syam / Jimmy",
    "Manager Level": "MD",
    "Dealer Name": "PSN Automobiles P.Ltd-Perumbavoor",
    "SCode": "1S4063",
    "State": "Kerala",
    "City": "Kalady",
    "Contact No.": "9895020288,9895440444"
  },
  {
    "Organization": "South-1",
    "Manager Name": "Abhijith Ajith / Stibin Saju",
    "Manager Level": "EOS Site Incharge",
    "Dealer Name": "PSN Automobiles P.Ltd-Perumbavoor",
    "SCode": "1S4063",
    "State": "Kerala",
    "City": "Kalady",
    "Contact No.": "9946967000,7736769994"
  },
  {
    "Organization": "South-1",
    "Manager Name": "Ponraj K (D) / Yuvaraj B (N)",
    "Manager Level": "CSM",
    "Dealer Name": "PSN Automobiles P.Ltd-Perumbavoor",
    "SCode": "1S4063",
    "State": "Kerala",
    "City": "Kalady",
    "Contact No.": "7356111315,9543338783"
  },
  {
    "Organization": "South-1",
    "Manager Name": "Aebal Christy C J (D) / Yuvaraj B (N)",
    "Manager Level": "CSM",
    "Dealer Name": "PSN Automobiles P.Ltd-Trissur",
    "SCode": "1S4060",
    "State": "Kerala",
    "City": "Thrissur",
    "Contact No.": "7358046976,9543338783"
  },
  {
    "Organization": "South-1",
    "Manager Name": "Jins / Girish",
    "Manager Level": "WM",
    "Dealer Name": "PSN Automobiles P.Ltd-Trissur",
    "SCode": "1S4060",
    "State": "Kerala",
    "City": "Thrissur",
    "Contact No.": "9567864329,8138910940"
  },
  {
    "Organization": "South-1",
    "Manager Name": "Al Ameen",
    "Manager Level": "EOS Site Incharge",
    "Dealer Name": "PSN Automobiles P.Ltd-Trissur",
    "SCode": "1S4060",
    "State": "Kerala",
    "City": "Thrissur",
    "Contact No.": "7736769994"
  },
  {
    "Organization": "South-1",
    "Manager Name": "Syam / Jimmy",
    "Manager Level": "MD",
    "Dealer Name": "PSN Automobiles P.Ltd-Trissur",
    "SCode": "1S4060",
    "State": "Kerala",
    "City": "Thrissur",
    "Contact No.": "9895020288,9895440444"
  },
  {
    "Organization": "South-1",
    "Manager Name": "Radhakrishnan",
    "Manager Level": "RSM",
    "Dealer Name": "PSN Automobiles P.Ltd-Trissur",
    "SCode": "1S4060",
    "State": "Kerala",
    "City": "Thrissur",
    "Contact No.": "9840730250"
  },
  {
    "Organization": "South-1",
    "Manager Name": "MR. Georgy Zachariah",
    "Manager Level": "ASM",
    "Dealer Name": "PSN Automobiles P.Ltd-Trissur",
    "SCode": "1S4060",
    "State": "Kerala",
    "City": "Thrissur",
    "Contact No.": "9895398896"
  },
  {
    "Organization": "South-2",
    "Manager Name": "Shrinivas (D) / Ravikumar.G.S (N)",
    "Manager Level": "EOS Site Incharge",
    "Dealer Name": "PSN Automobiles Pvt Ltd-Doddaballapur",
    "SCode": "1S6110",
    "State": "Karnataka",
    "City": "Bengaluru",
    "Contact No.": "9686679588,9686376812"
  },
  {
    "Organization": "South-2",
    "Manager Name": "S Balaji",
    "Manager Level": "ASM",
    "Dealer Name": "PSN Automobiles Pvt Ltd-Doddaballapur",
    "SCode": "1S6110",
    "State": "Karnataka",
    "City": "Bengaluru",
    "Contact No.": "9840833723"
  },
  {
    "Organization": "South-2",
    "Manager Name": "Surya Narayanan (D) / Jeevan Kumar (N)",
    "Manager Level": "CSM",
    "Dealer Name": "PSN Automobiles Pvt Ltd-Doddaballapur",
    "SCode": "1S6110",
    "State": "Karnataka",
    "City": "Bengaluru",
    "Contact No.": "7760512233,7892822611"
  },
  {
    "Organization": "South-2",
    "Manager Name": "Sudarshan",
    "Manager Level": "MD",
    "Dealer Name": "PSN Automobiles Pvt Ltd-Doddaballapur",
    "SCode": "1S6110",
    "State": "Karnataka",
    "City": "Bengaluru",
    "Contact No.": "9686621616"
  },
  {
    "Organization": "South-2",
    "Manager Name": "Yuvraj C V",
    "Manager Level": "WM",
    "Dealer Name": "PSN Automobiles Pvt Ltd-Doddaballapur",
    "SCode": "1S6110",
    "State": "Karnataka",
    "City": "Bengaluru",
    "Contact No.": "9686679592"
  },
  {
    "Organization": "South-2",
    "Manager Name": "N Narayanan",
    "Manager Level": "RSM",
    "Dealer Name": "PSN Automobiles Pvt Ltd-Doddaballapur",
    "SCode": "1S6110",
    "State": "Karnataka",
    "City": "Bengaluru",
    "Contact No.": "8123036700"
  },
  {
    "Organization": "South-2",
    "Manager Name": "S Balaji",
    "Manager Level": "ASM",
    "Dealer Name": "PSN Automotive Marketing Pvt Ltd-Chikkaballapur",
    "SCode": "1S6183",
    "State": "Karnataka",
    "City": "Chikkaballapur",
    "Contact No.": "9840833723"
  },
  {
    "Organization": "South-2",
    "Manager Name": "Yarappa Reddy",
    "Manager Level": "WM",
    "Dealer Name": "PSN Automotive Marketing Pvt Ltd-Chikkaballapur",
    "SCode": "1S6183",
    "State": "Karnataka",
    "City": "Chikkaballapur",
    "Contact No.": "9686905190"
  },
  {
    "Organization": "South-2",
    "Manager Name": "N Narayanan",
    "Manager Level": "RSM",
    "Dealer Name": "PSN Automotive Marketing Pvt Ltd-Chikkaballapur",
    "SCode": "1S6183",
    "State": "Karnataka",
    "City": "Chikkaballapur",
    "Contact No.": "8123036700"
  },
  {
    "Organization": "South-2",
    "Manager Name": "Parthiv Purani",
    "Manager Level": "MD",
    "Dealer Name": "PSN Automotive Marketing Pvt Ltd-Chikkaballapur",
    "SCode": "1S6183",
    "State": "Karnataka",
    "City": "Chikkaballapur",
    "Contact No.": "9686621617"
  },
  {
    "Organization": "South-2",
    "Manager Name": "Surya Narayanan (D) / Jeevan Kumar (N)",
    "Manager Level": "CSM",
    "Dealer Name": "PSN Automotive Marketing Pvt Ltd-Chikkaballapur",
    "SCode": "1S6183",
    "State": "Karnataka",
    "City": "Chikkaballapur",
    "Contact No.": "7760512233,7892822611"
  },
  {
    "Organization": "South-2",
    "Manager Name": "Devaraja B V / Abijith",
    "Manager Level": "EOS Site Incharge",
    "Dealer Name": "PSN Automotive Marketing Pvt Ltd-Chikkaballapur",
    "SCode": "1S6183",
    "State": "Karnataka",
    "City": "Chikkaballapur",
    "Contact No.": "8904279307,9632049716"
  },
  {
    "Organization": "South-2",
    "Manager Name": "Gururaj M",
    "Manager Level": "MD",
    "Dealer Name": "PSN Automotive Marketing Pvt Ltd-Hassan",
    "SCode": "1S6077",
    "State": "Karnataka",
    "City": "Hassan",
    "Contact No.": "9108461522"
  },
  {
    "Organization": "South-2",
    "Manager Name": "N Narayanan",
    "Manager Level": "RSM",
    "Dealer Name": "PSN Automotive Marketing Pvt Ltd-Hassan",
    "SCode": "1S6077",
    "State": "Karnataka",
    "City": "Hassan",
    "Contact No.": "8123036700"
  },
  {
    "Organization": "South-2",
    "Manager Name": "Prem Sagar / Rakesh",
    "Manager Level": "EOS Site Incharge",
    "Dealer Name": "PSN Automotive Marketing Pvt Ltd-Hassan",
    "SCode": "1S6077",
    "State": "Karnataka",
    "City": "Hassan",
    "Contact No.": "9900584525,9731789527"
  },
  {
    "Organization": "South-2",
    "Manager Name": "Basavaraj (D) / Mahamadali T Maniyar (N)",
    "Manager Level": "CSM",
    "Dealer Name": "PSN Automotive Marketing Pvt Ltd-Hassan",
    "SCode": "1S6077",
    "State": "Karnataka",
    "City": "Hassan",
    "Contact No.": "8971001188,9972619686"
  },
  {
    "Organization": "South-2",
    "Manager Name": "PRABHU S MUGALKHOD",
    "Manager Level": "ASM",
    "Dealer Name": "PSN Automotive Marketing Pvt Ltd-Hassan",
    "SCode": "1S6077",
    "State": "Karnataka",
    "City": "Hassan",
    "Contact No.": "9980512550"
  },
  {
    "Organization": "South-2",
    "Manager Name": "Shiv Prasad",
    "Manager Level": "WM",
    "Dealer Name": "PSN Automotive Marketing Pvt Ltd-Hassan",
    "SCode": "1S6077",
    "State": "Karnataka",
    "City": "Hassan",
    "Contact No.": "9900729525"
  },
  {
    "Organization": "South-2",
    "Manager Name": "Manjunath S B (D) / Mahamadali T Maniyar (N)",
    "Manager Level": "CSM",
    "Dealer Name": "PSN Automotive Marketing Pvt Ltd-Haveri",
    "SCode": "1S6162",
    "State": "Karnataka",
    "City": "Haveri",
    "Contact No.": "9972018641,9972619686"
  },
  {
    "Organization": "South-2",
    "Manager Name": "N Narayanan",
    "Manager Level": "RSM",
    "Dealer Name": "PSN Automotive Marketing Pvt Ltd-Haveri",
    "SCode": "1S6162",
    "State": "Karnataka",
    "City": "Haveri",
    "Contact No.": "8123036700"
  },
  {
    "Organization": "South-2",
    "Manager Name": "PRABHU S MUGALKHOD",
    "Manager Level": "ASM",
    "Dealer Name": "PSN Automotive Marketing Pvt Ltd-Haveri",
    "SCode": "1S6162",
    "State": "Karnataka",
    "City": "Haveri",
    "Contact No.": "9980512550"
  },
  {
    "Organization": "South-2",
    "Manager Name": "Satish",
    "Manager Level": "WM",
    "Dealer Name": "PSN Automotive Marketing Pvt Ltd-Haveri",
    "SCode": "1S6162",
    "State": "Karnataka",
    "City": "Haveri",
    "Contact No.": "9632038790"
  },
  {
    "Organization": "South-2",
    "Manager Name": "Kartik",
    "Manager Level": "EOS Site Incharge",
    "Dealer Name": "PSN Automotive Marketing Pvt Ltd-Haveri",
    "SCode": "1S6162",
    "State": "Karnataka",
    "City": "Haveri",
    "Contact No.": "9035997790"
  },
  {
    "Organization": "South-2",
    "Manager Name": "Parthiv Purani",
    "Manager Level": "MD",
    "Dealer Name": "PSN Automotive Marketing Pvt Ltd-Haveri",
    "SCode": "1S6162",
    "State": "Karnataka",
    "City": "Haveri",
    "Contact No.": "9686621617"
  },
  {
    "Organization": "South-2",
    "Manager Name": "Ravi Nayak",
    "Manager Level": "WM",
    "Dealer Name": "PSN Automotive Marketing Pvt Ltd-Hubali",
    "SCode": "1S6050",
    "State": "Karnataka",
    "City": "Hubli-dharwad",
    "Contact No.": "9686541028"
  },
  {
    "Organization": "South-2",
    "Manager Name": "Shyam Kumar",
    "Manager Level": "EOS Site Incharge",
    "Dealer Name": "PSN Automotive Marketing Pvt Ltd-Hubali",
    "SCode": "1S6050",
    "State": "Karnataka",
    "City": "Hubli-dharwad",
    "Contact No.": "9686708384"
  },
  {
    "Organization": "South-2",
    "Manager Name": "N Narayanan",
    "Manager Level": "RSM",
    "Dealer Name": "PSN Automotive Marketing Pvt Ltd-Hubali",
    "SCode": "1S6050",
    "State": "Karnataka",
    "City": "Hubli-dharwad",
    "Contact No.": "8123036700"
  },
  {
    "Organization": "South-2",
    "Manager Name": "Parthiv Purani",
    "Manager Level": "MD",
    "Dealer Name": "PSN Automotive Marketing Pvt Ltd-Hubali",
    "SCode": "1S6050",
    "State": "Karnataka",
    "City": "Hubli-dharwad",
    "Contact No.": "9686621617"
  },
  {
    "Organization": "South-2",
    "Manager Name": "PRABHU S MUGALKHOD",
    "Manager Level": "ASM",
    "Dealer Name": "PSN Automotive Marketing Pvt Ltd-Hubali",
    "SCode": "1S6050",
    "State": "Karnataka",
    "City": "Hubli-dharwad",
    "Contact No.": "9980512550"
  },
  {
    "Organization": "South-2",
    "Manager Name": "Manjunath S B (D) / Mahamadali T Maniyar (N)",
    "Manager Level": "CSM",
    "Dealer Name": "PSN Automotive Marketing Pvt Ltd-Hubali",
    "SCode": "1S6050",
    "State": "Karnataka",
    "City": "Hubli-dharwad",
    "Contact No.": "9972018641,9972619686"
  },
  {
    "Organization": "South-2",
    "Manager Name": "Venkatesha G",
    "Manager Level": "CSM",
    "Dealer Name": "PSN Automotive Marketing Pvt Ltd-Hubali",
    "SCode": "1S6050",
    "State": "Karnataka",
    "City": "Hubli-dharwad",
    "Contact No.": "9108361445"
  },
  {
    "Organization": "South-2",
    "Manager Name": "Ajith",
    "Manager Level": "WM",
    "Dealer Name": "PSN Automotive Marketing Pvt Ltd-Karkala",
    "SCode": "1S6109",
    "State": "Karnataka",
    "City": "Udupi",
    "Contact No.": "9686450524"
  },
  {
    "Organization": "South-2",
    "Manager Name": "Dinesh",
    "Manager Level": "EOS Site Incharge",
    "Dealer Name": "PSN Automotive Marketing Pvt Ltd-Karkala",
    "SCode": "1S6109",
    "State": "Karnataka",
    "City": "Udupi",
    "Contact No.": "8123830386"
  },
  {
    "Organization": "South-2",
    "Manager Name": "N Narayanan",
    "Manager Level": "RSM",
    "Dealer Name": "PSN Automotive Marketing Pvt Ltd-Karkala",
    "SCode": "1S6109",
    "State": "Karnataka",
    "City": "Udupi",
    "Contact No.": "8123036700"
  },
  {
    "Organization": "South-2",
    "Manager Name": "Govardhan H C (D) / Mahamadali T Maniyar (N)",
    "Manager Level": "CSM",
    "Dealer Name": "PSN Automotive Marketing Pvt Ltd-Karkala",
    "SCode": "1S6109",
    "State": "Karnataka",
    "City": "Udupi",
    "Contact No.": "8904513336,9972619686"
  },
  {
    "Organization": "South-2",
    "Manager Name": "PRABHU S MUGALKHOD",
    "Manager Level": "ASM",
    "Dealer Name": "PSN Automotive Marketing Pvt Ltd-Karkala",
    "SCode": "1S6109",
    "State": "Karnataka",
    "City": "Udupi",
    "Contact No.": "9980512550"
  },
  {
    "Organization": "South-2",
    "Manager Name": "Mr Gururaj",
    "Manager Level": "MD",
    "Dealer Name": "PSN Automotive Marketing Pvt Ltd-Karkala",
    "SCode": "1S6109",
    "State": "Karnataka",
    "City": "Udupi",
    "Contact No.": "9108461522"
  },
  {
    "Organization": "South-2",
    "Manager Name": "Basavaraj (D) / Mahamadali T Maniyar (N)",
    "Manager Level": "CSM",
    "Dealer Name": "PSN Automotive Marketing Pvt Ltd-Kushalnagar",
    "SCode": "1S6224",
    "State": "Karnataka",
    "City": "Madikeri",
    "Contact No.": "8971001188,9972619686"
  },
  {
    "Organization": "South-2",
    "Manager Name": "Kishan Kumar",
    "Manager Level": "WM",
    "Dealer Name": "PSN Automotive Marketing Pvt Ltd-Kushalnagar",
    "SCode": "1S6224",
    "State": "Karnataka",
    "City": "Madikeri",
    "Contact No.": "8123653870"
  },
  {
    "Organization": "South-2",
    "Manager Name": "N Narayanan",
    "Manager Level": "RSM",
    "Dealer Name": "PSN Automotive Marketing Pvt Ltd-Kushalnagar",
    "SCode": "1S6224",
    "State": "Karnataka",
    "City": "Madikeri",
    "Contact No.": "8123036700"
  },
  {
    "Organization": "South-2",
    "Manager Name": "Gururaj M",
    "Manager Level": "MD",
    "Dealer Name": "PSN Automotive Marketing Pvt Ltd-Kushalnagar",
    "SCode": "1S6224",
    "State": "Karnataka",
    "City": "Madikeri",
    "Contact No.": "9108461522"
  },
  {
    "Organization": "South-2",
    "Manager Name": "John Steevan",
    "Manager Level": "EOS Site Incharge",
    "Dealer Name": "PSN Automotive Marketing Pvt Ltd-Kushalnagar",
    "SCode": "1S6224",
    "State": "Karnataka",
    "City": "Madikeri",
    "Contact No.": "8123653820"
  },
  {
    "Organization": "South-2",
    "Manager Name": "Prabhu S Mugalkhod",
    "Manager Level": "ASM",
    "Dealer Name": "PSN Automotive Marketing Pvt Ltd-Kushalnagar",
    "SCode": "1S6224",
    "State": "Karnataka",
    "City": "Madikeri",
    "Contact No.": "9980512550"
  },
  {
    "Organization": "West-2",
    "Manager Name": "Ashish Kumar Pyasi",
    "Manager Level": "CSM",
    "Dealer Name": "Paras Trucking-Deori",
    "SCode": "1S5100",
    "State": "Madhya Pradesh",
    "City": "Sagar",
    "Contact No.": "9910950795"
  },
  {
    "Organization": "West-2",
    "Manager Name": "Rajesh Mishra / Rohit Jain",
    "Manager Level": "WM",
    "Dealer Name": "Paras Trucking-Deori",
    "SCode": "1S5100",
    "State": "Madhya Pradesh",
    "City": "Sagar",
    "Contact No.": "9201973110,9201973101"
  },
  {
    "Organization": "West-2",
    "Manager Name": "Vishal Kulkarni",
    "Manager Level": "ASM",
    "Dealer Name": "Paras Trucking-Deori",
    "SCode": "1S5100",
    "State": "Madhya Pradesh",
    "City": "Sagar",
    "Contact No.": "8349997686"
  },
  {
    "Organization": "West-2",
    "Manager Name": "Sudhir Kumar",
    "Manager Level": "RSM",
    "Dealer Name": "Paras Trucking-Deori",
    "SCode": "1S5100",
    "State": "Madhya Pradesh",
    "City": "Sagar",
    "Contact No.": "9752542733"
  },
  {
    "Organization": "West-2",
    "Manager Name": "Ratnesh Lodhi / Manish Dubey",
    "Manager Level": "EOS Site Incharge",
    "Dealer Name": "Paras Trucking-Deori",
    "SCode": "1S5100",
    "State": "Madhya Pradesh",
    "City": "Sagar",
    "Contact No.": "9201973108,9201973102"
  },
  {
    "Organization": "West-2",
    "Manager Name": "Ajay Jain",
    "Manager Level": "MD",
    "Dealer Name": "Paras Trucking-Deori",
    "SCode": "1S5100",
    "State": "Madhya Pradesh",
    "City": "Sagar",
    "Contact No.": "7999917385"
  },
  {
    "Organization": "West-2",
    "Manager Name": "Sujan Saha",
    "Manager Level": "RSM",
    "Dealer Name": "Patel Motors Private Limited (ProX)-Indore",
    "SCode": "1S5112",
    "State": "Madhya Pradesh",
    "City": "Indore",
    "Contact No.": "9903978950"
  },
  {
    "Organization": "West-2",
    "Manager Name": "Mohammed Faizan Memon",
    "Manager Level": "CSM",
    "Dealer Name": "Patel Motors Private Limited (ProX)-Indore",
    "SCode": "1S5112",
    "State": "Madhya Pradesh",
    "City": "Indore",
    "Contact No.": "9664004929"
  },
  {
    "Organization": "West-2",
    "Manager Name": "Deepak Patel",
    "Manager Level": "MD",
    "Dealer Name": "Patel Motors Private Limited (ProX)-Indore",
    "SCode": "1S5112",
    "State": "Madhya Pradesh",
    "City": "Indore",
    "Contact No.": "9826662999"
  },
  {
    "Organization": "West-2",
    "Manager Name": "Harsh Beluse",
    "Manager Level": "WM",
    "Dealer Name": "Patel Motors Private Limited (ProX)-Indore",
    "SCode": "1S5112",
    "State": "Madhya Pradesh",
    "City": "Indore",
    "Contact No.": "8770050307"
  },
  {
    "Organization": "West-2",
    "Manager Name": "Gagan Sharma / Shailesh",
    "Manager Level": "EOS Site Incharge",
    "Dealer Name": "Patel Motors-Bicholi Mardana",
    "SCode": "1S5035",
    "State": "Madhya Pradesh",
    "City": "Indore",
    "Contact No.": "8226008178,6306779419"
  },
  {
    "Organization": "West-2",
    "Manager Name": "Farrel Lowden",
    "Manager Level": "WM",
    "Dealer Name": "Patel Motors-Bicholi Mardana",
    "SCode": "1S5035",
    "State": "Madhya Pradesh",
    "City": "Indore",
    "Contact No.": "9977703911"
  },
  {
    "Organization": "West-2",
    "Manager Name": "Sudhir Kumar",
    "Manager Level": "RSM",
    "Dealer Name": "Patel Motors-Bicholi Mardana",
    "SCode": "1S5035",
    "State": "Madhya Pradesh",
    "City": "Indore",
    "Contact No.": "9752542733"
  },
  {
    "Organization": "West-2",
    "Manager Name": "Vivek Kumar",
    "Manager Level": "ASM",
    "Dealer Name": "Patel Motors-Bicholi Mardana",
    "SCode": "1S5035",
    "State": "Madhya Pradesh",
    "City": "Indore",
    "Contact No.": "8171110903"
  },
  {
    "Organization": "West-2",
    "Manager Name": "Rahul Kumar",
    "Manager Level": "CSM",
    "Dealer Name": "Patel Motors-Bicholi Mardana",
    "SCode": "1S5035",
    "State": "Madhya Pradesh",
    "City": "Indore",
    "Contact No.": "9770135374"
  },
  {
    "Organization": "West-2",
    "Manager Name": "Anshuman Katare / Deepak Patel",
    "Manager Level": "MD",
    "Dealer Name": "Patel Motors-Bicholi Mardana",
    "SCode": "1S5035",
    "State": "Madhya Pradesh",
    "City": "Indore",
    "Contact No.": "9826434997,9826662999"
  },
  {
    "Organization": "West-2",
    "Manager Name": "Hariom Patel / Naman",
    "Manager Level": "EOS Site Incharge",
    "Dealer Name": "Patel Motors-Indore",
    "SCode": "1S5005",
    "State": "Madhya Pradesh",
    "City": "Indore",
    "Contact No.": "9111001467,7611121109"
  },
  {
    "Organization": "West-2",
    "Manager Name": "Himanshu Rawat",
    "Manager Level": "CSM",
    "Dealer Name": "Patel Motors-Indore",
    "SCode": "1S5005",
    "State": "Madhya Pradesh",
    "City": "Indore",
    "Contact No.": "8630936244"
  },
  {
    "Organization": "West-2",
    "Manager Name": "Jitendra Wakde",
    "Manager Level": "WM",
    "Dealer Name": "Patel Motors-Indore",
    "SCode": "1S5005",
    "State": "Madhya Pradesh",
    "City": "Indore",
    "Contact No.": "7611121109"
  },
  {
    "Organization": "West-2",
    "Manager Name": "Vivek Kumar",
    "Manager Level": "ASM",
    "Dealer Name": "Patel Motors-Indore",
    "SCode": "1S5005",
    "State": "Madhya Pradesh",
    "City": "Indore",
    "Contact No.": "8171110903"
  },
  {
    "Organization": "West-2",
    "Manager Name": "Anshuman Katare / Deepak Patel",
    "Manager Level": "MD",
    "Dealer Name": "Patel Motors-Indore",
    "SCode": "1S5005",
    "State": "Madhya Pradesh",
    "City": "Indore",
    "Contact No.": "9826434997,9826662999"
  },
  {
    "Organization": "West-2",
    "Manager Name": "Sudhir Kumar",
    "Manager Level": "RSM",
    "Dealer Name": "Patel Motors-Indore",
    "SCode": "1S5005",
    "State": "Madhya Pradesh",
    "City": "Indore",
    "Contact No.": "9752542733"
  },
  {
    "Organization": "West-2",
    "Manager Name": "Vivek Kumar",
    "Manager Level": "ASM",
    "Dealer Name": "Patel Motors-Ujjain",
    "SCode": "1S5055",
    "State": "Madhya Pradesh",
    "City": "Ujjain",
    "Contact No.": "8171110903"
  },
  {
    "Organization": "West-2",
    "Manager Name": "Sudhir Kumar",
    "Manager Level": "RSM",
    "Dealer Name": "Patel Motors-Ujjain",
    "SCode": "1S5055",
    "State": "Madhya Pradesh",
    "City": "Ujjain",
    "Contact No.": "9752542733"
  },
  {
    "Organization": "West-2",
    "Manager Name": "Shivam Bhawsar (D) / Anees Mansuri (N)",
    "Manager Level": "EOS Site Incharge",
    "Dealer Name": "Patel Motors-Ujjain",
    "SCode": "1S5055",
    "State": "Madhya Pradesh",
    "City": "Ujjain",
    "Contact No.": "9109904732,7566715543"
  },
  {
    "Organization": "West-2",
    "Manager Name": "Divyanshu Malviy",
    "Manager Level": "CSM",
    "Dealer Name": "Patel Motors-Ujjain",
    "SCode": "1S5055",
    "State": "Madhya Pradesh",
    "City": "Ujjain",
    "Contact No.": "7999436496"
  },
  {
    "Organization": "West-2",
    "Manager Name": "Rahul Bhadouria / Ankur Shrivastava",
    "Manager Level": "WM",
    "Dealer Name": "Patel Motors-Ujjain",
    "SCode": "1S5055",
    "State": "Madhya Pradesh",
    "City": "Ujjain",
    "Contact No.": "9977703917,9826494343"
  },
  {
    "Organization": "West-2",
    "Manager Name": "Quasim Hussain / Deepak Patel",
    "Manager Level": "MD",
    "Dealer Name": "Patel Motors-Ujjain",
    "SCode": "1S5055",
    "State": "Madhya Pradesh",
    "City": "Ujjain",
    "Contact No.": "9977703911,9826662999"
  },
  {
    "Organization": "West-2",
    "Manager Name": "Manish Rawat",
    "Manager Level": "WM",
    "Dealer Name": "Patel Sons Padora-Guna",
    "SCode": "1S5091",
    "State": "Madhya Pradesh",
    "City": "Guna",
    "Contact No.": "8305965406,9752870332"
  },
  {
    "Organization": "West-2",
    "Manager Name": "Arjun Singh Rawat",
    "Manager Level": "MD",
    "Dealer Name": "Patel Sons Padora-Guna",
    "SCode": "1S5091",
    "State": "Madhya Pradesh",
    "City": "Guna",
    "Contact No.": "9752575000"
  },
  {
    "Organization": "West-2",
    "Manager Name": "Sudhir Kumar",
    "Manager Level": "RSM",
    "Dealer Name": "Patel Sons Padora-Guna",
    "SCode": "1S5091",
    "State": "Madhya Pradesh",
    "City": "Guna",
    "Contact No.": "9752542733"
  },
  {
    "Organization": "West-2",
    "Manager Name": "Vivek Kumar",
    "Manager Level": "ASM",
    "Dealer Name": "Patel Sons Padora-Guna",
    "SCode": "1S5091",
    "State": "Madhya Pradesh",
    "City": "Guna",
    "Contact No.": "8171110903"
  },
  {
    "Organization": "West-2",
    "Manager Name": "Ejaj Khan",
    "Manager Level": "CSM",
    "Dealer Name": "Patel Sons Padora-Guna",
    "SCode": "1S5091",
    "State": "Madhya Pradesh",
    "City": "Guna",
    "Contact No.": "9340262172"
  },
  {
    "Organization": "West-2",
    "Manager Name": "Sudhir Kumar",
    "Manager Level": "RSM",
    "Dealer Name": "Patel Sons-Biaora",
    "SCode": "1S5065",
    "State": "Madhya Pradesh",
    "City": "Biaora",
    "Contact No.": "9752542733"
  },
  {
    "Organization": "West-2",
    "Manager Name": "Arjun Singh Rawat",
    "Manager Level": "MD",
    "Dealer Name": "Patel Sons-Biaora",
    "SCode": "1S5065",
    "State": "Madhya Pradesh",
    "City": "Biaora",
    "Contact No.": "9752575000"
  },
  {
    "Organization": "West-2",
    "Manager Name": "Rohit Meena / Narendra",
    "Manager Level": "WM",
    "Dealer Name": "Patel Sons-Biaora",
    "SCode": "1S5065",
    "State": "Madhya Pradesh",
    "City": "Biaora",
    "Contact No.": "9754274030,7828485422"
  },
  {
    "Organization": "West-2",
    "Manager Name": "Ejaj Khan",
    "Manager Level": "CSM",
    "Dealer Name": "Patel Sons-Biaora",
    "SCode": "1S5065",
    "State": "Madhya Pradesh",
    "City": "Biaora",
    "Contact No.": "9340262172"
  },
  {
    "Organization": "West-2",
    "Manager Name": "Vivek Kumar",
    "Manager Level": "ASM",
    "Dealer Name": "Patel Sons-Biaora",
    "SCode": "1S5065",
    "State": "Madhya Pradesh",
    "City": "Biaora",
    "Contact No.": "8171110903"
  },
  {
    "Organization": "West-2",
    "Manager Name": "Saurabh Bajpai",
    "Manager Level": "CSM",
    "Dealer Name": "Patel Sons-Padora",
    "SCode": "1S5053",
    "State": "Madhya Pradesh",
    "City": "Shivpuri",
    "Contact No.": "9630112997"
  },
  {
    "Organization": "West-2",
    "Manager Name": "Sanjay Bairagi",
    "Manager Level": "WM",
    "Dealer Name": "Patel Sons-Padora",
    "SCode": "1S5053",
    "State": "Madhya Pradesh",
    "City": "Shivpuri",
    "Contact No.": "8878346000"
  },
  {
    "Organization": "West-2",
    "Manager Name": "Sudhir Kumar",
    "Manager Level": "RSM",
    "Dealer Name": "Patel Sons-Padora",
    "SCode": "1S5053",
    "State": "Madhya Pradesh",
    "City": "Shivpuri",
    "Contact No.": "9752542733"
  },
  {
    "Organization": "West-2",
    "Manager Name": "Vivek Kumar",
    "Manager Level": "ASM",
    "Dealer Name": "Patel Sons-Padora",
    "SCode": "1S5053",
    "State": "Madhya Pradesh",
    "City": "Shivpuri",
    "Contact No.": "8171110903"
  },
  {
    "Organization": "West-2",
    "Manager Name": "Ankesh Rawat / Sumit Rawat",
    "Manager Level": "EOS Site Incharge",
    "Dealer Name": "Patel Sons-Padora",
    "SCode": "1S5053",
    "State": "Madhya Pradesh",
    "City": "Shivpuri",
    "Contact No.": "8878372000,8878369000"
  },
  {
    "Organization": "West-2",
    "Manager Name": "Arjun Singh Rawat",
    "Manager Level": "MD",
    "Dealer Name": "Patel Sons-Padora",
    "SCode": "1S5053",
    "State": "Madhya Pradesh",
    "City": "Shivpuri",
    "Contact No.": "9752575000"
  },
  {
    "Organization": "West-1",
    "Manager Name": "Mr. Kiran Kasar",
    "Manager Level": "MD",
    "Dealer Name": "Prabha Motors-Jalgaon",
    "SCode": "1S3042",
    "State": "Maharashtra",
    "City": "Jalgaon",
    "Contact No.": "9823161167"
  },
  {
    "Organization": "West-1",
    "Manager Name": "Shrishail Honnagol",
    "Manager Level": "ASM",
    "Dealer Name": "Prabha Motors-Jalgaon",
    "SCode": "1S3042",
    "State": "Maharashtra",
    "City": "Jalgaon",
    "Contact No.": "7700906442"
  },
  {
    "Organization": "West-1",
    "Manager Name": "Sagar Nichite",
    "Manager Level": "CSM",
    "Dealer Name": "Prabha Motors-Jalgaon",
    "SCode": "1S3042",
    "State": "Maharashtra",
    "City": "Jalgaon",
    "Contact No.": "8149683808"
  },
  {
    "Organization": "West-1",
    "Manager Name": "Mr. Bhushan",
    "Manager Level": "WM",
    "Dealer Name": "Prabha Motors-Jalgaon",
    "SCode": "1S3042",
    "State": "Maharashtra",
    "City": "Jalgaon",
    "Contact No.": "9823033373"
  },
  {
    "Organization": "West-1",
    "Manager Name": "Suhas Ramchandra Mane",
    "Manager Level": "RSM",
    "Dealer Name": "Prabha Motors-Jalgaon",
    "SCode": "1S3042",
    "State": "Maharashtra",
    "City": "Jalgaon",
    "Contact No.": "8454812225"
  },
  {
    "Organization": "East-2",
    "Manager Name": "Pradeep Parida",
    "Manager Level": "MD",
    "Dealer Name": "Pranakrushna-Cuttack",
    "SCode": "1S2058",
    "State": "Odisha",
    "City": "Cuttack",
    "Contact No.": "9437021329"
  },
  {
    "Organization": "East-2",
    "Manager Name": "Sanjoy Nayek",
    "Manager Level": "ASM",
    "Dealer Name": "Pranakrushna-Cuttack",
    "SCode": "1S2058",
    "State": "Odisha",
    "City": "Cuttack",
    "Contact No.": "8001165218"
  },
  {
    "Organization": "East-2",
    "Manager Name": "Srimanta Swain",
    "Manager Level": "WM",
    "Dealer Name": "Pranakrushna-Cuttack",
    "SCode": "1S2058",
    "State": "Odisha",
    "City": "Cuttack",
    "Contact No.": "8118054301"
  },
  {
    "Organization": "East-2",
    "Manager Name": "Niket Kumar",
    "Manager Level": "RSM",
    "Dealer Name": "Pranakrushna-Cuttack",
    "SCode": "1S2058",
    "State": "Odisha",
    "City": "Cuttack",
    "Contact No.": "8427733112"
  },
  {
    "Organization": "East-2",
    "Manager Name": "Bikash Kumar Nayak",
    "Manager Level": "CSM",
    "Dealer Name": "Pranakrushna-Cuttack",
    "SCode": "1S2058",
    "State": "Odisha",
    "City": "Cuttack",
    "Contact No.": "8888871462"
  },
  {
    "Organization": "East-2",
    "Manager Name": "Bapi Nayak",
    "Manager Level": "WM",
    "Dealer Name": "Pranakrushna-Jajpur",
    "SCode": "1S2182",
    "State": "Odisha",
    "City": "Jajpur",
    "Contact No.": "7755902125"
  },
  {
    "Organization": "East-2",
    "Manager Name": "Sanjoy Nayek",
    "Manager Level": "ASM",
    "Dealer Name": "Pranakrushna-Jajpur",
    "SCode": "1S2182",
    "State": "Odisha",
    "City": "Jajpur",
    "Contact No.": "8001165218"
  },
  {
    "Organization": "East-2",
    "Manager Name": "Niket Kumar",
    "Manager Level": "RSM",
    "Dealer Name": "Pranakrushna-Jajpur",
    "SCode": "1S2182",
    "State": "Odisha",
    "City": "Jajpur",
    "Contact No.": "8427733112"
  },
  {
    "Organization": "East-2",
    "Manager Name": "Bikash Kumar Nayak",
    "Manager Level": "CSM",
    "Dealer Name": "Pranakrushna-Jajpur",
    "SCode": "1S2182",
    "State": "Odisha",
    "City": "Jajpur",
    "Contact No.": "8888871462"
  },
  {
    "Organization": "East-2",
    "Manager Name": "Pradeep Parida",
    "Manager Level": "MD",
    "Dealer Name": "Pranakrushna-Jajpur",
    "SCode": "1S2182",
    "State": "Odisha",
    "City": "Jajpur",
    "Contact No.": "8668254145"
  },
  {
    "Organization": "West-2",
    "Manager Name": "Kapil Dubey / Premnarayan",
    "Manager Level": "EOS Site Incharge",
    "Dealer Name": "Prayag Automobiles-Katni",
    "SCode": "1S5080",
    "State": "Madhya Pradesh",
    "City": "Katni",
    "Contact No.": "7583843308,7583843300"
  },
  {
    "Organization": "West-2",
    "Manager Name": "Nilesh Kumar",
    "Manager Level": "CSM",
    "Dealer Name": "Prayag Automobiles-Katni",
    "SCode": "1S5080",
    "State": "Madhya Pradesh",
    "City": "Katni",
    "Contact No.": "6260509367"
  },
  {
    "Organization": "West-2",
    "Manager Name": "Vishal Kulkarni",
    "Manager Level": "ASM",
    "Dealer Name": "Prayag Automobiles-Katni",
    "SCode": "1S5080",
    "State": "Madhya Pradesh",
    "City": "Katni",
    "Contact No.": "8349997686"
  },
  {
    "Organization": "West-2",
    "Manager Name": "Raghuveer Singh Rajput",
    "Manager Level": "WM",
    "Dealer Name": "Prayag Automobiles-Katni",
    "SCode": "1S5080",
    "State": "Madhya Pradesh",
    "City": "Katni",
    "Contact No.": "7583843304"
  },
  {
    "Organization": "West-2",
    "Manager Name": "Sudhir Kumar",
    "Manager Level": "RSM",
    "Dealer Name": "Prayag Automobiles-Katni",
    "SCode": "1S5080",
    "State": "Madhya Pradesh",
    "City": "Katni",
    "Contact No.": "9752542733"
  },
  {
    "Organization": "West-2",
    "Manager Name": "Gauri Shankar Dwivedi",
    "Manager Level": "MD",
    "Dealer Name": "Prayag Automobiles-Katni",
    "SCode": "1S5080",
    "State": "Madhya Pradesh",
    "City": "Katni",
    "Contact No.": "7583843302"
  },
  {
    "Organization": "North-2",
    "Manager Name": "Himanshu Chandra",
    "Manager Level": "EOS Site Incharge",
    "Dealer Name": "Prem Auto Enterprises-Agra",
    "SCode": "1S1022",
    "State": "Uttar Pradesh",
    "City": "Agra",
    "Contact No.": "8006215333"
  },
  {
    "Organization": "North-2",
    "Manager Name": "Anshul Kulshreshth",
    "Manager Level": "WM",
    "Dealer Name": "Prem Auto Enterprises-Agra",
    "SCode": "1S1022",
    "State": "Uttar Pradesh",
    "City": "Agra",
    "Contact No.": "8755401923"
  },
  {
    "Organization": "North-2",
    "Manager Name": "Krishnendu Saha",
    "Manager Level": "RSM",
    "Dealer Name": "Prem Auto Enterprises-Agra",
    "SCode": "1S1022",
    "State": "Uttar Pradesh",
    "City": "Agra",
    "Contact No.": "7980433425"
  },
  {
    "Organization": "North-2",
    "Manager Name": "Dharmveer Singh",
    "Manager Level": "MD",
    "Dealer Name": "Prem Auto Enterprises-Agra",
    "SCode": "1S1022",
    "State": "Uttar Pradesh",
    "City": "Agra",
    "Contact No.": "9634235561"
  },
  {
    "Organization": "North-2",
    "Manager Name": "Mukesh Saxena",
    "Manager Level": "ASM",
    "Dealer Name": "Prem Auto Enterprises-Agra",
    "SCode": "1S1022",
    "State": "Uttar Pradesh",
    "City": "Agra",
    "Contact No.": "9599117560"
  },
  {
    "Organization": "North-2",
    "Manager Name": "Shiv Singh Chauhan (D) / Saket Singh (N)",
    "Manager Level": "CSM",
    "Dealer Name": "Prem Auto Enterprises-Agra",
    "SCode": "1S1022",
    "State": "Uttar Pradesh",
    "City": "Agra",
    "Contact No.": "7042404214,8709859215"
  },
  {
    "Organization": "North-2",
    "Manager Name": "Mukesh Saxena",
    "Manager Level": "ASM",
    "Dealer Name": "Prem Auto Enterprises-Aligarh",
    "SCode": "1S1021",
    "State": "Uttar Pradesh",
    "City": "Aligarh",
    "Contact No.": "9599117560"
  },
  {
    "Organization": "North-2",
    "Manager Name": "Krishnendu Saha",
    "Manager Level": "RSM",
    "Dealer Name": "Prem Auto Enterprises-Aligarh",
    "SCode": "1S1021",
    "State": "Uttar Pradesh",
    "City": "Aligarh",
    "Contact No.": "7980433425"
  },
  {
    "Organization": "North-2",
    "Manager Name": "Shiv Singh Chauhan (D) / Saket Singh (N)",
    "Manager Level": "CSM",
    "Dealer Name": "Prem Auto Enterprises-Aligarh",
    "SCode": "1S1021",
    "State": "Uttar Pradesh",
    "City": "Aligarh",
    "Contact No.": "7042404214,8709859215"
  },
  {
    "Organization": "North-2",
    "Manager Name": "Aakib",
    "Manager Level": "WM",
    "Dealer Name": "Prem Auto Enterprises-Aligarh",
    "SCode": "1S1021",
    "State": "Uttar Pradesh",
    "City": "Aligarh",
    "Contact No.": "7252888965"
  },
  {
    "Organization": "North-2",
    "Manager Name": "Dharmveer Singh",
    "Manager Level": "MD",
    "Dealer Name": "Prem Auto Enterprises-Aligarh",
    "SCode": "1S1021",
    "State": "Uttar Pradesh",
    "City": "Aligarh",
    "Contact No.": "9634235561"
  },
  {
    "Organization": "North-2",
    "Manager Name": "Dharmveer Singh",
    "Manager Level": "MD",
    "Dealer Name": "Prem Auto Enterprises-Etawah",
    "SCode": "1S7057",
    "State": "Uttar Pradesh",
    "City": "Etawah",
    "Contact No.": "9634235561"
  },
  {
    "Organization": "North-2",
    "Manager Name": "Shiv Singh Chauhan (D) / Saket Singh (N)",
    "Manager Level": "CSM",
    "Dealer Name": "Prem Auto Enterprises-Etawah",
    "SCode": "1S7057",
    "State": "Uttar Pradesh",
    "City": "Etawah",
    "Contact No.": "7042404214,8709859215"
  },
  {
    "Organization": "North-2",
    "Manager Name": "Mukesh Saxena",
    "Manager Level": "ASM",
    "Dealer Name": "Prem Auto Enterprises-Etawah",
    "SCode": "1S7057",
    "State": "Uttar Pradesh",
    "City": "Etawah",
    "Contact No.": "9599117560"
  },
  {
    "Organization": "North-2",
    "Manager Name": "Mahendra Pratap Singh / Ajay Kumar",
    "Manager Level": "EOS Site Incharge",
    "Dealer Name": "Prem Auto Enterprises-Etawah",
    "SCode": "1S7057",
    "State": "Uttar Pradesh",
    "City": "Etawah",
    "Contact No.": "9368710803,9258112048"
  },
  {
    "Organization": "North-2",
    "Manager Name": "Omkar Mathur",
    "Manager Level": "WM",
    "Dealer Name": "Prem Auto Enterprises-Etawah",
    "SCode": "1S7057",
    "State": "Uttar Pradesh",
    "City": "Etawah",
    "Contact No.": "9258112047"
  },
  {
    "Organization": "North-2",
    "Manager Name": "Krishnendu Saha",
    "Manager Level": "RSM",
    "Dealer Name": "Prem Auto Enterprises-Etawah",
    "SCode": "1S7057",
    "State": "Uttar Pradesh",
    "City": "Etawah",
    "Contact No.": "7980433425"
  },
  {
    "Organization": "North-2",
    "Manager Name": "Sujan Saha",
    "Manager Level": "RSM",
    "Dealer Name": "Prem Auto Sales (ProX)-Agra",
    "SCode": "1S7160",
    "State": "Uttar Pradesh",
    "City": "Agra",
    "Contact No.": "9903978950"
  },
  {
    "Organization": "North-2",
    "Manager Name": "Anshul",
    "Manager Level": "MD",
    "Dealer Name": "Prem Auto Sales (ProX)-Agra",
    "SCode": "1S7160",
    "State": "Uttar Pradesh",
    "City": "Agra",
    "Contact No.": "8755401923"
  },
  {
    "Organization": "North-2",
    "Manager Name": "Gaurav",
    "Manager Level": "EOS Site Incharge",
    "Dealer Name": "Prem Auto Sales (ProX)-Agra",
    "SCode": "1S7160",
    "State": "Uttar Pradesh",
    "City": "Agra",
    "Contact No.": "9286823659"
  },
  {
    "Organization": "North-2",
    "Manager Name": "Kuldeep",
    "Manager Level": "WM",
    "Dealer Name": "Prem Auto Sales (ProX)-Agra",
    "SCode": "1S7160",
    "State": "Uttar Pradesh",
    "City": "Agra",
    "Contact No.": "9286823660"
  },
  {
    "Organization": "North-2",
    "Manager Name": "Akhlad Mehboob",
    "Manager Level": "CSM",
    "Dealer Name": "Prem Auto Sales (ProX)-Agra",
    "SCode": "1S7160",
    "State": "Uttar Pradesh",
    "City": "Agra",
    "Contact No.": "8938829119"
  },
  {
    "Organization": "North-2",
    "Manager Name": "Afzal Asif",
    "Manager Level": "EOS Site Incharge",
    "Dealer Name": "Prem Motors-Lalitpur",
    "SCode": "1S7095",
    "State": "Uttar Pradesh",
    "City": "Lalitpur",
    "Contact No.": "8960054816"
  },
  {
    "Organization": "North-2",
    "Manager Name": "Abhishek Agarwal",
    "Manager Level": "MD",
    "Dealer Name": "Prem Motors-Lalitpur",
    "SCode": "1S7095",
    "State": "Uttar Pradesh",
    "City": "Lalitpur",
    "Contact No.": "8960054810,9695454694"
  },
  {
    "Organization": "North-2",
    "Manager Name": "Nitin Gupta",
    "Manager Level": "ASM",
    "Dealer Name": "Prem Motors-Lalitpur",
    "SCode": "1S7095",
    "State": "Uttar Pradesh",
    "City": "Lalitpur",
    "Contact No.": "7080811550"
  },
  {
    "Organization": "North-2",
    "Manager Name": "Krishnendu Saha",
    "Manager Level": "RSM",
    "Dealer Name": "Prem Motors-Lalitpur",
    "SCode": "1S7095",
    "State": "Uttar Pradesh",
    "City": "Lalitpur",
    "Contact No.": "7980433425"
  },
  {
    "Organization": "North-2",
    "Manager Name": "Faisal Ansari (D) / Saket Singh (N)",
    "Manager Level": "CSM",
    "Dealer Name": "Prem Motors-Lalitpur",
    "SCode": "1S7095",
    "State": "Uttar Pradesh",
    "City": "Lalitpur",
    "Contact No.": "9682977311,8709859215"
  },
  {
    "Organization": "North-2",
    "Manager Name": "Raj Kumar",
    "Manager Level": "WM",
    "Dealer Name": "Prem Motors-Lalitpur",
    "SCode": "1S7095",
    "State": "Uttar Pradesh",
    "City": "Lalitpur",
    "Contact No.": "8960054812"
  },
  {
    "Organization": "North-2",
    "Manager Name": "Mr. Abhishek Agarwal",
    "Manager Level": "MD",
    "Dealer Name": "Prem Motors-Mahoba",
    "SCode": "1S1213",
    "State": "Uttar Pradesh",
    "City": "Mahoba",
    "Contact No.": "9695454694"
  },
  {
    "Organization": "North-2",
    "Manager Name": "Nitin Gupta",
    "Manager Level": "ASM",
    "Dealer Name": "Prem Motors-Mahoba",
    "SCode": "1S1213",
    "State": "Uttar Pradesh",
    "City": "Mahoba",
    "Contact No.": "7080811550"
  },
  {
    "Organization": "North-2",
    "Manager Name": "Abhay Yadav (D) / Saket Singh (N)",
    "Manager Level": "CSM",
    "Dealer Name": "Prem Motors-Mahoba",
    "SCode": "1S1213",
    "State": "Uttar Pradesh",
    "City": "Mahoba",
    "Contact No.": "8267948718,8709859215"
  },
  {
    "Organization": "North-2",
    "Manager Name": "Krishnendu Saha",
    "Manager Level": "RSM",
    "Dealer Name": "Prem Motors-Mahoba",
    "SCode": "1S1213",
    "State": "Uttar Pradesh",
    "City": "Mahoba",
    "Contact No.": "7980433425"
  },
  {
    "Organization": "North-2",
    "Manager Name": "Durga Prasad",
    "Manager Level": "WM",
    "Dealer Name": "Prem Motors-Mahoba",
    "SCode": "1S1213",
    "State": "Uttar Pradesh",
    "City": "Mahoba",
    "Contact No.": "8960054817"
  },
  {
    "Organization": "North-2",
    "Manager Name": "SAURABH TIWARI",
    "Manager Level": "EOS Site Incharge",
    "Dealer Name": "Prem Motors-Mahoba",
    "SCode": "1S1213",
    "State": "Uttar Pradesh",
    "City": "Mahoba",
    "Contact No.": "8960054818"
  },
  {
    "Organization": "North-2",
    "Manager Name": "Krishnendu Saha",
    "Manager Level": "RSM",
    "Dealer Name": "Prem Motors-Zhansi",
    "SCode": "1S1154",
    "State": "Uttar Pradesh",
    "City": "Jhansi",
    "Contact No.": "7980433425"
  },
  {
    "Organization": "North-2",
    "Manager Name": "Abhishek Agarwal",
    "Manager Level": "MD",
    "Dealer Name": "Prem Motors-Zhansi",
    "SCode": "1S1154",
    "State": "Uttar Pradesh",
    "City": "Jhansi",
    "Contact No.": "8960054810,9695454694"
  },
  {
    "Organization": "North-2",
    "Manager Name": "Asif Sattar Khan",
    "Manager Level": "EOS Site Incharge",
    "Dealer Name": "Prem Motors-Zhansi",
    "SCode": "1S1154",
    "State": "Uttar Pradesh",
    "City": "Jhansi",
    "Contact No.": "8303173603"
  },
  {
    "Organization": "North-2",
    "Manager Name": "Sunil Raikwar",
    "Manager Level": "WM",
    "Dealer Name": "Prem Motors-Zhansi",
    "SCode": "1S1154",
    "State": "Uttar Pradesh",
    "City": "Jhansi",
    "Contact No.": "6391208585"
  },
  {
    "Organization": "North-2",
    "Manager Name": "Nitin Gupta",
    "Manager Level": "ASM",
    "Dealer Name": "Prem Motors-Zhansi",
    "SCode": "1S1154",
    "State": "Uttar Pradesh",
    "City": "Jhansi",
    "Contact No.": "7080811550"
  },
  {
    "Organization": "North-2",
    "Manager Name": "Faisal Ansari (D) / Saket Singh (N)",
    "Manager Level": "CSM",
    "Dealer Name": "Prem Motors-Zhansi",
    "SCode": "1S1154",
    "State": "Uttar Pradesh",
    "City": "Jhansi",
    "Contact No.": "9682977311,8709859215"
  },
  {
    "Organization": "West-2",
    "Manager Name": "Deepak Basnayat",
    "Manager Level": "CSM",
    "Dealer Name": "Pri Motors-Palanpur",
    "SCode": "1S3376",
    "State": "Gujarat",
    "City": "Palanpur",
    "Contact No.": "7300735475"
  },
  {
    "Organization": "West-2",
    "Manager Name": "Mukesh",
    "Manager Level": "WM",
    "Dealer Name": "Pri Motors-Palanpur",
    "SCode": "1S3376",
    "State": "Gujarat",
    "City": "Palanpur",
    "Contact No.": "8530683334"
  },
  {
    "Organization": "West-2",
    "Manager Name": "Vipul Barot",
    "Manager Level": "ASM",
    "Dealer Name": "Pri Motors-Palanpur",
    "SCode": "1S3376",
    "State": "Gujarat",
    "City": "Palanpur",
    "Contact No.": "9638341568"
  },
  {
    "Organization": "West-2",
    "Manager Name": "Javed",
    "Manager Level": "EOS Site Incharge",
    "Dealer Name": "Pri Motors-Palanpur",
    "SCode": "1S3376",
    "State": "Gujarat",
    "City": "Palanpur",
    "Contact No.": "7861812905"
  },
  {
    "Organization": "West-2",
    "Manager Name": "Sudhir Kumar",
    "Manager Level": "RSM",
    "Dealer Name": "Pri Motors-Palanpur",
    "SCode": "1S3376",
    "State": "Gujarat",
    "City": "Palanpur",
    "Contact No.": "9752542733"
  },
  {
    "Organization": "West-2",
    "Manager Name": "Ronak Panchal",
    "Manager Level": "MD",
    "Dealer Name": "Pri Motors-Palanpur",
    "SCode": "1S3376",
    "State": "Gujarat",
    "City": "Palanpur",
    "Contact No.": "9033270988"
  },
  {
    "Organization": "South-2",
    "Manager Name": "Pranav Prabhakar Nikam (D) / Bhashipangu Upendar (N)",
    "Manager Level": "CSM",
    "Dealer Name": "ProApex Automobiles LLP-Jadcherla",
    "SCode": "1S6227",
    "State": "Telangana",
    "City": "Jadcherla",
    "Contact No.": "9561899778,9154141679"
  },
  {
    "Organization": "South-2",
    "Manager Name": "Bala Brahmam",
    "Manager Level": "WM",
    "Dealer Name": "ProApex Automobiles LLP-Jadcherla",
    "SCode": "1S6227",
    "State": "Telangana",
    "City": "Jadcherla",
    "Contact No.": "9912333107"
  },
  {
    "Organization": "South-2",
    "Manager Name": "Narayana Rao",
    "Manager Level": "MD",
    "Dealer Name": "ProApex Automobiles LLP-Jadcherla",
    "SCode": "1S6227",
    "State": "Telangana",
    "City": "Jadcherla",
    "Contact No.": "9848023730"
  },
  {
    "Organization": "South-2",
    "Manager Name": "Sai Ram",
    "Manager Level": "EOS Site Incharge",
    "Dealer Name": "ProApex Automobiles LLP-Jadcherla",
    "SCode": "1S6227",
    "State": "Telangana",
    "City": "Jadcherla",
    "Contact No.": "8977740016"
  },
  {
    "Organization": "South-2",
    "Manager Name": "Ikkurthy Srikanth",
    "Manager Level": "ASM",
    "Dealer Name": "ProApex Automobiles LLP-Jadcherla",
    "SCode": "1S6227",
    "State": "Telangana",
    "City": "Jadcherla",
    "Contact No.": "9550801110"
  },
  {
    "Organization": "South-2",
    "Manager Name": "N Narayanan",
    "Manager Level": "RSM",
    "Dealer Name": "ProApex Automobiles LLP-Jadcherla",
    "SCode": "1S6227",
    "State": "Telangana",
    "City": "Jadcherla",
    "Contact No.": "8123036700"
  },
  {
    "Organization": "North-2",
    "Manager Name": "Sujan Saha",
    "Manager Level": "RSM",
    "Dealer Name": "Punjab Mobility Pvt Ltd (ProX)-Ghaziabad",
    "SCode": "1S7159",
    "State": "Uttar Pradesh",
    "City": "Ghaziabad",
    "Contact No.": "9903978950"
  },
  {
    "Organization": "North-2",
    "Manager Name": "Himanshu Verma",
    "Manager Level": "WM",
    "Dealer Name": "Punjab Mobility Pvt Ltd (ProX)-Ghaziabad",
    "SCode": "1S7159",
    "State": "Uttar Pradesh",
    "City": "Ghaziabad",
    "Contact No.": "7500147092"
  },
  {
    "Organization": "North-2",
    "Manager Name": "Akhlad Mehboob",
    "Manager Level": "CSM",
    "Dealer Name": "Punjab Mobility Pvt Ltd (ProX)-Ghaziabad",
    "SCode": "1S7159",
    "State": "Uttar Pradesh",
    "City": "Ghaziabad",
    "Contact No.": "8938829119"
  },
  {
    "Organization": "North-2",
    "Manager Name": "Amit Kumar",
    "Manager Level": "EOS Site Incharge",
    "Dealer Name": "Punjab Mobility Pvt Ltd (ProX)-Ghaziabad",
    "SCode": "1S7159",
    "State": "Uttar Pradesh",
    "City": "Ghaziabad",
    "Contact No.": "8979643517"
  },
  {
    "Organization": "North-2",
    "Manager Name": "Deepak Sharma",
    "Manager Level": "MD",
    "Dealer Name": "Punjab Mobility Pvt Ltd (ProX)-Ghaziabad",
    "SCode": "1S7159",
    "State": "Uttar Pradesh",
    "City": "Ghaziabad",
    "Contact No.": "7249912777"
  },
  {
    "Organization": "North-2",
    "Manager Name": "Sanjeev Sharma",
    "Manager Level": "MD",
    "Dealer Name": "Punjab Motor Works LCV DIV-Gr. Noida",
    "SCode": "1S7030",
    "State": "Uttar Pradesh",
    "City": "Noida",
    "Contact No.": "7417663371"
  },
  {
    "Organization": "North-2",
    "Manager Name": "Dheeraj Thakur",
    "Manager Level": "EOS Site Incharge",
    "Dealer Name": "Punjab Motor Works LCV DIV-Gr. Noida",
    "SCode": "1S7030",
    "State": "Uttar Pradesh",
    "City": "Noida",
    "Contact No.": "7011131872"
  },
  {
    "Organization": "North-2",
    "Manager Name": "Gopal Sharma",
    "Manager Level": "WM",
    "Dealer Name": "Punjab Motor Works LCV DIV-Gr. Noida",
    "SCode": "1S7030",
    "State": "Uttar Pradesh",
    "City": "Noida",
    "Contact No.": "7249919444"
  },
  {
    "Organization": "North-2",
    "Manager Name": "Mobashir Siddiqui (EVS) / Suyash Ray",
    "Manager Level": "CSM",
    "Dealer Name": "Punjab Motor Works LCV DIV-Gr. Noida",
    "SCode": "1S7030",
    "State": "Uttar Pradesh",
    "City": "Noida",
    "Contact No.": "8144239584,9962880277"
  },
  {
    "Organization": "North-2",
    "Manager Name": "Krishnendu Saha",
    "Manager Level": "RSM",
    "Dealer Name": "Punjab Motor Works LCV DIV-Gr. Noida",
    "SCode": "1S7030",
    "State": "Uttar Pradesh",
    "City": "Noida",
    "Contact No.": "7980433425"
  },
  {
    "Organization": "North-2",
    "Manager Name": "Mradul Goyal (D) / Saket (N)",
    "Manager Level": "CSM",
    "Dealer Name": "Punjab Motor Works LCV DIV-Gr. Noida",
    "SCode": "1S7030",
    "State": "Uttar Pradesh",
    "City": "Noida",
    "Contact No.": "6397126208,8709859215"
  },
  {
    "Organization": "North-2",
    "Manager Name": "Mukesh Saxena",
    "Manager Level": "ASM",
    "Dealer Name": "Punjab Motor Works LCV DIV-Gr. Noida",
    "SCode": "1S7030",
    "State": "Uttar Pradesh",
    "City": "Noida",
    "Contact No.": "9599117560"
  },
  {
    "Organization": "North-2",
    "Manager Name": "Mukesh Saxena",
    "Manager Level": "ASM",
    "Dealer Name": "Punjab Motor Works LCV DIV-Noida 2",
    "SCode": "1S7031",
    "State": "Uttar Pradesh",
    "City": "Gautam buddha nagar",
    "Contact No.": "9599117560"
  },
  {
    "Organization": "North-2",
    "Manager Name": "Krishnendu Saha",
    "Manager Level": "RSM",
    "Dealer Name": "Punjab Motor Works LCV DIV-Noida 2",
    "SCode": "1S7031",
    "State": "Uttar Pradesh",
    "City": "Gautam buddha nagar",
    "Contact No.": "7980433425"
  },
  {
    "Organization": "North-2",
    "Manager Name": "Sanjeev",
    "Manager Level": "MD",
    "Dealer Name": "Punjab Motor Works LCV DIV-Noida 2",
    "SCode": "1S7031",
    "State": "Uttar Pradesh",
    "City": "Gautam buddha nagar",
    "Contact No.": "7417663371"
  },
  {
    "Organization": "North-2",
    "Manager Name": "Mradul Goyal (D) / Saket (N)",
    "Manager Level": "CSM",
    "Dealer Name": "Punjab Motor Works LCV DIV-Noida 2",
    "SCode": "1S7031",
    "State": "Uttar Pradesh",
    "City": "Gautam buddha nagar",
    "Contact No.": "6397126208,8709859215"
  },
  {
    "Organization": "North-2",
    "Manager Name": "Vikramjeet Singh Virdi",
    "Manager Level": "WM",
    "Dealer Name": "Punjab Motor Works LCV DIV-Noida 2",
    "SCode": "1S7031",
    "State": "Uttar Pradesh",
    "City": "Gautam buddha nagar",
    "Contact No.": "9837366909"
  },
  {
    "Organization": "North-2",
    "Manager Name": "Mahendra Pratap",
    "Manager Level": "EOS Site Incharge",
    "Dealer Name": "Punjab Motor Works LCV DIV-Noida 2",
    "SCode": "1S7031",
    "State": "Uttar Pradesh",
    "City": "Gautam buddha nagar",
    "Contact No.": "9761504403"
  },
  {
    "Organization": "North-2",
    "Manager Name": "Deepak Sharma / Sanjeev Sharma",
    "Manager Level": "MD",
    "Dealer Name": "Punjab Motor Works LCV Division-Sahibabad",
    "SCode": "1S7088",
    "State": "Uttar Pradesh",
    "City": "Ghaziabad",
    "Contact No.": "7249912777,7417663371"
  },
  {
    "Organization": "North-2",
    "Manager Name": "Ankesh Sharma (N)",
    "Manager Level": "EOS Site Incharge",
    "Dealer Name": "Punjab Motor Works LCV Division-Sahibabad",
    "SCode": "1S7088",
    "State": "Uttar Pradesh",
    "City": "Ghaziabad",
    "Contact No.": "7055010500"
  },
  {
    "Organization": "North-2",
    "Manager Name": "Utkarsh Keshariya (D) / Saket Singh (N)",
    "Manager Level": "CSM",
    "Dealer Name": "Punjab Motor Works LCV Division-Sahibabad",
    "SCode": "1S7088",
    "State": "Uttar Pradesh",
    "City": "Ghaziabad",
    "Contact No.": "9217474015,8709859215"
  },
  {
    "Organization": "North-2",
    "Manager Name": "Shivam Singh",
    "Manager Level": "WM",
    "Dealer Name": "Punjab Motor Works LCV Division-Sahibabad",
    "SCode": "1S7088",
    "State": "Uttar Pradesh",
    "City": "Ghaziabad",
    "Contact No.": "7055023100"
  },
  {
    "Organization": "North-2",
    "Manager Name": "Krishnendu Saha",
    "Manager Level": "RSM",
    "Dealer Name": "Punjab Motor Works LCV Division-Sahibabad",
    "SCode": "1S7088",
    "State": "Uttar Pradesh",
    "City": "Ghaziabad",
    "Contact No.": "7980433425"
  },
  {
    "Organization": "North-2",
    "Manager Name": "Mukesh Saxena",
    "Manager Level": "ASM",
    "Dealer Name": "Punjab Motor Works LCV Division-Sahibabad",
    "SCode": "1S7088",
    "State": "Uttar Pradesh",
    "City": "Ghaziabad",
    "Contact No.": "9599117560"
  },
  {
    "Organization": "North-2",
    "Manager Name": "Mukesh Saxena",
    "Manager Level": "ASM",
    "Dealer Name": "Punjab Motors Works-Meerut",
    "SCode": "1S1026",
    "State": "Uttar Pradesh",
    "City": "Meerut",
    "Contact No.": "9599117560"
  },
  {
    "Organization": "North-2",
    "Manager Name": "Robin Gujjar",
    "Manager Level": "EOS Site Incharge",
    "Dealer Name": "Punjab Motors Works-Meerut",
    "SCode": "1S1026",
    "State": "Uttar Pradesh",
    "City": "Meerut",
    "Contact No.": "7088987160"
  },
  {
    "Organization": "North-2",
    "Manager Name": "Krish Tyagi / Anshul Garg",
    "Manager Level": "WM",
    "Dealer Name": "Punjab Motors Works-Meerut",
    "SCode": "1S1026",
    "State": "Uttar Pradesh",
    "City": "Meerut",
    "Contact No.": "9520051808,9412104388"
  },
  {
    "Organization": "North-2",
    "Manager Name": "Krishnendu Saha",
    "Manager Level": "RSM",
    "Dealer Name": "Punjab Motors Works-Meerut",
    "SCode": "1S1026",
    "State": "Uttar Pradesh",
    "City": "Meerut",
    "Contact No.": "7980433425"
  },
  {
    "Organization": "North-2",
    "Manager Name": "Sarthak Tiwari (D) / Saket (N)",
    "Manager Level": "CSM",
    "Dealer Name": "Punjab Motors Works-Meerut",
    "SCode": "1S1026",
    "State": "Uttar Pradesh",
    "City": "Meerut",
    "Contact No.": "8979696735,8709859215"
  },
  {
    "Organization": "North-2",
    "Manager Name": "Sanjeev Sharma",
    "Manager Level": "MD",
    "Dealer Name": "Punjab Motors Works-Meerut",
    "SCode": "1S1026",
    "State": "Uttar Pradesh",
    "City": "Meerut",
    "Contact No.": "7417663371"
  },
  {
    "Organization": "North-2",
    "Manager Name": "Utkarsh Keshariya (D) / Saket Singh (N)",
    "Manager Level": "CSM",
    "Dealer Name": "Punjab Motors-Ghaziabad",
    "SCode": "1S1143",
    "State": "Uttar Pradesh",
    "City": "Ghaziabad",
    "Contact No.": "9217474015,8709859215"
  },
  {
    "Organization": "North-2",
    "Manager Name": "Majid / Rakesh Sharma (N)",
    "Manager Level": "EOS Site Incharge",
    "Dealer Name": "Punjab Motors-Ghaziabad",
    "SCode": "1S1143",
    "State": "Uttar Pradesh",
    "City": "Ghaziabad",
    "Contact No.": "7455025726,9220350032"
  },
  {
    "Organization": "North-2",
    "Manager Name": "Krishnendu Saha",
    "Manager Level": "RSM",
    "Dealer Name": "Punjab Motors-Ghaziabad",
    "SCode": "1S1143",
    "State": "Uttar Pradesh",
    "City": "Ghaziabad",
    "Contact No.": "7980433425"
  },
  {
    "Organization": "North-2",
    "Manager Name": "Sanjeev Sharma",
    "Manager Level": "MD",
    "Dealer Name": "Punjab Motors-Ghaziabad",
    "SCode": "1S1143",
    "State": "Uttar Pradesh",
    "City": "Ghaziabad",
    "Contact No.": "7417663371"
  },
  {
    "Organization": "North-2",
    "Manager Name": "Mukesh Saxena",
    "Manager Level": "ASM",
    "Dealer Name": "Punjab Motors-Ghaziabad",
    "SCode": "1S1143",
    "State": "Uttar Pradesh",
    "City": "Ghaziabad",
    "Contact No.": "9599117560"
  },
  {
    "Organization": "North-2",
    "Manager Name": "Sandeep Kaul / Deepak Sharma",
    "Manager Level": "WM",
    "Dealer Name": "Punjab Motors-Ghaziabad",
    "SCode": "1S1143",
    "State": "Uttar Pradesh",
    "City": "Ghaziabad",
    "Contact No.": "8826240757,7249912777"
  },
  {
    "Organization": "North-2",
    "Manager Name": "Sharad Panwar",
    "Manager Level": "EOS Site Incharge",
    "Dealer Name": "Punjab Motors-Mujaffar Nagar",
    "SCode": "1S1157",
    "State": "Uttar Pradesh",
    "City": "Muzaffarnagar",
    "Contact No.": "8194090701"
  },
  {
    "Organization": "North-2",
    "Manager Name": "Rupinder Singh",
    "Manager Level": "MD",
    "Dealer Name": "Punjab Motors-Mujaffar Nagar",
    "SCode": "1S1157",
    "State": "Uttar Pradesh",
    "City": "Muzaffarnagar",
    "Contact No.": "7417663371"
  },
  {
    "Organization": "North-2",
    "Manager Name": "Krishnendu Saha",
    "Manager Level": "RSM",
    "Dealer Name": "Punjab Motors-Mujaffar Nagar",
    "SCode": "1S1157",
    "State": "Uttar Pradesh",
    "City": "Muzaffarnagar",
    "Contact No.": "7980433425"
  },
  {
    "Organization": "North-2",
    "Manager Name": "Hitesh",
    "Manager Level": "WM",
    "Dealer Name": "Punjab Motors-Mujaffar Nagar",
    "SCode": "1S1157",
    "State": "Uttar Pradesh",
    "City": "Muzaffarnagar",
    "Contact No.": "9927554177"
  },
  {
    "Organization": "North-2",
    "Manager Name": "Mukesh Saxena",
    "Manager Level": "ASM",
    "Dealer Name": "Punjab Motors-Mujaffar Nagar",
    "SCode": "1S1157",
    "State": "Uttar Pradesh",
    "City": "Muzaffarnagar",
    "Contact No.": "9599117560"
  },
  {
    "Organization": "North-2",
    "Manager Name": "Sarthak Tiwari (D) / Saket (N)",
    "Manager Level": "CSM",
    "Dealer Name": "Punjab Motors-Mujaffar Nagar",
    "SCode": "1S1157",
    "State": "Uttar Pradesh",
    "City": "Muzaffarnagar",
    "Contact No.": "8979696735,8709859215"
  },
  {
    "Organization": "West-2",
    "Manager Name": "Krishna dayal Kushwaha",
    "Manager Level": "WM",
    "Dealer Name": "Pyramid Motors-Singrauli",
    "SCode": "1S5073",
    "State": "Madhya Pradesh",
    "City": "Singrauli",
    "Contact No.": "7722804445"
  },
  {
    "Organization": "West-2",
    "Manager Name": "Nilesh Kumar",
    "Manager Level": "CSM",
    "Dealer Name": "Pyramid Motors-Singrauli",
    "SCode": "1S5073",
    "State": "Madhya Pradesh",
    "City": "Singrauli",
    "Contact No.": "6260509367"
  },
  {
    "Organization": "West-2",
    "Manager Name": "Mr. Satyender Shah",
    "Manager Level": "MD",
    "Dealer Name": "Pyramid Motors-Singrauli",
    "SCode": "1S5073",
    "State": "Madhya Pradesh",
    "City": "Singrauli",
    "Contact No.": "9406629324"
  },
  {
    "Organization": "West-2",
    "Manager Name": "Sudhir Kumar",
    "Manager Level": "RSM",
    "Dealer Name": "Pyramid Motors-Singrauli",
    "SCode": "1S5073",
    "State": "Madhya Pradesh",
    "City": "Singrauli",
    "Contact No.": "9752542733"
  },
  {
    "Organization": "West-2",
    "Manager Name": "Vishal Kulkarni",
    "Manager Level": "ASM",
    "Dealer Name": "Pyramid Motors-Singrauli",
    "SCode": "1S5073",
    "State": "Madhya Pradesh",
    "City": "Singrauli",
    "Contact No.": "8349997686"
  },
  {
    "Organization": "East-1",
    "Manager Name": "Mayank Nahata",
    "Manager Level": "MD",
    "Dealer Name": "R J Automotives-Nagaon",
    "SCode": "1S2258",
    "State": "Assam",
    "City": "Nagaon",
    "Contact No.": "8810300000"
  },
  {
    "Organization": "East-1",
    "Manager Name": "Rakesh Ghosh",
    "Manager Level": "ASM",
    "Dealer Name": "R J Automotives-Nagaon",
    "SCode": "1S2258",
    "State": "Assam",
    "City": "Nagaon",
    "Contact No.": "9477374098"
  },
  {
    "Organization": "East-1",
    "Manager Name": "Shahnawaj Ansari",
    "Manager Level": "EOS Site Incharge",
    "Dealer Name": "R J Automotives-Nagaon",
    "SCode": "1S2258",
    "State": "Assam",
    "City": "Nagaon",
    "Contact No.": "9821923254"
  },
  {
    "Organization": "East-1",
    "Manager Name": "Yogeshwar Singh",
    "Manager Level": "RSM",
    "Dealer Name": "R J Automotives-Nagaon",
    "SCode": "1S2258",
    "State": "Assam",
    "City": "Nagaon",
    "Contact No.": "9717966997"
  },
  {
    "Organization": "East-1",
    "Manager Name": "Sanju Kumar Pal / Vishal Kumar",
    "Manager Level": "CSM",
    "Dealer Name": "R J Automotives-Nagaon",
    "SCode": "1S2258",
    "State": "Assam",
    "City": "Nagaon",
    "Contact No.": "9382495455,7630027054"
  },
  {
    "Organization": "East-1",
    "Manager Name": "Abhishek Kumar Pandey",
    "Manager Level": "WM",
    "Dealer Name": "R J Automotives-Nagaon",
    "SCode": "1S2258",
    "State": "Assam",
    "City": "Nagaon",
    "Contact No.": "7099072001"
  },
  {
    "Organization": "North-2",
    "Manager Name": "Chandan Yadav (D) / Saket Singh (N)",
    "Manager Level": "CSM",
    "Dealer Name": "R. K. Laxmi Sales Ltd-Gorakhpur",
    "SCode": "1S1183",
    "State": "Uttar Pradesh",
    "City": "Gorakhpur",
    "Contact No.": "8299650306,8709859215"
  },
  {
    "Organization": "North-2",
    "Manager Name": "Jitendar Kumar",
    "Manager Level": "WM",
    "Dealer Name": "R. K. Laxmi Sales Ltd-Gorakhpur",
    "SCode": "1S1183",
    "State": "Uttar Pradesh",
    "City": "Gorakhpur",
    "Contact No.": "7705907708"
  },
  {
    "Organization": "North-2",
    "Manager Name": "Krishnendu Saha",
    "Manager Level": "RSM",
    "Dealer Name": "R. K. Laxmi Sales Ltd-Gorakhpur",
    "SCode": "1S1183",
    "State": "Uttar Pradesh",
    "City": "Gorakhpur",
    "Contact No.": "7980433425"
  },
  {
    "Organization": "North-2",
    "Manager Name": "Vishal Tripathi",
    "Manager Level": "EOS Site Incharge",
    "Dealer Name": "R. K. Laxmi Sales Ltd-Gorakhpur",
    "SCode": "1S1183",
    "State": "Uttar Pradesh",
    "City": "Gorakhpur",
    "Contact No.": "9580212087"
  },
  {
    "Organization": "North-2",
    "Manager Name": "Ajay Rai",
    "Manager Level": "MD",
    "Dealer Name": "R. K. Laxmi Sales Ltd-Gorakhpur",
    "SCode": "1S1183",
    "State": "Uttar Pradesh",
    "City": "Gorakhpur",
    "Contact No.": "7705907770"
  },
  {
    "Organization": "North-2",
    "Manager Name": "Nitin Gupta",
    "Manager Level": "ASM",
    "Dealer Name": "R. K. Laxmi Sales Ltd-Gorakhpur",
    "SCode": "1S1183",
    "State": "Uttar Pradesh",
    "City": "Gorakhpur",
    "Contact No.": "7080811550"
  },
  {
    "Organization": "East-1",
    "Manager Name": "Rakesh Ghosh",
    "Manager Level": "ASM",
    "Dealer Name": "RJ Automotives LLP-Tezpur",
    "SCode": "1S2295",
    "State": "Assam",
    "City": "Tezpur",
    "Contact No.": "9477374098"
  },
  {
    "Organization": "East-1",
    "Manager Name": "Jayant Saikia",
    "Manager Level": "WM",
    "Dealer Name": "RJ Automotives LLP-Tezpur",
    "SCode": "1S2295",
    "State": "Assam",
    "City": "Tezpur",
    "Contact No.": "9810761613"
  },
  {
    "Organization": "East-1",
    "Manager Name": "Nayan Jyoti",
    "Manager Level": "EOS Site Incharge",
    "Dealer Name": "RJ Automotives LLP-Tezpur",
    "SCode": "1S2295",
    "State": "Assam",
    "City": "Tezpur",
    "Contact No.": "8822431813"
  },
  {
    "Organization": "East-1",
    "Manager Name": "Yogeshwar Singh",
    "Manager Level": "RSM",
    "Dealer Name": "RJ Automotives LLP-Tezpur",
    "SCode": "1S2295",
    "State": "Assam",
    "City": "Tezpur",
    "Contact No.": "9717966997"
  },
  {
    "Organization": "East-1",
    "Manager Name": "Abhishek Pandey / Mayank Nahata",
    "Manager Level": "MD",
    "Dealer Name": "RJ Automotives LLP-Tezpur",
    "SCode": "1S2295",
    "State": "Assam",
    "City": "Tezpur",
    "Contact No.": "7099072001,8810357885"
  },
  {
    "Organization": "East-1",
    "Manager Name": "Sanju Pal / Vishal Kumar",
    "Manager Level": "CSM",
    "Dealer Name": "RJ Automotives LLP-Tezpur",
    "SCode": "1S2295",
    "State": "Assam",
    "City": "Tezpur",
    "Contact No.": "9382495455,7630027054"
  },
  {
    "Organization": "North-2",
    "Manager Name": "Ajay Rai",
    "Manager Level": "MD",
    "Dealer Name": "RKL Ispat Pvt Ltd-Azamgarh",
    "SCode": "1S7100",
    "State": "Uttar Pradesh",
    "City": "Azamgarh",
    "Contact No.": "7705907770"
  },
  {
    "Organization": "North-2",
    "Manager Name": "Paras Nath",
    "Manager Level": "WM",
    "Dealer Name": "RKL Ispat Pvt Ltd-Azamgarh",
    "SCode": "1S7100",
    "State": "Uttar Pradesh",
    "City": "Azamgarh",
    "Contact No.": "7310105554"
  },
  {
    "Organization": "North-2",
    "Manager Name": "Chandan Yadav (D) / Saket Singh (N)",
    "Manager Level": "CSM",
    "Dealer Name": "RKL Ispat Pvt Ltd-Azamgarh",
    "SCode": "1S7100",
    "State": "Uttar Pradesh",
    "City": "Azamgarh",
    "Contact No.": "8299650306,8709859215"
  },
  {
    "Organization": "North-2",
    "Manager Name": "Krishnendu Saha",
    "Manager Level": "RSM",
    "Dealer Name": "RKL Ispat Pvt Ltd-Azamgarh",
    "SCode": "1S7100",
    "State": "Uttar Pradesh",
    "City": "Azamgarh",
    "Contact No.": "7980433425"
  },
  {
    "Organization": "North-2",
    "Manager Name": "Jai Prakash Yadav",
    "Manager Level": "EOS Site Incharge",
    "Dealer Name": "RKL Ispat Pvt Ltd-Azamgarh",
    "SCode": "1S7100",
    "State": "Uttar Pradesh",
    "City": "Azamgarh",
    "Contact No.": "7307997248"
  },
  {
    "Organization": "North-2",
    "Manager Name": "Nitin Gupta",
    "Manager Level": "ASM",
    "Dealer Name": "RKL Ispat Pvt Ltd-Azamgarh",
    "SCode": "1S7100",
    "State": "Uttar Pradesh",
    "City": "Azamgarh",
    "Contact No.": "7080811550"
  },
  {
    "Organization": "East-1",
    "Manager Name": "Abhirup Ghosh",
    "Manager Level": "ASM",
    "Dealer Name": "Radhika Trucking-Ghoshpukur",
    "SCode": "1S2294",
    "State": "West Bengal",
    "City": "Siliguri",
    "Contact No.": "9073378080"
  },
  {
    "Organization": "East-1",
    "Manager Name": "Hemant Kumar",
    "Manager Level": "CSM",
    "Dealer Name": "Radhika Trucking-Ghoshpukur",
    "SCode": "1S2294",
    "State": "West Bengal",
    "City": "Siliguri",
    "Contact No.": "7982996478"
  },
  {
    "Organization": "East-1",
    "Manager Name": "Sanjay Singh",
    "Manager Level": "WM",
    "Dealer Name": "Radhika Trucking-Ghoshpukur",
    "SCode": "1S2294",
    "State": "West Bengal",
    "City": "Siliguri",
    "Contact No.": "7319034038"
  },
  {
    "Organization": "East-1",
    "Manager Name": "Yogeshwar Singh",
    "Manager Level": "RSM",
    "Dealer Name": "Radhika Trucking-Ghoshpukur",
    "SCode": "1S2294",
    "State": "West Bengal",
    "City": "Siliguri",
    "Contact No.": "9717966997"
  },
  {
    "Organization": "East-1",
    "Manager Name": "Ramakrishna Das",
    "Manager Level": "EOS Site Incharge",
    "Dealer Name": "Radhika Trucking-Ghoshpukur",
    "SCode": "1S2294",
    "State": "West Bengal",
    "City": "Siliguri",
    "Contact No.": "7029433980,8250470980"
  },
  {
    "Organization": "East-1",
    "Manager Name": "Debraj Saha",
    "Manager Level": "MD",
    "Dealer Name": "Radhika Trucking-Ghoshpukur",
    "SCode": "1S2294",
    "State": "West Bengal",
    "City": "Siliguri",
    "Contact No.": "8617432182"
  },
  {
    "Organization": "East-1",
    "Manager Name": "Rakesh Ghosh",
    "Manager Level": "ASM",
    "Dealer Name": "Rajdhani Automotives-Agartala",
    "SCode": "1S2276",
    "State": "Tripura",
    "City": "Agartala",
    "Contact No.": "9477374098"
  },
  {
    "Organization": "East-1",
    "Manager Name": "Rajesh Saha",
    "Manager Level": "EOS Site Incharge",
    "Dealer Name": "Rajdhani Automotives-Agartala",
    "SCode": "1S2276",
    "State": "Tripura",
    "City": "Agartala",
    "Contact No.": "9774395733"
  },
  {
    "Organization": "East-1",
    "Manager Name": "Yogeshwar Singh",
    "Manager Level": "RSM",
    "Dealer Name": "Rajdhani Automotives-Agartala",
    "SCode": "1S2276",
    "State": "Tripura",
    "City": "Agartala",
    "Contact No.": "9717966997"
  },
  {
    "Organization": "East-1",
    "Manager Name": "Ranjan Sharma",
    "Manager Level": "CSM",
    "Dealer Name": "Rajdhani Automotives-Agartala",
    "SCode": "1S2276",
    "State": "Tripura",
    "City": "Agartala",
    "Contact No.": "7903904529"
  },
  {
    "Organization": "East-1",
    "Manager Name": "Dibakar Roy",
    "Manager Level": "MD",
    "Dealer Name": "Rajdhani Automotives-Agartala",
    "SCode": "1S2276",
    "State": "Tripura",
    "City": "Agartala",
    "Contact No.": "9436139993"
  },
  {
    "Organization": "East-1",
    "Manager Name": "Debasish Das",
    "Manager Level": "WM",
    "Dealer Name": "Rajdhani Automotives-Agartala",
    "SCode": "1S2276",
    "State": "Tripura",
    "City": "Agartala",
    "Contact No.": "8240157223"
  },
  {
    "Organization": "South-2",
    "Manager Name": "Ganesh",
    "Manager Level": "EOS Site Incharge",
    "Dealer Name": "Ramcor-Guntur",
    "SCode": "1S6082",
    "State": "Andhra Pradesh",
    "City": "Guntur",
    "Contact No.": "9000029641"
  },
  {
    "Organization": "South-2",
    "Manager Name": "SA Srinivas / Prakash Rao",
    "Manager Level": "MD",
    "Dealer Name": "Ramcor-Guntur",
    "SCode": "1S6082",
    "State": "Andhra Pradesh",
    "City": "Guntur",
    "Contact No.": "9866189992,9849086242"
  },
  {
    "Organization": "South-2",
    "Manager Name": "N Narayanan",
    "Manager Level": "RSM",
    "Dealer Name": "Ramcor-Guntur",
    "SCode": "1S6082",
    "State": "Andhra Pradesh",
    "City": "Guntur",
    "Contact No.": "8123036700"
  },
  {
    "Organization": "South-2",
    "Manager Name": "Suresh",
    "Manager Level": "WM",
    "Dealer Name": "Ramcor-Guntur",
    "SCode": "1S6082",
    "State": "Andhra Pradesh",
    "City": "Guntur",
    "Contact No.": "9000019641"
  },
  {
    "Organization": "South-2",
    "Manager Name": "Shaik Maqsood",
    "Manager Level": "ASM",
    "Dealer Name": "Ramcor-Guntur",
    "SCode": "1S6082",
    "State": "Andhra Pradesh",
    "City": "Guntur",
    "Contact No.": "9989311516"
  },
  {
    "Organization": "South-2",
    "Manager Name": "Jampani Naveen Varma (D) / Prem Kumar (N)",
    "Manager Level": "CSM",
    "Dealer Name": "Ramcor-Guntur",
    "SCode": "1S6082",
    "State": "Andhra Pradesh",
    "City": "Guntur",
    "Contact No.": "9154101885,9154141679"
  },
  {
    "Organization": "South-2",
    "Manager Name": "Kishore",
    "Manager Level": "EOS Site Incharge",
    "Dealer Name": "Ramcor-Rajahmundry",
    "SCode": "1S6112",
    "State": "Andhra Pradesh",
    "City": "Rajahmundry",
    "Contact No.": "9154829619"
  },
  {
    "Organization": "South-2",
    "Manager Name": "SK Mastan",
    "Manager Level": "WM",
    "Dealer Name": "Ramcor-Rajahmundry",
    "SCode": "1S6112",
    "State": "Andhra Pradesh",
    "City": "Rajahmundry",
    "Contact No.": "9949092489"
  },
  {
    "Organization": "South-2",
    "Manager Name": "SA Srinivas / Prakash Rao",
    "Manager Level": "MD",
    "Dealer Name": "Ramcor-Rajahmundry",
    "SCode": "1S6112",
    "State": "Andhra Pradesh",
    "City": "Rajahmundry",
    "Contact No.": "9866189992,9849086242"
  },
  {
    "Organization": "South-2",
    "Manager Name": "Naveen Burepalli (D) / Prem Kumar (N)",
    "Manager Level": "CSM",
    "Dealer Name": "Ramcor-Rajahmundry",
    "SCode": "1S6112",
    "State": "Andhra Pradesh",
    "City": "Rajahmundry",
    "Contact No.": "7893227879,9154141679"
  },
  {
    "Organization": "South-2",
    "Manager Name": "Shaik Maqsood",
    "Manager Level": "ASM",
    "Dealer Name": "Ramcor-Rajahmundry",
    "SCode": "1S6112",
    "State": "Andhra Pradesh",
    "City": "Rajahmundry",
    "Contact No.": "9989311516"
  },
  {
    "Organization": "South-2",
    "Manager Name": "N Narayanan",
    "Manager Level": "RSM",
    "Dealer Name": "Ramcor-Rajahmundry",
    "SCode": "1S6112",
    "State": "Andhra Pradesh",
    "City": "Rajahmundry",
    "Contact No.": "8123036700"
  },
  {
    "Organization": "South-2",
    "Manager Name": "SA Srinivas / Prakash Rao",
    "Manager Level": "MD",
    "Dealer Name": "Ramcor-Tadepallegudem",
    "SCode": "1S6103",
    "State": "Andhra Pradesh",
    "City": "Tadepalligudem",
    "Contact No.": "9866189992,9849086242"
  },
  {
    "Organization": "South-2",
    "Manager Name": "Ramesh Babu",
    "Manager Level": "WM",
    "Dealer Name": "Ramcor-Tadepallegudem",
    "SCode": "1S6103",
    "State": "Andhra Pradesh",
    "City": "Tadepalligudem",
    "Contact No.": "9704724365"
  },
  {
    "Organization": "South-2",
    "Manager Name": "Pulla Rao",
    "Manager Level": "EOS Site Incharge",
    "Dealer Name": "Ramcor-Tadepallegudem",
    "SCode": "1S6103",
    "State": "Andhra Pradesh",
    "City": "Tadepalligudem",
    "Contact No.": "9154822739"
  },
  {
    "Organization": "South-2",
    "Manager Name": "Naveen Burepalli (D) / Prem Kumar (N)",
    "Manager Level": "CSM",
    "Dealer Name": "Ramcor-Tadepallegudem",
    "SCode": "1S6103",
    "State": "Andhra Pradesh",
    "City": "Tadepalligudem",
    "Contact No.": "7893227879,9154141679"
  },
  {
    "Organization": "South-2",
    "Manager Name": "N Narayanan",
    "Manager Level": "RSM",
    "Dealer Name": "Ramcor-Tadepallegudem",
    "SCode": "1S6103",
    "State": "Andhra Pradesh",
    "City": "Tadepalligudem",
    "Contact No.": "8123036700"
  },
  {
    "Organization": "South-2",
    "Manager Name": "Shaik Maqsood",
    "Manager Level": "ASM",
    "Dealer Name": "Ramcor-Tadepallegudem",
    "SCode": "1S6103",
    "State": "Andhra Pradesh",
    "City": "Tadepalligudem",
    "Contact No.": "9989311516"
  },
  {
    "Organization": "South-2",
    "Manager Name": "Jampani Naveen Varma (D) / Prem Kumar (N)",
    "Manager Level": "CSM",
    "Dealer Name": "Ramcor-Vijayawada",
    "SCode": "1S6060",
    "State": "Andhra Pradesh",
    "City": "Vijayawada",
    "Contact No.": "9154101885,9154141679"
  },
  {
    "Organization": "South-2",
    "Manager Name": "Rajini Kanth",
    "Manager Level": "EOS Site Incharge",
    "Dealer Name": "Ramcor-Vijayawada",
    "SCode": "1S6060",
    "State": "Andhra Pradesh",
    "City": "Vijayawada",
    "Contact No.": "9866111075"
  },
  {
    "Organization": "South-2",
    "Manager Name": "Shaik Maqsood",
    "Manager Level": "ASM",
    "Dealer Name": "Ramcor-Vijayawada",
    "SCode": "1S6060",
    "State": "Andhra Pradesh",
    "City": "Vijayawada",
    "Contact No.": "9989311516"
  },
  {
    "Organization": "South-2",
    "Manager Name": "Siva Ramakrishna",
    "Manager Level": "WM",
    "Dealer Name": "Ramcor-Vijayawada",
    "SCode": "1S6060",
    "State": "Andhra Pradesh",
    "City": "Vijayawada",
    "Contact No.": "9177125125"
  },
  {
    "Organization": "South-2",
    "Manager Name": "N Narayanan",
    "Manager Level": "RSM",
    "Dealer Name": "Ramcor-Vijayawada",
    "SCode": "1S6060",
    "State": "Andhra Pradesh",
    "City": "Vijayawada",
    "Contact No.": "8123036700"
  },
  {
    "Organization": "South-2",
    "Manager Name": "SA Srinivas / Prakash Rao",
    "Manager Level": "MD",
    "Dealer Name": "Ramcor-Vijayawada",
    "SCode": "1S6060",
    "State": "Andhra Pradesh",
    "City": "Vijayawada",
    "Contact No.": "9866189992,9849086242"
  },
  {
    "Organization": "East-1",
    "Manager Name": "Hemant Kumar",
    "Manager Level": "CSM",
    "Dealer Name": "Rateria Entrepreneurs Pvt. Ltd-Coochbehar",
    "SCode": "1S2237",
    "State": "West Bengal",
    "City": "Cooch behar",
    "Contact No.": "7982996478"
  },
  {
    "Organization": "East-1",
    "Manager Name": "Rahul Rateria",
    "Manager Level": "MD",
    "Dealer Name": "Rateria Entrepreneurs Pvt. Ltd-Coochbehar",
    "SCode": "1S2237",
    "State": "West Bengal",
    "City": "Cooch behar",
    "Contact No.": "9800657777"
  },
  {
    "Organization": "East-1",
    "Manager Name": "Yogeshwar Singh",
    "Manager Level": "RSM",
    "Dealer Name": "Rateria Entrepreneurs Pvt. Ltd-Coochbehar",
    "SCode": "1S2237",
    "State": "West Bengal",
    "City": "Cooch behar",
    "Contact No.": "9717966997"
  },
  {
    "Organization": "East-1",
    "Manager Name": "Dibyendu Mandal",
    "Manager Level": "WM",
    "Dealer Name": "Rateria Entrepreneurs Pvt. Ltd-Coochbehar",
    "SCode": "1S2237",
    "State": "West Bengal",
    "City": "Cooch behar",
    "Contact No.": "7477781420"
  },
  {
    "Organization": "East-1",
    "Manager Name": "Abhirup Ghosh",
    "Manager Level": "ASM",
    "Dealer Name": "Rateria Entrepreneurs Pvt. Ltd-Coochbehar",
    "SCode": "1S2237",
    "State": "West Bengal",
    "City": "Cooch behar",
    "Contact No.": "9073378080"
  },
  {
    "Organization": "East-1",
    "Manager Name": "Alok Barman",
    "Manager Level": "EOS Site Incharge",
    "Dealer Name": "Rateria Entrepreneurs Pvt. Ltd-Coochbehar",
    "SCode": "1S2237",
    "State": "West Bengal",
    "City": "Cooch behar",
    "Contact No.": "7477781422"
  },
  {
    "Organization": "East-1",
    "Manager Name": "Dibyendu Mandal",
    "Manager Level": "WM",
    "Dealer Name": "Rateria Entrepreneurs Pvt. Ltd-Siliguri",
    "SCode": "1S2148",
    "State": "West Bengal",
    "City": "Siliguri",
    "Contact No.": "7477781420"
  },
  {
    "Organization": "East-1",
    "Manager Name": "Yogeshwar Singh",
    "Manager Level": "RSM",
    "Dealer Name": "Rateria Entrepreneurs Pvt. Ltd-Siliguri",
    "SCode": "1S2148",
    "State": "West Bengal",
    "City": "Siliguri",
    "Contact No.": "9717966997"
  },
  {
    "Organization": "East-1",
    "Manager Name": "Rahul Rateria",
    "Manager Level": "MD",
    "Dealer Name": "Rateria Entrepreneurs Pvt. Ltd-Siliguri",
    "SCode": "1S2148",
    "State": "West Bengal",
    "City": "Siliguri",
    "Contact No.": "9800657777"
  },
  {
    "Organization": "East-1",
    "Manager Name": "Abhirup Ghosh",
    "Manager Level": "ASM",
    "Dealer Name": "Rateria Entrepreneurs Pvt. Ltd-Siliguri",
    "SCode": "1S2148",
    "State": "West Bengal",
    "City": "Siliguri",
    "Contact No.": "9073378080"
  },
  {
    "Organization": "East-1",
    "Manager Name": "Hemant Kumar",
    "Manager Level": "CSM",
    "Dealer Name": "Rateria Entrepreneurs Pvt. Ltd-Siliguri",
    "SCode": "1S2148",
    "State": "West Bengal",
    "City": "Siliguri",
    "Contact No.": "7982996478"
  },
  {
    "Organization": "East-1",
    "Manager Name": "Debashis Ghosh",
    "Manager Level": "EOS Site Incharge",
    "Dealer Name": "Rateria Entrepreneurs Pvt. Ltd-Siliguri",
    "SCode": "1S2148",
    "State": "West Bengal",
    "City": "Siliguri",
    "Contact No.": "8788185369"
  },
  {
    "Organization": "East-1",
    "Manager Name": "Hemant Kumar",
    "Manager Level": "CSM",
    "Dealer Name": "Rateria Entrepreneurs Pvt. Ltd-Singtam",
    "SCode": "1S2159",
    "State": "West Bengal",
    "City": "Siliguri",
    "Contact No.": "7982996478"
  },
  {
    "Organization": "East-1",
    "Manager Name": "Sudip Kar",
    "Manager Level": "EOS Site Incharge",
    "Dealer Name": "Rateria Entrepreneurs Pvt. Ltd-Singtam",
    "SCode": "1S2159",
    "State": "West Bengal",
    "City": "Siliguri",
    "Contact No.": "7365941293"
  },
  {
    "Organization": "East-1",
    "Manager Name": "Rahul Rateria",
    "Manager Level": "MD",
    "Dealer Name": "Rateria Entrepreneurs Pvt. Ltd-Singtam",
    "SCode": "1S2159",
    "State": "West Bengal",
    "City": "Siliguri",
    "Contact No.": "9800657777"
  },
  {
    "Organization": "East-1",
    "Manager Name": "Yogeshwar Singh",
    "Manager Level": "RSM",
    "Dealer Name": "Rateria Entrepreneurs Pvt. Ltd-Singtam",
    "SCode": "1S2159",
    "State": "West Bengal",
    "City": "Siliguri",
    "Contact No.": "9717966997"
  },
  {
    "Organization": "East-1",
    "Manager Name": "Dibyendu Mandal",
    "Manager Level": "WM",
    "Dealer Name": "Rateria Entrepreneurs Pvt. Ltd-Singtam",
    "SCode": "1S2159",
    "State": "West Bengal",
    "City": "Siliguri",
    "Contact No.": "7477781420"
  },
  {
    "Organization": "East-1",
    "Manager Name": "Abhirup Ghosh",
    "Manager Level": "ASM",
    "Dealer Name": "Rateria Entrepreneurs Pvt. Ltd-Singtam",
    "SCode": "1S2159",
    "State": "West Bengal",
    "City": "Siliguri",
    "Contact No.": "9073378080"
  },
  {
    "Organization": "West-1",
    "Manager Name": "Suhas Ramchandra Mane",
    "Manager Level": "RSM",
    "Dealer Name": "S. S. Mirje and Co-Chiplun",
    "SCode": "1S3406",
    "State": "Maharashtra",
    "City": "Satara",
    "Contact No.": "8454812225"
  },
  {
    "Organization": "West-1",
    "Manager Name": "Omkar Mali",
    "Manager Level": "MD",
    "Dealer Name": "S. S. Mirje and Co-Chiplun",
    "SCode": "1S3406",
    "State": "Maharashtra",
    "City": "Satara",
    "Contact No.": "9422582006"
  },
  {
    "Organization": "West-1",
    "Manager Name": "Navneet Mali",
    "Manager Level": "EOS Site Incharge",
    "Dealer Name": "S. S. Mirje and Co-Chiplun",
    "SCode": "1S3406",
    "State": "Maharashtra",
    "City": "Satara",
    "Contact No.": "9146032972"
  },
  {
    "Organization": "West-1",
    "Manager Name": "Vivekanand Shigwan",
    "Manager Level": "WM",
    "Dealer Name": "S. S. Mirje and Co-Chiplun",
    "SCode": "1S3406",
    "State": "Maharashtra",
    "City": "Satara",
    "Contact No.": "9766581563"
  },
  {
    "Organization": "West-1",
    "Manager Name": "Mrinal Kunwar",
    "Manager Level": "ASM",
    "Dealer Name": "S. S. Mirje and Co-Chiplun",
    "SCode": "1S3406",
    "State": "Maharashtra",
    "City": "Satara",
    "Contact No.": "8002023303"
  },
  {
    "Organization": "West-1",
    "Manager Name": "Durvesh Deole / Adil Sheikh",
    "Manager Level": "CSM",
    "Dealer Name": "S. S. Mirje and Co-Chiplun",
    "SCode": "1S3406",
    "State": "Maharashtra",
    "City": "Satara",
    "Contact No.": "9730732831,9325446342"
  },
  {
    "Organization": "West-1",
    "Manager Name": "Suhas Ramchandra Mane",
    "Manager Level": "RSM",
    "Dealer Name": "S. S. Mirje and Co-Kolhapur",
    "SCode": "1S3013",
    "State": "Maharashtra",
    "City": "Kolhapur",
    "Contact No.": "8454812225"
  },
  {
    "Organization": "West-1",
    "Manager Name": "Omkar Mali / Rahul Mirje",
    "Manager Level": "MD",
    "Dealer Name": "S. S. Mirje and Co-Kolhapur",
    "SCode": "1S3013",
    "State": "Maharashtra",
    "City": "Kolhapur",
    "Contact No.": "9422582006,9146032974"
  },
  {
    "Organization": "West-1",
    "Manager Name": "Suhas Chavan",
    "Manager Level": "WM",
    "Dealer Name": "S. S. Mirje and Co-Kolhapur",
    "SCode": "1S3013",
    "State": "Maharashtra",
    "City": "Kolhapur",
    "Contact No.": "9766995865"
  },
  {
    "Organization": "West-1",
    "Manager Name": "Mrinal Kunwar",
    "Manager Level": "ASM",
    "Dealer Name": "S. S. Mirje and Co-Kolhapur",
    "SCode": "1S3013",
    "State": "Maharashtra",
    "City": "Kolhapur",
    "Contact No.": "8002023303"
  },
  {
    "Organization": "West-1",
    "Manager Name": "Durvesh Deole / Vivekanand Maske",
    "Manager Level": "CSM",
    "Dealer Name": "S. S. Mirje and Co-Kolhapur",
    "SCode": "1S3013",
    "State": "Maharashtra",
    "City": "Kolhapur",
    "Contact No.": "9730732831,9021549678"
  },
  {
    "Organization": "West-1",
    "Manager Name": "Ashish Gurav",
    "Manager Level": "EOS Site Incharge",
    "Dealer Name": "S. S. Mirje and Co-Kolhapur",
    "SCode": "1S3013",
    "State": "Maharashtra",
    "City": "Kolhapur",
    "Contact No.": "9226067304"
  },
  {
    "Organization": "West-1",
    "Manager Name": "Durvesh Deole / Adil Sheikh",
    "Manager Level": "CSM",
    "Dealer Name": "S. S. Mirje and Co-Kudal",
    "SCode": "1S3389",
    "State": "Maharashtra",
    "City": "Sawantwadi",
    "Contact No.": "9730732831,9325446342"
  },
  {
    "Organization": "West-1",
    "Manager Name": "Javed Desungi",
    "Manager Level": "EOS Site Incharge",
    "Dealer Name": "S. S. Mirje and Co-Kudal",
    "SCode": "1S3389",
    "State": "Maharashtra",
    "City": "Sawantwadi",
    "Contact No.": "7758934327"
  },
  {
    "Organization": "West-1",
    "Manager Name": "Suhas Ramchandra Mane",
    "Manager Level": "RSM",
    "Dealer Name": "S. S. Mirje and Co-Kudal",
    "SCode": "1S3389",
    "State": "Maharashtra",
    "City": "Sawantwadi",
    "Contact No.": "8454812225"
  },
  {
    "Organization": "West-1",
    "Manager Name": "Suhas Chavan",
    "Manager Level": "WM",
    "Dealer Name": "S. S. Mirje and Co-Kudal",
    "SCode": "1S3389",
    "State": "Maharashtra",
    "City": "Sawantwadi",
    "Contact No.": "9766995865"
  },
  {
    "Organization": "West-1",
    "Manager Name": "Mrinal Kunwar",
    "Manager Level": "ASM",
    "Dealer Name": "S. S. Mirje and Co-Kudal",
    "SCode": "1S3389",
    "State": "Maharashtra",
    "City": "Sawantwadi",
    "Contact No.": "8002023303"
  },
  {
    "Organization": "West-1",
    "Manager Name": "Omkar Mali",
    "Manager Level": "MD",
    "Dealer Name": "S. S. Mirje and Co-Kudal",
    "SCode": "1S3389",
    "State": "Maharashtra",
    "City": "Sawantwadi",
    "Contact No.": "9422582006"
  },
  {
    "Organization": "West-1",
    "Manager Name": "Durvesh Deole / Adil Sheikh",
    "Manager Level": "CSM",
    "Dealer Name": "S. S. Mirje and Co-Ratnagiri",
    "SCode": "1S3095",
    "State": "Maharashtra",
    "City": "Ratnagiri",
    "Contact No.": "9730732831,9325446342"
  },
  {
    "Organization": "West-1",
    "Manager Name": "Suhas Ramchandra Mane",
    "Manager Level": "RSM",
    "Dealer Name": "S. S. Mirje and Co-Ratnagiri",
    "SCode": "1S3095",
    "State": "Maharashtra",
    "City": "Ratnagiri",
    "Contact No.": "8454812225"
  },
  {
    "Organization": "West-1",
    "Manager Name": "Suraj Ghanekar",
    "Manager Level": "EOS Site Incharge",
    "Dealer Name": "S. S. Mirje and Co-Ratnagiri",
    "SCode": "1S3095",
    "State": "Maharashtra",
    "City": "Ratnagiri",
    "Contact No.": "8329654688"
  },
  {
    "Organization": "West-1",
    "Manager Name": "Omkar Mali / Rahul Mirje",
    "Manager Level": "MD",
    "Dealer Name": "S. S. Mirje and Co-Ratnagiri",
    "SCode": "1S3095",
    "State": "Maharashtra",
    "City": "Ratnagiri",
    "Contact No.": "9422582006,9146032974"
  },
  {
    "Organization": "West-1",
    "Manager Name": "Mrinal Kunwar",
    "Manager Level": "ASM",
    "Dealer Name": "S. S. Mirje and Co-Ratnagiri",
    "SCode": "1S3095",
    "State": "Maharashtra",
    "City": "Ratnagiri",
    "Contact No.": "8002023303"
  },
  {
    "Organization": "West-1",
    "Manager Name": "Yogesh Rahate",
    "Manager Level": "WM",
    "Dealer Name": "S. S. Mirje and Co-Ratnagiri",
    "SCode": "1S3095",
    "State": "Maharashtra",
    "City": "Ratnagiri",
    "Contact No.": "9226097385"
  },
  {
    "Organization": "West-1",
    "Manager Name": "Rohit Chavan",
    "Manager Level": "WM",
    "Dealer Name": "S. S. Mirje and Co-Sangli",
    "SCode": "1S3014",
    "State": "Maharashtra",
    "City": "Sangli",
    "Contact No.": "7722020705"
  },
  {
    "Organization": "West-1",
    "Manager Name": "Vivekanand Maske / Durvesh Deole",
    "Manager Level": "CSM",
    "Dealer Name": "S. S. Mirje and Co-Sangli",
    "SCode": "1S3014",
    "State": "Maharashtra",
    "City": "Sangli",
    "Contact No.": "9021549678,9730732831"
  },
  {
    "Organization": "West-1",
    "Manager Name": "Shreyansh Tare",
    "Manager Level": "EOS Site Incharge",
    "Dealer Name": "S. S. Mirje and Co-Sangli",
    "SCode": "1S3014",
    "State": "Maharashtra",
    "City": "Sangli",
    "Contact No.": "9225178652"
  },
  {
    "Organization": "West-1",
    "Manager Name": "Suhas Ramchandra Mane",
    "Manager Level": "RSM",
    "Dealer Name": "S. S. Mirje and Co-Sangli",
    "SCode": "1S3014",
    "State": "Maharashtra",
    "City": "Sangli",
    "Contact No.": "8454812225"
  },
  {
    "Organization": "West-1",
    "Manager Name": "Mrinal Kunwar",
    "Manager Level": "ASM",
    "Dealer Name": "S. S. Mirje and Co-Sangli",
    "SCode": "1S3014",
    "State": "Maharashtra",
    "City": "Sangli",
    "Contact No.": "8002023303"
  },
  {
    "Organization": "West-1",
    "Manager Name": "Omkar Mali / Rahul Mirje",
    "Manager Level": "MD",
    "Dealer Name": "S. S. Mirje and Co-Sangli",
    "SCode": "1S3014",
    "State": "Maharashtra",
    "City": "Sangli",
    "Contact No.": "9422582006,9146032974"
  },
  {
    "Organization": "East-1",
    "Manager Name": "Anjanav Chagmai / Vishal Kumar",
    "Manager Level": "CSM",
    "Dealer Name": "SBM Trucking Pvt Ltd-Gauripur",
    "SCode": "1S2303",
    "State": "Assam",
    "City": "Dhubri",
    "Contact No.": "8822053356,7630027054"
  },
  {
    "Organization": "East-1",
    "Manager Name": "Sushanta Tarafdar / Samiran Acharjee",
    "Manager Level": "WM",
    "Dealer Name": "SBM Trucking Pvt Ltd-Gauripur",
    "SCode": "1S2303",
    "State": "Assam",
    "City": "Dhubri",
    "Contact No.": "9287098571,9678912897"
  },
  {
    "Organization": "East-1",
    "Manager Name": "Ajit Sutradhar",
    "Manager Level": "EOS Site Incharge",
    "Dealer Name": "SBM Trucking Pvt Ltd-Gauripur",
    "SCode": "1S2303",
    "State": "Assam",
    "City": "Dhubri",
    "Contact No.": "9287982032"
  },
  {
    "Organization": "East-1",
    "Manager Name": "Yogeshwar Singh",
    "Manager Level": "RSM",
    "Dealer Name": "SBM Trucking Pvt Ltd-Gauripur",
    "SCode": "1S2303",
    "State": "Assam",
    "City": "Dhubri",
    "Contact No.": "9717966997"
  },
  {
    "Organization": "East-1",
    "Manager Name": "Dibyendu Bhattacharya / Lokesh Mittal",
    "Manager Level": "MD",
    "Dealer Name": "SBM Trucking Pvt Ltd-Gauripur",
    "SCode": "1S2303",
    "State": "Assam",
    "City": "Dhubri",
    "Contact No.": "9287982040,9365947300"
  },
  {
    "Organization": "East-1",
    "Manager Name": "Rakesh Ghosh",
    "Manager Level": "ASM",
    "Dealer Name": "SBM Trucking Pvt Ltd-Gauripur",
    "SCode": "1S2303",
    "State": "Assam",
    "City": "Dhubri",
    "Contact No.": "9477374098"
  },
  {
    "Organization": "East-1",
    "Manager Name": "Rakesh Ghosh",
    "Manager Level": "ASM",
    "Dealer Name": "SDS AGENCIES-North Lakhimpur",
    "SCode": "1S2173",
    "State": "Assam",
    "City": "North lakhimpur",
    "Contact No.": "9477374098"
  },
  {
    "Organization": "East-1",
    "Manager Name": "KULDEEP CHUTIA / RAHUL BHUYAN",
    "Manager Level": "EOS Site Incharge",
    "Dealer Name": "SDS AGENCIES-North Lakhimpur",
    "SCode": "1S2173",
    "State": "Assam",
    "City": "North lakhimpur",
    "Contact No.": "7636914516,9101867600"
  },
  {
    "Organization": "East-1",
    "Manager Name": "Shaheen Hussain",
    "Manager Level": "MD",
    "Dealer Name": "SDS AGENCIES-North Lakhimpur",
    "SCode": "1S2173",
    "State": "Assam",
    "City": "North lakhimpur",
    "Contact No.": "9650207761"
  },
  {
    "Organization": "East-1",
    "Manager Name": "BIKI MEDHI / NAREN DAS",
    "Manager Level": "WM",
    "Dealer Name": "SDS AGENCIES-North Lakhimpur",
    "SCode": "1S2173",
    "State": "Assam",
    "City": "North lakhimpur",
    "Contact No.": "9387123181,9954611395"
  },
  {
    "Organization": "East-1",
    "Manager Name": "Yogeshwar Singh",
    "Manager Level": "RSM",
    "Dealer Name": "SDS AGENCIES-North Lakhimpur",
    "SCode": "1S2173",
    "State": "Assam",
    "City": "North lakhimpur",
    "Contact No.": "9717966997"
  },
  {
    "Organization": "East-1",
    "Manager Name": "ANJANAV CHANGMAI / VISHAL KUMAR",
    "Manager Level": "CSM",
    "Dealer Name": "SDS AGENCIES-North Lakhimpur",
    "SCode": "1S2173",
    "State": "Assam",
    "City": "North lakhimpur",
    "Contact No.": "8822053356,7630027054"
  },
  {
    "Organization": "North-2",
    "Manager Name": "Ajay Gaur",
    "Manager Level": "MD",
    "Dealer Name": "SR Motors-Ajmer",
    "SCode": "1S7089",
    "State": "Rajasthan",
    "City": "Ajmer",
    "Contact No.": "9950333390"
  },
  {
    "Organization": "North-2",
    "Manager Name": "Om Dhakar",
    "Manager Level": "WM",
    "Dealer Name": "SR Motors-Ajmer",
    "SCode": "1S7089",
    "State": "Rajasthan",
    "City": "Ajmer",
    "Contact No.": "9983747409"
  },
  {
    "Organization": "North-2",
    "Manager Name": "Shivam Bhardwaj / Nandkishor",
    "Manager Level": "CSM",
    "Dealer Name": "SR Motors-Ajmer",
    "SCode": "1S7089",
    "State": "Rajasthan",
    "City": "Ajmer",
    "Contact No.": "7878175706,7389944049"
  },
  {
    "Organization": "North-2",
    "Manager Name": "Krishnendu Saha",
    "Manager Level": "RSM",
    "Dealer Name": "SR Motors-Ajmer",
    "SCode": "1S7089",
    "State": "Rajasthan",
    "City": "Ajmer",
    "Contact No.": "7980433425"
  },
  {
    "Organization": "North-2",
    "Manager Name": "Rajkumar Vaishnav",
    "Manager Level": "ASM",
    "Dealer Name": "SR Motors-Ajmer",
    "SCode": "1S7089",
    "State": "Rajasthan",
    "City": "Ajmer",
    "Contact No.": "9636756000"
  },
  {
    "Organization": "North-2",
    "Manager Name": "Rishabh Dhakar",
    "Manager Level": "EOS Site Incharge",
    "Dealer Name": "SR Motors-Ajmer",
    "SCode": "1S7089",
    "State": "Rajasthan",
    "City": "Ajmer",
    "Contact No.": "9352078206"
  },
  {
    "Organization": "North-2",
    "Manager Name": "Aryan Singh",
    "Manager Level": "EOS Site Incharge",
    "Dealer Name": "Salasar Balaji Automovers LLP-Unnao",
    "SCode": "1S7083",
    "State": "Uttar Pradesh",
    "City": "Unnao",
    "Contact No.": "9151935553"
  },
  {
    "Organization": "North-2",
    "Manager Name": "Jitendra Mishra (D) / Saket Singh (N)",
    "Manager Level": "CSM",
    "Dealer Name": "Salasar Balaji Automovers LLP-Unnao",
    "SCode": "1S7083",
    "State": "Uttar Pradesh",
    "City": "Unnao",
    "Contact No.": "9005547771,8709859215"
  },
  {
    "Organization": "North-2",
    "Manager Name": "Rahul Biyani",
    "Manager Level": "MD",
    "Dealer Name": "Salasar Balaji Automovers LLP-Unnao",
    "SCode": "1S7083",
    "State": "Uttar Pradesh",
    "City": "Unnao",
    "Contact No.": "8810794547"
  },
  {
    "Organization": "North-2",
    "Manager Name": "Pradip Maurya",
    "Manager Level": "WM",
    "Dealer Name": "Salasar Balaji Automovers LLP-Unnao",
    "SCode": "1S7083",
    "State": "Uttar Pradesh",
    "City": "Unnao",
    "Contact No.": "9151935551"
  },
  {
    "Organization": "North-2",
    "Manager Name": "Nitin Gupta",
    "Manager Level": "ASM",
    "Dealer Name": "Salasar Balaji Automovers LLP-Unnao",
    "SCode": "1S7083",
    "State": "Uttar Pradesh",
    "City": "Unnao",
    "Contact No.": "7080811550"
  },
  {
    "Organization": "North-2",
    "Manager Name": "Krishnendu Saha",
    "Manager Level": "RSM",
    "Dealer Name": "Salasar Balaji Automovers LLP-Unnao",
    "SCode": "1S7083",
    "State": "Uttar Pradesh",
    "City": "Unnao",
    "Contact No.": "7980433425"
  },
  {
    "Organization": "East-1",
    "Manager Name": "Indrajit Kumar / Kanahiya Jha",
    "Manager Level": "MD",
    "Dealer Name": "Sara Auotmobiles Pvt Ltd-Biharsarif",
    "SCode": "1S2187",
    "State": "Bihar",
    "City": "Nawada",
    "Contact No.": "7544017914,8102924261"
  },
  {
    "Organization": "East-1",
    "Manager Name": "Deepak Kumar",
    "Manager Level": "EOS Site Incharge",
    "Dealer Name": "Sara Auotmobiles Pvt Ltd-Biharsarif",
    "SCode": "1S2187",
    "State": "Bihar",
    "City": "Nawada",
    "Contact No.": "9931985316"
  },
  {
    "Organization": "East-1",
    "Manager Name": "Krishna Bhushan",
    "Manager Level": "ASM",
    "Dealer Name": "Sara Auotmobiles Pvt Ltd-Biharsarif",
    "SCode": "1S2187",
    "State": "Bihar",
    "City": "Nawada",
    "Contact No.": "6202531709"
  },
  {
    "Organization": "East-1",
    "Manager Name": "Yogeshwar Singh",
    "Manager Level": "RSM",
    "Dealer Name": "Sara Auotmobiles Pvt Ltd-Biharsarif",
    "SCode": "1S2187",
    "State": "Bihar",
    "City": "Nawada",
    "Contact No.": "9717966997"
  },
  {
    "Organization": "East-1",
    "Manager Name": "Amit Kumar",
    "Manager Level": "WM",
    "Dealer Name": "Sara Auotmobiles Pvt Ltd-Biharsarif",
    "SCode": "1S2187",
    "State": "Bihar",
    "City": "Nawada",
    "Contact No.": "6203377600"
  },
  {
    "Organization": "East-1",
    "Manager Name": "Sanjiv Kumar",
    "Manager Level": "CSM",
    "Dealer Name": "Sara Auotmobiles Pvt Ltd-Biharsarif",
    "SCode": "1S2187",
    "State": "Bihar",
    "City": "Nawada",
    "Contact No.": "6202531711"
  },
  {
    "Organization": "East-1",
    "Manager Name": "Deepak Kumar",
    "Manager Level": "EOS Site Incharge",
    "Dealer Name": "Sara Automobiles Pvt Ltd-Arrah",
    "SCode": "1S2252",
    "State": "Bihar",
    "City": "Arrah",
    "Contact No.": "9931985316"
  },
  {
    "Organization": "East-1",
    "Manager Name": "Raushan Kumar",
    "Manager Level": "WM",
    "Dealer Name": "Sara Automobiles Pvt Ltd-Arrah",
    "SCode": "1S2252",
    "State": "Bihar",
    "City": "Arrah",
    "Contact No.": "9351025907"
  },
  {
    "Organization": "East-1",
    "Manager Name": "Santosh Ray",
    "Manager Level": "CSM",
    "Dealer Name": "Sara Automobiles Pvt Ltd-Arrah",
    "SCode": "1S2252",
    "State": "Bihar",
    "City": "Arrah",
    "Contact No.": "7667384075"
  },
  {
    "Organization": "East-1",
    "Manager Name": "Yogeshwar Singh",
    "Manager Level": "RSM",
    "Dealer Name": "Sara Automobiles Pvt Ltd-Arrah",
    "SCode": "1S2252",
    "State": "Bihar",
    "City": "Arrah",
    "Contact No.": "9717966997"
  },
  {
    "Organization": "East-1",
    "Manager Name": "Krishna Bhushan",
    "Manager Level": "ASM",
    "Dealer Name": "Sara Automobiles Pvt Ltd-Arrah",
    "SCode": "1S2252",
    "State": "Bihar",
    "City": "Arrah",
    "Contact No.": "6202531709"
  },
  {
    "Organization": "East-1",
    "Manager Name": "Indrajit Kumar / Kanahiya Jha",
    "Manager Level": "MD",
    "Dealer Name": "Sara Automobiles Pvt Ltd-Arrah",
    "SCode": "1S2252",
    "State": "Bihar",
    "City": "Arrah",
    "Contact No.": "7544017914,8102924261"
  },
  {
    "Organization": "East-1",
    "Manager Name": "Yogeshwar Singh",
    "Manager Level": "RSM",
    "Dealer Name": "Sara Automobiles Pvt Ltd-Gaya",
    "SCode": "1S2104",
    "State": "Bihar",
    "City": "Gaya",
    "Contact No.": "9717966997"
  },
  {
    "Organization": "East-1",
    "Manager Name": "Santosh Ray",
    "Manager Level": "CSM",
    "Dealer Name": "Sara Automobiles Pvt Ltd-Gaya",
    "SCode": "1S2104",
    "State": "Bihar",
    "City": "Gaya",
    "Contact No.": "7667384075"
  },
  {
    "Organization": "East-1",
    "Manager Name": "Nishikant Prakash",
    "Manager Level": "MD",
    "Dealer Name": "Sara Automobiles Pvt Ltd-Gaya",
    "SCode": "1S2104",
    "State": "Bihar",
    "City": "Gaya",
    "Contact No.": "8789242708"
  },
  {
    "Organization": "East-1",
    "Manager Name": "Bipin Kumar",
    "Manager Level": "EOS Site Incharge",
    "Dealer Name": "Sara Automobiles Pvt Ltd-Gaya",
    "SCode": "1S2104",
    "State": "Bihar",
    "City": "Gaya",
    "Contact No.": "7765888458"
  },
  {
    "Organization": "East-1",
    "Manager Name": "Krishna Bhushan",
    "Manager Level": "ASM",
    "Dealer Name": "Sara Automobiles Pvt Ltd-Gaya",
    "SCode": "1S2104",
    "State": "Bihar",
    "City": "Gaya",
    "Contact No.": "6202531709"
  },
  {
    "Organization": "East-1",
    "Manager Name": "Amit Yadav",
    "Manager Level": "WM",
    "Dealer Name": "Sara Automobiles Pvt Ltd-Gaya",
    "SCode": "1S2104",
    "State": "Bihar",
    "City": "Gaya",
    "Contact No.": "8804285869"
  },
  {
    "Organization": "East-1",
    "Manager Name": "Mr.Kanahiya Jha",
    "Manager Level": "MD",
    "Dealer Name": "Sara Automobiles Pvt Ltd-Patna",
    "SCode": "1S2102",
    "State": "Bihar",
    "City": "Patna",
    "Contact No.": "8102924261"
  },
  {
    "Organization": "East-1",
    "Manager Name": "Sanjiv Kumar",
    "Manager Level": "CSM",
    "Dealer Name": "Sara Automobiles Pvt Ltd-Patna",
    "SCode": "1S2102",
    "State": "Bihar",
    "City": "Patna",
    "Contact No.": "6202531711"
  },
  {
    "Organization": "East-1",
    "Manager Name": "Krishna Bhushan",
    "Manager Level": "ASM",
    "Dealer Name": "Sara Automobiles Pvt Ltd-Patna",
    "SCode": "1S2102",
    "State": "Bihar",
    "City": "Patna",
    "Contact No.": "6202531709"
  },
  {
    "Organization": "East-1",
    "Manager Name": "Umakant Sharma / Kanahiya Jha",
    "Manager Level": "WM",
    "Dealer Name": "Sara Automobiles Pvt Ltd-Patna",
    "SCode": "1S2102",
    "State": "Bihar",
    "City": "Patna",
    "Contact No.": "7091590170,8102924261"
  },
  {
    "Organization": "East-1",
    "Manager Name": "Umakant sharma",
    "Manager Level": "EOS Site Incharge",
    "Dealer Name": "Sara Automobiles Pvt Ltd-Patna",
    "SCode": "1S2102",
    "State": "Bihar",
    "City": "Patna",
    "Contact No.": "7091590170"
  },
  {
    "Organization": "East-1",
    "Manager Name": "Yogeshwar Singh",
    "Manager Level": "RSM",
    "Dealer Name": "Sara Automobiles Pvt Ltd-Patna",
    "SCode": "1S2102",
    "State": "Bihar",
    "City": "Patna",
    "Contact No.": "9717966997"
  },
  {
    "Organization": "South-1",
    "Manager Name": "S. J. Subramani",
    "Manager Level": "CSM",
    "Dealer Name": "Sara Motors-Chennai",
    "SCode": "1S4151",
    "State": "Tamil Nadu",
    "City": "Chennai",
    "Contact No.": "9840730251"
  },
  {
    "Organization": "South-1",
    "Manager Name": "Vasantha Kumar T",
    "Manager Level": "ASM",
    "Dealer Name": "Sara Motors-Chennai",
    "SCode": "1S4151",
    "State": "Tamil Nadu",
    "City": "Chennai",
    "Contact No.": "9790754777"
  },
  {
    "Organization": "South-1",
    "Manager Name": "Venkatesakumar",
    "Manager Level": "EOS Site Incharge",
    "Dealer Name": "Sara Motors-Chennai",
    "SCode": "1S4151",
    "State": "Tamil Nadu",
    "City": "Chennai",
    "Contact No.": "9361397597"
  },
  {
    "Organization": "South-1",
    "Manager Name": "Midhun A.S",
    "Manager Level": "WM",
    "Dealer Name": "Sara Motors-Chennai",
    "SCode": "1S4151",
    "State": "Tamil Nadu",
    "City": "Chennai",
    "Contact No.": "9361396909"
  },
  {
    "Organization": "South-1",
    "Manager Name": "Radhakrishnan",
    "Manager Level": "RSM",
    "Dealer Name": "Sara Motors-Chennai",
    "SCode": "1S4151",
    "State": "Tamil Nadu",
    "City": "Chennai",
    "Contact No.": "9840730250"
  },
  {
    "Organization": "South-1",
    "Manager Name": "Rajinikanth E",
    "Manager Level": "MD",
    "Dealer Name": "Sara Motors-Chennai",
    "SCode": "1S4151",
    "State": "Tamil Nadu",
    "City": "Chennai",
    "Contact No.": "9361396890"
  },
  {
    "Organization": "West-1",
    "Manager Name": "Milind Ashtaputre / Rajshekhar Ganachari",
    "Manager Level": "MD",
    "Dealer Name": "Saral Motors-Solapur",
    "SCode": "1S3055",
    "State": "Maharashtra",
    "City": "Solapur",
    "Contact No.": "9657212099,9423068301"
  },
  {
    "Organization": "West-1",
    "Manager Name": "Shrishail Honnagol",
    "Manager Level": "ASM",
    "Dealer Name": "Saral Motors-Solapur",
    "SCode": "1S3055",
    "State": "Maharashtra",
    "City": "Solapur",
    "Contact No.": "7700906442"
  },
  {
    "Organization": "West-1",
    "Manager Name": "Baban Sarode / Deepak Bhosale",
    "Manager Level": "EOS Site Incharge",
    "Dealer Name": "Saral Motors-Solapur",
    "SCode": "1S3055",
    "State": "Maharashtra",
    "City": "Solapur",
    "Contact No.": "9423068304,9673500760"
  },
  {
    "Organization": "West-1",
    "Manager Name": "Suhas Ramchandra Mane",
    "Manager Level": "RSM",
    "Dealer Name": "Saral Motors-Solapur",
    "SCode": "1S3055",
    "State": "Maharashtra",
    "City": "Solapur",
    "Contact No.": "8454812225"
  },
  {
    "Organization": "West-1",
    "Manager Name": "Works Manager / Pravin Gundala",
    "Manager Level": "WM",
    "Dealer Name": "Saral Motors-Solapur",
    "SCode": "1S3055",
    "State": "Maharashtra",
    "City": "Solapur",
    "Contact No.": "9371569901,8446868522"
  },
  {
    "Organization": "West-1",
    "Manager Name": "Datta Nikam",
    "Manager Level": "CSM",
    "Dealer Name": "Saral Motors-Solapur",
    "SCode": "1S3055",
    "State": "Maharashtra",
    "City": "Solapur",
    "Contact No.": "7389946335"
  },
  {
    "Organization": "West-2",
    "Manager Name": "Om Prakash Sarle / Lalit Sarle",
    "Manager Level": "MD",
    "Dealer Name": "Sarle Motors-Betul",
    "SCode": "1S5101",
    "State": "Madhya Pradesh",
    "City": "Betul",
    "Contact No.": "9893540588,8770015896"
  },
  {
    "Organization": "West-2",
    "Manager Name": "Sudhir Kumar",
    "Manager Level": "RSM",
    "Dealer Name": "Sarle Motors-Betul",
    "SCode": "1S5101",
    "State": "Madhya Pradesh",
    "City": "Betul",
    "Contact No.": "9752542733"
  },
  {
    "Organization": "West-2",
    "Manager Name": "Ramkishor Dadhore",
    "Manager Level": "WM",
    "Dealer Name": "Sarle Motors-Betul",
    "SCode": "1S5101",
    "State": "Madhya Pradesh",
    "City": "Betul",
    "Contact No.": "9009312869"
  },
  {
    "Organization": "West-2",
    "Manager Name": "Sunil Dhote",
    "Manager Level": "EOS Site Incharge",
    "Dealer Name": "Sarle Motors-Betul",
    "SCode": "1S5101",
    "State": "Madhya Pradesh",
    "City": "Betul",
    "Contact No.": "8269043589"
  },
  {
    "Organization": "West-2",
    "Manager Name": "Nilesh Kumar",
    "Manager Level": "CSM",
    "Dealer Name": "Sarle Motors-Betul",
    "SCode": "1S5101",
    "State": "Madhya Pradesh",
    "City": "Betul",
    "Contact No.": "6260509367"
  },
  {
    "Organization": "West-2",
    "Manager Name": "Vishal Kulkarni",
    "Manager Level": "ASM",
    "Dealer Name": "Sarle Motors-Betul",
    "SCode": "1S5101",
    "State": "Madhya Pradesh",
    "City": "Betul",
    "Contact No.": "8349997686"
  },
  {
    "Organization": "North-2",
    "Manager Name": "Mukesh Saxena",
    "Manager Level": "ASM",
    "Dealer Name": "Sarnath Autozone-Bareilly",
    "SCode": "1S7049",
    "State": "Uttar Pradesh",
    "City": "Bareilly",
    "Contact No.": "9599117560"
  },
  {
    "Organization": "North-2",
    "Manager Name": "Sumit Yadav",
    "Manager Level": "WM",
    "Dealer Name": "Sarnath Autozone-Bareilly",
    "SCode": "1S7049",
    "State": "Uttar Pradesh",
    "City": "Bareilly",
    "Contact No.": "8630263575"
  },
  {
    "Organization": "North-2",
    "Manager Name": "Krishnendu Saha",
    "Manager Level": "RSM",
    "Dealer Name": "Sarnath Autozone-Bareilly",
    "SCode": "1S7049",
    "State": "Uttar Pradesh",
    "City": "Bareilly",
    "Contact No.": "7980433425"
  },
  {
    "Organization": "North-2",
    "Manager Name": "Akash Yadav (D) / Saket Singh (N)",
    "Manager Level": "CSM",
    "Dealer Name": "Sarnath Autozone-Bareilly",
    "SCode": "1S7049",
    "State": "Uttar Pradesh",
    "City": "Bareilly",
    "Contact No.": "9582964229,8709859215"
  },
  {
    "Organization": "North-2",
    "Manager Name": "Fazil Ali",
    "Manager Level": "EOS Site Incharge",
    "Dealer Name": "Sarnath Autozone-Bareilly",
    "SCode": "1S7049",
    "State": "Uttar Pradesh",
    "City": "Bareilly",
    "Contact No.": "6396458192"
  },
  {
    "Organization": "North-2",
    "Manager Name": "Manoj Sharma",
    "Manager Level": "MD",
    "Dealer Name": "Sarnath Autozone-Bareilly",
    "SCode": "1S7049",
    "State": "Uttar Pradesh",
    "City": "Bareilly",
    "Contact No.": "9837015589"
  },
  {
    "Organization": "North-2",
    "Manager Name": "Manoj Kumar",
    "Manager Level": "MD",
    "Dealer Name": "Sarnath Autozone-Gajraula",
    "SCode": "1S7158",
    "State": "Uttar Pradesh",
    "City": "Amroha",
    "Contact No.": "9837015589"
  },
  {
    "Organization": "North-2",
    "Manager Name": "Harshdeep Gautam",
    "Manager Level": "WM",
    "Dealer Name": "Sarnath Autozone-Gajraula",
    "SCode": "1S7158",
    "State": "Uttar Pradesh",
    "City": "Amroha",
    "Contact No.": "9286833651"
  },
  {
    "Organization": "North-2",
    "Manager Name": "Krishnendu Saha",
    "Manager Level": "RSM",
    "Dealer Name": "Sarnath Autozone-Gajraula",
    "SCode": "1S7158",
    "State": "Uttar Pradesh",
    "City": "Amroha",
    "Contact No.": "7980433425"
  },
  {
    "Organization": "North-2",
    "Manager Name": "Mukesh Saxena",
    "Manager Level": "ASM",
    "Dealer Name": "Sarnath Autozone-Gajraula",
    "SCode": "1S7158",
    "State": "Uttar Pradesh",
    "City": "Amroha",
    "Contact No.": "9599117560"
  },
  {
    "Organization": "North-2",
    "Manager Name": "Akash Yadav",
    "Manager Level": "CSM",
    "Dealer Name": "Sarnath Autozone-Gajraula",
    "SCode": "1S7158",
    "State": "Uttar Pradesh",
    "City": "Amroha",
    "Contact No.": "9582964229"
  },
  {
    "Organization": "North-2",
    "Manager Name": "Furkan",
    "Manager Level": "EOS Site Incharge",
    "Dealer Name": "Sarnath Autozone-Gajraula",
    "SCode": "1S7158",
    "State": "Uttar Pradesh",
    "City": "Amroha",
    "Contact No.": "9286833657"
  },
  {
    "Organization": "North-2",
    "Manager Name": "Manoj Sharma",
    "Manager Level": "MD",
    "Dealer Name": "Sarnath Autozone-Moradabad",
    "SCode": "1S7050",
    "State": "Uttar Pradesh",
    "City": "Moradabad",
    "Contact No.": "9837015589"
  },
  {
    "Organization": "North-2",
    "Manager Name": "Krishnendu Saha",
    "Manager Level": "RSM",
    "Dealer Name": "Sarnath Autozone-Moradabad",
    "SCode": "1S7050",
    "State": "Uttar Pradesh",
    "City": "Moradabad",
    "Contact No.": "7980433425"
  },
  {
    "Organization": "North-2",
    "Manager Name": "Pramit Kumar Mishra",
    "Manager Level": "WM",
    "Dealer Name": "Sarnath Autozone-Moradabad",
    "SCode": "1S7050",
    "State": "Uttar Pradesh",
    "City": "Moradabad",
    "Contact No.": "9758804488"
  },
  {
    "Organization": "North-2",
    "Manager Name": "Akash Yadav (D) / Saket Singh (N)",
    "Manager Level": "CSM",
    "Dealer Name": "Sarnath Autozone-Moradabad",
    "SCode": "1S7050",
    "State": "Uttar Pradesh",
    "City": "Moradabad",
    "Contact No.": "9582964229,8709859215"
  },
  {
    "Organization": "North-2",
    "Manager Name": "Sunny Kumar",
    "Manager Level": "EOS Site Incharge",
    "Dealer Name": "Sarnath Autozone-Moradabad",
    "SCode": "1S7050",
    "State": "Uttar Pradesh",
    "City": "Moradabad",
    "Contact No.": "9759714488"
  },
  {
    "Organization": "North-2",
    "Manager Name": "Mukesh Saxena",
    "Manager Level": "ASM",
    "Dealer Name": "Sarnath Autozone-Moradabad",
    "SCode": "1S7050",
    "State": "Uttar Pradesh",
    "City": "Moradabad",
    "Contact No.": "9599117560"
  },
  {
    "Organization": "East-1",
    "Manager Name": "Yogeshwar Singh",
    "Manager Level": "RSM",
    "Dealer Name": "Sarojini Auto Service-Krishnanagar",
    "SCode": "1S2069",
    "State": "West Bengal",
    "City": "Krishnanagar",
    "Contact No.": "9717966997"
  },
  {
    "Organization": "East-1",
    "Manager Name": "Soumitro Pradhan",
    "Manager Level": "MD",
    "Dealer Name": "Sarojini Auto Service-Krishnanagar",
    "SCode": "1S2069",
    "State": "West Bengal",
    "City": "Krishnanagar",
    "Contact No.": "8436239006"
  },
  {
    "Organization": "East-1",
    "Manager Name": "Aayush Mondal",
    "Manager Level": "CSM",
    "Dealer Name": "Sarojini Auto Service-Krishnanagar",
    "SCode": "1S2069",
    "State": "West Bengal",
    "City": "Krishnanagar",
    "Contact No.": "8910204452"
  },
  {
    "Organization": "East-1",
    "Manager Name": "Abhirup Ghosh",
    "Manager Level": "ASM",
    "Dealer Name": "Sarojini Auto Service-Krishnanagar",
    "SCode": "1S2069",
    "State": "West Bengal",
    "City": "Krishnanagar",
    "Contact No.": "9073378080"
  },
  {
    "Organization": "East-1",
    "Manager Name": "Sudipta Biswas / Soumitro Prodhan",
    "Manager Level": "WM",
    "Dealer Name": "Sarojini Auto Service-Krishnanagar",
    "SCode": "1S2069",
    "State": "West Bengal",
    "City": "Krishnanagar",
    "Contact No.": "8250696603,8436239005"
  },
  {
    "Organization": "East-1",
    "Manager Name": "Yogeshwar Singh",
    "Manager Level": "RSM",
    "Dealer Name": "Sarojini Automobiles Pvt Ltd-Murshidabad",
    "SCode": "1S2097",
    "State": "West Bengal",
    "City": "Baharampur",
    "Contact No.": "9717966997"
  },
  {
    "Organization": "East-1",
    "Manager Name": "Soumitro Pradhan",
    "Manager Level": "MD",
    "Dealer Name": "Sarojini Automobiles Pvt Ltd-Murshidabad",
    "SCode": "1S2097",
    "State": "West Bengal",
    "City": "Baharampur",
    "Contact No.": "8436239006"
  },
  {
    "Organization": "East-1",
    "Manager Name": "Abhirup Ghosh",
    "Manager Level": "ASM",
    "Dealer Name": "Sarojini Automobiles Pvt Ltd-Murshidabad",
    "SCode": "1S2097",
    "State": "West Bengal",
    "City": "Baharampur",
    "Contact No.": "9073378080"
  },
  {
    "Organization": "East-1",
    "Manager Name": "Aayush Mondal",
    "Manager Level": "CSM",
    "Dealer Name": "Sarojini Automobiles Pvt Ltd-Murshidabad",
    "SCode": "1S2097",
    "State": "West Bengal",
    "City": "Baharampur",
    "Contact No.": "8910204452"
  },
  {
    "Organization": "East-1",
    "Manager Name": "Abhishek Adhikary",
    "Manager Level": "WM",
    "Dealer Name": "Sarojini Automobiles Pvt Ltd-Murshidabad",
    "SCode": "1S2097",
    "State": "West Bengal",
    "City": "Baharampur",
    "Contact No.": "9932624601"
  },
  {
    "Organization": "North-1",
    "Manager Name": "Harsh Mehta",
    "Manager Level": "MD",
    "Dealer Name": "Satluj Motors-Nathan",
    "SCode": "1S1250",
    "State": "Himachal Pradesh",
    "City": "Shimla",
    "Contact No.": "9816557092"
  },
  {
    "Organization": "North-1",
    "Manager Name": "Vaibhav Katyal",
    "Manager Level": "ASM",
    "Dealer Name": "Satluj Motors-Nathan",
    "SCode": "1S1250",
    "State": "Himachal Pradesh",
    "City": "Shimla",
    "Contact No.": "9219500351"
  },
  {
    "Organization": "North-1",
    "Manager Name": "Lalit Kumar",
    "Manager Level": "CSM",
    "Dealer Name": "Satluj Motors-Nathan",
    "SCode": "1S1250",
    "State": "Himachal Pradesh",
    "City": "Shimla",
    "Contact No.": "9625070004"
  },
  {
    "Organization": "North-1",
    "Manager Name": "Dixit",
    "Manager Level": "EOS Site Incharge",
    "Dealer Name": "Satluj Motors-Nathan",
    "SCode": "1S1250",
    "State": "Himachal Pradesh",
    "City": "Shimla",
    "Contact No.": "9317375002"
  },
  {
    "Organization": "North-1",
    "Manager Name": "Adarsh Prasad",
    "Manager Level": "RSM",
    "Dealer Name": "Satluj Motors-Nathan",
    "SCode": "1S1250",
    "State": "Himachal Pradesh",
    "City": "Shimla",
    "Contact No.": "9717996321"
  },
  {
    "Organization": "North-1",
    "Manager Name": "Sahil Kumar",
    "Manager Level": "WM",
    "Dealer Name": "Satluj Motors-Nathan",
    "SCode": "1S1250",
    "State": "Himachal Pradesh",
    "City": "Shimla",
    "Contact No.": "9816721590,9317375001"
  },
  {
    "Organization": "West-1",
    "Manager Name": "Sagar Wagchoure",
    "Manager Level": "WM",
    "Dealer Name": "Seva Trucking Pvt Ltd-Nashik",
    "SCode": "1S3416",
    "State": "Maharashtra",
    "City": "Nashik",
    "Contact No.": "8530987666"
  },
  {
    "Organization": "West-1",
    "Manager Name": "Sagar Nichite",
    "Manager Level": "CSM",
    "Dealer Name": "Seva Trucking Pvt Ltd-Nashik",
    "SCode": "1S3416",
    "State": "Maharashtra",
    "City": "Nashik",
    "Contact No.": "8149683808"
  },
  {
    "Organization": "West-1",
    "Manager Name": "Suhas Ramchandra Mane",
    "Manager Level": "RSM",
    "Dealer Name": "Seva Trucking Pvt Ltd-Nashik",
    "SCode": "1S3416",
    "State": "Maharashtra",
    "City": "Nashik",
    "Contact No.": "8454812225"
  },
  {
    "Organization": "West-1",
    "Manager Name": "Anand Kshirasagar",
    "Manager Level": "MD",
    "Dealer Name": "Seva Trucking Pvt Ltd-Nashik",
    "SCode": "1S3416",
    "State": "Maharashtra",
    "City": "Nashik",
    "Contact No.": "9730300168"
  },
  {
    "Organization": "West-1",
    "Manager Name": "Shrishail Honnagol",
    "Manager Level": "ASM",
    "Dealer Name": "Seva Trucking Pvt Ltd-Nashik",
    "SCode": "1S3416",
    "State": "Maharashtra",
    "City": "Nashik",
    "Contact No.": "7700906442"
  },
  {
    "Organization": "West-1",
    "Manager Name": "EOS Manager / Vishal Gadkari",
    "Manager Level": "EOS Site Incharge",
    "Dealer Name": "Seva Trucking Pvt Ltd-Nashik",
    "SCode": "1S3416",
    "State": "Maharashtra",
    "City": "Nashik",
    "Contact No.": "8956536885,8956157574"
  },
  {
    "Organization": "West-1",
    "Manager Name": "Harish Patil",
    "Manager Level": "WM",
    "Dealer Name": "Seva Trucking-Dhule",
    "SCode": "1S3432",
    "State": "Maharashtra",
    "City": "Dhule",
    "Contact No.": "7219666769"
  },
  {
    "Organization": "West-1",
    "Manager Name": "Mahendra Patil / Kalpesh Badane",
    "Manager Level": "EOS Site Incharge",
    "Dealer Name": "Seva Trucking-Dhule",
    "SCode": "1S3432",
    "State": "Maharashtra",
    "City": "Dhule",
    "Contact No.": "8956411253,8956411254"
  },
  {
    "Organization": "West-1",
    "Manager Name": "Sagar Nichite",
    "Manager Level": "CSM",
    "Dealer Name": "Seva Trucking-Dhule",
    "SCode": "1S3432",
    "State": "Maharashtra",
    "City": "Dhule",
    "Contact No.": "8149683808"
  },
  {
    "Organization": "West-1",
    "Manager Name": "Suhas Ramchandra Mane",
    "Manager Level": "RSM",
    "Dealer Name": "Seva Trucking-Dhule",
    "SCode": "1S3432",
    "State": "Maharashtra",
    "City": "Dhule",
    "Contact No.": "8454812225"
  },
  {
    "Organization": "West-1",
    "Manager Name": "Shrishail Honnagol",
    "Manager Level": "ASM",
    "Dealer Name": "Seva Trucking-Dhule",
    "SCode": "1S3432",
    "State": "Maharashtra",
    "City": "Dhule",
    "Contact No.": "7700906442"
  },
  {
    "Organization": "West-1",
    "Manager Name": "Anand Kshirasagar",
    "Manager Level": "MD",
    "Dealer Name": "Seva Trucking-Dhule",
    "SCode": "1S3432",
    "State": "Maharashtra",
    "City": "Dhule",
    "Contact No.": "9730300168"
  },
  {
    "Organization": "West-1",
    "Manager Name": "Suhas Ramchandra Mane",
    "Manager Level": "RSM",
    "Dealer Name": "Seva Trucking-Malegaon",
    "SCode": "1S3431",
    "State": "Maharashtra",
    "City": "Malegaon",
    "Contact No.": "8454812225"
  },
  {
    "Organization": "West-1",
    "Manager Name": "EOS Manager",
    "Manager Level": "EOS Site Incharge",
    "Dealer Name": "Seva Trucking-Malegaon",
    "SCode": "1S3431",
    "State": "Maharashtra",
    "City": "Malegaon",
    "Contact No.": "8956797523"
  },
  {
    "Organization": "West-1",
    "Manager Name": "Shrishail Honnagol",
    "Manager Level": "ASM",
    "Dealer Name": "Seva Trucking-Malegaon",
    "SCode": "1S3431",
    "State": "Maharashtra",
    "City": "Malegaon",
    "Contact No.": "7700906442"
  },
  {
    "Organization": "West-1",
    "Manager Name": "Anup Lasure",
    "Manager Level": "CSM",
    "Dealer Name": "Seva Trucking-Malegaon",
    "SCode": "1S3431",
    "State": "Maharashtra",
    "City": "Malegaon",
    "Contact No.": "8668611069"
  },
  {
    "Organization": "West-1",
    "Manager Name": "Sanket Pawar",
    "Manager Level": "WM",
    "Dealer Name": "Seva Trucking-Malegaon",
    "SCode": "1S3431",
    "State": "Maharashtra",
    "City": "Malegaon",
    "Contact No.": "8956150260"
  },
  {
    "Organization": "West-1",
    "Manager Name": "Anand Kshirasagar",
    "Manager Level": "MD",
    "Dealer Name": "Seva Trucking-Malegaon",
    "SCode": "1S3431",
    "State": "Maharashtra",
    "City": "Malegaon",
    "Contact No.": "9730300168"
  },
  {
    "Organization": "West-2",
    "Manager Name": "Pintu",
    "Manager Level": "EOS Site Incharge",
    "Dealer Name": "Sharma Automobiles-Bhind",
    "SCode": "1S5064",
    "State": "Madhya Pradesh",
    "City": "Bhind",
    "Contact No.": "7693086173"
  },
  {
    "Organization": "West-2",
    "Manager Name": "Vivek Kumar",
    "Manager Level": "ASM",
    "Dealer Name": "Sharma Automobiles-Bhind",
    "SCode": "1S5064",
    "State": "Madhya Pradesh",
    "City": "Bhind",
    "Contact No.": "8171110903"
  },
  {
    "Organization": "West-2",
    "Manager Name": "Nitin Sharma / Rakesh Sharma",
    "Manager Level": "MD",
    "Dealer Name": "Sharma Automobiles-Bhind",
    "SCode": "1S5064",
    "State": "Madhya Pradesh",
    "City": "Bhind",
    "Contact No.": "9425127236,9425127181"
  },
  {
    "Organization": "West-2",
    "Manager Name": "Pintu",
    "Manager Level": "WM",
    "Dealer Name": "Sharma Automobiles-Bhind",
    "SCode": "1S5064",
    "State": "Madhya Pradesh",
    "City": "Bhind",
    "Contact No.": "7693086173"
  },
  {
    "Organization": "West-2",
    "Manager Name": "Sudhir Kumar",
    "Manager Level": "RSM",
    "Dealer Name": "Sharma Automobiles-Bhind",
    "SCode": "1S5064",
    "State": "Madhya Pradesh",
    "City": "Bhind",
    "Contact No.": "9752542733"
  },
  {
    "Organization": "West-2",
    "Manager Name": "Saurabh Bajpai",
    "Manager Level": "CSM",
    "Dealer Name": "Sharma Automobiles-Bhind",
    "SCode": "1S5064",
    "State": "Madhya Pradesh",
    "City": "Bhind",
    "Contact No.": "9630112997"
  },
  {
    "Organization": "West-2",
    "Manager Name": "Manish Jain",
    "Manager Level": "MD",
    "Dealer Name": "Shashwat Motors Pvt Ltd-Sagar",
    "SCode": "1S5104",
    "State": "Madhya Pradesh",
    "City": "Sagar",
    "Contact No.": "7692040999"
  },
  {
    "Organization": "West-2",
    "Manager Name": "Vishal Kulkarni",
    "Manager Level": "ASM",
    "Dealer Name": "Shashwat Motors Pvt Ltd-Sagar",
    "SCode": "1S5104",
    "State": "Madhya Pradesh",
    "City": "Sagar",
    "Contact No.": "8349997686"
  },
  {
    "Organization": "West-2",
    "Manager Name": "Sudhir Kumar",
    "Manager Level": "RSM",
    "Dealer Name": "Shashwat Motors Pvt Ltd-Sagar",
    "SCode": "1S5104",
    "State": "Madhya Pradesh",
    "City": "Sagar",
    "Contact No.": "9752542733"
  },
  {
    "Organization": "West-2",
    "Manager Name": "Savendra Singh",
    "Manager Level": "WM",
    "Dealer Name": "Shashwat Motors Pvt Ltd-Sagar",
    "SCode": "1S5104",
    "State": "Madhya Pradesh",
    "City": "Sagar",
    "Contact No.": "9203407211"
  },
  {
    "Organization": "West-2",
    "Manager Name": "Ashish Kumar",
    "Manager Level": "CSM",
    "Dealer Name": "Shashwat Motors Pvt Ltd-Sagar",
    "SCode": "1S5104",
    "State": "Madhya Pradesh",
    "City": "Sagar",
    "Contact No.": "9910950795"
  },
  {
    "Organization": "West-2",
    "Manager Name": "Bhupendra Chadar",
    "Manager Level": "EOS Site Incharge",
    "Dealer Name": "Shashwat Motors Pvt Ltd-Sagar",
    "SCode": "1S5104",
    "State": "Madhya Pradesh",
    "City": "Sagar",
    "Contact No.": "9203407213"
  },
  {
    "Organization": "North-1",
    "Manager Name": "Dheeraj Tehlan",
    "Manager Level": "CSM",
    "Dealer Name": "Shree Ji Motors-Jhumpa",
    "SCode": "1S1286",
    "State": "Haryana",
    "City": "Bhiwani",
    "Contact No.": "8708685878"
  },
  {
    "Organization": "North-1",
    "Manager Name": "Amit Goyal",
    "Manager Level": "MD",
    "Dealer Name": "Shree Ji Motors-Jhumpa",
    "SCode": "1S1286",
    "State": "Haryana",
    "City": "Bhiwani",
    "Contact No.": "8607242555"
  },
  {
    "Organization": "North-1",
    "Manager Name": "Ankit Kaswan",
    "Manager Level": "WM",
    "Dealer Name": "Shree Ji Motors-Jhumpa",
    "SCode": "1S1286",
    "State": "Haryana",
    "City": "Bhiwani",
    "Contact No.": "7988664530"
  },
  {
    "Organization": "North-1",
    "Manager Name": "Adarsh Prasad",
    "Manager Level": "RSM",
    "Dealer Name": "Shree Ji Motors-Jhumpa",
    "SCode": "1S1286",
    "State": "Haryana",
    "City": "Bhiwani",
    "Contact No.": "9717996321"
  },
  {
    "Organization": "North-1",
    "Manager Name": "Sumit Kumar",
    "Manager Level": "EOS Site Incharge",
    "Dealer Name": "Shree Ji Motors-Jhumpa",
    "SCode": "1S1286",
    "State": "Haryana",
    "City": "Bhiwani",
    "Contact No.": "8059342555"
  },
  {
    "Organization": "North-1",
    "Manager Name": "Sunny Verma",
    "Manager Level": "ASM",
    "Dealer Name": "Shree Ji Motors-Jhumpa",
    "SCode": "1S1286",
    "State": "Haryana",
    "City": "Bhiwani",
    "Contact No.": "7276047837"
  },
  {
    "Organization": "North-1",
    "Manager Name": "Adarsh Prasad (D) / Sunil Verma (N)",
    "Manager Level": "RSM",
    "Dealer Name": "Shree Motors (HD)-Kaili Fridabad",
    "SCode": "1S1149",
    "State": "Haryana",
    "City": "Faridabad",
    "Contact No.": "9717996321,7742688688"
  },
  {
    "Organization": "North-1",
    "Manager Name": "Ashish Mittal",
    "Manager Level": "MD",
    "Dealer Name": "Shree Motors (HD)-Kaili Fridabad",
    "SCode": "1S1149",
    "State": "Haryana",
    "City": "Faridabad",
    "Contact No.": "9810744169"
  },
  {
    "Organization": "North-1",
    "Manager Name": "Shashikant",
    "Manager Level": "WM",
    "Dealer Name": "Shree Motors (HD)-Kaili Fridabad",
    "SCode": "1S1149",
    "State": "Haryana",
    "City": "Faridabad",
    "Contact No.": "9599100462"
  },
  {
    "Organization": "North-1",
    "Manager Name": "Sunil Verma (D) / Akshay Kumar (N)",
    "Manager Level": "ASM",
    "Dealer Name": "Shree Motors (HD)-Kaili Fridabad",
    "SCode": "1S1149",
    "State": "Haryana",
    "City": "Faridabad",
    "Contact No.": "7742688688,9625343453"
  },
  {
    "Organization": "North-1",
    "Manager Name": "Ravi / Gaurav",
    "Manager Level": "EOS Site Incharge",
    "Dealer Name": "Shree Motors (HD)-Kaili Fridabad",
    "SCode": "1S1149",
    "State": "Haryana",
    "City": "Faridabad",
    "Contact No.": "9599100463,7428356005"
  },
  {
    "Organization": "North-1",
    "Manager Name": "Akshay Kumar (D) / Shubham Raj (N)",
    "Manager Level": "CSM",
    "Dealer Name": "Shree Motors (HD)-Kaili Fridabad",
    "SCode": "1S1149",
    "State": "Haryana",
    "City": "Faridabad",
    "Contact No.": "9625343453,7303535819"
  },
  {
    "Organization": "North-1",
    "Manager Name": "Mr. Ashish Mittal",
    "Manager Level": "MD",
    "Dealer Name": "Shree Motors (LMD)-Faridabad",
    "SCode": "1S1007",
    "State": "Haryana",
    "City": "Faridabad",
    "Contact No.": "9810744169"
  },
  {
    "Organization": "North-1",
    "Manager Name": "Sunil Verma",
    "Manager Level": "ASM",
    "Dealer Name": "Shree Motors (LMD)-Faridabad",
    "SCode": "1S1007",
    "State": "Haryana",
    "City": "Faridabad",
    "Contact No.": "7742688688"
  },
  {
    "Organization": "North-1",
    "Manager Name": "Satish Pandey",
    "Manager Level": "WM",
    "Dealer Name": "Shree Motors (LMD)-Faridabad",
    "SCode": "1S1007",
    "State": "Haryana",
    "City": "Faridabad",
    "Contact No.": "9871390245,9560584158"
  },
  {
    "Organization": "North-1",
    "Manager Name": "Adarsh Prasad",
    "Manager Level": "RSM",
    "Dealer Name": "Shree Motors (LMD)-Faridabad",
    "SCode": "1S1007",
    "State": "Haryana",
    "City": "Faridabad",
    "Contact No.": "9717996321"
  },
  {
    "Organization": "North-1",
    "Manager Name": "ROUSHAN JHA",
    "Manager Level": "CSM",
    "Dealer Name": "Shree Motors (LMD)-Faridabad",
    "SCode": "1S1007",
    "State": "Haryana",
    "City": "Faridabad",
    "Contact No.": "8340282323"
  },
  {
    "Organization": "North-1",
    "Manager Name": "Shashikant",
    "Manager Level": "MD",
    "Dealer Name": "Shree Motors Pvt Ltd (ProX)-Faridabad",
    "SCode": "1S1284",
    "State": "Haryana",
    "City": "Faridabad",
    "Contact No.": "9289979089"
  },
  {
    "Organization": "North-1",
    "Manager Name": "Satguru Saran",
    "Manager Level": "CSM",
    "Dealer Name": "Shree Motors Pvt Ltd (ProX)-Faridabad",
    "SCode": "1S1284",
    "State": "Haryana",
    "City": "Faridabad",
    "Contact No.": "8795520001"
  },
  {
    "Organization": "North-1",
    "Manager Name": "Yusuf",
    "Manager Level": "EOS Site Incharge",
    "Dealer Name": "Shree Motors Pvt Ltd (ProX)-Faridabad",
    "SCode": "1S1284",
    "State": "Haryana",
    "City": "Faridabad",
    "Contact No.": "9289979078"
  },
  {
    "Organization": "North-1",
    "Manager Name": "Sujan Saha",
    "Manager Level": "RSM",
    "Dealer Name": "Shree Motors Pvt Ltd (ProX)-Faridabad",
    "SCode": "1S1284",
    "State": "Haryana",
    "City": "Faridabad",
    "Contact No.": "9903978950"
  },
  {
    "Organization": "North-1",
    "Manager Name": "Rahul Saini",
    "Manager Level": "WM",
    "Dealer Name": "Shree Motors Pvt Ltd (ProX)-Faridabad",
    "SCode": "1S1284",
    "State": "Haryana",
    "City": "Faridabad",
    "Contact No.": "9289979085"
  },
  {
    "Organization": "North-1",
    "Manager Name": "Dileep Sharma",
    "Manager Level": "CSM",
    "Dealer Name": "Shree Motors-Bhiwani",
    "SCode": "1S1199",
    "State": "Haryana",
    "City": "Bhiwani",
    "Contact No.": "7300531384"
  },
  {
    "Organization": "North-1",
    "Manager Name": "Jatin Kumar / Mohit Sharma",
    "Manager Level": "WM",
    "Dealer Name": "Shree Motors-Bhiwani",
    "SCode": "1S1199",
    "State": "Haryana",
    "City": "Bhiwani",
    "Contact No.": "9813061350,9817706660"
  },
  {
    "Organization": "North-1",
    "Manager Name": "Adarsh Prasad",
    "Manager Level": "RSM",
    "Dealer Name": "Shree Motors-Bhiwani",
    "SCode": "1S1199",
    "State": "Haryana",
    "City": "Bhiwani",
    "Contact No.": "9717996321"
  },
  {
    "Organization": "North-1",
    "Manager Name": "Sunny Verma",
    "Manager Level": "ASM",
    "Dealer Name": "Shree Motors-Bhiwani",
    "SCode": "1S1199",
    "State": "Haryana",
    "City": "Bhiwani",
    "Contact No.": "7276047837"
  },
  {
    "Organization": "North-1",
    "Manager Name": "Deepak Jangra",
    "Manager Level": "WM",
    "Dealer Name": "Shree Motors-Jind",
    "SCode": "1S1251",
    "State": "Haryana",
    "City": "Jind",
    "Contact No.": "9466887719"
  },
  {
    "Organization": "North-1",
    "Manager Name": "Tinku Yadav",
    "Manager Level": "MD",
    "Dealer Name": "Shree Motors-Jind",
    "SCode": "1S1251",
    "State": "Haryana",
    "City": "Jind",
    "Contact No.": "9992777074"
  },
  {
    "Organization": "North-1",
    "Manager Name": "Adarsh Prasad",
    "Manager Level": "RSM",
    "Dealer Name": "Shree Motors-Jind",
    "SCode": "1S1251",
    "State": "Haryana",
    "City": "Jind",
    "Contact No.": "9717996321"
  },
  {
    "Organization": "North-1",
    "Manager Name": "Hariom Sharma",
    "Manager Level": "EOS Site Incharge",
    "Dealer Name": "Shree Motors-Jind",
    "SCode": "1S1251",
    "State": "Haryana",
    "City": "Jind",
    "Contact No.": "7988772604"
  },
  {
    "Organization": "North-1",
    "Manager Name": "Dileep Sharma",
    "Manager Level": "CSM",
    "Dealer Name": "Shree Motors-Jind",
    "SCode": "1S1251",
    "State": "Haryana",
    "City": "Jind",
    "Contact No.": "7300531384"
  },
  {
    "Organization": "North-1",
    "Manager Name": "Sunny Verma",
    "Manager Level": "ASM",
    "Dealer Name": "Shree Motors-Jind",
    "SCode": "1S1251",
    "State": "Haryana",
    "City": "Jind",
    "Contact No.": "7276047837"
  },
  {
    "Organization": "North-1",
    "Manager Name": "Arun Kumar Aggarwal",
    "Manager Level": "MD",
    "Dealer Name": "Shree Motors-Lal Kuan",
    "SCode": "1S1103",
    "State": "Delhi",
    "City": "Delhi",
    "Contact No.": "9871390246"
  },
  {
    "Organization": "North-1",
    "Manager Name": "Pritam Kumar",
    "Manager Level": "WM",
    "Dealer Name": "Shree Motors-Lal Kuan",
    "SCode": "1S1103",
    "State": "Delhi",
    "City": "Delhi",
    "Contact No.": "8506003225"
  },
  {
    "Organization": "North-1",
    "Manager Name": "Vishal Puri / Shubham Raj (N)",
    "Manager Level": "CSM",
    "Dealer Name": "Shree Motors-Lal Kuan",
    "SCode": "1S1103",
    "State": "Delhi",
    "City": "Delhi",
    "Contact No.": "7827730269,7303535819"
  },
  {
    "Organization": "North-1",
    "Manager Name": "Sunil Verma",
    "Manager Level": "ASM",
    "Dealer Name": "Shree Motors-Lal Kuan",
    "SCode": "1S1103",
    "State": "Delhi",
    "City": "Delhi",
    "Contact No.": "7742688688"
  },
  {
    "Organization": "North-1",
    "Manager Name": "Adarsh Prasad",
    "Manager Level": "RSM",
    "Dealer Name": "Shree Motors-Lal Kuan",
    "SCode": "1S1103",
    "State": "Delhi",
    "City": "Delhi",
    "Contact No.": "9717996321"
  },
  {
    "Organization": "North-1",
    "Manager Name": "Sandeep Kumar",
    "Manager Level": "EOS Site Incharge",
    "Dealer Name": "Shree Motors-Mundka",
    "SCode": "1S1150",
    "State": "Delhi",
    "City": "Delhi",
    "Contact No.": "9971168462"
  },
  {
    "Organization": "North-1",
    "Manager Name": "Garima Baisware / Shubham Raj (N)",
    "Manager Level": "CSM",
    "Dealer Name": "Shree Motors-Mundka",
    "SCode": "1S1150",
    "State": "Delhi",
    "City": "Mundka",
    "Contact No.": "8319126536,7303535819"
  },
  {
    "Organization": "North-1",
    "Manager Name": "Adarsh Prasad",
    "Manager Level": "RSM",
    "Dealer Name": "Shree Motors-Mundka",
    "SCode": "1S1150",
    "State": "Delhi",
    "City": "Mundka",
    "Contact No.": "9717996321"
  },
  {
    "Organization": "North-1",
    "Manager Name": "Satendra Kumar / Shashikant",
    "Manager Level": "WM",
    "Dealer Name": "Shree Motors-Mundka",
    "SCode": "1S1150",
    "State": "Delhi",
    "City": "Mundka",
    "Contact No.": "8743094999,9599100462"
  },
  {
    "Organization": "North-1",
    "Manager Name": "Ashish Mittal",
    "Manager Level": "MD",
    "Dealer Name": "Shree Motors-Mundka",
    "SCode": "1S1150",
    "State": "Delhi",
    "City": "Mundka",
    "Contact No.": "9810744169"
  },
  {
    "Organization": "North-1",
    "Manager Name": "Sunil Verma",
    "Manager Level": "ASM",
    "Dealer Name": "Shree Motors-Mundka",
    "SCode": "1S1150",
    "State": "Delhi",
    "City": "Mundka",
    "Contact No.": "7742688688"
  },
  {
    "Organization": "North-1",
    "Manager Name": "Rahul / Shashi Kant",
    "Manager Level": "WM",
    "Dealer Name": "Shree Motors-Palwal (HD/LMD)",
    "SCode": "1S1236",
    "State": "Haryana",
    "City": "Palwal",
    "Contact No.": "9991771771,9599100462"
  },
  {
    "Organization": "North-1",
    "Manager Name": "Sunil Verma",
    "Manager Level": "ASM",
    "Dealer Name": "Shree Motors-Palwal (HD/LMD)",
    "SCode": "1S1236",
    "State": "Haryana",
    "City": "Palwal",
    "Contact No.": "7742688688"
  },
  {
    "Organization": "North-1",
    "Manager Name": "Ashish Mittal",
    "Manager Level": "MD",
    "Dealer Name": "Shree Motors-Palwal (HD/LMD)",
    "SCode": "1S1236",
    "State": "Haryana",
    "City": "Palwal",
    "Contact No.": "9810744169"
  },
  {
    "Organization": "North-1",
    "Manager Name": "Roushan Kumar Jha",
    "Manager Level": "CSM",
    "Dealer Name": "Shree Motors-Palwal (HD/LMD)",
    "SCode": "1S1236",
    "State": "Haryana",
    "City": "Palwal",
    "Contact No.": "8340282323"
  },
  {
    "Organization": "North-1",
    "Manager Name": "Ashu Chowdhary",
    "Manager Level": "EOS Site Incharge",
    "Dealer Name": "Shree Motors-Palwal (HD/LMD)",
    "SCode": "1S1236",
    "State": "Haryana",
    "City": "Palwal",
    "Contact No.": "8905002759"
  },
  {
    "Organization": "North-1",
    "Manager Name": "Adarsh Prasad",
    "Manager Level": "RSM",
    "Dealer Name": "Shree Motors-Palwal (HD/LMD)",
    "SCode": "1S1236",
    "State": "Haryana",
    "City": "Palwal",
    "Contact No.": "9717996321"
  },
  {
    "Organization": "North-1",
    "Manager Name": "Dileep Sharma",
    "Manager Level": "CSM",
    "Dealer Name": "Shree Motors-Rohtak",
    "SCode": "1S1130",
    "State": "Haryana",
    "City": "Rohtak",
    "Contact No.": "7300531384"
  },
  {
    "Organization": "North-1",
    "Manager Name": "Tinku Yadav",
    "Manager Level": "MD",
    "Dealer Name": "Shree Motors-Rohtak",
    "SCode": "1S1130",
    "State": "Haryana",
    "City": "Rohtak",
    "Contact No.": "9992777074,9992777066"
  },
  {
    "Organization": "North-1",
    "Manager Name": "Sunny Sharma",
    "Manager Level": "WM",
    "Dealer Name": "Shree Motors-Rohtak",
    "SCode": "1S1130",
    "State": "Haryana",
    "City": "Rohtak",
    "Contact No.": "9992777058"
  },
  {
    "Organization": "North-1",
    "Manager Name": "Sunny Verma",
    "Manager Level": "ASM",
    "Dealer Name": "Shree Motors-Rohtak",
    "SCode": "1S1130",
    "State": "Haryana",
    "City": "Rohtak",
    "Contact No.": "7276047837"
  },
  {
    "Organization": "North-1",
    "Manager Name": "Adarsh Prasad",
    "Manager Level": "RSM",
    "Dealer Name": "Shree Motors-Rohtak",
    "SCode": "1S1130",
    "State": "Haryana",
    "City": "Rohtak",
    "Contact No.": "9717996321"
  },
  {
    "Organization": "North-1",
    "Manager Name": "Mohit",
    "Manager Level": "EOS Site Incharge",
    "Dealer Name": "Shree Motors-Rohtak",
    "SCode": "1S1130",
    "State": "Haryana",
    "City": "Rohtak",
    "Contact No.": "9992777054"
  },
  {
    "Organization": "West-2",
    "Manager Name": "Vikram Patel",
    "Manager Level": "CSM",
    "Dealer Name": "Shree Patidar Motors Pvt Ltd-Indore",
    "SCode": "1S5094",
    "State": "Madhya Pradesh",
    "City": "Indore",
    "Contact No.": "9179023836"
  },
  {
    "Organization": "West-2",
    "Manager Name": "Suyash / Arman",
    "Manager Level": "EOS Site Incharge",
    "Dealer Name": "Shree Patidar Motors Pvt Ltd-Indore",
    "SCode": "1S5094",
    "State": "Madhya Pradesh",
    "City": "Indore",
    "Contact No.": "9244123431,9244123429"
  },
  {
    "Organization": "West-2",
    "Manager Name": "Sudhir Kumar",
    "Manager Level": "RSM",
    "Dealer Name": "Shree Patidar Motors Pvt Ltd-Indore",
    "SCode": "1S5094",
    "State": "Madhya Pradesh",
    "City": "Indore",
    "Contact No.": "9752542733"
  },
  {
    "Organization": "West-2",
    "Manager Name": "Suyash Patidar / Rajesh Patidar",
    "Manager Level": "MD",
    "Dealer Name": "Shree Patidar Motors Pvt Ltd-Indore",
    "SCode": "1S5094",
    "State": "Madhya Pradesh",
    "City": "Indore",
    "Contact No.": "9165856955,9644111144"
  },
  {
    "Organization": "West-2",
    "Manager Name": "Savendra Singh",
    "Manager Level": "WM",
    "Dealer Name": "Shree Patidar Motors Pvt Ltd-Indore",
    "SCode": "1S5094",
    "State": "Madhya Pradesh",
    "City": "Indore",
    "Contact No.": "9244123435"
  },
  {
    "Organization": "West-2",
    "Manager Name": "Vivek Kumar",
    "Manager Level": "ASM",
    "Dealer Name": "Shree Patidar Motors Pvt Ltd-Indore",
    "SCode": "1S5094",
    "State": "Madhya Pradesh",
    "City": "Indore",
    "Contact No.": "8171110903"
  },
  {
    "Organization": "North-2",
    "Manager Name": "Rajkumar Vaishnav",
    "Manager Level": "ASM",
    "Dealer Name": "Shree Shyam Automobile-Beawar",
    "SCode": "1S7172",
    "State": "Rajasthan",
    "City": "Ajmer",
    "Contact No.": "9636756000"
  },
  {
    "Organization": "North-2",
    "Manager Name": "Devender Singh",
    "Manager Level": "EOS Site Incharge",
    "Dealer Name": "Shree Shyam Automobile-Beawar",
    "SCode": "1S7172",
    "State": "Rajasthan",
    "City": "Ajmer",
    "Contact No.": "8619681550"
  },
  {
    "Organization": "North-2",
    "Manager Name": "Madhusudan Singh Rathore",
    "Manager Level": "MD",
    "Dealer Name": "Shree Shyam Automobile-Beawar",
    "SCode": "1S7172",
    "State": "Rajasthan",
    "City": "Ajmer",
    "Contact No.": "9529492299"
  },
  {
    "Organization": "North-2",
    "Manager Name": "Shivam Bhardwaj / Dhananjay Singh",
    "Manager Level": "CSM",
    "Dealer Name": "Shree Shyam Automobile-Beawar",
    "SCode": "1S7172",
    "State": "Rajasthan",
    "City": "Ajmer",
    "Contact No.": "7878175706,7737329353"
  },
  {
    "Organization": "North-2",
    "Manager Name": "Krishnendu Saha",
    "Manager Level": "RSM",
    "Dealer Name": "Shree Shyam Automobile-Beawar",
    "SCode": "1S7172",
    "State": "Rajasthan",
    "City": "Ajmer",
    "Contact No.": "7980433425"
  },
  {
    "Organization": "North-2",
    "Manager Name": "Gopal Singh Shekhawat / Vishal Saini",
    "Manager Level": "WM",
    "Dealer Name": "Shree Shyam Automobile-Beawar",
    "SCode": "1S7172",
    "State": "Rajasthan",
    "City": "Ajmer",
    "Contact No.": "9888882126,8005654665"
  },
  {
    "Organization": "North-2",
    "Manager Name": "Anil Jalan",
    "Manager Level": "MD",
    "Dealer Name": "Shree Vehicle Pvt Ltd-Kanpur",
    "SCode": "1S7011",
    "State": "Uttar Pradesh",
    "City": "Kanpur",
    "Contact No.": "9838116324"
  },
  {
    "Organization": "North-2",
    "Manager Name": "Nitin Gupta",
    "Manager Level": "ASM",
    "Dealer Name": "Shree Vehicle Pvt Ltd-Kanpur",
    "SCode": "1S7011",
    "State": "Uttar Pradesh",
    "City": "Kanpur",
    "Contact No.": "7080811550"
  },
  {
    "Organization": "North-2",
    "Manager Name": "Jitendra Mishra (D) / Saket Singh (N)",
    "Manager Level": "CSM",
    "Dealer Name": "Shree Vehicle Pvt Ltd-Kanpur",
    "SCode": "1S7011",
    "State": "Uttar Pradesh",
    "City": "Kanpur",
    "Contact No.": "9005547771,8709859215"
  },
  {
    "Organization": "North-2",
    "Manager Name": "Krishnendu Saha",
    "Manager Level": "RSM",
    "Dealer Name": "Shree Vehicle Pvt Ltd-Kanpur",
    "SCode": "1S7011",
    "State": "Uttar Pradesh",
    "City": "Kanpur",
    "Contact No.": "7980433425"
  },
  {
    "Organization": "North-2",
    "Manager Name": "Anurag Dixit",
    "Manager Level": "WM",
    "Dealer Name": "Shree Vehicle Pvt Ltd-Kanpur",
    "SCode": "1S7011",
    "State": "Uttar Pradesh",
    "City": "Kanpur",
    "Contact No.": "9718524330"
  },
  {
    "Organization": "North-2",
    "Manager Name": "Anand Pal",
    "Manager Level": "EOS Site Incharge",
    "Dealer Name": "Shree Vehicle Pvt Ltd-Kanpur",
    "SCode": "1S7011",
    "State": "Uttar Pradesh",
    "City": "Kanpur",
    "Contact No.": "7068099766"
  },
  {
    "Organization": "West-1",
    "Manager Name": "Chandrashekhar Gadekar",
    "Manager Level": "MD",
    "Dealer Name": "Shreesha Trucking-Shirur",
    "SCode": "1S3367",
    "State": "Maharashtra",
    "City": "Shirur",
    "Contact No.": "7755992918"
  },
  {
    "Organization": "West-1",
    "Manager Name": "Vivek Maske / Adil Shaikh",
    "Manager Level": "CSM",
    "Dealer Name": "Shreesha Trucking-Shirur",
    "SCode": "1S3367",
    "State": "Maharashtra",
    "City": "Shirur",
    "Contact No.": "9021549678,9325446342"
  },
  {
    "Organization": "West-1",
    "Manager Name": "Sampat / Prashant Wagh",
    "Manager Level": "WM",
    "Dealer Name": "Shreesha Trucking-Shirur",
    "SCode": "1S3367",
    "State": "Maharashtra",
    "City": "Shirur",
    "Contact No.": "9852552525,8010183101"
  },
  {
    "Organization": "West-1",
    "Manager Name": "Prasad Raskar / Chandrashekhar Gadekar",
    "Manager Level": "EOS Site Incharge",
    "Dealer Name": "Shreesha Trucking-Shirur",
    "SCode": "1S3367",
    "State": "Maharashtra",
    "City": "Shirur",
    "Contact No.": "8530547597,7755992918"
  },
  {
    "Organization": "West-1",
    "Manager Name": "Mrinal Kunwar",
    "Manager Level": "ASM",
    "Dealer Name": "Shreesha Trucking-Shirur",
    "SCode": "1S3367",
    "State": "Maharashtra",
    "City": "Shirur",
    "Contact No.": "8002023303"
  },
  {
    "Organization": "West-1",
    "Manager Name": "Suhas Ramchandra Mane",
    "Manager Level": "RSM",
    "Dealer Name": "Shreesha Trucking-Shirur",
    "SCode": "1S3367",
    "State": "Maharashtra",
    "City": "Shirur",
    "Contact No.": "8454812225"
  },
  {
    "Organization": "North-2",
    "Manager Name": "Abhishek",
    "Manager Level": "WM",
    "Dealer Name": "Shri Balaji Motors-Jhansi",
    "SCode": "1S7020",
    "State": "Uttar Pradesh",
    "City": "Jhansi",
    "Contact No.": "6386472486"
  },
  {
    "Organization": "North-2",
    "Manager Name": "Krishnendu Saha",
    "Manager Level": "RSM",
    "Dealer Name": "Shri Balaji Motors-Jhansi",
    "SCode": "1S7020",
    "State": "Uttar Pradesh",
    "City": "Jhansi",
    "Contact No.": "7980433425"
  },
  {
    "Organization": "North-2",
    "Manager Name": "Nitin Gupta",
    "Manager Level": "ASM",
    "Dealer Name": "Shri Balaji Motors-Jhansi",
    "SCode": "1S7020",
    "State": "Uttar Pradesh",
    "City": "Jhansi",
    "Contact No.": "7080811550"
  },
  {
    "Organization": "North-2",
    "Manager Name": "Abhay Yadav (D) / Saket Singh (N)",
    "Manager Level": "CSM",
    "Dealer Name": "Shri Balaji Motors-Jhansi",
    "SCode": "1S7020",
    "State": "Uttar Pradesh",
    "City": "Jhansi",
    "Contact No.": "8267948718,8709859215"
  },
  {
    "Organization": "North-2",
    "Manager Name": "Pran Singh",
    "Manager Level": "MD",
    "Dealer Name": "Shri Balaji Motors-Jhansi",
    "SCode": "1S7020",
    "State": "Uttar Pradesh",
    "City": "Jhansi",
    "Contact No.": "9919813265"
  },
  {
    "Organization": "North-2",
    "Manager Name": "Aditya Singh",
    "Manager Level": "EOS Site Incharge",
    "Dealer Name": "Shri Balaji Motors-Jhansi",
    "SCode": "1S7020",
    "State": "Uttar Pradesh",
    "City": "Jhansi",
    "Contact No.": "8382952273"
  },
  {
    "Organization": "North-2",
    "Manager Name": "Krishnendu Saha",
    "Manager Level": "RSM",
    "Dealer Name": "Siddhi Vinayak Motors-Etah",
    "SCode": "1S7016",
    "State": "Uttar Pradesh",
    "City": "Etah",
    "Contact No.": "7980433425"
  },
  {
    "Organization": "North-2",
    "Manager Name": "Mr. Rajveer",
    "Manager Level": "WM",
    "Dealer Name": "Siddhi Vinayak Motors-Etah",
    "SCode": "1S7016",
    "State": "Uttar Pradesh",
    "City": "Etah",
    "Contact No.": "9759008706"
  },
  {
    "Organization": "North-2",
    "Manager Name": "Manmohan Singh",
    "Manager Level": "MD",
    "Dealer Name": "Siddhi Vinayak Motors-Etah",
    "SCode": "1S7016",
    "State": "Uttar Pradesh",
    "City": "Etah",
    "Contact No.": "9927085517"
  },
  {
    "Organization": "North-2",
    "Manager Name": "Akash Yadav (D) / Saket Singh (N)",
    "Manager Level": "CSM",
    "Dealer Name": "Siddhi Vinayak Motors-Etah",
    "SCode": "1S7016",
    "State": "Uttar Pradesh",
    "City": "Etah",
    "Contact No.": "9582964229,8709859215"
  },
  {
    "Organization": "North-2",
    "Manager Name": "Mukesh Saxena",
    "Manager Level": "ASM",
    "Dealer Name": "Siddhi Vinayak Motors-Etah",
    "SCode": "1S7016",
    "State": "Uttar Pradesh",
    "City": "Etah",
    "Contact No.": "9599117560"
  },
  {
    "Organization": "North-2",
    "Manager Name": "Praveen Sharma",
    "Manager Level": "EOS Site Incharge",
    "Dealer Name": "Siddhi Vinayak Motors-Etah",
    "SCode": "1S7016",
    "State": "Uttar Pradesh",
    "City": "Etah",
    "Contact No.": "9058339346"
  },
  {
    "Organization": "North-1",
    "Manager Name": "Adarsh Prasad",
    "Manager Level": "RSM",
    "Dealer Name": "Sincere Marketing Services Pvt Ltd-Bilaspur",
    "SCode": "1S1148",
    "State": "Haryana",
    "City": "Bilaspur",
    "Contact No.": "9717996321"
  },
  {
    "Organization": "North-1",
    "Manager Name": "Avichal",
    "Manager Level": "MD",
    "Dealer Name": "Sincere Marketing Services Pvt Ltd-Bilaspur",
    "SCode": "1S1148",
    "State": "Haryana",
    "City": "Bilaspur",
    "Contact No.": "7290009872"
  },
  {
    "Organization": "North-1",
    "Manager Name": "Naveen",
    "Manager Level": "EOS Site Incharge",
    "Dealer Name": "Sincere Marketing Services Pvt Ltd-Bilaspur",
    "SCode": "1S1148",
    "State": "Haryana",
    "City": "Bilaspur",
    "Contact No.": "8930095888"
  },
  {
    "Organization": "North-1",
    "Manager Name": "Vishesh Jain (D) / Shubham Raj (N)",
    "Manager Level": "CSM",
    "Dealer Name": "Sincere Marketing Services Pvt Ltd-Bilaspur",
    "SCode": "1S1148",
    "State": "Haryana",
    "City": "Bilaspur",
    "Contact No.": "9650289866,7303535819"
  },
  {
    "Organization": "North-1",
    "Manager Name": "Sandeep",
    "Manager Level": "WM",
    "Dealer Name": "Sincere Marketing Services Pvt Ltd-Bilaspur",
    "SCode": "1S1148",
    "State": "Haryana",
    "City": "Bilaspur",
    "Contact No.": "8929177550"
  },
  {
    "Organization": "North-1",
    "Manager Name": "Sunil Verma",
    "Manager Level": "ASM",
    "Dealer Name": "Sincere Marketing Services Pvt Ltd-Bilaspur",
    "SCode": "1S1148",
    "State": "Haryana",
    "City": "Bilaspur",
    "Contact No.": "7742688688"
  },
  {
    "Organization": "North-1",
    "Manager Name": "Vimal / Mahinder",
    "Manager Level": "WM",
    "Dealer Name": "Sincere Marketing Services Pvt Ltd-Gurgaon",
    "SCode": "1S1006",
    "State": "Haryana",
    "City": "Gurgaon",
    "Contact No.": "9873666907,9871607948"
  },
  {
    "Organization": "North-1",
    "Manager Name": "Jitender / Nasir",
    "Manager Level": "EOS Site Incharge",
    "Dealer Name": "Sincere Marketing Services Pvt Ltd-Gurgaon",
    "SCode": "1S1006",
    "State": "Haryana",
    "City": "Gurgaon",
    "Contact No.": "8929025829,9097329309"
  },
  {
    "Organization": "North-1",
    "Manager Name": "Upender Sharma / Shubham Raj (N)",
    "Manager Level": "CSM",
    "Dealer Name": "Sincere Marketing Services Pvt Ltd-Gurgaon",
    "SCode": "1S1006",
    "State": "Haryana",
    "City": "Gurgaon",
    "Contact No.": "7417830773,7303535819"
  },
  {
    "Organization": "North-1",
    "Manager Name": "Adarsh Prasad",
    "Manager Level": "RSM",
    "Dealer Name": "Sincere Marketing Services Pvt Ltd-Gurgaon",
    "SCode": "1S1006",
    "State": "Haryana",
    "City": "Gurgaon",
    "Contact No.": "9717996321"
  },
  {
    "Organization": "North-1",
    "Manager Name": "Sunil Verma",
    "Manager Level": "ASM",
    "Dealer Name": "Sincere Marketing Services Pvt Ltd-Gurgaon",
    "SCode": "1S1006",
    "State": "Haryana",
    "City": "Gurgaon",
    "Contact No.": "7742688688"
  },
  {
    "Organization": "North-1",
    "Manager Name": "Gulshan Dhall",
    "Manager Level": "MD",
    "Dealer Name": "Sincere Marketing Services Pvt Ltd-Gurgaon",
    "SCode": "1S1006",
    "State": "Haryana",
    "City": "Gurgaon",
    "Contact No.": "8588847063"
  },
  {
    "Organization": "North-1",
    "Manager Name": "Hemraj / Gaurav",
    "Manager Level": "WM",
    "Dealer Name": "Sincere Marketing-Yamuna Vihar",
    "SCode": "1S1146",
    "State": "Delhi",
    "City": "Yamuna vihar",
    "Contact No.": "7982400520,9711918769"
  },
  {
    "Organization": "North-1",
    "Manager Name": "Avichal",
    "Manager Level": "MD",
    "Dealer Name": "Sincere Marketing-Yamuna Vihar",
    "SCode": "1S1146",
    "State": "Delhi",
    "City": "Yamuna vihar",
    "Contact No.": "9810558787,9711918769"
  },
  {
    "Organization": "North-1",
    "Manager Name": "Sunil Verma",
    "Manager Level": "ASM",
    "Dealer Name": "Sincere Marketing-Yamuna Vihar",
    "SCode": "1S1146",
    "State": "Delhi",
    "City": "Yamuna vihar",
    "Contact No.": "7742688688"
  },
  {
    "Organization": "North-1",
    "Manager Name": "Puneet Arora / Shubham Raj (N)",
    "Manager Level": "CSM",
    "Dealer Name": "Sincere Marketing-Yamuna Vihar",
    "SCode": "1S1146",
    "State": "Delhi",
    "City": "Yamuna vihar",
    "Contact No.": "9818476376,7303535819"
  },
  {
    "Organization": "North-1",
    "Manager Name": "Adarsh Prasad",
    "Manager Level": "RSM",
    "Dealer Name": "Sincere Marketing-Yamuna Vihar",
    "SCode": "1S1146",
    "State": "Delhi",
    "City": "Yamuna vihar",
    "Contact No.": "9717996321"
  },
  {
    "Organization": "West-2",
    "Manager Name": "Vikram Patel",
    "Manager Level": "CSM",
    "Dealer Name": "Siyaram Motors-Dhamnod",
    "SCode": "1S7058",
    "State": "Madhya Pradesh",
    "City": "Barwani",
    "Contact No.": "9179023836"
  },
  {
    "Organization": "West-2",
    "Manager Name": "Vivek Kumar",
    "Manager Level": "ASM",
    "Dealer Name": "Siyaram Motors-Dhamnod",
    "SCode": "1S7058",
    "State": "Madhya Pradesh",
    "City": "Barwani",
    "Contact No.": "8171110903"
  },
  {
    "Organization": "West-2",
    "Manager Name": "Sudhir Kumar",
    "Manager Level": "RSM",
    "Dealer Name": "Siyaram Motors-Dhamnod",
    "SCode": "1S7058",
    "State": "Madhya Pradesh",
    "City": "Barwani",
    "Contact No.": "9752542733"
  },
  {
    "Organization": "West-2",
    "Manager Name": "Kapil Yadav",
    "Manager Level": "MD",
    "Dealer Name": "Siyaram Motors-Dhamnod",
    "SCode": "1S7058",
    "State": "Madhya Pradesh",
    "City": "Barwani",
    "Contact No.": "9425087498"
  },
  {
    "Organization": "West-2",
    "Manager Name": "SANJIV PAL / Manish Pandit",
    "Manager Level": "WM",
    "Dealer Name": "Siyaram Motors-Dhamnod",
    "SCode": "1S7058",
    "State": "Madhya Pradesh",
    "City": "Barwani",
    "Contact No.": "6262004441,6262004443"
  },
  {
    "Organization": "North-1",
    "Manager Name": "Adarsh Prasad",
    "Manager Level": "RSM",
    "Dealer Name": "Skymark-Sirhind",
    "SCode": "1S1108",
    "State": "Punjab",
    "City": "Sirhind fatehgarh sahib",
    "Contact No.": "9717996321"
  },
  {
    "Organization": "North-1",
    "Manager Name": "Sandeep Singh / Avtar Singh",
    "Manager Level": "WM",
    "Dealer Name": "Skymark-Sirhind",
    "SCode": "1S1108",
    "State": "Punjab",
    "City": "Sirhind fatehgarh sahib",
    "Contact No.": "9625570057,8437385040"
  },
  {
    "Organization": "North-1",
    "Manager Name": "Mamoon Khan",
    "Manager Level": "CSM",
    "Dealer Name": "Skymark-Sirhind",
    "SCode": "1S1108",
    "State": "Punjab",
    "City": "Sirhind fatehgarh sahib",
    "Contact No.": "9541481374"
  },
  {
    "Organization": "North-1",
    "Manager Name": "Vaibhav Katyal",
    "Manager Level": "ASM",
    "Dealer Name": "Skymark-Sirhind",
    "SCode": "1S1108",
    "State": "Punjab",
    "City": "Sirhind fatehgarh sahib",
    "Contact No.": "9219500351"
  },
  {
    "Organization": "North-1",
    "Manager Name": "Aman Sharma",
    "Manager Level": "MD",
    "Dealer Name": "Skymark-Sirhind",
    "SCode": "1S1108",
    "State": "Punjab",
    "City": "Sirhind fatehgarh sahib",
    "Contact No.": "9888996267"
  },
  {
    "Organization": "South-2",
    "Manager Name": "Devegowda.M.L",
    "Manager Level": "WM",
    "Dealer Name": "Sri Laxmi Motor Service Pvt Ltd-Bidadi",
    "SCode": "1S6092",
    "State": "Karnataka",
    "City": "Mysore",
    "Contact No.": "9071436500"
  },
  {
    "Organization": "South-2",
    "Manager Name": "N Narayanan",
    "Manager Level": "RSM",
    "Dealer Name": "Sri Laxmi Motor Service Pvt Ltd-Bidadi",
    "SCode": "1S6092",
    "State": "Karnataka",
    "City": "Mysore",
    "Contact No.": "8123036700"
  },
  {
    "Organization": "South-2",
    "Manager Name": "C Ganesh (D) / Jeevan Kumar (N)",
    "Manager Level": "CSM",
    "Dealer Name": "Sri Laxmi Motor Service Pvt Ltd-Bidadi",
    "SCode": "1S6092",
    "State": "Karnataka",
    "City": "Mysore",
    "Contact No.": "8217810473,7892822611"
  },
  {
    "Organization": "South-2",
    "Manager Name": "S Balaji",
    "Manager Level": "ASM",
    "Dealer Name": "Sri Laxmi Motor Service Pvt Ltd-Bidadi",
    "SCode": "1S6092",
    "State": "Karnataka",
    "City": "Mysore",
    "Contact No.": "9840833723"
  },
  {
    "Organization": "South-2",
    "Manager Name": "Nagaraj.S",
    "Manager Level": "MD",
    "Dealer Name": "Sri Laxmi Motor Service Pvt Ltd-Bidadi",
    "SCode": "1S6092",
    "State": "Karnataka",
    "City": "Mysore",
    "Contact No.": "9900035836"
  },
  {
    "Organization": "South-2",
    "Manager Name": "Nagaraju",
    "Manager Level": "EOS Site Incharge",
    "Dealer Name": "Sri Laxmi Motor Service Pvt Ltd-Bidadi",
    "SCode": "1S6092",
    "State": "Karnataka",
    "City": "Mysore",
    "Contact No.": "9901712485"
  },
  {
    "Organization": "South-2",
    "Manager Name": "C Ganesha (D) / Jeevan Kumar (N)",
    "Manager Level": "CSM",
    "Dealer Name": "Sri Laxmi Motor Service Pvt Ltd-Chitradurga",
    "SCode": "1S6083",
    "State": "Karnataka",
    "City": "Chitradurga",
    "Contact No.": "8217810473,7892822611"
  },
  {
    "Organization": "South-2",
    "Manager Name": "S Balaji",
    "Manager Level": "ASM",
    "Dealer Name": "Sri Laxmi Motor Service Pvt Ltd-Chitradurga",
    "SCode": "1S6083",
    "State": "Karnataka",
    "City": "Chitradurga",
    "Contact No.": "9840833723"
  },
  {
    "Organization": "South-2",
    "Manager Name": "Nagaraj / Harshajith",
    "Manager Level": "MD",
    "Dealer Name": "Sri Laxmi Motor Service Pvt Ltd-Chitradurga",
    "SCode": "1S6083",
    "State": "Karnataka",
    "City": "Chitradurga",
    "Contact No.": "9900035836,9606022888"
  },
  {
    "Organization": "South-2",
    "Manager Name": "Kuber",
    "Manager Level": "EOS Site Incharge",
    "Dealer Name": "Sri Laxmi Motor Service Pvt Ltd-Chitradurga",
    "SCode": "1S6083",
    "State": "Karnataka",
    "City": "Chitradurga",
    "Contact No.": "9071432211"
  },
  {
    "Organization": "South-2",
    "Manager Name": "N Narayanan",
    "Manager Level": "RSM",
    "Dealer Name": "Sri Laxmi Motor Service Pvt Ltd-Chitradurga",
    "SCode": "1S6083",
    "State": "Karnataka",
    "City": "Chitradurga",
    "Contact No.": "8123036700"
  },
  {
    "Organization": "South-2",
    "Manager Name": "Naveen",
    "Manager Level": "WM",
    "Dealer Name": "Sri Laxmi Motor Service Pvt Ltd-Chitradurga",
    "SCode": "1S6083",
    "State": "Karnataka",
    "City": "Chitradurga",
    "Contact No.": "9900065670"
  },
  {
    "Organization": "South-2",
    "Manager Name": "S Balaji",
    "Manager Level": "ASM",
    "Dealer Name": "Sri Laxmi Motor Service Pvt Ltd-Devanahalli",
    "SCode": "1S6084",
    "State": "Karnataka",
    "City": "Devanahalli",
    "Contact No.": "9840833723"
  },
  {
    "Organization": "South-2",
    "Manager Name": "N Narayanan",
    "Manager Level": "RSM",
    "Dealer Name": "Sri Laxmi Motor Service Pvt Ltd-Devanahalli",
    "SCode": "1S6084",
    "State": "Karnataka",
    "City": "Devanahalli",
    "Contact No.": "8123036700"
  },
  {
    "Organization": "South-2",
    "Manager Name": "Baba Fakruddin",
    "Manager Level": "EOS Site Incharge",
    "Dealer Name": "Sri Laxmi Motor Service Pvt Ltd-Devanahalli",
    "SCode": "1S6084",
    "State": "Karnataka",
    "City": "Devanahalli",
    "Contact No.": "9591990281"
  },
  {
    "Organization": "South-2",
    "Manager Name": "Nagaraj / Harshajith",
    "Manager Level": "MD",
    "Dealer Name": "Sri Laxmi Motor Service Pvt Ltd-Devanahalli",
    "SCode": "1S6084",
    "State": "Karnataka",
    "City": "Devanahalli",
    "Contact No.": "9900035836,9606022888"
  },
  {
    "Organization": "South-2",
    "Manager Name": "Chethan",
    "Manager Level": "WM",
    "Dealer Name": "Sri Laxmi Motor Service Pvt Ltd-Devanahalli",
    "SCode": "1S6084",
    "State": "Karnataka",
    "City": "Devanahalli",
    "Contact No.": "9071432184"
  },
  {
    "Organization": "South-2",
    "Manager Name": "Bi Bi Ayesha (D) / Jeevan Kumar (N)",
    "Manager Level": "CSM",
    "Dealer Name": "Sri Laxmi Motor Service Pvt Ltd-Devanahalli",
    "SCode": "1S6084",
    "State": "Karnataka",
    "City": "Devanahalli",
    "Contact No.": "7204298353,7892822611"
  },
  {
    "Organization": "South-2",
    "Manager Name": "Mukram",
    "Manager Level": "WM",
    "Dealer Name": "Sri Nisty Pvt Ltd-Kalaburagi",
    "SCode": "1S6187",
    "State": "Karnataka",
    "City": "Gulbarga",
    "Contact No.": "9019020113"
  },
  {
    "Organization": "South-2",
    "Manager Name": "Manjunath S B (D) / Mahamadali T Maniyar (N)",
    "Manager Level": "CSM",
    "Dealer Name": "Sri Nisty Pvt Ltd-Kalaburagi",
    "SCode": "1S6187",
    "State": "Karnataka",
    "City": "Gulbarga",
    "Contact No.": "9972018641,9972619686"
  },
  {
    "Organization": "South-2",
    "Manager Name": "PRABHU S MUGALKHOD",
    "Manager Level": "ASM",
    "Dealer Name": "Sri Nisty Pvt Ltd-Kalaburagi",
    "SCode": "1S6187",
    "State": "Karnataka",
    "City": "Gulbarga",
    "Contact No.": "9980512550"
  },
  {
    "Organization": "South-2",
    "Manager Name": "Doddappa Nisty",
    "Manager Level": "MD",
    "Dealer Name": "Sri Nisty Pvt Ltd-Kalaburagi",
    "SCode": "1S6187",
    "State": "Karnataka",
    "City": "Gulbarga",
    "Contact No.": "9483456666"
  },
  {
    "Organization": "South-2",
    "Manager Name": "N Narayanan",
    "Manager Level": "RSM",
    "Dealer Name": "Sri Nisty Pvt Ltd-Kalaburagi",
    "SCode": "1S6187",
    "State": "Karnataka",
    "City": "Gulbarga",
    "Contact No.": "8123036700"
  },
  {
    "Organization": "South-2",
    "Manager Name": "Yallalinga",
    "Manager Level": "EOS Site Incharge",
    "Dealer Name": "Sri Nisty Pvt Ltd-Kalaburagi",
    "SCode": "1S6187",
    "State": "Karnataka",
    "City": "Gulbarga",
    "Contact No.": "9972241282"
  },
  {
    "Organization": "South-2",
    "Manager Name": "N Narayanan",
    "Manager Level": "RSM",
    "Dealer Name": "Standard Automotives - Kadapa",
    "SCode": "1S6032",
    "State": "Andhra Pradesh",
    "City": "Kadapa",
    "Contact No.": "8123036700"
  },
  {
    "Organization": "South-2",
    "Manager Name": "Mastan",
    "Manager Level": "WM",
    "Dealer Name": "Standard Automotives - Kadapa",
    "SCode": "1S6032",
    "State": "Andhra Pradesh",
    "City": "Kadapa",
    "Contact No.": "9246941770"
  },
  {
    "Organization": "South-2",
    "Manager Name": "Shaik Maqsood",
    "Manager Level": "ASM",
    "Dealer Name": "Standard Automotives - Kadapa",
    "SCode": "1S6032",
    "State": "Andhra Pradesh",
    "City": "Kadapa",
    "Contact No.": "9989311516"
  },
  {
    "Organization": "South-2",
    "Manager Name": "Jampani Naveen Varma (D) / Prem Kumar (N)",
    "Manager Level": "CSM",
    "Dealer Name": "Standard Automotives - Kadapa",
    "SCode": "1S6032",
    "State": "Andhra Pradesh",
    "City": "Kadapa",
    "Contact No.": "9154101885,9154141679"
  },
  {
    "Organization": "South-2",
    "Manager Name": "Syed Fayaz",
    "Manager Level": "MD",
    "Dealer Name": "Standard Automotives - Kadapa",
    "SCode": "1S6032",
    "State": "Andhra Pradesh",
    "City": "Kadapa",
    "Contact No.": "9440280745"
  },
  {
    "Organization": "South-2",
    "Manager Name": "Venkatesh",
    "Manager Level": "EOS Site Incharge",
    "Dealer Name": "Standard Automotives - Kadapa",
    "SCode": "1S6032",
    "State": "Andhra Pradesh",
    "City": "Kadapa",
    "Contact No.": "9676999615"
  },
  {
    "Organization": "West-2",
    "Manager Name": "Sudhir Kumar",
    "Manager Level": "RSM",
    "Dealer Name": "Stellar Commercial Vehicle Pvt Ltd-Ahmedabad",
    "SCode": "1S3383",
    "State": "Gujarat",
    "City": "Ahmedabad",
    "Contact No.": "9752542733"
  },
  {
    "Organization": "West-2",
    "Manager Name": "Vipul Barad",
    "Manager Level": "EOS Site Incharge",
    "Dealer Name": "Stellar Commercial Vehicle Pvt Ltd-Ahmedabad",
    "SCode": "1S3383",
    "State": "Gujarat",
    "City": "Ahmedabad",
    "Contact No.": "9327069282,9662421503"
  },
  {
    "Organization": "West-2",
    "Manager Name": "Ravi Vaja",
    "Manager Level": "WM",
    "Dealer Name": "Stellar Commercial Vehicle Pvt Ltd-Ahmedabad",
    "SCode": "1S3383",
    "State": "Gujarat",
    "City": "Ahmedabad",
    "Contact No.": "9316231477"
  },
  {
    "Organization": "West-2",
    "Manager Name": "Manish Bhatt / Devam Tripathi",
    "Manager Level": "MD",
    "Dealer Name": "Stellar Commercial Vehicle Pvt Ltd-Ahmedabad",
    "SCode": "1S3383",
    "State": "Gujarat",
    "City": "Ahmedabad",
    "Contact No.": "9316231385,9998366666"
  },
  {
    "Organization": "West-2",
    "Manager Name": "Sanjeev Rawat",
    "Manager Level": "CSM",
    "Dealer Name": "Stellar Commercial Vehicle Pvt Ltd-Ahmedabad",
    "SCode": "1S3383",
    "State": "Gujarat",
    "City": "Ahmedabad",
    "Contact No.": "7906022920"
  },
  {
    "Organization": "West-2",
    "Manager Name": "Vipul Barot",
    "Manager Level": "ASM",
    "Dealer Name": "Stellar Commercial Vehicle Pvt Ltd-Ahmedabad",
    "SCode": "1S3383",
    "State": "Gujarat",
    "City": "Ahmedabad",
    "Contact No.": "9638341568"
  },
  {
    "Organization": "West-2",
    "Manager Name": "Vipul Barot",
    "Manager Level": "ASM",
    "Dealer Name": "Stellar Commercial Vehicle Pvt Ltd-Goblaj",
    "SCode": "1S3418",
    "State": "Gujarat",
    "City": "Ahmedabad",
    "Contact No.": "9638341568"
  },
  {
    "Organization": "West-2",
    "Manager Name": "Sudhir Kumar",
    "Manager Level": "RSM",
    "Dealer Name": "Stellar Commercial Vehicle Pvt Ltd-Goblaj",
    "SCode": "1S3418",
    "State": "Gujarat",
    "City": "Ahmedabad",
    "Contact No.": "9752542733"
  },
  {
    "Organization": "West-2",
    "Manager Name": "Manish Bhatt / Devam Tripathi",
    "Manager Level": "MD",
    "Dealer Name": "Stellar Commercial Vehicle Pvt Ltd-Goblaj",
    "SCode": "1S3418",
    "State": "Gujarat",
    "City": "Ahmedabad",
    "Contact No.": "9316231385,9998366666"
  },
  {
    "Organization": "West-2",
    "Manager Name": "Sanjeev Rawat",
    "Manager Level": "CSM",
    "Dealer Name": "Stellar Commercial Vehicle Pvt Ltd-Goblaj",
    "SCode": "1S3418",
    "State": "Gujarat",
    "City": "Ahmedabad",
    "Contact No.": "7906022920"
  },
  {
    "Organization": "West-2",
    "Manager Name": "Shekh Sajjad",
    "Manager Level": "EOS Site Incharge",
    "Dealer Name": "Stellar Commercial Vehicle Pvt Ltd-Goblaj",
    "SCode": "1S3418",
    "State": "Gujarat",
    "City": "Ahmedabad",
    "Contact No.": "8347862008"
  },
  {
    "Organization": "West-2",
    "Manager Name": "Dharmesh Parmar",
    "Manager Level": "WM",
    "Dealer Name": "Stellar Commercial Vehicle Pvt Ltd-Goblaj",
    "SCode": "1S3418",
    "State": "Gujarat",
    "City": "Ahmedabad",
    "Contact No.": "9033174505"
  },
  {
    "Organization": "West-2",
    "Manager Name": "Mradul Rathore",
    "Manager Level": "WM",
    "Dealer Name": "Success Auto Commercial (ProX)-Bhopal",
    "SCode": "1S5117",
    "State": "Madhya Pradesh",
    "City": "Bhopal",
    "Contact No.": "8889655523"
  },
  {
    "Organization": "West-2",
    "Manager Name": "Mohammed Faizan Memon",
    "Manager Level": "CSM",
    "Dealer Name": "Success Auto Commercial (ProX)-Bhopal",
    "SCode": "1S5117",
    "State": "Madhya Pradesh",
    "City": "Bhopal",
    "Contact No.": "9664004929"
  },
  {
    "Organization": "West-2",
    "Manager Name": "Rishi Anand",
    "Manager Level": "MD",
    "Dealer Name": "Success Auto Commercial (ProX)-Bhopal",
    "SCode": "1S5117",
    "State": "Madhya Pradesh",
    "City": "Bhopal",
    "Contact No.": "9826404441"
  },
  {
    "Organization": "West-2",
    "Manager Name": "Sujan Saha",
    "Manager Level": "RSM",
    "Dealer Name": "Success Auto Commercial (ProX)-Bhopal",
    "SCode": "1S5117",
    "State": "Madhya Pradesh",
    "City": "Bhopal",
    "Contact No.": "9903978950"
  },
  {
    "Organization": "West-2",
    "Manager Name": "Sanjeev Rawat",
    "Manager Level": "CSM",
    "Dealer Name": "Sun Autolink LLP-Becharji",
    "SCode": "1S3476",
    "State": "Gujarat",
    "City": "Ahmedabad",
    "Contact No.": "7906022920"
  },
  {
    "Organization": "West-2",
    "Manager Name": "Sudhir Kumar",
    "Manager Level": "RSM",
    "Dealer Name": "Sun Autolink LLP-Becharji",
    "SCode": "1S3476",
    "State": "Gujarat",
    "City": "Ahmedabad",
    "Contact No.": "9752542733"
  },
  {
    "Organization": "West-2",
    "Manager Name": "Nanji Chaudhary",
    "Manager Level": "MD",
    "Dealer Name": "Sun Autolink LLP-Becharji",
    "SCode": "1S3476",
    "State": "Gujarat",
    "City": "Ahmedabad",
    "Contact No.": "9979733555"
  },
  {
    "Organization": "West-2",
    "Manager Name": "Irkamoddin Kureshi",
    "Manager Level": "EOS Site Incharge",
    "Dealer Name": "Sun Autolink LLP-Becharji",
    "SCode": "1S3476",
    "State": "Gujarat",
    "City": "Ahmedabad",
    "Contact No.": "9512612044"
  },
  {
    "Organization": "West-2",
    "Manager Name": "Amritesh",
    "Manager Level": "WM",
    "Dealer Name": "Sun Autolink LLP-Becharji",
    "SCode": "1S3476",
    "State": "Gujarat",
    "City": "Ahmedabad",
    "Contact No.": "8980751111"
  },
  {
    "Organization": "West-2",
    "Manager Name": "Vipul Barot",
    "Manager Level": "ASM",
    "Dealer Name": "Sun Autolink LLP-Becharji",
    "SCode": "1S3476",
    "State": "Gujarat",
    "City": "Ahmedabad",
    "Contact No.": "9638341568"
  },
  {
    "Organization": "North-2",
    "Manager Name": "Mukesh Saxena",
    "Manager Level": "ASM",
    "Dealer Name": "Surendra Auto Enterprises-Bewar",
    "SCode": "1S7018",
    "State": "Uttar Pradesh",
    "City": "Bewar",
    "Contact No.": "9599117560"
  },
  {
    "Organization": "North-2",
    "Manager Name": "Rahish Kumar",
    "Manager Level": "WM",
    "Dealer Name": "Surendra Auto Enterprises-Bewar",
    "SCode": "1S7018",
    "State": "Uttar Pradesh",
    "City": "Bewar",
    "Contact No.": "7983792080"
  },
  {
    "Organization": "North-2",
    "Manager Name": "Shiv Singh Chauhan (D) / Saket Singh (N)",
    "Manager Level": "CSM",
    "Dealer Name": "Surendra Auto Enterprises-Bewar",
    "SCode": "1S7018",
    "State": "Uttar Pradesh",
    "City": "Bewar",
    "Contact No.": "7042404214,8709859215"
  },
  {
    "Organization": "North-2",
    "Manager Name": "Krishnendu Saha",
    "Manager Level": "RSM",
    "Dealer Name": "Surendra Auto Enterprises-Bewar",
    "SCode": "1S7018",
    "State": "Uttar Pradesh",
    "City": "Bewar",
    "Contact No.": "7980433425"
  },
  {
    "Organization": "North-2",
    "Manager Name": "RUDRA PRATAP SINGH",
    "Manager Level": "EOS Site Incharge",
    "Dealer Name": "Surendra Auto Enterprises-Bewar",
    "SCode": "1S7018",
    "State": "Uttar Pradesh",
    "City": "Bewar",
    "Contact No.": "8126514556"
  },
  {
    "Organization": "North-2",
    "Manager Name": "Surendra Singh",
    "Manager Level": "MD",
    "Dealer Name": "Surendra Auto Enterprises-Bewar",
    "SCode": "1S7018",
    "State": "Uttar Pradesh",
    "City": "Bewar",
    "Contact No.": "9720168305"
  },
  {
    "Organization": "West-1",
    "Manager Name": "Rehman/ Nishant",
    "Manager Level": "EOS Site Incharge",
    "Dealer Name": "Sushil Motors-Nanded",
    "SCode": "1S3312",
    "State": "Maharashtra",
    "City": "Nanded",
    "Contact No.": "8378005255,8669142858"
  },
  {
    "Organization": "West-1",
    "Manager Name": "Dayasagar Sakhare",
    "Manager Level": "CSM",
    "Dealer Name": "Sushil Motors-Nanded",
    "SCode": "1S3312",
    "State": "Maharashtra",
    "City": "Nanded",
    "Contact No.": "9960392475"
  },
  {
    "Organization": "West-1",
    "Manager Name": "Sandeep Rathod",
    "Manager Level": "WM",
    "Dealer Name": "Sushil Motors-Nanded",
    "SCode": "1S3312",
    "State": "Maharashtra",
    "City": "Nanded",
    "Contact No.": "9529220893"
  },
  {
    "Organization": "West-1",
    "Manager Name": "Gaus Shaikh",
    "Manager Level": "MD",
    "Dealer Name": "Sushil Motors-Nanded",
    "SCode": "1S3312",
    "State": "Maharashtra",
    "City": "Nanded",
    "Contact No.": "8261941922"
  },
  {
    "Organization": "West-1",
    "Manager Name": "Shrishail Honnagol",
    "Manager Level": "ASM",
    "Dealer Name": "Sushil Motors-Nanded",
    "SCode": "1S3312",
    "State": "Maharashtra",
    "City": "Nanded",
    "Contact No.": "7700906442"
  },
  {
    "Organization": "West-1",
    "Manager Name": "Suhas Ramchandra Mane",
    "Manager Level": "RSM",
    "Dealer Name": "Sushil Motors-Nanded",
    "SCode": "1S3312",
    "State": "Maharashtra",
    "City": "Nanded",
    "Contact No.": "8454812225"
  },
  {
    "Organization": "North-1",
    "Manager Name": "Surinder Singh",
    "Manager Level": "EOS Site Incharge",
    "Dealer Name": "Swami Auto Care-Derabasi",
    "SCode": "1S1110",
    "State": "Punjab",
    "City": "Chandigarh",
    "Contact No.": "8708120996"
  },
  {
    "Organization": "North-1",
    "Manager Name": "Vaibhav Katyal",
    "Manager Level": "ASM",
    "Dealer Name": "Swami Auto Care-Derabasi",
    "SCode": "1S1110",
    "State": "Punjab",
    "City": "Chandigarh",
    "Contact No.": "9219500351"
  },
  {
    "Organization": "North-1",
    "Manager Name": "Adarsh Prasad",
    "Manager Level": "RSM",
    "Dealer Name": "Swami Auto Care-Derabasi",
    "SCode": "1S1110",
    "State": "Punjab",
    "City": "Chandigarh",
    "Contact No.": "9717996321"
  },
  {
    "Organization": "North-1",
    "Manager Name": "Pawan Sharma",
    "Manager Level": "MD",
    "Dealer Name": "Swami Auto Care-Derabasi",
    "SCode": "1S1110",
    "State": "Punjab",
    "City": "Chandigarh",
    "Contact No.": "9501010075"
  },
  {
    "Organization": "North-1",
    "Manager Name": "Mandeep Saini",
    "Manager Level": "WM",
    "Dealer Name": "Swami Auto Care-Derabasi",
    "SCode": "1S1110",
    "State": "Punjab",
    "City": "Chandigarh",
    "Contact No.": "8427600611"
  },
  {
    "Organization": "North-1",
    "Manager Name": "Amit Kumar",
    "Manager Level": "CSM",
    "Dealer Name": "Swami Auto Care-Derabasi",
    "SCode": "1S1110",
    "State": "Punjab",
    "City": "Chandigarh",
    "Contact No.": "8475085847"
  },
  {
    "Organization": "North-1",
    "Manager Name": "Dharmpal / Lalit Sharma",
    "Manager Level": "WM",
    "Dealer Name": "Swami Auto Care-Shimla",
    "SCode": "1S1136",
    "State": "Himachal Pradesh",
    "City": "Shimla",
    "Contact No.": "9882303232,9805968102"
  },
  {
    "Organization": "North-1",
    "Manager Name": "Devendra Singh",
    "Manager Level": "CSM",
    "Dealer Name": "Swami Auto Care-Shimla",
    "SCode": "1S1136",
    "State": "Himachal Pradesh",
    "City": "Shimla",
    "Contact No.": "7986052213"
  },
  {
    "Organization": "North-1",
    "Manager Name": "Adarsh Prasad",
    "Manager Level": "RSM",
    "Dealer Name": "Swami Auto Care-Shimla",
    "SCode": "1S1136",
    "State": "Himachal Pradesh",
    "City": "Shimla",
    "Contact No.": "9717996321"
  },
  {
    "Organization": "North-1",
    "Manager Name": "Vaibhav Katyal",
    "Manager Level": "ASM",
    "Dealer Name": "Swami Auto Care-Shimla",
    "SCode": "1S1136",
    "State": "Himachal Pradesh",
    "City": "Shimla",
    "Contact No.": "9219500351"
  },
  {
    "Organization": "North-1",
    "Manager Name": "Mr. Chandan Jain",
    "Manager Level": "MD",
    "Dealer Name": "Swami Auto Care-Shimla",
    "SCode": "1S1136",
    "State": "Himachal Pradesh",
    "City": "Shimla",
    "Contact No.": "9218510007"
  },
  {
    "Organization": "North-1",
    "Manager Name": "Himanshu",
    "Manager Level": "EOS Site Incharge",
    "Dealer Name": "Swami Auto Care-Solan",
    "SCode": "1S1147",
    "State": "Himachal Pradesh",
    "City": "Solan",
    "Contact No.": "9805968112"
  },
  {
    "Organization": "North-1",
    "Manager Name": "Adarsh Prasad",
    "Manager Level": "RSM",
    "Dealer Name": "Swami Auto Care-Solan",
    "SCode": "1S1147",
    "State": "Himachal Pradesh",
    "City": "Solan",
    "Contact No.": "9717996321"
  },
  {
    "Organization": "North-1",
    "Manager Name": "Chandan Jain",
    "Manager Level": "MD",
    "Dealer Name": "Swami Auto Care-Solan",
    "SCode": "1S1147",
    "State": "Himachal Pradesh",
    "City": "Solan",
    "Contact No.": "9218510007"
  },
  {
    "Organization": "North-1",
    "Manager Name": "Devendra Singh",
    "Manager Level": "CSM",
    "Dealer Name": "Swami Auto Care-Solan",
    "SCode": "1S1147",
    "State": "Himachal Pradesh",
    "City": "Solan",
    "Contact No.": "7986052213"
  },
  {
    "Organization": "North-1",
    "Manager Name": "Balwinder Singh / Shivam Jain",
    "Manager Level": "WM",
    "Dealer Name": "Swami Auto Care-Solan",
    "SCode": "1S1147",
    "State": "Himachal Pradesh",
    "City": "Solan",
    "Contact No.": "9805968114,9805310007"
  },
  {
    "Organization": "North-1",
    "Manager Name": "Vaibhav Katyal",
    "Manager Level": "ASM",
    "Dealer Name": "Swami Auto Care-Solan",
    "SCode": "1S1147",
    "State": "Himachal Pradesh",
    "City": "Solan",
    "Contact No.": "9219500351"
  },
  {
    "Organization": "North-2",
    "Manager Name": "Manoj Kumar",
    "Manager Level": "EOS Site Incharge",
    "Dealer Name": "Swastik Motors-Jhansi",
    "SCode": "1S7081",
    "State": "Uttar Pradesh",
    "City": "Jhansi",
    "Contact No.": "8400150243"
  },
  {
    "Organization": "North-2",
    "Manager Name": "Faisal Ansari (D) / Saket Singh (N)",
    "Manager Level": "CSM",
    "Dealer Name": "Swastik Motors-Jhansi",
    "SCode": "1S7081",
    "State": "Uttar Pradesh",
    "City": "Jhansi",
    "Contact No.": "9682977311,8709859215"
  },
  {
    "Organization": "North-2",
    "Manager Name": "Praveen Tripathi",
    "Manager Level": "WM",
    "Dealer Name": "Swastik Motors-Jhansi",
    "SCode": "1S7081",
    "State": "Uttar Pradesh",
    "City": "Jhansi",
    "Contact No.": "8400150245"
  },
  {
    "Organization": "North-2",
    "Manager Name": "Nitin Gupta",
    "Manager Level": "ASM",
    "Dealer Name": "Swastik Motors-Jhansi",
    "SCode": "1S7081",
    "State": "Uttar Pradesh",
    "City": "Jhansi",
    "Contact No.": "7080811550"
  },
  {
    "Organization": "North-2",
    "Manager Name": "Rishabh Agarwal",
    "Manager Level": "MD",
    "Dealer Name": "Swastik Motors-Jhansi",
    "SCode": "1S7081",
    "State": "Uttar Pradesh",
    "City": "Jhansi",
    "Contact No.": "7309630351"
  },
  {
    "Organization": "North-2",
    "Manager Name": "Krishnendu Saha",
    "Manager Level": "RSM",
    "Dealer Name": "Swastik Motors-Jhansi",
    "SCode": "1S7081",
    "State": "Uttar Pradesh",
    "City": "Jhansi",
    "Contact No.": "7980433425"
  },
  {
    "Organization": "West-2",
    "Manager Name": "Himanshu Rawat",
    "Manager Level": "CSM",
    "Dealer Name": "Swastik Sales Agencies-Julwania",
    "SCode": "1S5020",
    "State": "Madhya Pradesh",
    "City": "Julwania",
    "Contact No.": "8630936244"
  },
  {
    "Organization": "West-2",
    "Manager Name": "Nitin Verma / Hitesh Sahu",
    "Manager Level": "WM",
    "Dealer Name": "Swastik Sales Agencies-Julwania",
    "SCode": "1S5020",
    "State": "Madhya Pradesh",
    "City": "Julwania",
    "Contact No.": "8224811497,9340271005"
  },
  {
    "Organization": "West-2",
    "Manager Name": "Sudhir Kumar",
    "Manager Level": "RSM",
    "Dealer Name": "Swastik Sales Agencies-Julwania",
    "SCode": "1S5020",
    "State": "Madhya Pradesh",
    "City": "Julwania",
    "Contact No.": "9752542733"
  },
  {
    "Organization": "West-2",
    "Manager Name": "Sahrukh Khan / Jeet Wankhede",
    "Manager Level": "EOS Site Incharge",
    "Dealer Name": "Swastik Sales Agencies-Julwania",
    "SCode": "1S5020",
    "State": "Madhya Pradesh",
    "City": "Julwania",
    "Contact No.": "7869115197,9285087797"
  },
  {
    "Organization": "West-2",
    "Manager Name": "Vivek Kumar",
    "Manager Level": "ASM",
    "Dealer Name": "Swastik Sales Agencies-Julwania",
    "SCode": "1S5020",
    "State": "Madhya Pradesh",
    "City": "Julwania",
    "Contact No.": "8171110903"
  },
  {
    "Organization": "West-2",
    "Manager Name": "Arun Sahu",
    "Manager Level": "MD",
    "Dealer Name": "Swastik Sales Agencies-Julwania",
    "SCode": "1S5020",
    "State": "Madhya Pradesh",
    "City": "Julwania",
    "Contact No.": "9425087797"
  },
  {
    "Organization": "South-1",
    "Manager Name": "Yaseen Khan",
    "Manager Level": "CSM",
    "Dealer Name": "TRR Trucks and Buses Private Limited (ProX)-Chennai",
    "SCode": "1S4140",
    "State": "Tamil Nadu",
    "City": "Chennai",
    "Contact No.": "7418976555,9480970072"
  },
  {
    "Organization": "South-1",
    "Manager Name": "Suresh R",
    "Manager Level": "EOS Site Incharge",
    "Dealer Name": "TRR Trucks and Buses Private Limited (ProX)-Chennai",
    "SCode": "1S4140",
    "State": "Tamil Nadu",
    "City": "Chennai",
    "Contact No.": "9962446902"
  },
  {
    "Organization": "South-1",
    "Manager Name": "Sujan Saha",
    "Manager Level": "RSM",
    "Dealer Name": "TRR Trucks and Buses Private Limited (ProX)-Chennai",
    "SCode": "1S4140",
    "State": "Tamil Nadu",
    "City": "Chennai",
    "Contact No.": "9903978950"
  },
  {
    "Organization": "South-1",
    "Manager Name": "Joseph Hariharn",
    "Manager Level": "WM",
    "Dealer Name": "TRR Trucks and Buses Private Limited (ProX)-Chennai",
    "SCode": "1S4140",
    "State": "Tamil Nadu",
    "City": "Chennai",
    "Contact No.": "8939152828"
  },
  {
    "Organization": "South-1",
    "Manager Name": "Naresh Kumar / T.R.Ramprasadh",
    "Manager Level": "MD",
    "Dealer Name": "TRR Trucks and Buses Private Limited (ProX)-Chennai",
    "SCode": "1S4140",
    "State": "Tamil Nadu",
    "City": "Chennai",
    "Contact No.": "8939902828,9841012828"
  },
  {
    "Organization": "South-1",
    "Manager Name": "S. J. Subramani (D) / Yuvaraj B (N)",
    "Manager Level": "CSM",
    "Dealer Name": "TRR Trucks and Buses Private Limited-Vellore",
    "SCode": "1S4145",
    "State": "Tamil Nadu",
    "City": "Vellore",
    "Contact No.": "9840730251,9543338783"
  },
  {
    "Organization": "South-1",
    "Manager Name": "Hari Krishnan K",
    "Manager Level": "EOS Site Incharge",
    "Dealer Name": "TRR Trucks and Buses Private Limited-Vellore",
    "SCode": "1S4145",
    "State": "Tamil Nadu",
    "City": "Vellore",
    "Contact No.": "9677735615"
  },
  {
    "Organization": "South-1",
    "Manager Name": "Naresh BH  / T.R Ramprasadh",
    "Manager Level": "MD",
    "Dealer Name": "TRR Trucks and Buses Private Limited-Vellore",
    "SCode": "1S4145",
    "State": "Tamil Nadu",
    "City": "Vellore",
    "Contact No.": "8939902828,9841012828"
  },
  {
    "Organization": "South-1",
    "Manager Name": "Sangeeth Kumar. S / Selvaraj",
    "Manager Level": "WM",
    "Dealer Name": "TRR Trucks and Buses Private Limited-Vellore",
    "SCode": "1S4145",
    "State": "Tamil Nadu",
    "City": "Vellore",
    "Contact No.": "9629140515,8925881267"
  },
  {
    "Organization": "South-1",
    "Manager Name": "Vasantha Kumar T",
    "Manager Level": "ASM",
    "Dealer Name": "TRR Trucks and Buses Private Limited-Vellore",
    "SCode": "1S4145",
    "State": "Tamil Nadu",
    "City": "Vellore",
    "Contact No.": "9790754777"
  },
  {
    "Organization": "South-1",
    "Manager Name": "Radhakrishnan",
    "Manager Level": "RSM",
    "Dealer Name": "TRR Trucks and Buses Private Limited-Vellore",
    "SCode": "1S4145",
    "State": "Tamil Nadu",
    "City": "Vellore",
    "Contact No.": "9840730250"
  },
  {
    "Organization": "North-2",
    "Manager Name": "Amit Pandey",
    "Manager Level": "ASM",
    "Dealer Name": "Tamanna Motors-Bhiwadi",
    "SCode": "1S7074",
    "State": "Rajasthan",
    "City": "Alwar",
    "Contact No.": "9099979633"
  },
  {
    "Organization": "North-2",
    "Manager Name": "Ram Chandra",
    "Manager Level": "EOS Site Incharge",
    "Dealer Name": "Tamanna Motors-Bhiwadi",
    "SCode": "1S7074",
    "State": "Rajasthan",
    "City": "Alwar",
    "Contact No.": "9257037915"
  },
  {
    "Organization": "North-2",
    "Manager Name": "Abhishek Tomar / Shivam Bharadwaj (N)",
    "Manager Level": "CSM",
    "Dealer Name": "Tamanna Motors-Bhiwadi",
    "SCode": "1S7074",
    "State": "Rajasthan",
    "City": "Alwar",
    "Contact No.": "8717880008,7878175706"
  },
  {
    "Organization": "North-2",
    "Manager Name": "Krishnendu Saha",
    "Manager Level": "RSM",
    "Dealer Name": "Tamanna Motors-Bhiwadi",
    "SCode": "1S7074",
    "State": "Rajasthan",
    "City": "Alwar",
    "Contact No.": "7980433425"
  },
  {
    "Organization": "North-2",
    "Manager Name": "Mithilesh Yadav",
    "Manager Level": "WM",
    "Dealer Name": "Tamanna Motors-Bhiwadi",
    "SCode": "1S7074",
    "State": "Rajasthan",
    "City": "Alwar",
    "Contact No.": "9257037913"
  },
  {
    "Organization": "North-2",
    "Manager Name": "Karan Singh",
    "Manager Level": "MD",
    "Dealer Name": "Tamanna Motors-Bhiwadi",
    "SCode": "1S7074",
    "State": "Rajasthan",
    "City": "Alwar",
    "Contact No.": "9829198787"
  },
  {
    "Organization": "East-2",
    "Manager Name": "Niket Kumar",
    "Manager Level": "RSM",
    "Dealer Name": "The Wheels-Balangir",
    "SCode": "1S2289",
    "State": "Odisha",
    "City": "Balangir",
    "Contact No.": "8427733112"
  },
  {
    "Organization": "East-2",
    "Manager Name": "Sanjoy Nayek",
    "Manager Level": "ASM",
    "Dealer Name": "The Wheels-Balangir",
    "SCode": "1S2289",
    "State": "Odisha",
    "City": "Balangir",
    "Contact No.": "8001165218"
  },
  {
    "Organization": "East-2",
    "Manager Name": "Ganesh Kumar Bhitiria",
    "Manager Level": "WM",
    "Dealer Name": "The Wheels-Balangir",
    "SCode": "1S2289",
    "State": "Odisha",
    "City": "Balangir",
    "Contact No.": "7008987451"
  },
  {
    "Organization": "East-2",
    "Manager Name": "Sailesh Moharana",
    "Manager Level": "CSM",
    "Dealer Name": "The Wheels-Balangir",
    "SCode": "1S2289",
    "State": "Odisha",
    "City": "Balangir",
    "Contact No.": "9337951215"
  },
  {
    "Organization": "East-2",
    "Manager Name": "Jhasketan Pradhan",
    "Manager Level": "MD",
    "Dealer Name": "The Wheels-Balangir",
    "SCode": "1S2289",
    "State": "Odisha",
    "City": "Balangir",
    "Contact No.": "9937450144"
  },
  {
    "Organization": "East-2",
    "Manager Name": "Partha Sarathi Gahir",
    "Manager Level": "EOS Site Incharge",
    "Dealer Name": "The Wheels-Balangir",
    "SCode": "1S2289",
    "State": "Odisha",
    "City": "Balangir",
    "Contact No.": "8118094516"
  },
  {
    "Organization": "East-2",
    "Manager Name": "Sanjoy Nayek",
    "Manager Level": "ASM",
    "Dealer Name": "The Wheels-Bargarh",
    "SCode": "1S2213",
    "State": "Odisha",
    "City": "Bargarh",
    "Contact No.": "8001165218"
  },
  {
    "Organization": "East-2",
    "Manager Name": "Niket Kumar",
    "Manager Level": "RSM",
    "Dealer Name": "The Wheels-Bargarh",
    "SCode": "1S2213",
    "State": "Odisha",
    "City": "Bargarh",
    "Contact No.": "8427733112"
  },
  {
    "Organization": "East-2",
    "Manager Name": "Jhasakatan Pradhan",
    "Manager Level": "MD",
    "Dealer Name": "The Wheels-Bargarh",
    "SCode": "1S2213",
    "State": "Odisha",
    "City": "Bargarh",
    "Contact No.": "9937450144"
  },
  {
    "Organization": "East-2",
    "Manager Name": "Ranjit Kumar",
    "Manager Level": "EOS Site Incharge",
    "Dealer Name": "The Wheels-Bargarh",
    "SCode": "1S2213",
    "State": "Odisha",
    "City": "Bargarh",
    "Contact No.": "7008987452"
  },
  {
    "Organization": "East-2",
    "Manager Name": "Ganesh Bhitaria",
    "Manager Level": "WM",
    "Dealer Name": "The Wheels-Bargarh",
    "SCode": "1S2213",
    "State": "Odisha",
    "City": "Bargarh",
    "Contact No.": "7008246374"
  },
  {
    "Organization": "East-2",
    "Manager Name": "Sailesh Moharana",
    "Manager Level": "CSM",
    "Dealer Name": "The Wheels-Bargarh",
    "SCode": "1S2213",
    "State": "Odisha",
    "City": "Bargarh",
    "Contact No.": "9337951215"
  },
  {
    "Organization": "West-1",
    "Manager Name": "Sujan Saha",
    "Manager Level": "RSM",
    "Dealer Name": "Tholia Motors Pvt Ltd (ProX)-Thane",
    "SCode": "1S3442",
    "State": "Maharashtra",
    "City": "Pune",
    "Contact No.": "9903978950"
  },
  {
    "Organization": "West-1",
    "Manager Name": "Suraj Padalkar",
    "Manager Level": "CSM",
    "Dealer Name": "Tholia Motors Pvt Ltd (ProX)-Thane",
    "SCode": "1S3442",
    "State": "Maharashtra",
    "City": "Pune",
    "Contact No.": "9702685730"
  },
  {
    "Organization": "West-1",
    "Manager Name": "Sandesh Mengal",
    "Manager Level": "WM",
    "Dealer Name": "Tholia Motors Pvt Ltd (ProX)-Thane",
    "SCode": "1S3442",
    "State": "Maharashtra",
    "City": "Thane",
    "Contact No.": "9067642177"
  },
  {
    "Organization": "West-1",
    "Manager Name": "Piyush Jain",
    "Manager Level": "MD",
    "Dealer Name": "Tholia Motors Pvt Ltd (ProX)-Thane",
    "SCode": "1S3442",
    "State": "Maharashtra",
    "City": "Thane",
    "Contact No.": "8000311346"
  },
  {
    "Organization": "West-1",
    "Manager Name": "Sahil Bisht",
    "Manager Level": "ASM",
    "Dealer Name": "Tholia Motors Pvt Ltd-Bhiwandi",
    "SCode": "1S3422",
    "State": "Maharashtra",
    "City": "Bhiwandi",
    "Contact No.": "7304491771"
  },
  {
    "Organization": "West-1",
    "Manager Name": "Abhishek Naik",
    "Manager Level": "WM",
    "Dealer Name": "Tholia Motors Pvt Ltd-Bhiwandi",
    "SCode": "1S3422",
    "State": "Maharashtra",
    "City": "Bhiwandi",
    "Contact No.": "8956261154"
  },
  {
    "Organization": "West-1",
    "Manager Name": "Suhas Ramchandra Mane",
    "Manager Level": "RSM",
    "Dealer Name": "Tholia Motors Pvt Ltd-Bhiwandi",
    "SCode": "1S3422",
    "State": "Maharashtra",
    "City": "Bhiwandi",
    "Contact No.": "8454812225"
  },
  {
    "Organization": "West-1",
    "Manager Name": "Prabhat Dubey",
    "Manager Level": "CSM",
    "Dealer Name": "Tholia Motors Pvt Ltd-Bhiwandi",
    "SCode": "1S3422",
    "State": "Maharashtra",
    "City": "Bhiwandi",
    "Contact No.": "9559174863"
  },
  {
    "Organization": "West-1",
    "Manager Name": "Amol Sakunde / Piyush Jain",
    "Manager Level": "MD",
    "Dealer Name": "Tholia Motors Pvt Ltd-Bhiwandi",
    "SCode": "1S3422",
    "State": "Maharashtra",
    "City": "Bhiwandi",
    "Contact No.": "9594799791,8000311346"
  },
  {
    "Organization": "West-1",
    "Manager Name": "Yash Bhoir (D) / Rutik (N)",
    "Manager Level": "EOS Site Incharge",
    "Dealer Name": "Tholia Motors Pvt Ltd-Bhiwandi",
    "SCode": "1S3422",
    "State": "Maharashtra",
    "City": "Bhiwandi",
    "Contact No.": "8956482094,9175863538"
  },
  {
    "Organization": "West-1",
    "Manager Name": "Sahil Bisht",
    "Manager Level": "ASM",
    "Dealer Name": "Tholia Motors Pvt Ltd-Boisar",
    "SCode": "1S3434",
    "State": "Maharashtra",
    "City": "Palghar",
    "Contact No.": "7304491771"
  },
  {
    "Organization": "West-1",
    "Manager Name": "Amol Sakunde",
    "Manager Level": "MD",
    "Dealer Name": "Tholia Motors Pvt Ltd-Boisar",
    "SCode": "1S3434",
    "State": "Maharashtra",
    "City": "Palghar",
    "Contact No.": "9594799791"
  },
  {
    "Organization": "West-1",
    "Manager Name": "Khalil Ahmed",
    "Manager Level": "WM",
    "Dealer Name": "Tholia Motors Pvt Ltd-Boisar",
    "SCode": "1S3434",
    "State": "Maharashtra",
    "City": "Palghar",
    "Contact No.": "7021490458"
  },
  {
    "Organization": "West-1",
    "Manager Name": "Shreshth Gupta",
    "Manager Level": "CSM",
    "Dealer Name": "Tholia Motors Pvt Ltd-Boisar",
    "SCode": "1S3434",
    "State": "Maharashtra",
    "City": "Palghar",
    "Contact No.": "8171901577"
  },
  {
    "Organization": "West-1",
    "Manager Name": "Roshan",
    "Manager Level": "EOS Site Incharge",
    "Dealer Name": "Tholia Motors Pvt Ltd-Boisar",
    "SCode": "1S3434",
    "State": "Maharashtra",
    "City": "Palghar",
    "Contact No.": "8857980763"
  },
  {
    "Organization": "West-1",
    "Manager Name": "Suhas Ramchandra Mane",
    "Manager Level": "RSM",
    "Dealer Name": "Tholia Motors Pvt Ltd-Boisar",
    "SCode": "1S3434",
    "State": "Maharashtra",
    "City": "Palghar",
    "Contact No.": "8454812225"
  },
  {
    "Organization": "West-1",
    "Manager Name": "Rohan Kini / Yogesh Shirodkar",
    "Manager Level": "EOS Site Incharge",
    "Dealer Name": "Tholia Motors Pvt Ltd-Mira Road",
    "SCode": "1S3393",
    "State": "Maharashtra",
    "City": "Mira-bhayandar",
    "Contact No.": "8956283432,8956281777"
  },
  {
    "Organization": "West-1",
    "Manager Name": "Sahil Bisht",
    "Manager Level": "ASM",
    "Dealer Name": "Tholia Motors Pvt Ltd-Mira Road",
    "SCode": "1S3393",
    "State": "Maharashtra",
    "City": "Mira-bhayandar",
    "Contact No.": "7304491771"
  },
  {
    "Organization": "West-1",
    "Manager Name": "Kshitij Bankhele (EVS) / Pranit Koli",
    "Manager Level": "CSM",
    "Dealer Name": "Tholia Motors Pvt Ltd-Mira Road",
    "SCode": "1S3393",
    "State": "Maharashtra",
    "City": "Mira-bhayandar",
    "Contact No.": "9833405966,9029535542"
  },
  {
    "Organization": "West-1",
    "Manager Name": "Piyush Jain",
    "Manager Level": "MD",
    "Dealer Name": "Tholia Motors Pvt Ltd-Mira Road",
    "SCode": "1S3393",
    "State": "Maharashtra",
    "City": "Mira-bhayandar",
    "Contact No.": "8956288815"
  },
  {
    "Organization": "West-1",
    "Manager Name": "Suhas Ramchandra Mane",
    "Manager Level": "RSM",
    "Dealer Name": "Tholia Motors Pvt Ltd-Mira Road",
    "SCode": "1S3393",
    "State": "Maharashtra",
    "City": "Mira-bhayandar",
    "Contact No.": "8454812225"
  },
  {
    "Organization": "West-1",
    "Manager Name": "Sachin Kadam",
    "Manager Level": "WM",
    "Dealer Name": "Tholia Motors Pvt Ltd-Mira Road",
    "SCode": "1S3393",
    "State": "Maharashtra",
    "City": "Mira-bhayandar",
    "Contact No.": "8422941494"
  },
  {
    "Organization": "West-1",
    "Manager Name": "Pranit Koli",
    "Manager Level": "CSM",
    "Dealer Name": "Tholia Motors Pvt Ltd-Mira Road",
    "SCode": "1S3393",
    "State": "Maharashtra",
    "City": "Mira-bhayandar",
    "Contact No.": "9029535542"
  },
  {
    "Organization": "West-1",
    "Manager Name": "Sudhir",
    "Manager Level": "WM",
    "Dealer Name": "Tholia Motors Pvt Ltd-Mumbai",
    "SCode": "1S3420",
    "State": "Maharashtra",
    "City": "Kurla",
    "Contact No.": "8956281783"
  },
  {
    "Organization": "West-1",
    "Manager Name": "Sahil Bisht",
    "Manager Level": "ASM",
    "Dealer Name": "Tholia Motors Pvt Ltd-Mumbai",
    "SCode": "1S3420",
    "State": "Maharashtra",
    "City": "Kurla",
    "Contact No.": "7304491771"
  },
  {
    "Organization": "West-1",
    "Manager Name": "Amol Sakunde / Piyush Jain",
    "Manager Level": "MD",
    "Dealer Name": "Tholia Motors Pvt Ltd-Mumbai",
    "SCode": "1S3420",
    "State": "Maharashtra",
    "City": "Kurla",
    "Contact No.": "9594799791,8000311346"
  },
  {
    "Organization": "West-1",
    "Manager Name": "Rohan Tikhe",
    "Manager Level": "EOS Site Incharge",
    "Dealer Name": "Tholia Motors Pvt Ltd-Mumbai",
    "SCode": "1S3420",
    "State": "Maharashtra",
    "City": "Kurla",
    "Contact No.": "8956157191"
  },
  {
    "Organization": "West-1",
    "Manager Name": "Suhas Ramchandra Mane",
    "Manager Level": "RSM",
    "Dealer Name": "Tholia Motors Pvt Ltd-Mumbai",
    "SCode": "1S3420",
    "State": "Maharashtra",
    "City": "Kurla",
    "Contact No.": "8454812225"
  },
  {
    "Organization": "West-1",
    "Manager Name": "Arfat Khan",
    "Manager Level": "CSM",
    "Dealer Name": "Tholia Motors Pvt Ltd-Mumbai",
    "SCode": "1S3420",
    "State": "Maharashtra",
    "City": "Kurla",
    "Contact No.": "7208277307"
  },
  {
    "Organization": "West-1",
    "Manager Name": "Sandeep Gaikwad",
    "Manager Level": "WM",
    "Dealer Name": "Tholia Motors Pvt Ltd-Nalasopara",
    "SCode": "1S3388",
    "State": "Maharashtra",
    "City": "Greater mumbai",
    "Contact No.": "7219888918"
  },
  {
    "Organization": "West-1",
    "Manager Name": "Suhas Ramchandra Mane",
    "Manager Level": "RSM",
    "Dealer Name": "Tholia Motors Pvt Ltd-Nalasopara",
    "SCode": "1S3388",
    "State": "Maharashtra",
    "City": "Greater mumbai",
    "Contact No.": "8454812225"
  },
  {
    "Organization": "West-1",
    "Manager Name": "Amol Sakunde",
    "Manager Level": "MD",
    "Dealer Name": "Tholia Motors Pvt Ltd-Nalasopara",
    "SCode": "1S3388",
    "State": "Maharashtra",
    "City": "Greater mumbai",
    "Contact No.": "9594799791"
  },
  {
    "Organization": "West-1",
    "Manager Name": "Shreshth Gupta",
    "Manager Level": "CSM",
    "Dealer Name": "Tholia Motors Pvt Ltd-Nalasopara",
    "SCode": "1S3388",
    "State": "Maharashtra",
    "City": "Greater mumbai",
    "Contact No.": "8171901577"
  },
  {
    "Organization": "West-1",
    "Manager Name": "Sahil Bisht",
    "Manager Level": "ASM",
    "Dealer Name": "Tholia Motors Pvt Ltd-Nalasopara",
    "SCode": "1S3388",
    "State": "Maharashtra",
    "City": "Greater mumbai",
    "Contact No.": "7304491771"
  },
  {
    "Organization": "West-1",
    "Manager Name": "Bhavesh Patil",
    "Manager Level": "EOS Site Incharge",
    "Dealer Name": "Tholia Motors Pvt Ltd-Nalasopara",
    "SCode": "1S3388",
    "State": "Maharashtra",
    "City": "Greater mumbai",
    "Contact No.": "7020919682"
  },
  {
    "Organization": "West-1",
    "Manager Name": "Prabhat Dubey",
    "Manager Level": "CSM",
    "Dealer Name": "Tholia Motors Pvt Ltd-Panvel",
    "SCode": "1S3385",
    "State": "Maharashtra",
    "City": "Panvel",
    "Contact No.": "9559174863"
  },
  {
    "Organization": "West-1",
    "Manager Name": "Sahil Bisht",
    "Manager Level": "ASM",
    "Dealer Name": "Tholia Motors Pvt Ltd-Panvel",
    "SCode": "1S3385",
    "State": "Maharashtra",
    "City": "Panvel",
    "Contact No.": "7304491771"
  },
  {
    "Organization": "West-1",
    "Manager Name": "Suhas Ramchandra Mane",
    "Manager Level": "RSM",
    "Dealer Name": "Tholia Motors Pvt Ltd-Panvel",
    "SCode": "1S3385",
    "State": "Maharashtra",
    "City": "Panvel",
    "Contact No.": "8454812225"
  },
  {
    "Organization": "West-1",
    "Manager Name": "Ibrahim Sardar",
    "Manager Level": "EOS Site Incharge",
    "Dealer Name": "Tholia Motors Pvt Ltd-Panvel",
    "SCode": "1S3385",
    "State": "Maharashtra",
    "City": "Panvel",
    "Contact No.": "8956831301"
  },
  {
    "Organization": "West-1",
    "Manager Name": "Akshay Kadam / Amol Sakunde",
    "Manager Level": "MD",
    "Dealer Name": "Tholia Motors Pvt Ltd-Panvel",
    "SCode": "1S3385",
    "State": "Maharashtra",
    "City": "Panvel",
    "Contact No.": "8956288849,9594799791"
  },
  {
    "Organization": "West-1",
    "Manager Name": "Shubham Padwal",
    "Manager Level": "WM",
    "Dealer Name": "Tholia Motors Pvt Ltd-Panvel",
    "SCode": "1S3385",
    "State": "Maharashtra",
    "City": "Panvel",
    "Contact No.": "8956109538"
  },
  {
    "Organization": "North-1",
    "Manager Name": "Harish Singhal",
    "Manager Level": "MD",
    "Dealer Name": "Tirupati Motors - Narnaul",
    "SCode": "1S1119",
    "State": "Haryana",
    "City": "Narnaul",
    "Contact No.": "9812302012"
  },
  {
    "Organization": "North-1",
    "Manager Name": "Sanjeev Chand",
    "Manager Level": "WM",
    "Dealer Name": "Tirupati Motors - Narnaul",
    "SCode": "1S1119",
    "State": "Haryana",
    "City": "Narnaul",
    "Contact No.": "9812302623"
  },
  {
    "Organization": "North-1",
    "Manager Name": "Adarsh Prasad",
    "Manager Level": "RSM",
    "Dealer Name": "Tirupati Motors - Narnaul",
    "SCode": "1S1119",
    "State": "Haryana",
    "City": "Narnaul",
    "Contact No.": "9717996321"
  },
  {
    "Organization": "North-1",
    "Manager Name": "Sunny Verma",
    "Manager Level": "ASM",
    "Dealer Name": "Tirupati Motors - Narnaul",
    "SCode": "1S1119",
    "State": "Haryana",
    "City": "Narnaul",
    "Contact No.": "7276047837"
  },
  {
    "Organization": "North-1",
    "Manager Name": "Aditya Upmanyu",
    "Manager Level": "CSM",
    "Dealer Name": "Tirupati Motors - Narnaul",
    "SCode": "1S1119",
    "State": "Haryana",
    "City": "Narnaul",
    "Contact No.": "8433067854"
  },
  {
    "Organization": "North-1",
    "Manager Name": "Harish Singhal",
    "Manager Level": "MD",
    "Dealer Name": "Tirupati Motors - Rewari",
    "SCode": "1S1116",
    "State": "Haryana",
    "City": "Rewari",
    "Contact No.": "9812302012"
  },
  {
    "Organization": "North-1",
    "Manager Name": "Adarsh Prasad",
    "Manager Level": "RSM",
    "Dealer Name": "Tirupati Motors - Rewari",
    "SCode": "1S1116",
    "State": "Haryana",
    "City": "Rewari",
    "Contact No.": "9717996321"
  },
  {
    "Organization": "North-1",
    "Manager Name": "Sunny Verma",
    "Manager Level": "ASM",
    "Dealer Name": "Tirupati Motors - Rewari",
    "SCode": "1S1116",
    "State": "Haryana",
    "City": "Rewari",
    "Contact No.": "7276047837"
  },
  {
    "Organization": "North-1",
    "Manager Name": "Arun Yadav / Dinesh Kumar",
    "Manager Level": "WM",
    "Dealer Name": "Tirupati Motors - Rewari",
    "SCode": "1S1116",
    "State": "Haryana",
    "City": "Rewari",
    "Contact No.": "9813890117,9812302016"
  },
  {
    "Organization": "North-1",
    "Manager Name": "Aditya Upmanyu",
    "Manager Level": "CSM",
    "Dealer Name": "Tirupati Motors - Rewari",
    "SCode": "1S1116",
    "State": "Haryana",
    "City": "Rewari",
    "Contact No.": "8433067854"
  },
  {
    "Organization": "North-2",
    "Manager Name": "Abhishek Tomar / Shivam Bharadwaj (N)",
    "Manager Level": "CSM",
    "Dealer Name": "Tirupati Trucking LLP-Alwar",
    "SCode": "1S7023",
    "State": "Rajasthan",
    "City": "Alwar",
    "Contact No.": "8717880008,7878175706"
  },
  {
    "Organization": "North-2",
    "Manager Name": "Krishnendu Saha",
    "Manager Level": "RSM",
    "Dealer Name": "Tirupati Trucking LLP-Alwar",
    "SCode": "1S7023",
    "State": "Rajasthan",
    "City": "Alwar",
    "Contact No.": "7980433425"
  },
  {
    "Organization": "North-2",
    "Manager Name": "Jamsed / Siya Ram",
    "Manager Level": "EOS Site Incharge",
    "Dealer Name": "Tirupati Trucking LLP-Alwar",
    "SCode": "1S7023",
    "State": "Rajasthan",
    "City": "Alwar",
    "Contact No.": "9982485112,9799468623"
  },
  {
    "Organization": "North-2",
    "Manager Name": "Tilak / Devendra Chaudhary",
    "Manager Level": "WM",
    "Dealer Name": "Tirupati Trucking LLP-Alwar",
    "SCode": "1S7023",
    "State": "Rajasthan",
    "City": "Alwar",
    "Contact No.": "7412088733,7412088729"
  },
  {
    "Organization": "North-2",
    "Manager Name": "Mr. Ashwini Singhal",
    "Manager Level": "MD",
    "Dealer Name": "Tirupati Trucking LLP-Alwar",
    "SCode": "1S7023",
    "State": "Rajasthan",
    "City": "Alwar",
    "Contact No.": "9812397777"
  },
  {
    "Organization": "North-2",
    "Manager Name": "Amit Pandey",
    "Manager Level": "ASM",
    "Dealer Name": "Tirupati Trucking LLP-Alwar",
    "SCode": "1S7023",
    "State": "Rajasthan",
    "City": "Alwar",
    "Contact No.": "9099979633"
  },
  {
    "Organization": "North-2",
    "Manager Name": "Kamruddin",
    "Manager Level": "WM",
    "Dealer Name": "Tirupati Trucking LLP-Behror",
    "SCode": "1S7034",
    "State": "Rajasthan",
    "City": "Alwar",
    "Contact No.": "7412088734"
  },
  {
    "Organization": "North-2",
    "Manager Name": "Amit Pandey",
    "Manager Level": "ASM",
    "Dealer Name": "Tirupati Trucking LLP-Behror",
    "SCode": "1S7034",
    "State": "Rajasthan",
    "City": "Alwar",
    "Contact No.": "9099979633"
  },
  {
    "Organization": "North-2",
    "Manager Name": "Ashwani Singhal",
    "Manager Level": "MD",
    "Dealer Name": "Tirupati Trucking LLP-Behror",
    "SCode": "1S7034",
    "State": "Rajasthan",
    "City": "Alwar",
    "Contact No.": "9812397777"
  },
  {
    "Organization": "North-2",
    "Manager Name": "Krishnendu Saha",
    "Manager Level": "RSM",
    "Dealer Name": "Tirupati Trucking LLP-Behror",
    "SCode": "1S7034",
    "State": "Rajasthan",
    "City": "Alwar",
    "Contact No.": "7980433425"
  },
  {
    "Organization": "North-2",
    "Manager Name": "Abhishek Tomar / Shivam Bharadwaj (N)",
    "Manager Level": "CSM",
    "Dealer Name": "Tirupati Trucking LLP-Behror",
    "SCode": "1S7034",
    "State": "Rajasthan",
    "City": "Alwar",
    "Contact No.": "8717880008,7878175706"
  },
  {
    "Organization": "East-2",
    "Manager Name": "Dhanunjay Yerra",
    "Manager Level": "CSM",
    "Dealer Name": "Tulsi Trucking-Tilda",
    "SCode": "1S2261",
    "State": "Chhattisgarh",
    "City": "Tilda newra",
    "Contact No.": "8309812248"
  },
  {
    "Organization": "East-2",
    "Manager Name": "Rachit Kumar",
    "Manager Level": "ASM",
    "Dealer Name": "Tulsi Trucking-Tilda",
    "SCode": "1S2261",
    "State": "Chhattisgarh",
    "City": "Tilda newra",
    "Contact No.": "9534341234"
  },
  {
    "Organization": "East-2",
    "Manager Name": "Venu Gopal",
    "Manager Level": "EOS Site Incharge",
    "Dealer Name": "Tulsi Trucking-Tilda",
    "SCode": "1S2261",
    "State": "Chhattisgarh",
    "City": "Tilda newra",
    "Contact No.": "9171551935"
  },
  {
    "Organization": "East-2",
    "Manager Name": "Rahul Agrawal",
    "Manager Level": "MD",
    "Dealer Name": "Tulsi Trucking-Tilda",
    "SCode": "1S2261",
    "State": "Chhattisgarh",
    "City": "Tilda newra",
    "Contact No.": "9826859340"
  },
  {
    "Organization": "East-2",
    "Manager Name": "Onker Sahu",
    "Manager Level": "WM",
    "Dealer Name": "Tulsi Trucking-Tilda",
    "SCode": "1S2261",
    "State": "Chhattisgarh",
    "City": "Tilda newra",
    "Contact No.": "9171553137"
  },
  {
    "Organization": "East-2",
    "Manager Name": "Niket Kumar",
    "Manager Level": "RSM",
    "Dealer Name": "Tulsi Trucking-Tilda",
    "SCode": "1S2261",
    "State": "Chhattisgarh",
    "City": "Tilda newra",
    "Contact No.": "8427733112"
  },
  {
    "Organization": "West-1",
    "Manager Name": "Sanket Chordiya",
    "Manager Level": "CSM",
    "Dealer Name": "Unicon Motors (ProX)-Latur",
    "SCode": "1S3457",
    "State": "Maharashtra",
    "City": "Latur",
    "Contact No.": "9167257836"
  },
  {
    "Organization": "West-1",
    "Manager Name": "Sujan Saha",
    "Manager Level": "RSM",
    "Dealer Name": "Unicon Motors (ProX)-Latur",
    "SCode": "1S3457",
    "State": "Maharashtra",
    "City": "Latur",
    "Contact No.": "9903978950"
  },
  {
    "Organization": "West-1",
    "Manager Name": "Makne Sir",
    "Manager Level": "MD",
    "Dealer Name": "Unicon Motors (ProX)-Latur",
    "SCode": "1S3457",
    "State": "Maharashtra",
    "City": "Latur",
    "Contact No.": "9422188888"
  },
  {
    "Organization": "West-1",
    "Manager Name": "Roshan Gaikwad",
    "Manager Level": "EOS Site Incharge",
    "Dealer Name": "Unicon Motors (ProX)-Latur",
    "SCode": "1S3457",
    "State": "Maharashtra",
    "City": "Latur",
    "Contact No.": "7756006290"
  },
  {
    "Organization": "West-1",
    "Manager Name": "Sachin Kardile",
    "Manager Level": "WM",
    "Dealer Name": "Unicon Motors (ProX)-Latur",
    "SCode": "1S3457",
    "State": "Maharashtra",
    "City": "Latur",
    "Contact No.": "9595270103"
  },
  {
    "Organization": "West-1",
    "Manager Name": "Makane Sir",
    "Manager Level": "MD",
    "Dealer Name": "Unicon Motors Pvt Ltd (ProX)-Ahmednagar",
    "SCode": "1S3459",
    "State": "Maharashtra",
    "City": "Ahmednagar",
    "Contact No.": "9422188888"
  },
  {
    "Organization": "West-1",
    "Manager Name": "Sujan Saha",
    "Manager Level": "RSM",
    "Dealer Name": "Unicon Motors Pvt Ltd (ProX)-Ahmednagar",
    "SCode": "1S3459",
    "State": "Maharashtra",
    "City": "Ahmednagar",
    "Contact No.": "9903978950"
  },
  {
    "Organization": "West-1",
    "Manager Name": "Sanket Chordiya",
    "Manager Level": "CSM",
    "Dealer Name": "Unicon Motors Pvt Ltd (ProX)-Ahmednagar",
    "SCode": "1S3459",
    "State": "Maharashtra",
    "City": "Ahmednagar",
    "Contact No.": "9167257836"
  },
  {
    "Organization": "West-1",
    "Manager Name": "Sudhir Shirsath",
    "Manager Level": "WM",
    "Dealer Name": "Unicon Motors Pvt Ltd (ProX)-Ahmednagar",
    "SCode": "1S3459",
    "State": "Maharashtra",
    "City": "Ahmednagar",
    "Contact No.": "7756003508"
  },
  {
    "Organization": "West-1",
    "Manager Name": "Harshal Padar",
    "Manager Level": "EOS Site Incharge",
    "Dealer Name": "Unicon Motors Pvt Ltd (ProX)-Ahmednagar",
    "SCode": "1S3459",
    "State": "Maharashtra",
    "City": "Ahmednagar",
    "Contact No.": "7756003653"
  },
  {
    "Organization": "West-1",
    "Manager Name": "Sunil Ghawane / Ritesh Reddy",
    "Manager Level": "MD",
    "Dealer Name": "Unicon Motors Pvt Ltd-Ahemadnagar",
    "SCode": "1S3428",
    "State": "Maharashtra",
    "City": "Ahmednagar",
    "Contact No.": "9607921777,9552300000"
  },
  {
    "Organization": "West-1",
    "Manager Name": "Anup Lasure",
    "Manager Level": "CSM",
    "Dealer Name": "Unicon Motors Pvt Ltd-Ahemadnagar",
    "SCode": "1S3428",
    "State": "Maharashtra",
    "City": "Ahmednagar",
    "Contact No.": "8668611069"
  },
  {
    "Organization": "West-1",
    "Manager Name": "Suhas Ramchandra Mane",
    "Manager Level": "RSM",
    "Dealer Name": "Unicon Motors Pvt Ltd-Ahemadnagar",
    "SCode": "1S3428",
    "State": "Maharashtra",
    "City": "Ahmednagar",
    "Contact No.": "8454812225"
  },
  {
    "Organization": "West-1",
    "Manager Name": "Anant Kumar / Prakash Panchal",
    "Manager Level": "WM",
    "Dealer Name": "Unicon Motors Pvt Ltd-Ahemadnagar",
    "SCode": "1S3428",
    "State": "Maharashtra",
    "City": "Ahmednagar",
    "Contact No.": "9607961444,9607960872"
  },
  {
    "Organization": "West-1",
    "Manager Name": "Pratik Jaybhay / Amol Karad",
    "Manager Level": "EOS Site Incharge",
    "Dealer Name": "Unicon Motors Pvt Ltd-Ahemadnagar",
    "SCode": "1S3428",
    "State": "Maharashtra",
    "City": "Ahmednagar",
    "Contact No.": "9607962111,9623116722"
  },
  {
    "Organization": "West-1",
    "Manager Name": "Shrishail Honnagol",
    "Manager Level": "ASM",
    "Dealer Name": "Unicon Motors Pvt Ltd-Ahemadnagar",
    "SCode": "1S3428",
    "State": "Maharashtra",
    "City": "Ahmednagar",
    "Contact No.": "7700906442"
  },
  {
    "Organization": "West-1",
    "Manager Name": "Shrishail Honnagol",
    "Manager Level": "ASM",
    "Dealer Name": "Unicon Motors Pvt Ltd-Beed",
    "SCode": "1S3394",
    "State": "Maharashtra",
    "City": "Beed",
    "Contact No.": "7700906442"
  },
  {
    "Organization": "West-1",
    "Manager Name": "Dayasagar Sakhare",
    "Manager Level": "CSM",
    "Dealer Name": "Unicon Motors Pvt Ltd-Beed",
    "SCode": "1S3394",
    "State": "Maharashtra",
    "City": "Beed",
    "Contact No.": "9960392475"
  },
  {
    "Organization": "West-1",
    "Manager Name": "Samir Kore",
    "Manager Level": "WM",
    "Dealer Name": "Unicon Motors Pvt Ltd-Beed",
    "SCode": "1S3394",
    "State": "Maharashtra",
    "City": "Beed",
    "Contact No.": "7264055248"
  },
  {
    "Organization": "West-1",
    "Manager Name": "Suhas Ramchandra Mane",
    "Manager Level": "RSM",
    "Dealer Name": "Unicon Motors Pvt Ltd-Beed",
    "SCode": "1S3394",
    "State": "Maharashtra",
    "City": "Beed",
    "Contact No.": "8454812225"
  },
  {
    "Organization": "West-1",
    "Manager Name": "Azhar Shaikh",
    "Manager Level": "EOS Site Incharge",
    "Dealer Name": "Unicon Motors Pvt Ltd-Beed",
    "SCode": "1S3394",
    "State": "Maharashtra",
    "City": "Beed",
    "Contact No.": "9822709196"
  },
  {
    "Organization": "West-1",
    "Manager Name": "Azim Shaikh",
    "Manager Level": "MD",
    "Dealer Name": "Unicon Motors Pvt Ltd-Beed",
    "SCode": "1S3394",
    "State": "Maharashtra",
    "City": "Beed",
    "Contact No.": "8208881618"
  },
  {
    "Organization": "West-1",
    "Manager Name": "Shubham",
    "Manager Level": "WM",
    "Dealer Name": "Unicon Motors Pvt Ltd-Latur",
    "SCode": "1S3390",
    "State": "Maharashtra",
    "City": "Latur",
    "Contact No.": "7767050006"
  },
  {
    "Organization": "West-1",
    "Manager Name": "Shrishail Honnagol",
    "Manager Level": "ASM",
    "Dealer Name": "Unicon Motors Pvt Ltd-Latur",
    "SCode": "1S3390",
    "State": "Maharashtra",
    "City": "Latur",
    "Contact No.": "7700906442"
  },
  {
    "Organization": "West-1",
    "Manager Name": "Suhas Ramchandra Mane",
    "Manager Level": "RSM",
    "Dealer Name": "Unicon Motors Pvt Ltd-Latur",
    "SCode": "1S3390",
    "State": "Maharashtra",
    "City": "Latur",
    "Contact No.": "8454812225"
  },
  {
    "Organization": "West-1",
    "Manager Name": "Dayasagar Sakhare",
    "Manager Level": "CSM",
    "Dealer Name": "Unicon Motors Pvt Ltd-Latur",
    "SCode": "1S3390",
    "State": "Maharashtra",
    "City": "Latur",
    "Contact No.": "9960392475"
  },
  {
    "Organization": "West-1",
    "Manager Name": "Sunil Gavhane",
    "Manager Level": "MD",
    "Dealer Name": "Unicon Motors Pvt Ltd-Latur",
    "SCode": "1S3390",
    "State": "Maharashtra",
    "City": "Latur",
    "Contact No.": "9607921777"
  },
  {
    "Organization": "West-1",
    "Manager Name": "Yashwant",
    "Manager Level": "EOS Site Incharge",
    "Dealer Name": "Unicon Motors Pvt Ltd-Latur",
    "SCode": "1S3390",
    "State": "Maharashtra",
    "City": "Latur",
    "Contact No.": "9850765856,7843088122"
  },
  {
    "Organization": "North-1",
    "Manager Name": "Vaibhav Katyal",
    "Manager Level": "ASM",
    "Dealer Name": "Unique Motor-Gaggal",
    "SCode": "1S1101",
    "State": "Himachal Pradesh",
    "City": "Gaggal",
    "Contact No.": "9219500351"
  },
  {
    "Organization": "North-1",
    "Manager Name": "Kulbhushan Rajoria",
    "Manager Level": "MD",
    "Dealer Name": "Unique Motor-Gaggal",
    "SCode": "1S1101",
    "State": "Himachal Pradesh",
    "City": "Gaggal",
    "Contact No.": "9816418335"
  },
  {
    "Organization": "North-1",
    "Manager Name": "Lalit Kumar",
    "Manager Level": "CSM",
    "Dealer Name": "Unique Motor-Gaggal",
    "SCode": "1S1101",
    "State": "Himachal Pradesh",
    "City": "Gaggal",
    "Contact No.": "9625070004"
  },
  {
    "Organization": "North-1",
    "Manager Name": "Sumit Chahal / Manish",
    "Manager Level": "WM",
    "Dealer Name": "Unique Motor-Gaggal",
    "SCode": "1S1101",
    "State": "Himachal Pradesh",
    "City": "Gaggal",
    "Contact No.": "9805090364,9805090328"
  },
  {
    "Organization": "North-1",
    "Manager Name": "Adarsh Prasad",
    "Manager Level": "RSM",
    "Dealer Name": "Unique Motor-Gaggal",
    "SCode": "1S1101",
    "State": "Himachal Pradesh",
    "City": "Gaggal",
    "Contact No.": "9717996321"
  },
  {
    "Organization": "North-1",
    "Manager Name": "Rajat Singh / Vipan Kumar",
    "Manager Level": "WM",
    "Dealer Name": "Unique Motor-Mandi",
    "SCode": "1S1137",
    "State": "Himachal Pradesh",
    "City": "Mandi",
    "Contact No.": "9805099542,9805090365"
  },
  {
    "Organization": "North-1",
    "Manager Name": "Rajat Singh",
    "Manager Level": "EOS Site Incharge",
    "Dealer Name": "Unique Motor-Mandi",
    "SCode": "1S1137",
    "State": "Himachal Pradesh",
    "City": "Mandi",
    "Contact No.": "9805099542"
  },
  {
    "Organization": "North-1",
    "Manager Name": "Lalit Kumar",
    "Manager Level": "CSM",
    "Dealer Name": "Unique Motor-Mandi",
    "SCode": "1S1137",
    "State": "Himachal Pradesh",
    "City": "Mandi",
    "Contact No.": "9625070004"
  },
  {
    "Organization": "North-1",
    "Manager Name": "Vaibhav Katyal",
    "Manager Level": "ASM",
    "Dealer Name": "Unique Motor-Mandi",
    "SCode": "1S1137",
    "State": "Himachal Pradesh",
    "City": "Mandi",
    "Contact No.": "9219500351"
  },
  {
    "Organization": "North-1",
    "Manager Name": "Adarsh Prasad",
    "Manager Level": "RSM",
    "Dealer Name": "Unique Motor-Mandi",
    "SCode": "1S1137",
    "State": "Himachal Pradesh",
    "City": "Mandi",
    "Contact No.": "9717996321"
  },
  {
    "Organization": "North-1",
    "Manager Name": "Amit Kumar / Subhash Rajoria",
    "Manager Level": "MD",
    "Dealer Name": "Unique Motor-Mandi",
    "SCode": "1S1137",
    "State": "Himachal Pradesh",
    "City": "Mandi",
    "Contact No.": "9805099741,9805090362"
  },
  {
    "Organization": "West-1",
    "Manager Name": "Arvind Patil",
    "Manager Level": "HD Bus SPOC",
    "Dealer Name": "VE Commercial Vehicle (COCO)-Akurdi",
    "SCode": "1S3364",
    "State": "Maharashtra",
    "City": "Akurdi",
    "Contact No.": "8552856522"
  },
  {
    "Organization": "West-1",
    "Manager Name": "Adil Sheikh",
    "Manager Level": "HD Bus SPOC 2",
    "Dealer Name": "VE Commercial Vehicle (COCO)-Akurdi",
    "SCode": "1S3364",
    "State": "Maharashtra",
    "City": "Akurdi",
    "Contact No.": "9325446342"
  },
  {
    "Organization": "West-1",
    "Manager Name": "Krushna / Manoj",
    "Manager Level": "EOS Site Incharge",
    "Dealer Name": "VE Commercial Vehicle (COCO)-Akurdi",
    "SCode": "1S3364",
    "State": "Maharashtra",
    "City": "Akurdi",
    "Contact No.": "7410014368"
  },
  {
    "Organization": "West-1",
    "Manager Name": "Najeeb K / Swaroop Gartia",
    "Manager Level": "MD",
    "Dealer Name": "VE Commercial Vehicle (COCO)-Akurdi",
    "SCode": "1S3364",
    "State": "Maharashtra",
    "City": "Akurdi",
    "Contact No.": "8956861665,9987554292"
  },
  {
    "Organization": "West-1",
    "Manager Name": "Suhas Ramchandra Mane",
    "Manager Level": "RSM",
    "Dealer Name": "VE Commercial Vehicle (COCO)-Akurdi",
    "SCode": "1S3364",
    "State": "Maharashtra",
    "City": "Akurdi",
    "Contact No.": "8454812225"
  },
  {
    "Organization": "West-1",
    "Manager Name": "Ishwari Matkar/ Adil Sheikh",
    "Manager Level": "CSM",
    "Dealer Name": "VE Commercial Vehicle (COCO)-Akurdi",
    "SCode": "1S3364",
    "State": "Maharashtra",
    "City": "Akurdi",
    "Contact No.": "9960988071,9325446342"
  },
  {
    "Organization": "West-1",
    "Manager Name": "Priyanshu Bhattacharya",
    "Manager Level": "WM",
    "Dealer Name": "VE Commercial Vehicle (COCO)-Akurdi",
    "SCode": "1S3364",
    "State": "Maharashtra",
    "City": "Akurdi",
    "Contact No.": "8600100897"
  },
  {
    "Organization": "West-1",
    "Manager Name": "Mrinal Kunwar",
    "Manager Level": "ASM",
    "Dealer Name": "VE Commercial Vehicle (COCO)-Akurdi",
    "SCode": "1S3364",
    "State": "Maharashtra",
    "City": "Akurdi",
    "Contact No.": "8002023303"
  },
  {
    "Organization": "North-1",
    "Manager Name": "Varundeep Singh",
    "Manager Level": "EOS Site Incharge",
    "Dealer Name": "VE Commercial Vehicle (COCO)-Amritsar",
    "SCode": "1S1253",
    "State": "Punjab",
    "City": "Amritsar",
    "Contact No.": "8968662476"
  },
  {
    "Organization": "North-1",
    "Manager Name": "Shazib Hussain / Jaideep Singh",
    "Manager Level": "MD",
    "Dealer Name": "VE Commercial Vehicle (COCO)-Amritsar",
    "SCode": "1S1253",
    "State": "Punjab",
    "City": "Amritsar",
    "Contact No.": "9760130206,9971626005"
  },
  {
    "Organization": "North-1",
    "Manager Name": "Vaibhav Katyal",
    "Manager Level": "ASM",
    "Dealer Name": "VE Commercial Vehicle (COCO)-Amritsar",
    "SCode": "1S1253",
    "State": "Punjab",
    "City": "Amritsar",
    "Contact No.": "9219500351"
  },
  {
    "Organization": "North-1",
    "Manager Name": "Tribhuwan Singh Rathore (EVS) / Mamoon Khan",
    "Manager Level": "CSM",
    "Dealer Name": "VE Commercial Vehicle (COCO)-Amritsar",
    "SCode": "1S1253",
    "State": "Punjab",
    "City": "Amritsar",
    "Contact No.": "8126149314,9541481374"
  },
  {
    "Organization": "North-1",
    "Manager Name": "Mamoon Khan",
    "Manager Level": "CSM",
    "Dealer Name": "VE Commercial Vehicle (COCO)-Amritsar",
    "SCode": "1S1253",
    "State": "Punjab",
    "City": "Amritsar",
    "Contact No.": "9541481374"
  },
  {
    "Organization": "North-1",
    "Manager Name": "Rajneesh Rishi",
    "Manager Level": "WM",
    "Dealer Name": "VE Commercial Vehicle (COCO)-Amritsar",
    "SCode": "1S1253",
    "State": "Punjab",
    "City": "Amritsar",
    "Contact No.": "9041285326"
  },
  {
    "Organization": "North-1",
    "Manager Name": "Adarsh Prasad",
    "Manager Level": "RSM",
    "Dealer Name": "VE Commercial Vehicle (COCO)-Amritsar",
    "SCode": "1S1253",
    "State": "Punjab",
    "City": "Amritsar",
    "Contact No.": "9717996321"
  },
  {
    "Organization": "North-2",
    "Manager Name": "Ramakant Singh",
    "Manager Level": "MD",
    "Dealer Name": "VE Commercial Vehicle (COCO)-Anpara",
    "SCode": "1S7067",
    "State": "Uttar Pradesh",
    "City": "Mirzapur",
    "Contact No.": "9424945434"
  },
  {
    "Organization": "North-2",
    "Manager Name": "Shashank Saran (D) / Saket Singh (N)",
    "Manager Level": "CSM",
    "Dealer Name": "VE Commercial Vehicle (COCO)-Anpara",
    "SCode": "1S7067",
    "State": "Uttar Pradesh",
    "City": "Mirzapur",
    "Contact No.": "9554900557,8709859215"
  },
  {
    "Organization": "North-2",
    "Manager Name": "Krishnendu Saha",
    "Manager Level": "RSM",
    "Dealer Name": "VE Commercial Vehicle (COCO)-Anpara",
    "SCode": "1S7067",
    "State": "Uttar Pradesh",
    "City": "Mirzapur",
    "Contact No.": "7980433425"
  },
  {
    "Organization": "North-2",
    "Manager Name": "Nitin Gupta",
    "Manager Level": "ASM",
    "Dealer Name": "VE Commercial Vehicle (COCO)-Anpara",
    "SCode": "1S7067",
    "State": "Uttar Pradesh",
    "City": "Mirzapur",
    "Contact No.": "7080811550"
  },
  {
    "Organization": "North-2",
    "Manager Name": "Pradip Kushwaha(D) / Mujahid Ali (N)",
    "Manager Level": "EOS Site Incharge",
    "Dealer Name": "VE Commercial Vehicle (COCO)-Anpara",
    "SCode": "1S7067",
    "State": "Uttar Pradesh",
    "City": "Mirzapur",
    "Contact No.": "7247082890,9151006453"
  },
  {
    "Organization": "North-2",
    "Manager Name": "Abhishek Garg",
    "Manager Level": "WM",
    "Dealer Name": "VE Commercial Vehicle (COCO)-Anpara",
    "SCode": "1S7067",
    "State": "Uttar Pradesh",
    "City": "Mirzapur",
    "Contact No.": "9151006451"
  },
  {
    "Organization": "East-1",
    "Manager Name": "Abhijit Kumar",
    "Manager Level": "MD",
    "Dealer Name": "VE Commercial Vehicle (COCO)-Asansol",
    "SCode": "1S2189",
    "State": "West Bengal",
    "City": "Asansol",
    "Contact No.": "9874964666"
  },
  {
    "Organization": "East-1",
    "Manager Name": "Kaushik Adhikari",
    "Manager Level": "EOS Site Incharge",
    "Dealer Name": "VE Commercial Vehicle (COCO)-Asansol",
    "SCode": "1S2189",
    "State": "West Bengal",
    "City": "Asansol",
    "Contact No.": "8159858559"
  },
  {
    "Organization": "East-1",
    "Manager Name": "Gulam Sarwar Ansari",
    "Manager Level": "WM",
    "Dealer Name": "VE Commercial Vehicle (COCO)-Asansol",
    "SCode": "1S2189",
    "State": "West Bengal",
    "City": "Asansol",
    "Contact No.": "9709125903"
  },
  {
    "Organization": "East-1",
    "Manager Name": "Abhirup Ghosh",
    "Manager Level": "ASM",
    "Dealer Name": "VE Commercial Vehicle (COCO)-Asansol",
    "SCode": "1S2189",
    "State": "West Bengal",
    "City": "Asansol",
    "Contact No.": "9073378080"
  },
  {
    "Organization": "East-1",
    "Manager Name": "Avishek Paul",
    "Manager Level": "CSM",
    "Dealer Name": "VE Commercial Vehicle (COCO)-Asansol",
    "SCode": "1S2189",
    "State": "West Bengal",
    "City": "Asansol",
    "Contact No.": "8252059007"
  },
  {
    "Organization": "East-1",
    "Manager Name": "Yogeshwar Singh",
    "Manager Level": "RSM",
    "Dealer Name": "VE Commercial Vehicle (COCO)-Asansol",
    "SCode": "1S2189",
    "State": "West Bengal",
    "City": "Asansol",
    "Contact No.": "9717966997"
  },
  {
    "Organization": "South-2",
    "Manager Name": "Nagesh",
    "Manager Level": "EOS Site Incharge",
    "Dealer Name": "VE Commercial Vehicle (COCO)-Attibele",
    "SCode": "1S6181",
    "State": "Karnataka",
    "City": "Bangalore",
    "Contact No.": "9980552387"
  },
  {
    "Organization": "South-2",
    "Manager Name": "N Narayanan",
    "Manager Level": "RSM",
    "Dealer Name": "VE Commercial Vehicle (COCO)-Attibele",
    "SCode": "1S6181",
    "State": "Karnataka",
    "City": "Bangalore",
    "Contact No.": "8123036700"
  },
  {
    "Organization": "South-2",
    "Manager Name": "S Balaji",
    "Manager Level": "ASM",
    "Dealer Name": "VE Commercial Vehicle (COCO)-Attibele",
    "SCode": "1S6181",
    "State": "Karnataka",
    "City": "Bangalore",
    "Contact No.": "9840833723"
  },
  {
    "Organization": "South-2",
    "Manager Name": "Praveen Kumar B (D) / Jeevan Kumar (N)",
    "Manager Level": "CSM",
    "Dealer Name": "VE Commercial Vehicle (COCO)-Attibele",
    "SCode": "1S6181",
    "State": "Karnataka",
    "City": "Bangalore",
    "Contact No.": "8838864138,7892822611"
  },
  {
    "Organization": "South-2",
    "Manager Name": "Mano",
    "Manager Level": "WM",
    "Dealer Name": "VE Commercial Vehicle (COCO)-Attibele",
    "SCode": "1S6181",
    "State": "Karnataka",
    "City": "Bangalore",
    "Contact No.": "7406559444"
  },
  {
    "Organization": "South-2",
    "Manager Name": "Manikandan",
    "Manager Level": "MD",
    "Dealer Name": "VE Commercial Vehicle (COCO)-Attibele",
    "SCode": "1S6181",
    "State": "Karnataka",
    "City": "Bangalore",
    "Contact No.": "9500045999"
  },
  {
    "Organization": "East-2",
    "Manager Name": "Subhodip Roy",
    "Manager Level": "CSM",
    "Dealer Name": "VE Commercial Vehicle (COCO)-Balasore",
    "SCode": "1S2121",
    "State": "Odisha",
    "City": "Balasore",
    "Contact No.": "9007883391"
  },
  {
    "Organization": "East-2",
    "Manager Name": "Niket Kumar",
    "Manager Level": "RSM",
    "Dealer Name": "VE Commercial Vehicle (COCO)-Balasore",
    "SCode": "1S2121",
    "State": "Odisha",
    "City": "Balasore",
    "Contact No.": "8427733112"
  },
  {
    "Organization": "East-2",
    "Manager Name": "Sanjit Sarangi",
    "Manager Level": "MD",
    "Dealer Name": "VE Commercial Vehicle (COCO)-Balasore",
    "SCode": "1S2121",
    "State": "Odisha",
    "City": "Balasore",
    "Contact No.": "8334964567"
  },
  {
    "Organization": "East-2",
    "Manager Name": "Rakesh Ranjan Das / Himansu Sekhar Parida",
    "Manager Level": "EOS Site Incharge",
    "Dealer Name": "VE Commercial Vehicle (COCO)-Balasore",
    "SCode": "1S2121",
    "State": "Odisha",
    "City": "Balasore",
    "Contact No.": "8596023216,9124611198"
  },
  {
    "Organization": "East-2",
    "Manager Name": "Bidesh Nayak",
    "Manager Level": "WM",
    "Dealer Name": "VE Commercial Vehicle (COCO)-Balasore",
    "SCode": "1S2121",
    "State": "Odisha",
    "City": "Balasore",
    "Contact No.": "7008497694"
  },
  {
    "Organization": "East-2",
    "Manager Name": "Sanjoy Nayek",
    "Manager Level": "ASM",
    "Dealer Name": "VE Commercial Vehicle (COCO)-Balasore",
    "SCode": "1S2121",
    "State": "Odisha",
    "City": "Balasore",
    "Contact No.": "8001165218"
  },
  {
    "Organization": "East-2",
    "Manager Name": "Bubudhendra Pratap / Bibhu Mishra",
    "Manager Level": "WM",
    "Dealer Name": "VE Commercial Vehicle (COCO)-Balugaon",
    "SCode": "1S2206",
    "State": "Odisha",
    "City": "Bhubaneswar",
    "Contact No.": "8249113728,7077704639"
  },
  {
    "Organization": "East-2",
    "Manager Name": "Deepankar / Paramanik",
    "Manager Level": "EOS Site Incharge",
    "Dealer Name": "VE Commercial Vehicle (COCO)-Balugaon",
    "SCode": "1S2206",
    "State": "Odisha",
    "City": "Bhubaneswar",
    "Contact No.": "8114375039,8114394977"
  },
  {
    "Organization": "East-2",
    "Manager Name": "Niket Kumar",
    "Manager Level": "RSM",
    "Dealer Name": "VE Commercial Vehicle (COCO)-Balugaon",
    "SCode": "1S2206",
    "State": "Odisha",
    "City": "Bhubaneswar",
    "Contact No.": "8427733112"
  },
  {
    "Organization": "East-2",
    "Manager Name": "Arpan Biswal",
    "Manager Level": "CSM",
    "Dealer Name": "VE Commercial Vehicle (COCO)-Balugaon",
    "SCode": "1S2206",
    "State": "Odisha",
    "City": "Bhubaneswar",
    "Contact No.": "7008536363"
  },
  {
    "Organization": "East-2",
    "Manager Name": "Sanjoy Nayek",
    "Manager Level": "ASM",
    "Dealer Name": "VE Commercial Vehicle (COCO)-Balugaon",
    "SCode": "1S2206",
    "State": "Odisha",
    "City": "Bhubaneswar",
    "Contact No.": "8001165218"
  },
  {
    "Organization": "East-2",
    "Manager Name": "Tapash Pradhan",
    "Manager Level": "MD",
    "Dealer Name": "VE Commercial Vehicle (COCO)-Balugaon",
    "SCode": "1S2206",
    "State": "Odisha",
    "City": "Bhubaneswar",
    "Contact No.": "9937291938"
  },
  {
    "Organization": "East-2",
    "Manager Name": "Tapas Pradhan",
    "Manager Level": "MD",
    "Dealer Name": "VE Commercial Vehicle (COCO)-Banei",
    "SCode": "1S2210",
    "State": "Odisha",
    "City": "Debagarh",
    "Contact No.": "9937291938"
  },
  {
    "Organization": "East-2",
    "Manager Name": "Ashish Khatei",
    "Manager Level": "WM",
    "Dealer Name": "VE Commercial Vehicle (COCO)-Banei",
    "SCode": "1S2210",
    "State": "Odisha",
    "City": "Debagarh",
    "Contact No.": "9040118752"
  },
  {
    "Organization": "East-2",
    "Manager Name": "Niket Kumar",
    "Manager Level": "RSM",
    "Dealer Name": "VE Commercial Vehicle (COCO)-Banei",
    "SCode": "1S2210",
    "State": "Odisha",
    "City": "Debagarh",
    "Contact No.": "8427733112"
  },
  {
    "Organization": "East-2",
    "Manager Name": "Sujit Behera",
    "Manager Level": "EOS Site Incharge",
    "Dealer Name": "VE Commercial Vehicle (COCO)-Banei",
    "SCode": "1S2210",
    "State": "Odisha",
    "City": "Debagarh",
    "Contact No.": "9337322178"
  },
  {
    "Organization": "East-2",
    "Manager Name": "Sanjoy Nayek",
    "Manager Level": "ASM",
    "Dealer Name": "VE Commercial Vehicle (COCO)-Banei",
    "SCode": "1S2210",
    "State": "Odisha",
    "City": "Debagarh",
    "Contact No.": "8001165218"
  },
  {
    "Organization": "East-2",
    "Manager Name": "Sailesh Moharana",
    "Manager Level": "CSM",
    "Dealer Name": "VE Commercial Vehicle (COCO)-Banei",
    "SCode": "1S2210",
    "State": "Odisha",
    "City": "Debagarh",
    "Contact No.": "9337951215"
  },
  {
    "Organization": "East-1",
    "Manager Name": "Jayanta Sutradhar",
    "Manager Level": "WM",
    "Dealer Name": "VE Commercial Vehicle (COCO)-Bankura",
    "SCode": "1S2299",
    "State": "West Bengal",
    "City": "Bankura",
    "Contact No.": "8944069676"
  },
  {
    "Organization": "East-1",
    "Manager Name": "Yogeshwar Singh",
    "Manager Level": "RSM",
    "Dealer Name": "VE Commercial Vehicle (COCO)-Bankura",
    "SCode": "1S2299",
    "State": "West Bengal",
    "City": "Bankura",
    "Contact No.": "9717966997"
  },
  {
    "Organization": "East-1",
    "Manager Name": "Avishek Paul",
    "Manager Level": "CSM",
    "Dealer Name": "VE Commercial Vehicle (COCO)-Bankura",
    "SCode": "1S2299",
    "State": "West Bengal",
    "City": "Bankura",
    "Contact No.": "8252059007"
  },
  {
    "Organization": "East-1",
    "Manager Name": "Abhijit Kumar",
    "Manager Level": "MD",
    "Dealer Name": "VE Commercial Vehicle (COCO)-Bankura",
    "SCode": "1S2299",
    "State": "West Bengal",
    "City": "Bankura",
    "Contact No.": "9874964666"
  },
  {
    "Organization": "East-1",
    "Manager Name": "Abhirup Ghosh",
    "Manager Level": "ASM",
    "Dealer Name": "VE Commercial Vehicle (COCO)-Bankura",
    "SCode": "1S2299",
    "State": "West Bengal",
    "City": "Bankura",
    "Contact No.": "9073378080"
  },
  {
    "Organization": "East-1",
    "Manager Name": "Mumtajul Haque",
    "Manager Level": "EOS Site Incharge",
    "Dealer Name": "VE Commercial Vehicle (COCO)-Bankura",
    "SCode": "1S2299",
    "State": "West Bengal",
    "City": "Bankura",
    "Contact No.": "9333030244"
  },
  {
    "Organization": "West-1",
    "Manager Name": "Adil Sheikh",
    "Manager Level": "HD Bus SPOC 2",
    "Dealer Name": "VE Commercial Vehicle (COCO)-Baramati",
    "SCode": "1S3421",
    "State": "Maharashtra",
    "City": "Pune",
    "Contact No.": "9325446342"
  },
  {
    "Organization": "West-1",
    "Manager Name": "Najeeb K / Swaroop Gartia",
    "Manager Level": "MD",
    "Dealer Name": "VE Commercial Vehicle (COCO)-Baramati",
    "SCode": "1S3421",
    "State": "Maharashtra",
    "City": "Pune",
    "Contact No.": "8956861665,9987554292"
  },
  {
    "Organization": "West-1",
    "Manager Name": "Suhas Ramchandra Mane",
    "Manager Level": "RSM",
    "Dealer Name": "VE Commercial Vehicle (COCO)-Baramati",
    "SCode": "1S3421",
    "State": "Maharashtra",
    "City": "Pune",
    "Contact No.": "8454812225"
  },
  {
    "Organization": "West-1",
    "Manager Name": "Rushikesh Mane / Sunil Bhise",
    "Manager Level": "EOS Site Incharge",
    "Dealer Name": "VE Commercial Vehicle (COCO)-Baramati",
    "SCode": "1S3421",
    "State": "Maharashtra",
    "City": "Pune",
    "Contact No.": "8956801550,8956801552"
  },
  {
    "Organization": "West-1",
    "Manager Name": "Arvind Patil",
    "Manager Level": "HD Bus SPOC",
    "Dealer Name": "VE Commercial Vehicle (COCO)-Baramati",
    "SCode": "1S3421",
    "State": "Maharashtra",
    "City": "Pune",
    "Contact No.": "8552856522"
  },
  {
    "Organization": "West-1",
    "Manager Name": "Vivek Maske / Adil Sheikh",
    "Manager Level": "CSM",
    "Dealer Name": "VE Commercial Vehicle (COCO)-Baramati",
    "SCode": "1S3421",
    "State": "Maharashtra",
    "City": "Pune",
    "Contact No.": "9021549678,9325446342"
  },
  {
    "Organization": "West-1",
    "Manager Name": "Harshal",
    "Manager Level": "WM",
    "Dealer Name": "VE Commercial Vehicle (COCO)-Baramati",
    "SCode": "1S3421",
    "State": "Maharashtra",
    "City": "Pune",
    "Contact No.": "8956801551"
  },
  {
    "Organization": "West-1",
    "Manager Name": "Mrinal Kunwar",
    "Manager Level": "ASM",
    "Dealer Name": "VE Commercial Vehicle (COCO)-Baramati",
    "SCode": "1S3421",
    "State": "Maharashtra",
    "City": "Pune",
    "Contact No.": "8002023303"
  },
  {
    "Organization": "East-1",
    "Manager Name": "Abhirup Ghosh",
    "Manager Level": "ASM",
    "Dealer Name": "VE Commercial Vehicle (COCO)-Bardhaman",
    "SCode": "1S2226",
    "State": "West Bengal",
    "City": "Asansol",
    "Contact No.": "9073378080"
  },
  {
    "Organization": "East-1",
    "Manager Name": "Jayanta Sutradhar",
    "Manager Level": "WM",
    "Dealer Name": "VE Commercial Vehicle (COCO)-Bardhaman",
    "SCode": "1S2226",
    "State": "West Bengal",
    "City": "Asansol",
    "Contact No.": "8944069676"
  },
  {
    "Organization": "East-1",
    "Manager Name": "Yogeshwar Singh",
    "Manager Level": "RSM",
    "Dealer Name": "VE Commercial Vehicle (COCO)-Bardhaman",
    "SCode": "1S2226",
    "State": "West Bengal",
    "City": "Asansol",
    "Contact No.": "9717966997"
  },
  {
    "Organization": "East-1",
    "Manager Name": "Abhijit Kumar",
    "Manager Level": "MD",
    "Dealer Name": "VE Commercial Vehicle (COCO)-Bardhaman",
    "SCode": "1S2226",
    "State": "West Bengal",
    "City": "Asansol",
    "Contact No.": "9874964666"
  },
  {
    "Organization": "East-1",
    "Manager Name": "Avishek Paul",
    "Manager Level": "CSM",
    "Dealer Name": "VE Commercial Vehicle (COCO)-Bardhaman",
    "SCode": "1S2226",
    "State": "West Bengal",
    "City": "Asansol",
    "Contact No.": "8252059007"
  },
  {
    "Organization": "East-1",
    "Manager Name": "Devjit Sarkar",
    "Manager Level": "EOS Site Incharge",
    "Dealer Name": "VE Commercial Vehicle (COCO)-Bardhaman",
    "SCode": "1S2226",
    "State": "West Bengal",
    "City": "Asansol",
    "Contact No.": "9046005912"
  },
  {
    "Organization": "North-2",
    "Manager Name": "Gajraj Jat",
    "Manager Level": "MD",
    "Dealer Name": "VE Commercial Vehicle (COCO)-Barmer",
    "SCode": "1S7032",
    "State": "Rajasthan",
    "City": "Barmer",
    "Contact No.": "6350259714"
  },
  {
    "Organization": "North-2",
    "Manager Name": "Rajkumar Vaishnav",
    "Manager Level": "ASM",
    "Dealer Name": "VE Commercial Vehicle (COCO)-Barmer",
    "SCode": "1S7032",
    "State": "Rajasthan",
    "City": "Barmer",
    "Contact No.": "9636756000"
  },
  {
    "Organization": "North-2",
    "Manager Name": "Prem Singh",
    "Manager Level": "EOS Site Incharge",
    "Dealer Name": "VE Commercial Vehicle (COCO)-Barmer",
    "SCode": "1S7032",
    "State": "Rajasthan",
    "City": "Barmer",
    "Contact No.": "6375477665"
  },
  {
    "Organization": "North-2",
    "Manager Name": "Shivam Bhardwaj / Dhananjay Singh",
    "Manager Level": "CSM",
    "Dealer Name": "VE Commercial Vehicle (COCO)-Barmer",
    "SCode": "1S7032",
    "State": "Rajasthan",
    "City": "Barmer",
    "Contact No.": "7878175706,7737329353"
  },
  {
    "Organization": "North-2",
    "Manager Name": "Krishnendu Saha",
    "Manager Level": "RSM",
    "Dealer Name": "VE Commercial Vehicle (COCO)-Barmer",
    "SCode": "1S7032",
    "State": "Rajasthan",
    "City": "Barmer",
    "Contact No.": "7980433425"
  },
  {
    "Organization": "North-2",
    "Manager Name": "Gaurav Bhadu",
    "Manager Level": "WM",
    "Dealer Name": "VE Commercial Vehicle (COCO)-Barmer",
    "SCode": "1S7032",
    "State": "Rajasthan",
    "City": "Barmer",
    "Contact No.": "8955260647"
  },
  {
    "Organization": "East-1",
    "Manager Name": "Krishna Kanhaiya / Chand Alam",
    "Manager Level": "WM",
    "Dealer Name": "VE Commercial Vehicle (COCO)-Begusarai",
    "SCode": "1S2242",
    "State": "Bihar",
    "City": "Begusarai",
    "Contact No.": "7991137259,8015710259"
  },
  {
    "Organization": "East-1",
    "Manager Name": "Abhijit Kumar",
    "Manager Level": "MD",
    "Dealer Name": "VE Commercial Vehicle (COCO)-Begusarai",
    "SCode": "1S2242",
    "State": "Bihar",
    "City": "Begusarai",
    "Contact No.": "9874964666"
  },
  {
    "Organization": "East-1",
    "Manager Name": "Abhishek Kumar",
    "Manager Level": "CSM",
    "Dealer Name": "VE Commercial Vehicle (COCO)-Begusarai",
    "SCode": "1S2242",
    "State": "Bihar",
    "City": "Begusarai",
    "Contact No.": "9102558748"
  },
  {
    "Organization": "East-1",
    "Manager Name": "Krishna Bhushan",
    "Manager Level": "ASM",
    "Dealer Name": "VE Commercial Vehicle (COCO)-Begusarai",
    "SCode": "1S2242",
    "State": "Bihar",
    "City": "Begusarai",
    "Contact No.": "6202531709"
  },
  {
    "Organization": "East-1",
    "Manager Name": "Yogeshwar Singh",
    "Manager Level": "RSM",
    "Dealer Name": "VE Commercial Vehicle (COCO)-Begusarai",
    "SCode": "1S2242",
    "State": "Bihar",
    "City": "Begusarai",
    "Contact No.": "9717966997"
  },
  {
    "Organization": "East-1",
    "Manager Name": "Sanjeev Kumar",
    "Manager Level": "EOS Site Incharge",
    "Dealer Name": "VE Commercial Vehicle (COCO)-Begusarai",
    "SCode": "1S2242",
    "State": "Bihar",
    "City": "Begusarai",
    "Contact No.": "9471235936"
  },
  {
    "Organization": "East-2",
    "Manager Name": "Niket Kumar",
    "Manager Level": "RSM",
    "Dealer Name": "VE Commercial Vehicle (COCO)-Bhadrak",
    "SCode": "1S2209",
    "State": "Odisha",
    "City": "Bhadrak",
    "Contact No.": "8427733112"
  },
  {
    "Organization": "East-2",
    "Manager Name": "Soubhagya Kumar Nayak",
    "Manager Level": "EOS Site Incharge",
    "Dealer Name": "VE Commercial Vehicle (COCO)-Bhadrak",
    "SCode": "1S2209",
    "State": "Odisha",
    "City": "Bhadrak",
    "Contact No.": "9777900734"
  },
  {
    "Organization": "East-2",
    "Manager Name": "Subhodip Roy",
    "Manager Level": "CSM",
    "Dealer Name": "VE Commercial Vehicle (COCO)-Bhadrak",
    "SCode": "1S2209",
    "State": "Odisha",
    "City": "Bhadrak",
    "Contact No.": "9007883391"
  },
  {
    "Organization": "East-2",
    "Manager Name": "Sanjoy Nayek",
    "Manager Level": "ASM",
    "Dealer Name": "VE Commercial Vehicle (COCO)-Bhadrak",
    "SCode": "1S2209",
    "State": "Odisha",
    "City": "Bhadrak",
    "Contact No.": "8001165218"
  },
  {
    "Organization": "East-2",
    "Manager Name": "Tapas Pradhan",
    "Manager Level": "MD",
    "Dealer Name": "VE Commercial Vehicle (COCO)-Bhadrak",
    "SCode": "1S2209",
    "State": "Odisha",
    "City": "Bhadrak",
    "Contact No.": "9937291938"
  },
  {
    "Organization": "East-2",
    "Manager Name": "Satyabrata Mishra",
    "Manager Level": "WM",
    "Dealer Name": "VE Commercial Vehicle (COCO)-Bhadrak",
    "SCode": "1S2209",
    "State": "Odisha",
    "City": "Bhadrak",
    "Contact No.": "7698008810"
  },
  {
    "Organization": "West-2",
    "Manager Name": "Divyesh Shah",
    "Manager Level": "ASM",
    "Dealer Name": "VE Commercial Vehicle (COCO)-Bhilad",
    "SCode": "1S3441",
    "State": "Gujarat",
    "City": "Vapi",
    "Contact No.": "7600287682"
  },
  {
    "Organization": "West-2",
    "Manager Name": "Sandeep Vishwakarma / Ganesh Patil",
    "Manager Level": "EOS Site Incharge",
    "Dealer Name": "VE Commercial Vehicle (COCO)-Bhilad",
    "SCode": "1S3441",
    "State": "Gujarat",
    "City": "Vapi",
    "Contact No.": "9227898158,9227723995"
  },
  {
    "Organization": "West-2",
    "Manager Name": "Prassanna Vishwakrma",
    "Manager Level": "CSM",
    "Dealer Name": "VE Commercial Vehicle (COCO)-Bhilad",
    "SCode": "1S3441",
    "State": "Gujarat",
    "City": "Vapi",
    "Contact No.": "8871493195"
  },
  {
    "Organization": "West-2",
    "Manager Name": "Shekhar Naik",
    "Manager Level": "WM",
    "Dealer Name": "VE Commercial Vehicle (COCO)-Bhilad",
    "SCode": "1S3441",
    "State": "Gujarat",
    "City": "Vapi",
    "Contact No.": "9875149906"
  },
  {
    "Organization": "West-2",
    "Manager Name": "Veerendra Jha / Sunoj Nair",
    "Manager Level": "MD",
    "Dealer Name": "VE Commercial Vehicle (COCO)-Bhilad",
    "SCode": "1S3441",
    "State": "Gujarat",
    "City": "Vapi",
    "Contact No.": "9973076135,9825329298"
  },
  {
    "Organization": "West-2",
    "Manager Name": "Sudhir Kumar",
    "Manager Level": "RSM",
    "Dealer Name": "VE Commercial Vehicle (COCO)-Bhilad",
    "SCode": "1S3441",
    "State": "Gujarat",
    "City": "Vapi",
    "Contact No.": "9752542733"
  },
  {
    "Organization": "West-1",
    "Manager Name": "Suhas Ramchandra Mane",
    "Manager Level": "RSM",
    "Dealer Name": "VE Commercial Vehicle (COCO)-Bhiwandi",
    "SCode": "1S3336",
    "State": "Maharashtra",
    "City": "Bhiwandi",
    "Contact No.": "8454812225"
  },
  {
    "Organization": "West-1",
    "Manager Name": "Irshad khan / Akshay Belose",
    "Manager Level": "EOS Site Incharge",
    "Dealer Name": "VE Commercial Vehicle (COCO)-Bhiwandi",
    "SCode": "1S3336",
    "State": "Maharashtra",
    "City": "Bhiwandi",
    "Contact No.": "7040807800,8898961262"
  },
  {
    "Organization": "West-1",
    "Manager Name": "Farhan / Chandrashekar Hegde",
    "Manager Level": "WM",
    "Dealer Name": "VE Commercial Vehicle (COCO)-Bhiwandi",
    "SCode": "1S3336",
    "State": "Maharashtra",
    "City": "Bhiwandi",
    "Contact No.": "6388446554,8169187169"
  },
  {
    "Organization": "West-1",
    "Manager Name": "Aditya Singh",
    "Manager Level": "CSM",
    "Dealer Name": "VE Commercial Vehicle (COCO)-Bhiwandi",
    "SCode": "1S3336",
    "State": "Maharashtra",
    "City": "Bhiwandi",
    "Contact No.": "8591537682"
  },
  {
    "Organization": "West-1",
    "Manager Name": "Kshitij Bankhele (EVS) / Aditya Singh",
    "Manager Level": "CSM",
    "Dealer Name": "VE Commercial Vehicle (COCO)-Bhiwandi",
    "SCode": "1S3336",
    "State": "Maharashtra",
    "City": "Bhiwandi",
    "Contact No.": "9833405966,8591537682"
  },
  {
    "Organization": "West-1",
    "Manager Name": "Sahil Bisht",
    "Manager Level": "ASM",
    "Dealer Name": "VE Commercial Vehicle (COCO)-Bhiwandi",
    "SCode": "1S3336",
    "State": "Maharashtra",
    "City": "Bhiwandi",
    "Contact No.": "7304491771"
  },
  {
    "Organization": "West-1",
    "Manager Name": "Samuel J Jathanna",
    "Manager Level": "MD",
    "Dealer Name": "VE Commercial Vehicle (COCO)-Bhiwandi",
    "SCode": "1S3336",
    "State": "Maharashtra",
    "City": "Bhiwandi",
    "Contact No.": "7506337497"
  },
  {
    "Organization": "East-2",
    "Manager Name": "Niket Kumar",
    "Manager Level": "RSM",
    "Dealer Name": "VE Commercial Vehicle (COCO)-Bhubaneswar",
    "SCode": "1S2131",
    "State": "Odisha",
    "City": "Bhubaneswar",
    "Contact No.": "8427733112"
  },
  {
    "Organization": "East-2",
    "Manager Name": "Subhodip Roy",
    "Manager Level": "CSM",
    "Dealer Name": "VE Commercial Vehicle (COCO)-Bhubaneswar",
    "SCode": "1S2131",
    "State": "Odisha",
    "City": "Bhubaneswar",
    "Contact No.": "9007883391"
  },
  {
    "Organization": "East-2",
    "Manager Name": "Tapash Pradhan / Sanjit Sarangi",
    "Manager Level": "MD",
    "Dealer Name": "VE Commercial Vehicle (COCO)-Bhubaneswar",
    "SCode": "1S2131",
    "State": "Odisha",
    "City": "Bhubaneswar",
    "Contact No.": "9937291938,8334964567"
  },
  {
    "Organization": "East-2",
    "Manager Name": "Bubudhendra Pratap / Bibhu Prasad Mishra",
    "Manager Level": "WM",
    "Dealer Name": "VE Commercial Vehicle (COCO)-Bhubaneswar",
    "SCode": "1S2131",
    "State": "Odisha",
    "City": "Bhubaneswar",
    "Contact No.": "8249113728,7077704639"
  },
  {
    "Organization": "East-2",
    "Manager Name": "Subhodip Roy / Rishav Das (EVS)",
    "Manager Level": "CSM",
    "Dealer Name": "VE Commercial Vehicle (COCO)-Bhubaneswar",
    "SCode": "1S2131",
    "State": "Odisha",
    "City": "Bhubaneswar",
    "Contact No.": "9007883391,7439531201"
  },
  {
    "Organization": "East-2",
    "Manager Name": "Deepankar Paramanik",
    "Manager Level": "EOS Site Incharge",
    "Dealer Name": "VE Commercial Vehicle (COCO)-Bhubaneswar",
    "SCode": "1S2131",
    "State": "Odisha",
    "City": "Bhubaneswar",
    "Contact No.": "7328812023"
  },
  {
    "Organization": "East-2",
    "Manager Name": "Sanjoy Nayek",
    "Manager Level": "ASM",
    "Dealer Name": "VE Commercial Vehicle (COCO)-Bhubaneswar",
    "SCode": "1S2131",
    "State": "Odisha",
    "City": "Bhubaneswar",
    "Contact No.": "8001165218"
  },
  {
    "Organization": "West-2",
    "Manager Name": "Akram",
    "Manager Level": "EOS Site Incharge",
    "Dealer Name": "VE Commercial Vehicle (COCO)-Bhuj",
    "SCode": "1S3334",
    "State": "Gujarat",
    "City": "Bhuj",
    "Contact No.": "7486974487"
  },
  {
    "Organization": "West-2",
    "Manager Name": "Ishwar Singh Bisht",
    "Manager Level": "CSM",
    "Dealer Name": "VE Commercial Vehicle (COCO)-Bhuj",
    "SCode": "1S3334",
    "State": "Gujarat",
    "City": "Bhuj",
    "Contact No.": "6398989252"
  },
  {
    "Organization": "West-2",
    "Manager Name": "Sudhir Kumar",
    "Manager Level": "RSM",
    "Dealer Name": "VE Commercial Vehicle (COCO)-Bhuj",
    "SCode": "1S3334",
    "State": "Gujarat",
    "City": "Bhuj",
    "Contact No.": "9752542733"
  },
  {
    "Organization": "West-2",
    "Manager Name": "Mandar Marathe",
    "Manager Level": "WM",
    "Dealer Name": "VE Commercial Vehicle (COCO)-Bhuj",
    "SCode": "1S3334",
    "State": "Gujarat",
    "City": "Bhuj",
    "Contact No.": "9967533589"
  },
  {
    "Organization": "West-2",
    "Manager Name": "Vipul Barot",
    "Manager Level": "ASM",
    "Dealer Name": "VE Commercial Vehicle (COCO)-Bhuj",
    "SCode": "1S3334",
    "State": "Gujarat",
    "City": "Bhuj",
    "Contact No.": "9638341568"
  },
  {
    "Organization": "West-2",
    "Manager Name": "Dinesh Sali / laxman Pachpande",
    "Manager Level": "MD",
    "Dealer Name": "VE Commercial Vehicle (COCO)-Bhuj",
    "SCode": "1S3334",
    "State": "Gujarat",
    "City": "Bhuj",
    "Contact No.": "9724312411,9920281839"
  },
  {
    "Organization": "East-2",
    "Manager Name": "Sanjoy Nayek",
    "Manager Level": "ASM",
    "Dealer Name": "VE Commercial Vehicle (COCO)-Bombay Chowk",
    "SCode": "1S2208",
    "State": "Odisha",
    "City": "Baripada town",
    "Contact No.": "8001165218"
  },
  {
    "Organization": "East-2",
    "Manager Name": "Sanjit Sarangi",
    "Manager Level": "MD",
    "Dealer Name": "VE Commercial Vehicle (COCO)-Bombay Chowk",
    "SCode": "1S2208",
    "State": "Odisha",
    "City": "Baripada town",
    "Contact No.": "8334964567"
  },
  {
    "Organization": "East-2",
    "Manager Name": "Kiran Kumar Pal / Ashik Kumar Pradhan",
    "Manager Level": "EOS Site Incharge",
    "Dealer Name": "VE Commercial Vehicle (COCO)-Bombay Chowk",
    "SCode": "1S2208",
    "State": "Odisha",
    "City": "Baripada town",
    "Contact No.": "9090451929,9777108638"
  },
  {
    "Organization": "East-2",
    "Manager Name": "Subhodip Roy",
    "Manager Level": "CSM",
    "Dealer Name": "VE Commercial Vehicle (COCO)-Bombay Chowk",
    "SCode": "1S2208",
    "State": "Odisha",
    "City": "Baripada town",
    "Contact No.": "9007883391"
  },
  {
    "Organization": "East-2",
    "Manager Name": "Bidesh Nayak",
    "Manager Level": "WM",
    "Dealer Name": "VE Commercial Vehicle (COCO)-Bombay Chowk",
    "SCode": "1S2208",
    "State": "Odisha",
    "City": "Baripada town",
    "Contact No.": "7008497694"
  },
  {
    "Organization": "East-2",
    "Manager Name": "Niket Kumar",
    "Manager Level": "RSM",
    "Dealer Name": "VE Commercial Vehicle (COCO)-Bombay Chowk",
    "SCode": "1S2208",
    "State": "Odisha",
    "City": "Baripada town",
    "Contact No.": "8427733112"
  },
  {
    "Organization": "South-2",
    "Manager Name": "N Narayanan",
    "Manager Level": "RSM",
    "Dealer Name": "VE Commercial Vehicle (COCO)-Bommanahalli",
    "SCode": "1S6180",
    "State": "Karnataka",
    "City": "Bengaluru",
    "Contact No.": "8123036700"
  },
  {
    "Organization": "South-2",
    "Manager Name": "Praveen Kumar B (D) / Jeevan Kumar (N)",
    "Manager Level": "CSM",
    "Dealer Name": "VE Commercial Vehicle (COCO)-Bommanahalli",
    "SCode": "1S6180",
    "State": "Karnataka",
    "City": "Bengaluru",
    "Contact No.": "8838864138,7892822611"
  },
  {
    "Organization": "South-2",
    "Manager Name": "Thirumalesh",
    "Manager Level": "WM",
    "Dealer Name": "VE Commercial Vehicle (COCO)-Bommanahalli",
    "SCode": "1S6180",
    "State": "Karnataka",
    "City": "Bengaluru",
    "Contact No.": "9110423394"
  },
  {
    "Organization": "South-2",
    "Manager Name": "Nagesh",
    "Manager Level": "EOS Site Incharge",
    "Dealer Name": "VE Commercial Vehicle (COCO)-Bommanahalli",
    "SCode": "1S6180",
    "State": "Karnataka",
    "City": "Bengaluru",
    "Contact No.": "9980552387"
  },
  {
    "Organization": "South-2",
    "Manager Name": "Manikandan",
    "Manager Level": "MD",
    "Dealer Name": "VE Commercial Vehicle (COCO)-Bommanahalli",
    "SCode": "1S6180",
    "State": "Karnataka",
    "City": "Bengaluru",
    "Contact No.": "9500045999"
  },
  {
    "Organization": "South-2",
    "Manager Name": "S Balaji",
    "Manager Level": "ASM",
    "Dealer Name": "VE Commercial Vehicle (COCO)-Bommanahalli",
    "SCode": "1S6180",
    "State": "Karnataka",
    "City": "Bengaluru",
    "Contact No.": "9840833723"
  },
  {
    "Organization": "West-1",
    "Manager Name": "Adil Sheikh",
    "Manager Level": "HD Bus SPOC 2",
    "Dealer Name": "VE Commercial Vehicle (COCO)-Chakan",
    "SCode": "1S3359",
    "State": "Maharashtra",
    "City": "Pune",
    "Contact No.": "9325446342"
  },
  {
    "Organization": "West-1",
    "Manager Name": "Arvind Patil",
    "Manager Level": "HD Bus SPOC",
    "Dealer Name": "VE Commercial Vehicle (COCO)-Chakan",
    "SCode": "1S3359",
    "State": "Maharashtra",
    "City": "Pune",
    "Contact No.": "8552856522"
  },
  {
    "Organization": "West-1",
    "Manager Name": "Suhas Ramchandra Mane",
    "Manager Level": "RSM",
    "Dealer Name": "VE Commercial Vehicle (COCO)-Chakan",
    "SCode": "1S3359",
    "State": "Maharashtra",
    "City": "Pune",
    "Contact No.": "8454812225"
  },
  {
    "Organization": "West-1",
    "Manager Name": "Najeeb K / Swaroop Gartia",
    "Manager Level": "MD",
    "Dealer Name": "VE Commercial Vehicle (COCO)-Chakan",
    "SCode": "1S3359",
    "State": "Maharashtra",
    "City": "Pune",
    "Contact No.": "8956861665,9987554292"
  },
  {
    "Organization": "West-1",
    "Manager Name": "Mrinal Kunwar",
    "Manager Level": "ASM",
    "Dealer Name": "VE Commercial Vehicle (COCO)-Chakan",
    "SCode": "1S3359",
    "State": "Maharashtra",
    "City": "Pune",
    "Contact No.": "8002023303"
  },
  {
    "Organization": "West-1",
    "Manager Name": "Amol Kale",
    "Manager Level": "EOS Site Incharge",
    "Dealer Name": "VE Commercial Vehicle (COCO)-Chakan",
    "SCode": "1S3359",
    "State": "Maharashtra",
    "City": "Pune",
    "Contact No.": "8956457223,9028008438"
  },
  {
    "Organization": "West-1",
    "Manager Name": "Ashok Darade / Adil Sheikh",
    "Manager Level": "CSM",
    "Dealer Name": "VE Commercial Vehicle (COCO)-Chakan",
    "SCode": "1S3359",
    "State": "Maharashtra",
    "City": "Pune",
    "Contact No.": "9755019260,9325446342"
  },
  {
    "Organization": "West-1",
    "Manager Name": "Dev Bratt Raturi",
    "Manager Level": "WM",
    "Dealer Name": "VE Commercial Vehicle (COCO)-Chakan",
    "SCode": "1S3359",
    "State": "Maharashtra",
    "City": "Pune",
    "Contact No.": "8600922444"
  },
  {
    "Organization": "East-1",
    "Manager Name": "Aayush Mondal",
    "Manager Level": "CSM",
    "Dealer Name": "VE Commercial Vehicle (COCO)-Chakdaha",
    "SCode": "1S2284",
    "State": "West Bengal",
    "City": "Nadia",
    "Contact No.": "8910204452"
  },
  {
    "Organization": "East-1",
    "Manager Name": "Yogeshwar Singh",
    "Manager Level": "RSM",
    "Dealer Name": "VE Commercial Vehicle (COCO)-Chakdaha",
    "SCode": "1S2284",
    "State": "West Bengal",
    "City": "Nadia",
    "Contact No.": "9717966997"
  },
  {
    "Organization": "East-1",
    "Manager Name": "Abhirup Ghosh",
    "Manager Level": "ASM",
    "Dealer Name": "VE Commercial Vehicle (COCO)-Chakdaha",
    "SCode": "1S2284",
    "State": "West Bengal",
    "City": "Nadia",
    "Contact No.": "9073378080"
  },
  {
    "Organization": "East-1",
    "Manager Name": "Amlan Kumar Chaki",
    "Manager Level": "WM",
    "Dealer Name": "VE Commercial Vehicle (COCO)-Chakdaha",
    "SCode": "1S2284",
    "State": "West Bengal",
    "City": "Nadia",
    "Contact No.": "9830405921"
  },
  {
    "Organization": "East-1",
    "Manager Name": "Ayan Biswas",
    "Manager Level": "EOS Site Incharge",
    "Dealer Name": "VE Commercial Vehicle (COCO)-Chakdaha",
    "SCode": "1S2284",
    "State": "West Bengal",
    "City": "Nadia",
    "Contact No.": "7890445472"
  },
  {
    "Organization": "South-1",
    "Manager Name": "Balaguru / Mukesh",
    "Manager Level": "EOS Site Incharge",
    "Dealer Name": "VE Commercial Vehicle (COCO)-Chennai",
    "SCode": "1S4102",
    "State": "Tamil Nadu",
    "City": "Chennai",
    "Contact No.": "7824887561,8939901852"
  },
  {
    "Organization": "South-1",
    "Manager Name": "Manikandan R / Kolanchi",
    "Manager Level": "WM",
    "Dealer Name": "VE Commercial Vehicle (COCO)-Chennai",
    "SCode": "1S4102",
    "State": "Tamil Nadu",
    "City": "Chennai",
    "Contact No.": "7824887559,7338870074"
  },
  {
    "Organization": "South-1",
    "Manager Name": "N Saravanan",
    "Manager Level": "MD",
    "Dealer Name": "VE Commercial Vehicle (COCO)-Chennai",
    "SCode": "1S4102",
    "State": "Tamil Nadu",
    "City": "Chennai",
    "Contact No.": "9600068804"
  },
  {
    "Organization": "South-1",
    "Manager Name": "Radhakrishnan",
    "Manager Level": "RSM",
    "Dealer Name": "VE Commercial Vehicle (COCO)-Chennai",
    "SCode": "1S4102",
    "State": "Tamil Nadu",
    "City": "Chennai",
    "Contact No.": "9840730250"
  },
  {
    "Organization": "South-1",
    "Manager Name": "Sudharsan Gokul S (D) / Yuvaraj B (N)",
    "Manager Level": "CSM",
    "Dealer Name": "VE Commercial Vehicle (COCO)-Chennai",
    "SCode": "1S4102",
    "State": "Tamil Nadu",
    "City": "Chennai",
    "Contact No.": "9840114245,9543338783"
  },
  {
    "Organization": "South-1",
    "Manager Name": "Vasantha Kumar T",
    "Manager Level": "ASM",
    "Dealer Name": "VE Commercial Vehicle (COCO)-Chennai",
    "SCode": "1S4102",
    "State": "Tamil Nadu",
    "City": "Chennai",
    "Contact No.": "9790754777"
  },
  {
    "Organization": "West-2",
    "Manager Name": "Sudhir Kumar",
    "Manager Level": "RSM",
    "Dealer Name": "VE Commercial Vehicle (COCO)-Chikhli",
    "SCode": "1S3400",
    "State": "Gujarat",
    "City": "Chikhhli",
    "Contact No.": "9752542733"
  },
  {
    "Organization": "West-2",
    "Manager Name": "Mohd Farhan",
    "Manager Level": "CSM",
    "Dealer Name": "VE Commercial Vehicle (COCO)-Chikhli",
    "SCode": "1S3400",
    "State": "Gujarat",
    "City": "Chikhhli",
    "Contact No.": "9356121623"
  },
  {
    "Organization": "West-2",
    "Manager Name": "Sahdev Patel",
    "Manager Level": "WM",
    "Dealer Name": "VE Commercial Vehicle (COCO)-Chikhli",
    "SCode": "1S3400",
    "State": "Gujarat",
    "City": "Chikhhli",
    "Contact No.": "9875149854"
  },
  {
    "Organization": "West-2",
    "Manager Name": "Divyesh Shah",
    "Manager Level": "ASM",
    "Dealer Name": "VE Commercial Vehicle (COCO)-Chikhli",
    "SCode": "1S3400",
    "State": "Gujarat",
    "City": "Chikhhli",
    "Contact No.": "7600287682"
  },
  {
    "Organization": "West-2",
    "Manager Name": "Veerendra Jha / Sunoj Nair",
    "Manager Level": "MD",
    "Dealer Name": "VE Commercial Vehicle (COCO)-Chikhli",
    "SCode": "1S3400",
    "State": "Gujarat",
    "City": "Chikhhli",
    "Contact No.": "9973076135,9825329298"
  },
  {
    "Organization": "West-2",
    "Manager Name": "Rahuldev Patil / Vishal Chauhan",
    "Manager Level": "EOS Site Incharge",
    "Dealer Name": "VE Commercial Vehicle (COCO)-Chikhli",
    "SCode": "1S3400",
    "State": "Gujarat",
    "City": "Chikhhli",
    "Contact No.": "7359688088,9875149935"
  },
  {
    "Organization": "North-2",
    "Manager Name": "Somu Ghorai / Pawan Kumar Jha",
    "Manager Level": "MD",
    "Dealer Name": "VE Commercial Vehicle (COCO)-Chittorgarh",
    "SCode": "1S7084",
    "State": "Rajasthan",
    "City": "Chittorgarh",
    "Contact No.": "7781088969,9599497011"
  },
  {
    "Organization": "North-2",
    "Manager Name": "Afazal Khan / Gajraj Singh",
    "Manager Level": "EOS Site Incharge",
    "Dealer Name": "VE Commercial Vehicle (COCO)-Chittorgarh",
    "SCode": "1S7084",
    "State": "Rajasthan",
    "City": "Chittorgarh",
    "Contact No.": "8949116264,8005731106"
  },
  {
    "Organization": "North-2",
    "Manager Name": "Krishnendu Saha",
    "Manager Level": "RSM",
    "Dealer Name": "VE Commercial Vehicle (COCO)-Chittorgarh",
    "SCode": "1S7084",
    "State": "Rajasthan",
    "City": "Chittorgarh",
    "Contact No.": "7980433425"
  },
  {
    "Organization": "North-2",
    "Manager Name": "Suraj / Bhagwati",
    "Manager Level": "WM",
    "Dealer Name": "VE Commercial Vehicle (COCO)-Chittorgarh",
    "SCode": "1S7084",
    "State": "Rajasthan",
    "City": "Chittorgarh",
    "Contact No.": "7014427104,9257049971"
  },
  {
    "Organization": "North-2",
    "Manager Name": "Shivam Bhardwaj / Akeel Mansury",
    "Manager Level": "CSM",
    "Dealer Name": "VE Commercial Vehicle (COCO)-Chittorgarh",
    "SCode": "1S7084",
    "State": "Rajasthan",
    "City": "Chittorgarh",
    "Contact No.": "7878175706,8518009611"
  },
  {
    "Organization": "North-2",
    "Manager Name": "Rajkumar Vaishnav",
    "Manager Level": "ASM",
    "Dealer Name": "VE Commercial Vehicle (COCO)-Chittorgarh",
    "SCode": "1S7084",
    "State": "Rajasthan",
    "City": "Chittorgarh",
    "Contact No.": "9636756000"
  },
  {
    "Organization": "North-2",
    "Manager Name": "Mojahid Ali",
    "Manager Level": "EOS Site Incharge",
    "Dealer Name": "VE Commercial Vehicle (COCO)-Chopan",
    "SCode": "1S7080",
    "State": "Uttar Pradesh",
    "City": "Varanasi",
    "Contact No.": "8468013731"
  },
  {
    "Organization": "North-2",
    "Manager Name": "Shashank Saran (D) / Saket Singh (N)",
    "Manager Level": "CSM",
    "Dealer Name": "VE Commercial Vehicle (COCO)-Chopan",
    "SCode": "1S7080",
    "State": "Uttar Pradesh",
    "City": "Sonbhadra",
    "Contact No.": "9554900557,8709859215"
  },
  {
    "Organization": "North-2",
    "Manager Name": "Anand Yadhav",
    "Manager Level": "WM",
    "Dealer Name": "VE Commercial Vehicle (COCO)-Chopan",
    "SCode": "1S7080",
    "State": "Uttar Pradesh",
    "City": "Varanasi",
    "Contact No.": "6386862865"
  },
  {
    "Organization": "North-2",
    "Manager Name": "Krishnendu Saha",
    "Manager Level": "RSM",
    "Dealer Name": "VE Commercial Vehicle (COCO)-Chopan",
    "SCode": "1S7080",
    "State": "Uttar Pradesh",
    "City": "Sonbhadra",
    "Contact No.": "7980433425"
  },
  {
    "Organization": "North-2",
    "Manager Name": "Ramakant Singh / Manish Sharma",
    "Manager Level": "MD",
    "Dealer Name": "VE Commercial Vehicle (COCO)-Chopan",
    "SCode": "1S7080",
    "State": "Uttar Pradesh",
    "City": "Sonbhadra",
    "Contact No.": "9424945434,8288077524"
  },
  {
    "Organization": "North-2",
    "Manager Name": "Nitin Gupta",
    "Manager Level": "ASM",
    "Dealer Name": "VE Commercial Vehicle (COCO)-Chopan",
    "SCode": "1S7080",
    "State": "Uttar Pradesh",
    "City": "Sonbhadra",
    "Contact No.": "7080811550"
  },
  {
    "Organization": "East-2",
    "Manager Name": "Subhodip Roy",
    "Manager Level": "CSM",
    "Dealer Name": "VE Commercial Vehicle (COCO)-Cuttack",
    "SCode": "1S2115",
    "State": "Odisha",
    "City": "Cuttack",
    "Contact No.": "9007883391"
  },
  {
    "Organization": "East-2",
    "Manager Name": "Sanjoy Nayek",
    "Manager Level": "ASM",
    "Dealer Name": "VE Commercial Vehicle (COCO)-Cuttack",
    "SCode": "1S2115",
    "State": "Odisha",
    "City": "Cuttack",
    "Contact No.": "8001165218"
  },
  {
    "Organization": "East-2",
    "Manager Name": "Dipak Kumar Nayak",
    "Manager Level": "WM",
    "Dealer Name": "VE Commercial Vehicle (COCO)-Cuttack",
    "SCode": "1S2115",
    "State": "Odisha",
    "City": "Cuttack",
    "Contact No.": "7809294966"
  },
  {
    "Organization": "East-2",
    "Manager Name": "Niket Kumar",
    "Manager Level": "RSM",
    "Dealer Name": "VE Commercial Vehicle (COCO)-Cuttack",
    "SCode": "1S2115",
    "State": "Odisha",
    "City": "Cuttack",
    "Contact No.": "8427733112"
  },
  {
    "Organization": "East-2",
    "Manager Name": "Sanjit Sarangi",
    "Manager Level": "MD",
    "Dealer Name": "VE Commercial Vehicle (COCO)-Cuttack",
    "SCode": "1S2115",
    "State": "Odisha",
    "City": "Cuttack",
    "Contact No.": "8334964567"
  },
  {
    "Organization": "East-2",
    "Manager Name": "Anand Sagar Panda",
    "Manager Level": "EOS Site Incharge",
    "Dealer Name": "VE Commercial Vehicle (COCO)-Cuttack",
    "SCode": "1S2115",
    "State": "Odisha",
    "City": "Cuttack",
    "Contact No.": "7064414513"
  },
  {
    "Organization": "East-2",
    "Manager Name": "Niket Kumar",
    "Manager Level": "RSM",
    "Dealer Name": "VE Commercial Vehicle (COCO)-Deogarh",
    "SCode": "1S2197",
    "State": "Odisha",
    "City": "Debagarh",
    "Contact No.": "8427733112"
  },
  {
    "Organization": "East-2",
    "Manager Name": "Sanjoy Nayek",
    "Manager Level": "ASM",
    "Dealer Name": "VE Commercial Vehicle (COCO)-Deogarh",
    "SCode": "1S2197",
    "State": "Odisha",
    "City": "Debagarh",
    "Contact No.": "8001165218"
  },
  {
    "Organization": "East-2",
    "Manager Name": "Tapas Pradhan",
    "Manager Level": "MD",
    "Dealer Name": "VE Commercial Vehicle (COCO)-Deogarh",
    "SCode": "1S2197",
    "State": "Odisha",
    "City": "Debagarh",
    "Contact No.": "9937291938"
  },
  {
    "Organization": "East-2",
    "Manager Name": "Ashish Khatei",
    "Manager Level": "WM",
    "Dealer Name": "VE Commercial Vehicle (COCO)-Deogarh",
    "SCode": "1S2197",
    "State": "Odisha",
    "City": "Debagarh",
    "Contact No.": "9040118752"
  },
  {
    "Organization": "East-2",
    "Manager Name": "Sailesh Moharana",
    "Manager Level": "CSM",
    "Dealer Name": "VE Commercial Vehicle (COCO)-Deogarh",
    "SCode": "1S2197",
    "State": "Odisha",
    "City": "Debagarh",
    "Contact No.": "9337951215"
  },
  {
    "Organization": "East-2",
    "Manager Name": "Sujit Behera",
    "Manager Level": "EOS Site Incharge",
    "Dealer Name": "VE Commercial Vehicle (COCO)-Deogarh",
    "SCode": "1S2197",
    "State": "Odisha",
    "City": "Debagarh",
    "Contact No.": "9337322178"
  },
  {
    "Organization": "North-2",
    "Manager Name": "Amit Pandey",
    "Manager Level": "ASM",
    "Dealer Name": "VE Commercial Vehicle (COCO)-Dholpur",
    "SCode": "1S7037",
    "State": "Rajasthan",
    "City": "Dholpur",
    "Contact No.": "9099979633"
  },
  {
    "Organization": "North-2",
    "Manager Name": "Rajmuni / Aan Singh",
    "Manager Level": "WM",
    "Dealer Name": "VE Commercial Vehicle (COCO)-Dholpur",
    "SCode": "1S7037",
    "State": "Rajasthan",
    "City": "Dholpur",
    "Contact No.": "8003955565,8209462895"
  },
  {
    "Organization": "North-2",
    "Manager Name": "Abhishek\u00a0Tomar / Shivam Bharadwaj (N)",
    "Manager Level": "CSM",
    "Dealer Name": "VE Commercial Vehicle (COCO)-Dholpur",
    "SCode": "1S7037",
    "State": "Rajasthan",
    "City": "Dholpur",
    "Contact No.": "8717880008,7878175706"
  },
  {
    "Organization": "North-2",
    "Manager Name": "Krishnendu Saha",
    "Manager Level": "RSM",
    "Dealer Name": "VE Commercial Vehicle (COCO)-Dholpur",
    "SCode": "1S7037",
    "State": "Rajasthan",
    "City": "Dholpur",
    "Contact No.": "7980433425"
  },
  {
    "Organization": "North-2",
    "Manager Name": "Rahul Ramesh Sharma / Gundeep Singh",
    "Manager Level": "MD",
    "Dealer Name": "VE Commercial Vehicle (COCO)-Dholpur",
    "SCode": "1S7037",
    "State": "Rajasthan",
    "City": "Dholpur",
    "Contact No.": "9987711985,9928011217"
  },
  {
    "Organization": "West-2",
    "Manager Name": "Ishwar Singh Bisht",
    "Manager Level": "CSM",
    "Dealer Name": "VE Commercial Vehicle (COCO)-Gandhidham",
    "SCode": "1S3333",
    "State": "Gujarat",
    "City": "Gandhidham",
    "Contact No.": "6398989252"
  },
  {
    "Organization": "West-2",
    "Manager Name": "Sudhir Kumar",
    "Manager Level": "RSM",
    "Dealer Name": "VE Commercial Vehicle (COCO)-Gandhidham",
    "SCode": "1S3333",
    "State": "Gujarat",
    "City": "Gandhidham",
    "Contact No.": "9752542733"
  },
  {
    "Organization": "West-2",
    "Manager Name": "Amit Singh",
    "Manager Level": "WM",
    "Dealer Name": "VE Commercial Vehicle (COCO)-Gandhidham",
    "SCode": "1S3333",
    "State": "Gujarat",
    "City": "Gandhidham",
    "Contact No.": "7275218297"
  },
  {
    "Organization": "West-2",
    "Manager Name": "Desh Premi",
    "Manager Level": "EOS Site Incharge",
    "Dealer Name": "VE Commercial Vehicle (COCO)-Gandhidham",
    "SCode": "1S3333",
    "State": "Gujarat",
    "City": "Gandhidham",
    "Contact No.": "7023577328"
  },
  {
    "Organization": "West-2",
    "Manager Name": "Vipul Barot",
    "Manager Level": "ASM",
    "Dealer Name": "VE Commercial Vehicle (COCO)-Gandhidham",
    "SCode": "1S3333",
    "State": "Gujarat",
    "City": "Gandhidham",
    "Contact No.": "9638341568"
  },
  {
    "Organization": "West-2",
    "Manager Name": "Dinesh Sali / Laxman Pachpande",
    "Manager Level": "MD",
    "Dealer Name": "VE Commercial Vehicle (COCO)-Gandhidham",
    "SCode": "1S3333",
    "State": "Gujarat",
    "City": "Gandhidham",
    "Contact No.": "9724312411,9920281839"
  },
  {
    "Organization": "West-1",
    "Manager Name": "Mrinal Kunwar",
    "Manager Level": "ASM",
    "Dealer Name": "VE Commercial Vehicle (COCO)-Hadapsar",
    "SCode": "1S3363",
    "State": "Maharashtra",
    "City": "Pune",
    "Contact No.": "8002023303"
  },
  {
    "Organization": "West-1",
    "Manager Name": "Najeeb K / Swaroop Gartia",
    "Manager Level": "MD",
    "Dealer Name": "VE Commercial Vehicle (COCO)-Hadapsar",
    "SCode": "1S3363",
    "State": "Maharashtra",
    "City": "Pune",
    "Contact No.": "8956861665,9987554292"
  },
  {
    "Organization": "West-1",
    "Manager Name": "Arvind Patil",
    "Manager Level": "HD Bus SPOC",
    "Dealer Name": "VE Commercial Vehicle (COCO)-Hadapsar",
    "SCode": "1S3363",
    "State": "Maharashtra",
    "City": "Pune",
    "Contact No.": "8552856522"
  },
  {
    "Organization": "West-1",
    "Manager Name": "Suhas Ramchandra Mane",
    "Manager Level": "RSM",
    "Dealer Name": "VE Commercial Vehicle (COCO)-Hadapsar",
    "SCode": "1S3363",
    "State": "Maharashtra",
    "City": "Pune",
    "Contact No.": "8454812225"
  },
  {
    "Organization": "West-1",
    "Manager Name": "Rameez Khan",
    "Manager Level": "WM",
    "Dealer Name": "VE Commercial Vehicle (COCO)-Hadapsar",
    "SCode": "1S3363",
    "State": "Maharashtra",
    "City": "Pune",
    "Contact No.": "7028941022"
  },
  {
    "Organization": "West-1",
    "Manager Name": "Ashok Darade / Vivekanand Maske",
    "Manager Level": "CSM",
    "Dealer Name": "VE Commercial Vehicle (COCO)-Hadapsar",
    "SCode": "1S3363",
    "State": "Maharashtra",
    "City": "Pune",
    "Contact No.": "9755019260,9021549678"
  },
  {
    "Organization": "West-1",
    "Manager Name": "Adil Sheikh",
    "Manager Level": "HD Bus SPOC 2",
    "Dealer Name": "VE Commercial Vehicle (COCO)-Hadapsar",
    "SCode": "1S3363",
    "State": "Maharashtra",
    "City": "Pune",
    "Contact No.": "9325446342"
  },
  {
    "Organization": "West-1",
    "Manager Name": "Somnath Nimbalkar / Shubham Salunke",
    "Manager Level": "EOS Site Incharge",
    "Dealer Name": "VE Commercial Vehicle (COCO)-Hadapsar",
    "SCode": "1S3363",
    "State": "Maharashtra",
    "City": "Pune",
    "Contact No.": "9028008442,9028008440"
  },
  {
    "Organization": "West-2",
    "Manager Name": "Divyesh Shah",
    "Manager Level": "ASM",
    "Dealer Name": "VE Commercial Vehicle (COCO)-Hazira",
    "SCode": "1S3398",
    "State": "Gujarat",
    "City": "Surat",
    "Contact No.": "7600287682"
  },
  {
    "Organization": "West-2",
    "Manager Name": "Sudhir Kumar",
    "Manager Level": "RSM",
    "Dealer Name": "VE Commercial Vehicle (COCO)-Hazira",
    "SCode": "1S3398",
    "State": "Gujarat",
    "City": "Surat",
    "Contact No.": "9752542733"
  },
  {
    "Organization": "West-2",
    "Manager Name": "Mohd Farhan",
    "Manager Level": "CSM",
    "Dealer Name": "VE Commercial Vehicle (COCO)-Hazira",
    "SCode": "1S3398",
    "State": "Gujarat",
    "City": "Surat",
    "Contact No.": "9356121623"
  },
  {
    "Organization": "West-2",
    "Manager Name": "Rahuldev Patil / Vishal Chauhan",
    "Manager Level": "EOS Site Incharge",
    "Dealer Name": "VE Commercial Vehicle (COCO)-Hazira",
    "SCode": "1S3398",
    "State": "Gujarat",
    "City": "Surat",
    "Contact No.": "7359688088,9875149935"
  },
  {
    "Organization": "West-2",
    "Manager Name": "Veerendra Jha / Sunoj Nair",
    "Manager Level": "MD",
    "Dealer Name": "VE Commercial Vehicle (COCO)-Hazira",
    "SCode": "1S3398",
    "State": "Gujarat",
    "City": "Surat",
    "Contact No.": "9973076135,9825329298"
  },
  {
    "Organization": "West-2",
    "Manager Name": "Jagdish Parmar / Prarthan Rambhapurwala",
    "Manager Level": "WM",
    "Dealer Name": "VE Commercial Vehicle (COCO)-Hazira",
    "SCode": "1S3398",
    "State": "Gujarat",
    "City": "Surat",
    "Contact No.": "9875149880,7016146480"
  },
  {
    "Organization": "North-2",
    "Manager Name": "Yogesh Kumar Tomer / Gundeep Singh",
    "Manager Level": "MD",
    "Dealer Name": "VE Commercial Vehicle (COCO)-Jaipur",
    "SCode": "1S7035",
    "State": "Rajasthan",
    "City": "Jaipur",
    "Contact No.": "9871296923,9928011217"
  },
  {
    "Organization": "North-2",
    "Manager Name": "Krishnendu Saha",
    "Manager Level": "RSM",
    "Dealer Name": "VE Commercial Vehicle (COCO)-Jaipur",
    "SCode": "1S7035",
    "State": "Rajasthan",
    "City": "Jaipur",
    "Contact No.": "7980433425"
  },
  {
    "Organization": "North-2",
    "Manager Name": "Anil Kumar Dhiman",
    "Manager Level": "WM",
    "Dealer Name": "VE Commercial Vehicle (COCO)-Jaipur",
    "SCode": "1S7035",
    "State": "Rajasthan",
    "City": "Jaipur",
    "Contact No.": "9109101122"
  },
  {
    "Organization": "North-2",
    "Manager Name": "Jivnesh / Shivam",
    "Manager Level": "CSM",
    "Dealer Name": "VE Commercial Vehicle (COCO)-Jaipur",
    "SCode": "1S7035",
    "State": "Rajasthan",
    "City": "Jaipur",
    "Contact No.": "9664163745,7878175706"
  },
  {
    "Organization": "North-2",
    "Manager Name": "Amit Pandey",
    "Manager Level": "ASM",
    "Dealer Name": "VE Commercial Vehicle (COCO)-Jaipur",
    "SCode": "1S7035",
    "State": "Rajasthan",
    "City": "Jaipur",
    "Contact No.": "9099979633"
  },
  {
    "Organization": "North-1",
    "Manager Name": "Maninder",
    "Manager Level": "WM",
    "Dealer Name": "VE Commercial Vehicle (COCO)-Jalandhar",
    "SCode": "1S1266",
    "State": "Punjab",
    "City": "Jalandhar",
    "Contact No.": "8264261358"
  },
  {
    "Organization": "North-1",
    "Manager Name": "Mamoon Khan",
    "Manager Level": "CSM",
    "Dealer Name": "VE Commercial Vehicle (COCO)-Jalandhar",
    "SCode": "1S1266",
    "State": "Punjab",
    "City": "Jalandhar",
    "Contact No.": "9541481374"
  },
  {
    "Organization": "North-1",
    "Manager Name": "Sudhakar Maurya / Suraj Yadav",
    "Manager Level": "EOS Site Incharge",
    "Dealer Name": "VE Commercial Vehicle (COCO)-Jalandhar",
    "SCode": "1S1266",
    "State": "Punjab",
    "City": "Jalandhar",
    "Contact No.": "8090609089,7015972318"
  },
  {
    "Organization": "North-1",
    "Manager Name": "Vaibhav Katyal",
    "Manager Level": "ASM",
    "Dealer Name": "VE Commercial Vehicle (COCO)-Jalandhar",
    "SCode": "1S1266",
    "State": "Punjab",
    "City": "Jalandhar",
    "Contact No.": "9219500351"
  },
  {
    "Organization": "North-1",
    "Manager Name": "Adarsh Prasad",
    "Manager Level": "RSM",
    "Dealer Name": "VE Commercial Vehicle (COCO)-Jalandhar",
    "SCode": "1S1266",
    "State": "Punjab",
    "City": "Jalandhar",
    "Contact No.": "9717996321"
  },
  {
    "Organization": "North-1",
    "Manager Name": "Shazib Hussain",
    "Manager Level": "MD",
    "Dealer Name": "VE Commercial Vehicle (COCO)-Jalandhar",
    "SCode": "1S1266",
    "State": "Punjab",
    "City": "Jalandhar",
    "Contact No.": "9760130201"
  },
  {
    "Organization": "North-1",
    "Manager Name": "Vaibhav Katyal",
    "Manager Level": "ASM",
    "Dealer Name": "VE Commercial Vehicle (COCO)-Jammu",
    "SCode": "1S1232",
    "State": "Jammu and Kashmir",
    "City": "Jammu",
    "Contact No.": "9219500351"
  },
  {
    "Organization": "North-1",
    "Manager Name": "Varun Trivedi / Rajiv Bhatia",
    "Manager Level": "MD",
    "Dealer Name": "VE Commercial Vehicle (COCO)-Jammu",
    "SCode": "1S1232",
    "State": "Jammu and Kashmir",
    "City": "Jammu",
    "Contact No.": "7087379277,9099081669"
  },
  {
    "Organization": "North-1",
    "Manager Name": "Adarsh Prasad",
    "Manager Level": "RSM",
    "Dealer Name": "VE Commercial Vehicle (COCO)-Jammu",
    "SCode": "1S1232",
    "State": "Jammu and Kashmir",
    "City": "Jammu",
    "Contact No.": "9717996321"
  },
  {
    "Organization": "North-1",
    "Manager Name": "Karan Pandoh / Sidhant Singh",
    "Manager Level": "EOS Site Incharge",
    "Dealer Name": "VE Commercial Vehicle (COCO)-Jammu",
    "SCode": "1S1232",
    "State": "Jammu and Kashmir",
    "City": "Jammu",
    "Contact No.": "6006310531,8082030315"
  },
  {
    "Organization": "North-1",
    "Manager Name": "Sourav Gupta",
    "Manager Level": "WM",
    "Dealer Name": "VE Commercial Vehicle (COCO)-Jammu",
    "SCode": "1S1232",
    "State": "Jammu and Kashmir",
    "City": "Jammu",
    "Contact No.": "7006440997"
  },
  {
    "Organization": "North-1",
    "Manager Name": "Ravdeep Singh",
    "Manager Level": "CSM",
    "Dealer Name": "VE Commercial Vehicle (COCO)-Jammu",
    "SCode": "1S1232",
    "State": "Jammu and Kashmir",
    "City": "Jammu",
    "Contact No.": "6363111313"
  },
  {
    "Organization": "East-2",
    "Manager Name": "Tapas Pradhan",
    "Manager Level": "MD",
    "Dealer Name": "VE Commercial Vehicle (COCO)-Jharsuguda",
    "SCode": "1S2122",
    "State": "Odisha",
    "City": "Jharsuguda",
    "Contact No.": "9937291938"
  },
  {
    "Organization": "East-2",
    "Manager Name": "Sanjoy Nayek",
    "Manager Level": "ASM",
    "Dealer Name": "VE Commercial Vehicle (COCO)-Jharsuguda",
    "SCode": "1S2122",
    "State": "Odisha",
    "City": "Jharsuguda",
    "Contact No.": "8001165218"
  },
  {
    "Organization": "East-2",
    "Manager Name": "Rishav Das",
    "Manager Level": "CSM",
    "Dealer Name": "VE Commercial Vehicle (COCO)-Jharsuguda",
    "SCode": "1S2122",
    "State": "Odisha",
    "City": "Jharsuguda",
    "Contact No.": "7439531201"
  },
  {
    "Organization": "East-2",
    "Manager Name": "Sandeep Jaiswal",
    "Manager Level": "WM",
    "Dealer Name": "VE Commercial Vehicle (COCO)-Jharsuguda",
    "SCode": "1S2122",
    "State": "Odisha",
    "City": "Jharsuguda",
    "Contact No.": "8984757118"
  },
  {
    "Organization": "East-2",
    "Manager Name": "Niket Kumar",
    "Manager Level": "RSM",
    "Dealer Name": "VE Commercial Vehicle (COCO)-Jharsuguda",
    "SCode": "1S2122",
    "State": "Odisha",
    "City": "Jharsuguda",
    "Contact No.": "8427733112"
  },
  {
    "Organization": "East-2",
    "Manager Name": "Kamal Kar",
    "Manager Level": "EOS Site Incharge",
    "Dealer Name": "VE Commercial Vehicle (COCO)-Jharsuguda",
    "SCode": "1S2122",
    "State": "Odisha",
    "City": "Jharsuguda",
    "Contact No.": "7631090623"
  },
  {
    "Organization": "North-2",
    "Manager Name": "Rajkumar Vaishnav",
    "Manager Level": "ASM",
    "Dealer Name": "VE Commercial Vehicle (COCO)-Jodhpur",
    "SCode": "1S1195",
    "State": "Rajasthan",
    "City": "Jodhpur",
    "Contact No.": "9636756000"
  },
  {
    "Organization": "North-2",
    "Manager Name": "Salim Khan",
    "Manager Level": "EOS Site Incharge",
    "Dealer Name": "VE Commercial Vehicle (COCO)-Jodhpur",
    "SCode": "1S1195",
    "State": "Rajasthan",
    "City": "Jodhpur",
    "Contact No.": "7877474169"
  },
  {
    "Organization": "North-2",
    "Manager Name": "Gajraj Jat / Mohit Modgill",
    "Manager Level": "MD",
    "Dealer Name": "VE Commercial Vehicle (COCO)-Jodhpur",
    "SCode": "1S1195",
    "State": "Rajasthan",
    "City": "Jodhpur",
    "Contact No.": "6350259714,9599107671"
  },
  {
    "Organization": "North-2",
    "Manager Name": "Shivam Bhardwaj / Dhananjay Singh",
    "Manager Level": "CSM",
    "Dealer Name": "VE Commercial Vehicle (COCO)-Jodhpur",
    "SCode": "1S1195",
    "State": "Rajasthan",
    "City": "Jodhpur",
    "Contact No.": "7878175706,7737329353"
  },
  {
    "Organization": "North-2",
    "Manager Name": "Krishnendu Saha",
    "Manager Level": "RSM",
    "Dealer Name": "VE Commercial Vehicle (COCO)-Jodhpur",
    "SCode": "1S1195",
    "State": "Rajasthan",
    "City": "Jodhpur",
    "Contact No.": "7980433425"
  },
  {
    "Organization": "North-2",
    "Manager Name": "Manoj / Kaushal",
    "Manager Level": "WM",
    "Dealer Name": "VE Commercial Vehicle (COCO)-Jodhpur",
    "SCode": "1S1195",
    "State": "Rajasthan",
    "City": "Jodhpur",
    "Contact No.": "8209555769,9784820006"
  },
  {
    "Organization": "North-2",
    "Manager Name": "Dhananjay Singh EVS",
    "Manager Level": "CSM",
    "Dealer Name": "VE Commercial Vehicle (COCO)-Jodhpur",
    "SCode": "1S1195",
    "State": "Rajasthan",
    "City": "Jodhpur",
    "Contact No.": "7737329353"
  },
  {
    "Organization": "North-1",
    "Manager Name": "Sunny Pathania / Varun Trivedi",
    "Manager Level": "WM",
    "Dealer Name": "VE Commercial Vehicle (COCO)-Kathua",
    "SCode": "1S1260",
    "State": "Jammu and Kashmir",
    "City": "Kathua",
    "Contact No.": "9797989014,7087379277"
  },
  {
    "Organization": "North-1",
    "Manager Name": "Vaibhav Katyal",
    "Manager Level": "ASM",
    "Dealer Name": "VE Commercial Vehicle (COCO)-Kathua",
    "SCode": "1S1260",
    "State": "Jammu and Kashmir",
    "City": "Kathua",
    "Contact No.": "9219500351"
  },
  {
    "Organization": "North-1",
    "Manager Name": "Veeru Jagotara",
    "Manager Level": "EOS Site Incharge",
    "Dealer Name": "VE Commercial Vehicle (COCO)-Kathua",
    "SCode": "1S1260",
    "State": "Jammu and Kashmir",
    "City": "Kathua",
    "Contact No.": "9906251824"
  },
  {
    "Organization": "North-1",
    "Manager Name": "Rajiv Bhatia",
    "Manager Level": "MD",
    "Dealer Name": "VE Commercial Vehicle (COCO)-Kathua",
    "SCode": "1S1260",
    "State": "Jammu and Kashmir",
    "City": "Kathua",
    "Contact No.": "9099081669"
  },
  {
    "Organization": "North-1",
    "Manager Name": "Adarsh Prasad",
    "Manager Level": "RSM",
    "Dealer Name": "VE Commercial Vehicle (COCO)-Kathua",
    "SCode": "1S1260",
    "State": "Jammu and Kashmir",
    "City": "Kathua",
    "Contact No.": "9717996321"
  },
  {
    "Organization": "North-1",
    "Manager Name": "Ravdeep Singh",
    "Manager Level": "CSM",
    "Dealer Name": "VE Commercial Vehicle (COCO)-Kathua",
    "SCode": "1S1260",
    "State": "Jammu and Kashmir",
    "City": "Kathua",
    "Contact No.": "6363111313"
  },
  {
    "Organization": "North-2",
    "Manager Name": "Krishnendu Saha",
    "Manager Level": "RSM",
    "Dealer Name": "VE Commercial Vehicle (COCO)-Kherwadi",
    "SCode": "1S7082",
    "State": "Rajasthan",
    "City": "Jaipur",
    "Contact No.": "7980433425"
  },
  {
    "Organization": "North-2",
    "Manager Name": "Yogesh Kumar Tomar / Gundeep Singh",
    "Manager Level": "MD",
    "Dealer Name": "VE Commercial Vehicle (COCO)-Kherwadi",
    "SCode": "1S7082",
    "State": "Rajasthan",
    "City": "Jaipur",
    "Contact No.": "9871296923,9928011217"
  },
  {
    "Organization": "North-2",
    "Manager Name": "Amit Pandey",
    "Manager Level": "ASM",
    "Dealer Name": "VE Commercial Vehicle (COCO)-Kherwadi",
    "SCode": "1S7082",
    "State": "Rajasthan",
    "City": "Jaipur",
    "Contact No.": "9099979633"
  },
  {
    "Organization": "North-2",
    "Manager Name": "Hansraj",
    "Manager Level": "EOS Site Incharge",
    "Dealer Name": "VE Commercial Vehicle (COCO)-Kherwadi",
    "SCode": "1S7082",
    "State": "Rajasthan",
    "City": "Jaipur",
    "Contact No.": "8824251276"
  },
  {
    "Organization": "North-2",
    "Manager Name": "Hansraj / Rakesh Maherwal",
    "Manager Level": "WM",
    "Dealer Name": "VE Commercial Vehicle (COCO)-Kherwadi",
    "SCode": "1S7082",
    "State": "Rajasthan",
    "City": "Jaipur",
    "Contact No.": "9664413624,9829204821"
  },
  {
    "Organization": "North-2",
    "Manager Name": "Amrit Satsangi / Shivam Bharadwaj (N)",
    "Manager Level": "CSM",
    "Dealer Name": "VE Commercial Vehicle (COCO)-Kherwadi",
    "SCode": "1S7082",
    "State": "Rajasthan",
    "City": "Jaipur",
    "Contact No.": "8302169270,7878175706"
  },
  {
    "Organization": "East-2",
    "Manager Name": "Niket Kumar",
    "Manager Level": "RSM",
    "Dealer Name": "VE Commercial Vehicle (COCO)-Koira",
    "SCode": "1S2163",
    "State": "Odisha",
    "City": "Barbil",
    "Contact No.": "8427733112"
  },
  {
    "Organization": "East-2",
    "Manager Name": "Ranjan Paikaray",
    "Manager Level": "EOS Site Incharge",
    "Dealer Name": "VE Commercial Vehicle (COCO)-Koira",
    "SCode": "1S2163",
    "State": "Odisha",
    "City": "Barbil",
    "Contact No.": "8917451723"
  },
  {
    "Organization": "East-2",
    "Manager Name": "Tapas Pradhan",
    "Manager Level": "MD",
    "Dealer Name": "VE Commercial Vehicle (COCO)-Koira",
    "SCode": "1S2163",
    "State": "Odisha",
    "City": "Barbil",
    "Contact No.": "9937291938"
  },
  {
    "Organization": "East-2",
    "Manager Name": "Sanjoy Nayek",
    "Manager Level": "ASM",
    "Dealer Name": "VE Commercial Vehicle (COCO)-Koira",
    "SCode": "1S2163",
    "State": "Odisha",
    "City": "Barbil",
    "Contact No.": "8001165218"
  },
  {
    "Organization": "East-2",
    "Manager Name": "Rakshit Gorai",
    "Manager Level": "WM",
    "Dealer Name": "VE Commercial Vehicle (COCO)-Koira",
    "SCode": "1S2163",
    "State": "Odisha",
    "City": "Barbil",
    "Contact No.": "9801529208"
  },
  {
    "Organization": "East-2",
    "Manager Name": "Rishav Das",
    "Manager Level": "CSM",
    "Dealer Name": "VE Commercial Vehicle (COCO)-Koira",
    "SCode": "1S2163",
    "State": "Odisha",
    "City": "Barbil",
    "Contact No.": "7439531201"
  },
  {
    "Organization": "South-2",
    "Manager Name": "Shivakumar",
    "Manager Level": "WM",
    "Dealer Name": "VE Commercial Vehicle (COCO)-Kolar",
    "SCode": "1S6185",
    "State": "Karnataka",
    "City": "Kolar",
    "Contact No.": "7406770331"
  },
  {
    "Organization": "South-2",
    "Manager Name": "Manikandan",
    "Manager Level": "MD",
    "Dealer Name": "VE Commercial Vehicle (COCO)-Kolar",
    "SCode": "1S6185",
    "State": "Karnataka",
    "City": "Kolar",
    "Contact No.": "9500045999"
  },
  {
    "Organization": "South-2",
    "Manager Name": "S Balaji",
    "Manager Level": "ASM",
    "Dealer Name": "VE Commercial Vehicle (COCO)-Kolar",
    "SCode": "1S6185",
    "State": "Karnataka",
    "City": "Kolar",
    "Contact No.": "9840833723"
  },
  {
    "Organization": "South-2",
    "Manager Name": "Nagesh",
    "Manager Level": "EOS Site Incharge",
    "Dealer Name": "VE Commercial Vehicle (COCO)-Kolar",
    "SCode": "1S6185",
    "State": "Karnataka",
    "City": "Kolar",
    "Contact No.": "9980552387"
  },
  {
    "Organization": "South-2",
    "Manager Name": "Praveen Kumar B (D) / Jeevan Kumar (N)",
    "Manager Level": "CSM",
    "Dealer Name": "VE Commercial Vehicle (COCO)-Kolar",
    "SCode": "1S6185",
    "State": "Karnataka",
    "City": "Kolar",
    "Contact No.": "8838864138,7892822611"
  },
  {
    "Organization": "South-2",
    "Manager Name": "N Narayanan",
    "Manager Level": "RSM",
    "Dealer Name": "VE Commercial Vehicle (COCO)-Kolar",
    "SCode": "1S6185",
    "State": "Karnataka",
    "City": "Kolar",
    "Contact No.": "8123036700"
  },
  {
    "Organization": "East-1",
    "Manager Name": "Manish Sharma",
    "Manager Level": "MD",
    "Dealer Name": "VE Commercial Vehicle (COCO)-Kolkata",
    "SCode": "1S2124",
    "State": "West Bengal",
    "City": "Kolkata",
    "Contact No.": "8288077524"
  },
  {
    "Organization": "East-1",
    "Manager Name": "Yogeshwar Singh",
    "Manager Level": "RSM",
    "Dealer Name": "VE Commercial Vehicle (COCO)-Kolkata",
    "SCode": "1S2124",
    "State": "West Bengal",
    "City": "Kolkata",
    "Contact No.": "9717966997"
  },
  {
    "Organization": "East-1",
    "Manager Name": "Shibsankar Karmakar",
    "Manager Level": "WM",
    "Dealer Name": "VE Commercial Vehicle (COCO)-Kolkata",
    "SCode": "1S2124",
    "State": "West Bengal",
    "City": "Kolkata",
    "Contact No.": "9932064261"
  },
  {
    "Organization": "East-1",
    "Manager Name": "Aayush Mondal",
    "Manager Level": "CSM",
    "Dealer Name": "VE Commercial Vehicle (COCO)-Kolkata",
    "SCode": "1S2124",
    "State": "West Bengal",
    "City": "Kolkata",
    "Contact No.": "8910204452"
  },
  {
    "Organization": "East-1",
    "Manager Name": "Abhirup Ghosh",
    "Manager Level": "ASM",
    "Dealer Name": "VE Commercial Vehicle (COCO)-Kolkata",
    "SCode": "1S2124",
    "State": "West Bengal",
    "City": "Kolkata",
    "Contact No.": "9073378080"
  },
  {
    "Organization": "East-1",
    "Manager Name": "Balaram Das",
    "Manager Level": "EOS Site Incharge",
    "Dealer Name": "VE Commercial Vehicle (COCO)-Kolkata",
    "SCode": "1S2124",
    "State": "West Bengal",
    "City": "Kolkata",
    "Contact No.": "7980294757"
  },
  {
    "Organization": "North-2",
    "Manager Name": "Jivnesh Tyagi / Shivam Bharadwaj (N)",
    "Manager Level": "CSM",
    "Dealer Name": "VE Commercial Vehicle (COCO)-Kotputli",
    "SCode": "1S7091",
    "State": "Rajasthan",
    "City": "Alwar",
    "Contact No.": "9664163745,7878175706"
  },
  {
    "Organization": "North-2",
    "Manager Name": "Amit Pandey",
    "Manager Level": "ASM",
    "Dealer Name": "VE Commercial Vehicle (COCO)-Kotputli",
    "SCode": "1S7091",
    "State": "Rajasthan",
    "City": "Alwar",
    "Contact No.": "9099979633"
  },
  {
    "Organization": "North-2",
    "Manager Name": "Rahul Singh",
    "Manager Level": "EOS Site Incharge",
    "Dealer Name": "VE Commercial Vehicle (COCO)-Kotputli",
    "SCode": "1S7091",
    "State": "Rajasthan",
    "City": "Alwar",
    "Contact No.": "7006413761"
  },
  {
    "Organization": "North-2",
    "Manager Name": "Arvind Sharma",
    "Manager Level": "WM",
    "Dealer Name": "VE Commercial Vehicle (COCO)-Kotputli",
    "SCode": "1S7091",
    "State": "Rajasthan",
    "City": "Alwar",
    "Contact No.": "7830767599"
  },
  {
    "Organization": "North-2",
    "Manager Name": "Yogesh Tomar",
    "Manager Level": "MD",
    "Dealer Name": "VE Commercial Vehicle (COCO)-Kotputli",
    "SCode": "1S7091",
    "State": "Rajasthan",
    "City": "Alwar",
    "Contact No.": "9871296923"
  },
  {
    "Organization": "North-2",
    "Manager Name": "Krishnendu Saha",
    "Manager Level": "RSM",
    "Dealer Name": "VE Commercial Vehicle (COCO)-Kotputli",
    "SCode": "1S7091",
    "State": "Rajasthan",
    "City": "Alwar",
    "Contact No.": "7980433425"
  },
  {
    "Organization": "North-1",
    "Manager Name": "Anup Kumar",
    "Manager Level": "WM",
    "Dealer Name": "VE Commercial Vehicle (COCO)-Leh",
    "SCode": "1S1272",
    "State": "Ladakh",
    "City": "Leh",
    "Contact No.": "8493870783"
  },
  {
    "Organization": "North-1",
    "Manager Name": "Ravdeep Singh",
    "Manager Level": "CSM",
    "Dealer Name": "VE Commercial Vehicle (COCO)-Leh",
    "SCode": "1S1272",
    "State": "Ladakh",
    "City": "Leh",
    "Contact No.": "6363111313"
  },
  {
    "Organization": "North-1",
    "Manager Name": "Varun Trivedi / Rajiv Bhatia",
    "Manager Level": "MD",
    "Dealer Name": "VE Commercial Vehicle (COCO)-Leh",
    "SCode": "1S1272",
    "State": "Ladakh",
    "City": "Leh",
    "Contact No.": "7087379277,9099081669"
  },
  {
    "Organization": "North-1",
    "Manager Name": "Nitin",
    "Manager Level": "EOS Site Incharge",
    "Dealer Name": "VE Commercial Vehicle (COCO)-Leh",
    "SCode": "1S1272",
    "State": "Ladakh",
    "City": "Leh",
    "Contact No.": "8082788898"
  },
  {
    "Organization": "North-1",
    "Manager Name": "Adarsh Prasad",
    "Manager Level": "RSM",
    "Dealer Name": "VE Commercial Vehicle (COCO)-Leh",
    "SCode": "1S1272",
    "State": "Ladakh",
    "City": "Leh",
    "Contact No.": "9717996321"
  },
  {
    "Organization": "North-1",
    "Manager Name": "Vaibhav Katyal",
    "Manager Level": "ASM",
    "Dealer Name": "VE Commercial Vehicle (COCO)-Leh",
    "SCode": "1S1272",
    "State": "Ladakh",
    "City": "Leh",
    "Contact No.": "9219500351"
  },
  {
    "Organization": "North-1",
    "Manager Name": "Sandeep",
    "Manager Level": "EOS Site Incharge",
    "Dealer Name": "VE Commercial Vehicle (COCO)-Ludhiana",
    "SCode": "1S1276",
    "State": "Punjab",
    "City": "Ludhiana",
    "Contact No.": "8288956577"
  },
  {
    "Organization": "North-1",
    "Manager Name": "Shazib Hussain",
    "Manager Level": "MD",
    "Dealer Name": "VE Commercial Vehicle (COCO)-Ludhiana",
    "SCode": "1S1276",
    "State": "Punjab",
    "City": "Ludhiana",
    "Contact No.": "9760130201"
  },
  {
    "Organization": "North-1",
    "Manager Name": "Adarsh Prasad",
    "Manager Level": "RSM",
    "Dealer Name": "VE Commercial Vehicle (COCO)-Ludhiana",
    "SCode": "1S1276",
    "State": "Punjab",
    "City": "Ludhiana",
    "Contact No.": "9717996321"
  },
  {
    "Organization": "North-1",
    "Manager Name": "Vaibhav Katyal",
    "Manager Level": "ASM",
    "Dealer Name": "VE Commercial Vehicle (COCO)-Ludhiana",
    "SCode": "1S1276",
    "State": "Punjab",
    "City": "Ludhiana",
    "Contact No.": "9219500351"
  },
  {
    "Organization": "North-1",
    "Manager Name": "Amit / Taj Baba Khan",
    "Manager Level": "WM",
    "Dealer Name": "VE Commercial Vehicle (COCO)-Ludhiana",
    "SCode": "1S1276",
    "State": "Punjab",
    "City": "Ludhiana",
    "Contact No.": "7056324677,9876917569"
  },
  {
    "Organization": "North-1",
    "Manager Name": "Deepak Jain",
    "Manager Level": "CSM",
    "Dealer Name": "VE Commercial Vehicle (COCO)-Ludhiana",
    "SCode": "1S1276",
    "State": "Punjab",
    "City": "Ludhiana",
    "Contact No.": "9501640021"
  },
  {
    "Organization": "South-1",
    "Manager Name": "Manikandan S / N Saravanan",
    "Manager Level": "MD",
    "Dealer Name": "VE Commercial Vehicle (COCO)-Madhavaram",
    "SCode": "1S4127",
    "State": "Tamil Nadu",
    "City": "Chennai",
    "Contact No.": "9500045999,9600068804"
  },
  {
    "Organization": "South-1",
    "Manager Name": "Vijay G (D) / Yuvaraj B (N)",
    "Manager Level": "CSM",
    "Dealer Name": "VE Commercial Vehicle (COCO)-Madhavaram",
    "SCode": "1S4127",
    "State": "Tamil Nadu",
    "City": "Chennai",
    "Contact No.": "8754242362,9543338783"
  },
  {
    "Organization": "South-1",
    "Manager Name": "Suresh A (N) / Thameem Ansari",
    "Manager Level": "WM",
    "Dealer Name": "VE Commercial Vehicle (COCO)-Madhavaram",
    "SCode": "1S4127",
    "State": "Tamil Nadu",
    "City": "Chennai",
    "Contact No.": "7824887568,7824887550"
  },
  {
    "Organization": "South-1",
    "Manager Name": "Radhakrishnan",
    "Manager Level": "RSM",
    "Dealer Name": "VE Commercial Vehicle (COCO)-Madhavaram",
    "SCode": "1S4127",
    "State": "Tamil Nadu",
    "City": "Salem",
    "Contact No.": "9840730250"
  },
  {
    "Organization": "South-1",
    "Manager Name": "Vasantha Kumar T",
    "Manager Level": "ASM",
    "Dealer Name": "VE Commercial Vehicle (COCO)-Madhavaram",
    "SCode": "1S4127",
    "State": "Tamil Nadu",
    "City": "Chennai",
    "Contact No.": "9790754777"
  },
  {
    "Organization": "South-1",
    "Manager Name": "Abdul Hakkeem (D) / Manikandan (D)",
    "Manager Level": "EOS Site Incharge",
    "Dealer Name": "VE Commercial Vehicle (COCO)-Madhavaram",
    "SCode": "1S4127",
    "State": "Tamil Nadu",
    "City": "Chennai",
    "Contact No.": "7824056011,7824056013"
  },
  {
    "Organization": "North-2",
    "Manager Name": "Rahul Ramesh Sharma / Gundeep Singh",
    "Manager Level": "MD",
    "Dealer Name": "VE Commercial Vehicle (COCO)-Mahala",
    "SCode": "1S7036",
    "State": "Rajasthan",
    "City": "Jaipur",
    "Contact No.": "9987711985,9928011217"
  },
  {
    "Organization": "North-2",
    "Manager Name": "Ajay Yadav",
    "Manager Level": "EOS Site Incharge",
    "Dealer Name": "VE Commercial Vehicle (COCO)-Mahala",
    "SCode": "1S7036",
    "State": "Rajasthan",
    "City": "Jaipur",
    "Contact No.": "9001917070"
  },
  {
    "Organization": "North-2",
    "Manager Name": "Vijay Panwar",
    "Manager Level": "WM",
    "Dealer Name": "VE Commercial Vehicle (COCO)-Mahala",
    "SCode": "1S7036",
    "State": "Rajasthan",
    "City": "Jaipur",
    "Contact No.": "9828968333"
  },
  {
    "Organization": "North-2",
    "Manager Name": "Krishnendu Saha",
    "Manager Level": "RSM",
    "Dealer Name": "VE Commercial Vehicle (COCO)-Mahala",
    "SCode": "1S7036",
    "State": "Rajasthan",
    "City": "Jaipur",
    "Contact No.": "7980433425"
  },
  {
    "Organization": "North-2",
    "Manager Name": "Jivnesh / Shivam",
    "Manager Level": "CSM",
    "Dealer Name": "VE Commercial Vehicle (COCO)-Mahala",
    "SCode": "1S7036",
    "State": "Rajasthan",
    "City": "Jaipur",
    "Contact No.": "9664163745,7878175706"
  },
  {
    "Organization": "North-2",
    "Manager Name": "Amit Pandey",
    "Manager Level": "ASM",
    "Dealer Name": "VE Commercial Vehicle (COCO)-Mahala",
    "SCode": "1S7036",
    "State": "Rajasthan",
    "City": "Jaipur",
    "Contact No.": "9099979633"
  },
  {
    "Organization": "East-1",
    "Manager Name": "Aayush Mondal",
    "Manager Level": "CSM",
    "Dealer Name": "VE Commercial Vehicle (COCO)-Malda",
    "SCode": "1S2278",
    "State": "West Bengal",
    "City": "Malda",
    "Contact No.": "8910204452"
  },
  {
    "Organization": "East-1",
    "Manager Name": "Yogeshwar Singh",
    "Manager Level": "RSM",
    "Dealer Name": "VE Commercial Vehicle (COCO)-Malda",
    "SCode": "1S2278",
    "State": "West Bengal",
    "City": "Malda",
    "Contact No.": "9717966997"
  },
  {
    "Organization": "East-1",
    "Manager Name": "Partho Das",
    "Manager Level": "EOS Site Incharge",
    "Dealer Name": "VE Commercial Vehicle (COCO)-Malda",
    "SCode": "1S2278",
    "State": "West Bengal",
    "City": "Malda",
    "Contact No.": "7908343772"
  },
  {
    "Organization": "East-1",
    "Manager Name": "Abhirup Ghosh",
    "Manager Level": "ASM",
    "Dealer Name": "VE Commercial Vehicle (COCO)-Malda",
    "SCode": "1S2278",
    "State": "West Bengal",
    "City": "Malda",
    "Contact No.": "9073378080"
  },
  {
    "Organization": "East-1",
    "Manager Name": "Raj Kumar Singh",
    "Manager Level": "WM",
    "Dealer Name": "VE Commercial Vehicle (COCO)-Malda",
    "SCode": "1S2278",
    "State": "West Bengal",
    "City": "Malda",
    "Contact No.": "6295855931"
  },
  {
    "Organization": "East-1",
    "Manager Name": "Abhijit Kumar",
    "Manager Level": "MD",
    "Dealer Name": "VE Commercial Vehicle (COCO)-Malda",
    "SCode": "1S2278",
    "State": "West Bengal",
    "City": "Malda",
    "Contact No.": "9874964666"
  },
  {
    "Organization": "South-2",
    "Manager Name": "N Narayanan",
    "Manager Level": "RSM",
    "Dealer Name": "VE Commercial Vehicle (COCO)-Mandya",
    "SCode": "1S6179",
    "State": "Karnataka",
    "City": "Mandya",
    "Contact No.": "8123036700"
  },
  {
    "Organization": "South-2",
    "Manager Name": "Praveen Kumar B (D) / Jeevan Kumar (N)",
    "Manager Level": "CSM",
    "Dealer Name": "VE Commercial Vehicle (COCO)-Mandya",
    "SCode": "1S6179",
    "State": "Karnataka",
    "City": "Mandya",
    "Contact No.": "8838864138,7892822611"
  },
  {
    "Organization": "South-2",
    "Manager Name": "Prashanth",
    "Manager Level": "WM",
    "Dealer Name": "VE Commercial Vehicle (COCO)-Mandya",
    "SCode": "1S6179",
    "State": "Karnataka",
    "City": "Mandya",
    "Contact No.": "9739972045"
  },
  {
    "Organization": "South-2",
    "Manager Name": "Manikandan",
    "Manager Level": "MD",
    "Dealer Name": "VE Commercial Vehicle (COCO)-Mandya",
    "SCode": "1S6179",
    "State": "Karnataka",
    "City": "Mandya",
    "Contact No.": "9500045999"
  },
  {
    "Organization": "South-2",
    "Manager Name": "Udaykumar M",
    "Manager Level": "EOS Site Incharge",
    "Dealer Name": "VE Commercial Vehicle (COCO)-Mandya",
    "SCode": "1S6179",
    "State": "Karnataka",
    "City": "Mandya",
    "Contact No.": "9900031538"
  },
  {
    "Organization": "South-2",
    "Manager Name": "S Balaji",
    "Manager Level": "ASM",
    "Dealer Name": "VE Commercial Vehicle (COCO)-Mandya",
    "SCode": "1S6179",
    "State": "Karnataka",
    "City": "Mandya",
    "Contact No.": "9840833723"
  },
  {
    "Organization": "West-2",
    "Manager Name": "Dinesh Sali / laxman Pachpande",
    "Manager Level": "MD",
    "Dealer Name": "VE Commercial Vehicle (COCO)-Mundra",
    "SCode": "1S3415",
    "State": "Gujarat",
    "City": "Bhuj",
    "Contact No.": "9724312411,9920281839"
  },
  {
    "Organization": "West-2",
    "Manager Name": "Vipul Barot",
    "Manager Level": "ASM",
    "Dealer Name": "VE Commercial Vehicle (COCO)-Mundra",
    "SCode": "1S3415",
    "State": "Gujarat",
    "City": "Bhuj",
    "Contact No.": "9638341568"
  },
  {
    "Organization": "West-2",
    "Manager Name": "Giriraj Gurjariya",
    "Manager Level": "WM",
    "Dealer Name": "VE Commercial Vehicle (COCO)-Mundra",
    "SCode": "1S3415",
    "State": "Gujarat",
    "City": "Bhuj",
    "Contact No.": "9725862206"
  },
  {
    "Organization": "West-2",
    "Manager Name": "Sudhir Kumar",
    "Manager Level": "RSM",
    "Dealer Name": "VE Commercial Vehicle (COCO)-Mundra",
    "SCode": "1S3415",
    "State": "Gujarat",
    "City": "Bhuj",
    "Contact No.": "9752542733"
  },
  {
    "Organization": "West-2",
    "Manager Name": "Ishwar Singh Bisht",
    "Manager Level": "CSM",
    "Dealer Name": "VE Commercial Vehicle (COCO)-Mundra",
    "SCode": "1S3415",
    "State": "Gujarat",
    "City": "Bhuj",
    "Contact No.": "6398989252"
  },
  {
    "Organization": "East-1",
    "Manager Name": "Sahjad Khan / Vikram Kumar",
    "Manager Level": "EOS Site Incharge",
    "Dealer Name": "VE Commercial Vehicle (COCO)-Muzaffarpur",
    "SCode": "1S2279",
    "State": "Bihar",
    "City": "Muzaffarpur",
    "Contact No.": "8676888858,6299725905"
  },
  {
    "Organization": "East-1",
    "Manager Name": "Abhijit Kumar",
    "Manager Level": "MD",
    "Dealer Name": "VE Commercial Vehicle (COCO)-Muzaffarpur",
    "SCode": "1S2279",
    "State": "Bihar",
    "City": "Muzaffarpur",
    "Contact No.": "9874964666"
  },
  {
    "Organization": "East-1",
    "Manager Name": "Yogeshwar Singh",
    "Manager Level": "RSM",
    "Dealer Name": "VE Commercial Vehicle (COCO)-Muzaffarpur",
    "SCode": "1S2279",
    "State": "Bihar",
    "City": "Muzaffarpur",
    "Contact No.": "9717966997"
  },
  {
    "Organization": "East-1",
    "Manager Name": "Krishna Bhushan",
    "Manager Level": "ASM",
    "Dealer Name": "VE Commercial Vehicle (COCO)-Muzaffarpur",
    "SCode": "1S2279",
    "State": "Bihar",
    "City": "Muzaffarpur",
    "Contact No.": "6202531709"
  },
  {
    "Organization": "East-1",
    "Manager Name": "Ashutosh Ashutosh Sharma / Chand AlamSharma",
    "Manager Level": "WM",
    "Dealer Name": "VE Commercial Vehicle (COCO)-Muzaffarpur",
    "SCode": "1S2279",
    "State": "Bihar",
    "City": "Muzaffarpur",
    "Contact No.": "9145131047,8015710259"
  },
  {
    "Organization": "East-1",
    "Manager Name": "Santosh Ray",
    "Manager Level": "CSM",
    "Dealer Name": "VE Commercial Vehicle (COCO)-Muzaffarpur",
    "SCode": "1S2279",
    "State": "Bihar",
    "City": "Muzaffarpur",
    "Contact No.": "7667384075"
  },
  {
    "Organization": "West-1",
    "Manager Name": "Sahil Bisht",
    "Manager Level": "ASM",
    "Dealer Name": "VE Commercial Vehicle (COCO)-Naigaon",
    "SCode": "1S3435",
    "State": "Maharashtra",
    "City": "Vasai-virar",
    "Contact No.": "7304491771"
  },
  {
    "Organization": "West-1",
    "Manager Name": "Suhas Ramchandra Mane",
    "Manager Level": "RSM",
    "Dealer Name": "VE Commercial Vehicle (COCO)-Naigaon",
    "SCode": "1S3435",
    "State": "Maharashtra",
    "City": "Vasai-virar",
    "Contact No.": "8454812225"
  },
  {
    "Organization": "West-1",
    "Manager Name": "Veerendra Vishwakarma",
    "Manager Level": "WM",
    "Dealer Name": "VE Commercial Vehicle (COCO)-Naigaon",
    "SCode": "1S3435",
    "State": "Maharashtra",
    "City": "Vasai-virar",
    "Contact No.": "8097108589"
  },
  {
    "Organization": "West-1",
    "Manager Name": "Aditya Singh",
    "Manager Level": "CSM",
    "Dealer Name": "VE Commercial Vehicle (COCO)-Naigaon",
    "SCode": "1S3435",
    "State": "Maharashtra",
    "City": "Vasai-virar",
    "Contact No.": "8591537682"
  },
  {
    "Organization": "West-1",
    "Manager Name": "Samuel J Jathanna",
    "Manager Level": "MD",
    "Dealer Name": "VE Commercial Vehicle (COCO)-Naigaon",
    "SCode": "1S3435",
    "State": "Maharashtra",
    "City": "Vasai-virar",
    "Contact No.": "8097108589"
  },
  {
    "Organization": "West-1",
    "Manager Name": "Arpit Singh",
    "Manager Level": "EOS Site Incharge",
    "Dealer Name": "VE Commercial Vehicle (COCO)-Naigaon",
    "SCode": "1S3435",
    "State": "Maharashtra",
    "City": "Vasai-virar",
    "Contact No.": "7526062555"
  },
  {
    "Organization": "East-2",
    "Manager Name": "KARTICK CHANDRA DAS",
    "Manager Level": "EOS Site Incharge",
    "Dealer Name": "VE Commercial Vehicle (COCO)-Nayagarh",
    "SCode": "1S2192",
    "State": "Odisha",
    "City": "Nayagarh",
    "Contact No.": "8114394313,8093101474"
  },
  {
    "Organization": "East-2",
    "Manager Name": "Arpan Biswal",
    "Manager Level": "CSM",
    "Dealer Name": "VE Commercial Vehicle (COCO)-Nayagarh",
    "SCode": "1S2192",
    "State": "Odisha",
    "City": "Nayagarh",
    "Contact No.": "7008536363"
  },
  {
    "Organization": "East-2",
    "Manager Name": "Niket Kumar",
    "Manager Level": "RSM",
    "Dealer Name": "VE Commercial Vehicle (COCO)-Nayagarh",
    "SCode": "1S2192",
    "State": "Odisha",
    "City": "Nayagarh",
    "Contact No.": "8427733112"
  },
  {
    "Organization": "East-2",
    "Manager Name": "Tapash Pradhan",
    "Manager Level": "MD",
    "Dealer Name": "VE Commercial Vehicle (COCO)-Nayagarh",
    "SCode": "1S2192",
    "State": "Odisha",
    "City": "Nayagarh",
    "Contact No.": "9937291938"
  },
  {
    "Organization": "East-2",
    "Manager Name": "SANATAN BEHERA",
    "Manager Level": "WM",
    "Dealer Name": "VE Commercial Vehicle (COCO)-Nayagarh",
    "SCode": "1S2192",
    "State": "Odisha",
    "City": "Nayagarh",
    "Contact No.": "7328812024"
  },
  {
    "Organization": "East-2",
    "Manager Name": "Sanjoy Nayek",
    "Manager Level": "ASM",
    "Dealer Name": "VE Commercial Vehicle (COCO)-Nayagarh",
    "SCode": "1S2192",
    "State": "Odisha",
    "City": "Nayagarh",
    "Contact No.": "8001165218"
  },
  {
    "Organization": "East-2",
    "Manager Name": "Sanjoy Nayek",
    "Manager Level": "ASM",
    "Dealer Name": "VE Commercial Vehicle (COCO)-Paradip",
    "SCode": "1S2167",
    "State": "Odisha",
    "City": "Paradip",
    "Contact No.": "8001165218"
  },
  {
    "Organization": "East-2",
    "Manager Name": "Subhodip Roy",
    "Manager Level": "CSM",
    "Dealer Name": "VE Commercial Vehicle (COCO)-Paradip",
    "SCode": "1S2167",
    "State": "Odisha",
    "City": "Paradip",
    "Contact No.": "9007883391"
  },
  {
    "Organization": "East-2",
    "Manager Name": "Gautam Swain",
    "Manager Level": "EOS Site Incharge",
    "Dealer Name": "VE Commercial Vehicle (COCO)-Paradip",
    "SCode": "1S2167",
    "State": "Odisha",
    "City": "Paradip",
    "Contact No.": "7008245291"
  },
  {
    "Organization": "East-2",
    "Manager Name": "Bidesh Nayak",
    "Manager Level": "WM",
    "Dealer Name": "VE Commercial Vehicle (COCO)-Paradip",
    "SCode": "1S2167",
    "State": "Odisha",
    "City": "Paradip",
    "Contact No.": "7008497694"
  },
  {
    "Organization": "East-2",
    "Manager Name": "Niket Kumar",
    "Manager Level": "RSM",
    "Dealer Name": "VE Commercial Vehicle (COCO)-Paradip",
    "SCode": "1S2167",
    "State": "Odisha",
    "City": "Paradip",
    "Contact No.": "8427733112"
  },
  {
    "Organization": "East-2",
    "Manager Name": "Sanjit Sarangi",
    "Manager Level": "MD",
    "Dealer Name": "VE Commercial Vehicle (COCO)-Paradip",
    "SCode": "1S2167",
    "State": "Odisha",
    "City": "Paradip",
    "Contact No.": "8334964567"
  },
  {
    "Organization": "North-1",
    "Manager Name": "Manoj Kumar",
    "Manager Level": "WM",
    "Dealer Name": "VE Commercial Vehicle (COCO)-Pathankot",
    "SCode": "1S1258",
    "State": "Punjab",
    "City": "Pathankot",
    "Contact No.": "9205011092"
  },
  {
    "Organization": "North-1",
    "Manager Name": "Ravdeep Singh",
    "Manager Level": "CSM",
    "Dealer Name": "VE Commercial Vehicle (COCO)-Pathankot",
    "SCode": "1S1258",
    "State": "Punjab",
    "City": "Pathankot",
    "Contact No.": "6363111313"
  },
  {
    "Organization": "North-1",
    "Manager Name": "Vaibhav Katyal",
    "Manager Level": "ASM",
    "Dealer Name": "VE Commercial Vehicle (COCO)-Pathankot",
    "SCode": "1S1258",
    "State": "Punjab",
    "City": "Pathankot",
    "Contact No.": "9219500351"
  },
  {
    "Organization": "North-1",
    "Manager Name": "Vikas / Rahul",
    "Manager Level": "EOS Site Incharge",
    "Dealer Name": "VE Commercial Vehicle (COCO)-Pathankot",
    "SCode": "1S1258",
    "State": "Punjab",
    "City": "Pathankot",
    "Contact No.": "9103371046,6230832810"
  },
  {
    "Organization": "North-1",
    "Manager Name": "Adarsh Prasad",
    "Manager Level": "RSM",
    "Dealer Name": "VE Commercial Vehicle (COCO)-Pathankot",
    "SCode": "1S1258",
    "State": "Punjab",
    "City": "Pathankot",
    "Contact No.": "9717996321"
  },
  {
    "Organization": "North-1",
    "Manager Name": "Shazib Hussain / Jaideep Singh",
    "Manager Level": "MD",
    "Dealer Name": "VE Commercial Vehicle (COCO)-Pathankot",
    "SCode": "1S1258",
    "State": "Punjab",
    "City": "Pathankot",
    "Contact No.": "9760130206,9971626005"
  },
  {
    "Organization": "West-1",
    "Manager Name": "Sahil Bisht",
    "Manager Level": "ASM",
    "Dealer Name": "VE Commercial Vehicle (COCO)-Potner",
    "SCode": "1S3429",
    "State": "Maharashtra",
    "City": "Pune",
    "Contact No.": "7304491771"
  },
  {
    "Organization": "West-1",
    "Manager Name": "Suhas Ramchandra Mane",
    "Manager Level": "RSM",
    "Dealer Name": "VE Commercial Vehicle (COCO)-Potner",
    "SCode": "1S3429",
    "State": "Maharashtra",
    "City": "Pune",
    "Contact No.": "8454812225"
  },
  {
    "Organization": "West-1",
    "Manager Name": "Jayesh Bane",
    "Manager Level": "WM",
    "Dealer Name": "VE Commercial Vehicle (COCO)-Potner",
    "SCode": "1S3429",
    "State": "Maharashtra",
    "City": "Pune",
    "Contact No.": "8999221470"
  },
  {
    "Organization": "West-1",
    "Manager Name": "Sachin Ghadghe",
    "Manager Level": "MD",
    "Dealer Name": "VE Commercial Vehicle (COCO)-Potner",
    "SCode": "1S3429",
    "State": "Maharashtra",
    "City": "Pune",
    "Contact No.": "7506333581"
  },
  {
    "Organization": "West-1",
    "Manager Name": "Sahil Iqbal Shah",
    "Manager Level": "CSM",
    "Dealer Name": "VE Commercial Vehicle (COCO)-Potner",
    "SCode": "1S3429",
    "State": "Maharashtra",
    "City": "Pune",
    "Contact No.": "7620470429"
  },
  {
    "Organization": "West-1",
    "Manager Name": "Vishwajeet Hajare",
    "Manager Level": "EOS Site Incharge",
    "Dealer Name": "VE Commercial Vehicle (COCO)-Potner",
    "SCode": "1S3429",
    "State": "Maharashtra",
    "City": "Pune",
    "Contact No.": "8850316569"
  },
  {
    "Organization": "East-2",
    "Manager Name": "Niket Kumar",
    "Manager Level": "RSM",
    "Dealer Name": "VE Commercial Vehicle (COCO)-Puri",
    "SCode": "1S2190",
    "State": "Odisha",
    "City": "Puri",
    "Contact No.": "8427733112"
  },
  {
    "Organization": "East-2",
    "Manager Name": "Bibhu Prasad Mishra",
    "Manager Level": "WM",
    "Dealer Name": "VE Commercial Vehicle (COCO)-Puri",
    "SCode": "1S2190",
    "State": "Odisha",
    "City": "Puri",
    "Contact No.": "7077704639"
  },
  {
    "Organization": "East-2",
    "Manager Name": "Saubhagya Ranjan Mishra",
    "Manager Level": "EOS Site Incharge",
    "Dealer Name": "VE Commercial Vehicle (COCO)-Puri",
    "SCode": "1S2190",
    "State": "Odisha",
    "City": "Puri",
    "Contact No.": "8114394315"
  },
  {
    "Organization": "East-2",
    "Manager Name": "Sanjoy Nayek",
    "Manager Level": "ASM",
    "Dealer Name": "VE Commercial Vehicle (COCO)-Puri",
    "SCode": "1S2190",
    "State": "Odisha",
    "City": "Puri",
    "Contact No.": "8001165218"
  },
  {
    "Organization": "East-2",
    "Manager Name": "Tapash Pradhan / Sanjit Sarangi",
    "Manager Level": "MD",
    "Dealer Name": "VE Commercial Vehicle (COCO)-Puri",
    "SCode": "1S2190",
    "State": "Odisha",
    "City": "Puri",
    "Contact No.": "9937291938,8334964567"
  },
  {
    "Organization": "East-2",
    "Manager Name": "Arpan Biswal",
    "Manager Level": "CSM",
    "Dealer Name": "VE Commercial Vehicle (COCO)-Puri",
    "SCode": "1S2190",
    "State": "Odisha",
    "City": "Puri",
    "Contact No.": "7008536363"
  },
  {
    "Organization": "East-1",
    "Manager Name": "Kaushik Kumar / Arun Kumar Gupta",
    "Manager Level": "WM",
    "Dealer Name": "VE Commercial Vehicle (COCO)-Purnia",
    "SCode": "1S2232",
    "State": "Bihar",
    "City": "Purnia",
    "Contact No.": "9083975139,7982873329"
  },
  {
    "Organization": "East-1",
    "Manager Name": "Krishna Bhushan",
    "Manager Level": "ASM",
    "Dealer Name": "VE Commercial Vehicle (COCO)-Purnia",
    "SCode": "1S2232",
    "State": "Bihar",
    "City": "Purnia",
    "Contact No.": "6202531709"
  },
  {
    "Organization": "East-1",
    "Manager Name": "Abhijit Kumar",
    "Manager Level": "MD",
    "Dealer Name": "VE Commercial Vehicle (COCO)-Purnia",
    "SCode": "1S2232",
    "State": "Bihar",
    "City": "Purnia",
    "Contact No.": "9874964666"
  },
  {
    "Organization": "East-1",
    "Manager Name": "Yogeshwar Singh",
    "Manager Level": "RSM",
    "Dealer Name": "VE Commercial Vehicle (COCO)-Purnia",
    "SCode": "1S2232",
    "State": "Bihar",
    "City": "Purnia",
    "Contact No.": "9717966997"
  },
  {
    "Organization": "East-1",
    "Manager Name": "Akshay Kumar",
    "Manager Level": "EOS Site Incharge",
    "Dealer Name": "VE Commercial Vehicle (COCO)-Purnia",
    "SCode": "1S2232",
    "State": "Bihar",
    "City": "Purnia",
    "Contact No.": "9153985763"
  },
  {
    "Organization": "East-1",
    "Manager Name": "Abhishek Kumar",
    "Manager Level": "CSM",
    "Dealer Name": "VE Commercial Vehicle (COCO)-Purnia",
    "SCode": "1S2232",
    "State": "Bihar",
    "City": "Purnia",
    "Contact No.": "9102558748"
  },
  {
    "Organization": "East-2",
    "Manager Name": "Swayam Prakash Pujahari",
    "Manager Level": "EOS Site Incharge",
    "Dealer Name": "VE Commercial Vehicle (COCO)-Rairakhol",
    "SCode": "1S2207",
    "State": "Odisha",
    "City": "Sambalpur",
    "Contact No.": "7008291828"
  },
  {
    "Organization": "East-2",
    "Manager Name": "Sanjoy Nayek",
    "Manager Level": "ASM",
    "Dealer Name": "VE Commercial Vehicle (COCO)-Rairakhol",
    "SCode": "1S2207",
    "State": "Odisha",
    "City": "Sambalpur",
    "Contact No.": "8001165218"
  },
  {
    "Organization": "East-2",
    "Manager Name": "Sailesh Moharana",
    "Manager Level": "CSM",
    "Dealer Name": "VE Commercial Vehicle (COCO)-Rairakhol",
    "SCode": "1S2207",
    "State": "Odisha",
    "City": "Sambalpur",
    "Contact No.": "9337951215"
  },
  {
    "Organization": "East-2",
    "Manager Name": "Tapas Pradhan",
    "Manager Level": "MD",
    "Dealer Name": "VE Commercial Vehicle (COCO)-Rairakhol",
    "SCode": "1S2207",
    "State": "Odisha",
    "City": "Sambalpur",
    "Contact No.": "9937291938"
  },
  {
    "Organization": "East-2",
    "Manager Name": "Niket Kumar",
    "Manager Level": "RSM",
    "Dealer Name": "VE Commercial Vehicle (COCO)-Rairakhol",
    "SCode": "1S2207",
    "State": "Odisha",
    "City": "Sambalpur",
    "Contact No.": "8427733112"
  },
  {
    "Organization": "East-2",
    "Manager Name": "Ashish Khatei",
    "Manager Level": "WM",
    "Dealer Name": "VE Commercial Vehicle (COCO)-Rairakhol",
    "SCode": "1S2207",
    "State": "Odisha",
    "City": "Sambalpur",
    "Contact No.": "9040118752"
  },
  {
    "Organization": "East-1",
    "Manager Name": "Samiur Rahaman",
    "Manager Level": "WM",
    "Dealer Name": "VE Commercial Vehicle (COCO)-Rampurhat",
    "SCode": "1S2172",
    "State": "West Bengal",
    "City": "Rampurhat",
    "Contact No.": "9775616677"
  },
  {
    "Organization": "East-1",
    "Manager Name": "Abhirup Ghosh",
    "Manager Level": "ASM",
    "Dealer Name": "VE Commercial Vehicle (COCO)-Rampurhat",
    "SCode": "1S2172",
    "State": "West Bengal",
    "City": "Rampurhat",
    "Contact No.": "9073378080"
  },
  {
    "Organization": "East-1",
    "Manager Name": "Yogeshwar Singh",
    "Manager Level": "RSM",
    "Dealer Name": "VE Commercial Vehicle (COCO)-Rampurhat",
    "SCode": "1S2172",
    "State": "West Bengal",
    "City": "Rampurhat",
    "Contact No.": "9717966997"
  },
  {
    "Organization": "East-1",
    "Manager Name": "Abhijit Kumar",
    "Manager Level": "MD",
    "Dealer Name": "VE Commercial Vehicle (COCO)-Rampurhat",
    "SCode": "1S2172",
    "State": "West Bengal",
    "City": "Rampurhat",
    "Contact No.": "9874964666"
  },
  {
    "Organization": "East-1",
    "Manager Name": "Avishek Paul",
    "Manager Level": "CSM",
    "Dealer Name": "VE Commercial Vehicle (COCO)-Rampurhat",
    "SCode": "1S2172",
    "State": "West Bengal",
    "City": "Rampurhat",
    "Contact No.": "8252059007"
  },
  {
    "Organization": "East-1",
    "Manager Name": "Abhishek Mazumder",
    "Manager Level": "EOS Site Incharge",
    "Dealer Name": "VE Commercial Vehicle (COCO)-Rampurhat",
    "SCode": "1S2172",
    "State": "West Bengal",
    "City": "Rampurhat",
    "Contact No.": "9007638635"
  },
  {
    "Organization": "East-2",
    "Manager Name": "Md Sajid",
    "Manager Level": "EOS Site Incharge",
    "Dealer Name": "VE Commercial Vehicle (COCO)-Raurkela",
    "SCode": "1S2117",
    "State": "Odisha",
    "City": "Raurkela",
    "Contact No.": "7978759225"
  },
  {
    "Organization": "East-2",
    "Manager Name": "Rupesh Jha",
    "Manager Level": "WM",
    "Dealer Name": "VE Commercial Vehicle (COCO)-Raurkela",
    "SCode": "1S2117",
    "State": "Odisha",
    "City": "Raurkela",
    "Contact No.": "8770959429"
  },
  {
    "Organization": "East-2",
    "Manager Name": "Niket Kumar",
    "Manager Level": "RSM",
    "Dealer Name": "VE Commercial Vehicle (COCO)-Raurkela",
    "SCode": "1S2117",
    "State": "Odisha",
    "City": "Raurkela",
    "Contact No.": "8427733112"
  },
  {
    "Organization": "East-2",
    "Manager Name": "Sanjoy Nayek",
    "Manager Level": "ASM",
    "Dealer Name": "VE Commercial Vehicle (COCO)-Raurkela",
    "SCode": "1S2117",
    "State": "Odisha",
    "City": "Raurkela",
    "Contact No.": "8001165218"
  },
  {
    "Organization": "East-2",
    "Manager Name": "Rishav Das",
    "Manager Level": "CSM",
    "Dealer Name": "VE Commercial Vehicle (COCO)-Raurkela",
    "SCode": "1S2117",
    "State": "Odisha",
    "City": "Raurkela",
    "Contact No.": "7439531201"
  },
  {
    "Organization": "East-2",
    "Manager Name": "Tapas Pradhan",
    "Manager Level": "MD",
    "Dealer Name": "VE Commercial Vehicle (COCO)-Raurkela",
    "SCode": "1S2117",
    "State": "Odisha",
    "City": "Raurkela",
    "Contact No.": "9937291938"
  },
  {
    "Organization": "East-2",
    "Manager Name": "Ashis Kumar Khatai / Bijaya Sahu",
    "Manager Level": "WM",
    "Dealer Name": "VE Commercial Vehicle (COCO)-Sambalpur",
    "SCode": "1S2119",
    "State": "Odisha",
    "City": "Sambalpur",
    "Contact No.": "9040118752,8249763738"
  },
  {
    "Organization": "East-2",
    "Manager Name": "Bijaya Badhai / Kishore Bhoi",
    "Manager Level": "EOS Site Incharge",
    "Dealer Name": "VE Commercial Vehicle (COCO)-Sambalpur",
    "SCode": "1S2119",
    "State": "Odisha",
    "City": "Sambalpur",
    "Contact No.": "7008890982,8338063254"
  },
  {
    "Organization": "East-2",
    "Manager Name": "Niket Kumar",
    "Manager Level": "RSM",
    "Dealer Name": "VE Commercial Vehicle (COCO)-Sambalpur",
    "SCode": "1S2119",
    "State": "Odisha",
    "City": "Sambalpur",
    "Contact No.": "8427733112"
  },
  {
    "Organization": "East-2",
    "Manager Name": "Sanjoy Nayek",
    "Manager Level": "ASM",
    "Dealer Name": "VE Commercial Vehicle (COCO)-Sambalpur",
    "SCode": "1S2119",
    "State": "Odisha",
    "City": "Sambalpur",
    "Contact No.": "8001165218"
  },
  {
    "Organization": "East-2",
    "Manager Name": "Sumanta Sahu / Tapas Pradhan",
    "Manager Level": "MD",
    "Dealer Name": "VE Commercial Vehicle (COCO)-Sambalpur",
    "SCode": "1S2119",
    "State": "Odisha",
    "City": "Sambalpur",
    "Contact No.": "7978042381,9937291938"
  },
  {
    "Organization": "East-2",
    "Manager Name": "Sailesh Moharana",
    "Manager Level": "CSM",
    "Dealer Name": "VE Commercial Vehicle (COCO)-Sambalpur",
    "SCode": "1S2119",
    "State": "Odisha",
    "City": "Sambalpur",
    "Contact No.": "9337951215"
  },
  {
    "Organization": "North-2",
    "Manager Name": "Riyaz",
    "Manager Level": "EOS Site Incharge",
    "Dealer Name": "VE Commercial Vehicle (COCO)-Sawai Madhopur",
    "SCode": "1S7085",
    "State": "Rajasthan",
    "City": "Sawai madhopur",
    "Contact No.": "8005540602"
  },
  {
    "Organization": "North-2",
    "Manager Name": "Krishnendu Saha",
    "Manager Level": "RSM",
    "Dealer Name": "VE Commercial Vehicle (COCO)-Sawai Madhopur",
    "SCode": "1S7085",
    "State": "Rajasthan",
    "City": "Sawai madhopur",
    "Contact No.": "7980433425"
  },
  {
    "Organization": "North-2",
    "Manager Name": "Shriram Meena / Sumit (N)",
    "Manager Level": "WM",
    "Dealer Name": "VE Commercial Vehicle (COCO)-Sawai Madhopur",
    "SCode": "1S7085",
    "State": "Rajasthan",
    "City": "Sawai madhopur",
    "Contact No.": "8104835841,9001808235"
  },
  {
    "Organization": "North-2",
    "Manager Name": "Rahul Ramesh Sharma / Gundeep Singh",
    "Manager Level": "MD",
    "Dealer Name": "VE Commercial Vehicle (COCO)-Sawai Madhopur",
    "SCode": "1S7085",
    "State": "Rajasthan",
    "City": "Sawai madhopur",
    "Contact No.": "9987711985,9928011217"
  },
  {
    "Organization": "North-2",
    "Manager Name": "Md.Faizan Raza / Shivam Bharadwaj (N)",
    "Manager Level": "CSM",
    "Dealer Name": "VE Commercial Vehicle (COCO)-Sawai Madhopur",
    "SCode": "1S7085",
    "State": "Rajasthan",
    "City": "Sawai madhopur",
    "Contact No.": "7976379568,7878175706"
  },
  {
    "Organization": "North-2",
    "Manager Name": "Amit Pandey",
    "Manager Level": "ASM",
    "Dealer Name": "VE Commercial Vehicle (COCO)-Sawai Madhopur",
    "SCode": "1S7085",
    "State": "Rajasthan",
    "City": "Sawai madhopur",
    "Contact No.": "9099979633"
  },
  {
    "Organization": "West-1",
    "Manager Name": "Arvind Patil",
    "Manager Level": "HD Bus SPOC",
    "Dealer Name": "VE Commercial Vehicle (COCO)-Shindewadi",
    "SCode": "1S3362",
    "State": "Maharashtra",
    "City": "Pune",
    "Contact No.": "8552856522"
  },
  {
    "Organization": "West-1",
    "Manager Name": "Mrinal Kunwar",
    "Manager Level": "ASM",
    "Dealer Name": "VE Commercial Vehicle (COCO)-Shindewadi",
    "SCode": "1S3362",
    "State": "Maharashtra",
    "City": "Pune",
    "Contact No.": "8002023303"
  },
  {
    "Organization": "West-1",
    "Manager Name": "Najeeb K / Swaroop Gartia",
    "Manager Level": "MD",
    "Dealer Name": "VE Commercial Vehicle (COCO)-Shindewadi",
    "SCode": "1S3362",
    "State": "Maharashtra",
    "City": "Pune",
    "Contact No.": "8956861665,9987554292"
  },
  {
    "Organization": "West-1",
    "Manager Name": "Vivekanand Maske / Durvesh Deole",
    "Manager Level": "CSM",
    "Dealer Name": "VE Commercial Vehicle (COCO)-Shindewadi",
    "SCode": "1S3362",
    "State": "Maharashtra",
    "City": "Pune",
    "Contact No.": "9021549678,9730732831"
  },
  {
    "Organization": "West-1",
    "Manager Name": "Adil Sheikh",
    "Manager Level": "HD Bus SPOC 2",
    "Dealer Name": "VE Commercial Vehicle (COCO)-Shindewadi",
    "SCode": "1S3362",
    "State": "Maharashtra",
    "City": "Pune",
    "Contact No.": "9325446342"
  },
  {
    "Organization": "West-1",
    "Manager Name": "Suhas Ramchandra Mane",
    "Manager Level": "RSM",
    "Dealer Name": "VE Commercial Vehicle (COCO)-Shindewadi",
    "SCode": "1S3362",
    "State": "Maharashtra",
    "City": "Pune",
    "Contact No.": "8454812225"
  },
  {
    "Organization": "West-1",
    "Manager Name": "Pramod Parvekar",
    "Manager Level": "WM",
    "Dealer Name": "VE Commercial Vehicle (COCO)-Shindewadi",
    "SCode": "1S3362",
    "State": "Maharashtra",
    "City": "Pune",
    "Contact No.": "8180099465"
  },
  {
    "Organization": "West-1",
    "Manager Name": "Lakhan Kadam (D) / Kunal Mane (N)",
    "Manager Level": "EOS Site Incharge",
    "Dealer Name": "VE Commercial Vehicle (COCO)-Shindewadi",
    "SCode": "1S3362",
    "State": "Maharashtra",
    "City": "Pune",
    "Contact No.": "9764653304,9689359909"
  },
  {
    "Organization": "North-2",
    "Manager Name": "Rajkumar Vaishnav",
    "Manager Level": "ASM",
    "Dealer Name": "VE Commercial Vehicle (COCO)-Shishod",
    "SCode": "1S7098",
    "State": "Rajasthan",
    "City": "Udaipur",
    "Contact No.": "9636756000"
  },
  {
    "Organization": "North-2",
    "Manager Name": "Niraj Barot / Rahul Puri Goswami",
    "Manager Level": "WM",
    "Dealer Name": "VE Commercial Vehicle (COCO)-Shishod",
    "SCode": "1S7098",
    "State": "Rajasthan",
    "City": "Udaipur",
    "Contact No.": "9653912814,8239501373"
  },
  {
    "Organization": "North-2",
    "Manager Name": "Krishnendu Saha",
    "Manager Level": "RSM",
    "Dealer Name": "VE Commercial Vehicle (COCO)-Shishod",
    "SCode": "1S7098",
    "State": "Rajasthan",
    "City": "Udaipur",
    "Contact No.": "7980433425"
  },
  {
    "Organization": "North-2",
    "Manager Name": "Somu Ghorai / Pawan Kumar Jha",
    "Manager Level": "MD",
    "Dealer Name": "VE Commercial Vehicle (COCO)-Shishod",
    "SCode": "1S7098",
    "State": "Rajasthan",
    "City": "Udaipur",
    "Contact No.": "7781088969,9599497011"
  },
  {
    "Organization": "North-2",
    "Manager Name": "Satish / Sanjay",
    "Manager Level": "EOS Site Incharge",
    "Dealer Name": "VE Commercial Vehicle (COCO)-Shishod",
    "SCode": "1S7098",
    "State": "Rajasthan",
    "City": "Udaipur",
    "Contact No.": "7297972885,9680819959"
  },
  {
    "Organization": "North-2",
    "Manager Name": "Shivam Bhardwaj / Akeel Mansury",
    "Manager Level": "CSM",
    "Dealer Name": "VE Commercial Vehicle (COCO)-Shishod",
    "SCode": "1S7098",
    "State": "Rajasthan",
    "City": "Udaipur",
    "Contact No.": "7878175706,8518009611"
  },
  {
    "Organization": "North-2",
    "Manager Name": "Raju / Sumit (N)",
    "Manager Level": "WM",
    "Dealer Name": "VE Commercial Vehicle (COCO)-Sikar",
    "SCode": "1S7038",
    "State": "Rajasthan",
    "City": "Sikar",
    "Contact No.": "8058664308,9001808235"
  },
  {
    "Organization": "North-2",
    "Manager Name": "Raju / Vijay",
    "Manager Level": "EOS Site Incharge",
    "Dealer Name": "VE Commercial Vehicle (COCO)-Sikar",
    "SCode": "1S7038",
    "State": "Rajasthan",
    "City": "Sikar",
    "Contact No.": "8058664308,7412075283"
  },
  {
    "Organization": "North-2",
    "Manager Name": "Rahul Ramesh Sharma / Gundeep Singh",
    "Manager Level": "MD",
    "Dealer Name": "VE Commercial Vehicle (COCO)-Sikar",
    "SCode": "1S7038",
    "State": "Rajasthan",
    "City": "Sikar",
    "Contact No.": "9987711985,9928011217"
  },
  {
    "Organization": "North-2",
    "Manager Name": "Krishnendu Saha",
    "Manager Level": "RSM",
    "Dealer Name": "VE Commercial Vehicle (COCO)-Sikar",
    "SCode": "1S7038",
    "State": "Rajasthan",
    "City": "Sikar",
    "Contact No.": "7980433425"
  },
  {
    "Organization": "North-2",
    "Manager Name": "Amit Pandey",
    "Manager Level": "ASM",
    "Dealer Name": "VE Commercial Vehicle (COCO)-Sikar",
    "SCode": "1S7038",
    "State": "Rajasthan",
    "City": "Sikar",
    "Contact No.": "9099979633"
  },
  {
    "Organization": "North-2",
    "Manager Name": "Md.Faizan Raza / Shivam Bharadwaj (N)",
    "Manager Level": "CSM",
    "Dealer Name": "VE Commercial Vehicle (COCO)-Sikar",
    "SCode": "1S7038",
    "State": "Rajasthan",
    "City": "Sikar",
    "Contact No.": "7976379568,7878175706"
  },
  {
    "Organization": "East-2",
    "Manager Name": "Hemakant Bhoi",
    "Manager Level": "WM",
    "Dealer Name": "VE Commercial Vehicle (COCO)-Sundargarh",
    "SCode": "1S2118",
    "State": "Odisha",
    "City": "Sundargarh",
    "Contact No.": "7609898047"
  },
  {
    "Organization": "East-2",
    "Manager Name": "Niket Kumar",
    "Manager Level": "RSM",
    "Dealer Name": "VE Commercial Vehicle (COCO)-Sundargarh",
    "SCode": "1S2118",
    "State": "Odisha",
    "City": "Sundargarh",
    "Contact No.": "8427733112"
  },
  {
    "Organization": "East-2",
    "Manager Name": "Padmalochan Sahoo",
    "Manager Level": "EOS Site Incharge",
    "Dealer Name": "VE Commercial Vehicle (COCO)-Sundargarh",
    "SCode": "1S2118",
    "State": "Odisha",
    "City": "Sundargarh",
    "Contact No.": "6372483271"
  },
  {
    "Organization": "East-2",
    "Manager Name": "Sanjoy Nayek",
    "Manager Level": "ASM",
    "Dealer Name": "VE Commercial Vehicle (COCO)-Sundargarh",
    "SCode": "1S2118",
    "State": "Odisha",
    "City": "Sundargarh",
    "Contact No.": "8001165218"
  },
  {
    "Organization": "East-2",
    "Manager Name": "Tapas Pradhan",
    "Manager Level": "MD",
    "Dealer Name": "VE Commercial Vehicle (COCO)-Sundargarh",
    "SCode": "1S2118",
    "State": "Odisha",
    "City": "Sundargarh",
    "Contact No.": "9937291938"
  },
  {
    "Organization": "East-2",
    "Manager Name": "Rishav Das",
    "Manager Level": "CSM",
    "Dealer Name": "VE Commercial Vehicle (COCO)-Sundargarh",
    "SCode": "1S2118",
    "State": "Odisha",
    "City": "Sundargarh",
    "Contact No.": "7439531201"
  },
  {
    "Organization": "West-2",
    "Manager Name": "Sudhir Kumar",
    "Manager Level": "RSM",
    "Dealer Name": "VE Commercial Vehicle (COCO)-Surat",
    "SCode": "1S3396",
    "State": "Gujarat",
    "City": "Surat",
    "Contact No.": "9752542733"
  },
  {
    "Organization": "West-2",
    "Manager Name": "Divyesh Shah",
    "Manager Level": "ASM",
    "Dealer Name": "VE Commercial Vehicle (COCO)-Surat",
    "SCode": "1S3396",
    "State": "Gujarat",
    "City": "Surat",
    "Contact No.": "7600287682"
  },
  {
    "Organization": "West-2",
    "Manager Name": "Mohd Farhan",
    "Manager Level": "CSM",
    "Dealer Name": "VE Commercial Vehicle (COCO)-Surat",
    "SCode": "1S3396",
    "State": "Gujarat",
    "City": "Surat",
    "Contact No.": "9356121623"
  },
  {
    "Organization": "West-2",
    "Manager Name": "Meet Navdiya / Rahuldev Patil",
    "Manager Level": "EOS Site Incharge",
    "Dealer Name": "VE Commercial Vehicle (COCO)-Surat",
    "SCode": "1S3396",
    "State": "Gujarat",
    "City": "Surat",
    "Contact No.": "7359688088,9875149935"
  },
  {
    "Organization": "West-2",
    "Manager Name": "Veerendra Jha / Sunoj Nair",
    "Manager Level": "MD",
    "Dealer Name": "VE Commercial Vehicle (COCO)-Surat",
    "SCode": "1S3396",
    "State": "Gujarat",
    "City": "Surat",
    "Contact No.": "9973076135,9825329298"
  },
  {
    "Organization": "West-2",
    "Manager Name": "Chetan Kumar Patel / Prarthan Rambhapurwala",
    "Manager Level": "WM",
    "Dealer Name": "VE Commercial Vehicle (COCO)-Surat",
    "SCode": "1S3396",
    "State": "Gujarat",
    "City": "Surat",
    "Contact No.": "9875149939,7016146480"
  },
  {
    "Organization": "West-1",
    "Manager Name": "Kshitij Bankhele (EVS)",
    "Manager Level": "CSM",
    "Dealer Name": "VE Commercial Vehicle (COCO)-Turbhe",
    "SCode": "1S3335",
    "State": "Maharashtra",
    "City": "Turbhe",
    "Contact No.": "9833405966"
  },
  {
    "Organization": "West-1",
    "Manager Name": "Sachin S Ghadge",
    "Manager Level": "MD",
    "Dealer Name": "VE Commercial Vehicle (COCO)-Turbhe",
    "SCode": "1S3335",
    "State": "Maharashtra",
    "City": "Turbhe",
    "Contact No.": "7506333581"
  },
  {
    "Organization": "West-1",
    "Manager Name": "Abdul",
    "Manager Level": "WM",
    "Dealer Name": "VE Commercial Vehicle (COCO)-Turbhe",
    "SCode": "1S3335",
    "State": "Maharashtra",
    "City": "Turbhe",
    "Contact No.": "7977587431"
  },
  {
    "Organization": "West-1",
    "Manager Name": "Sahil Bisht",
    "Manager Level": "ASM",
    "Dealer Name": "VE Commercial Vehicle (COCO)-Turbhe",
    "SCode": "1S3335",
    "State": "Maharashtra",
    "City": "Turbhe",
    "Contact No.": "7304491771"
  },
  {
    "Organization": "West-1",
    "Manager Name": "Sahil Iqbal Shah",
    "Manager Level": "CSM",
    "Dealer Name": "VE Commercial Vehicle (COCO)-Turbhe",
    "SCode": "1S3335",
    "State": "Maharashtra",
    "City": "Turbhe",
    "Contact No.": "7620470429"
  },
  {
    "Organization": "West-1",
    "Manager Name": "Sameer More / Moin Shah",
    "Manager Level": "EOS Site Incharge",
    "Dealer Name": "VE Commercial Vehicle (COCO)-Turbhe",
    "SCode": "1S3335",
    "State": "Maharashtra",
    "City": "Turbhe",
    "Contact No.": "8446838914,9326699477"
  },
  {
    "Organization": "West-1",
    "Manager Name": "Suhas Ramchandra Mane",
    "Manager Level": "RSM",
    "Dealer Name": "VE Commercial Vehicle (COCO)-Turbhe",
    "SCode": "1S3335",
    "State": "Maharashtra",
    "City": "Turbhe",
    "Contact No.": "8454812225"
  },
  {
    "Organization": "North-2",
    "Manager Name": "Vikas Bhatt / Prateek",
    "Manager Level": "EOS Site Incharge",
    "Dealer Name": "VE Commercial Vehicle (COCO)-Udaipur",
    "SCode": "1S7073",
    "State": "Rajasthan",
    "City": "Udaipur",
    "Contact No.": "9257049975,9257049976"
  },
  {
    "Organization": "North-2",
    "Manager Name": "Somu Ghorai / Pawan Kumar Jha",
    "Manager Level": "MD",
    "Dealer Name": "VE Commercial Vehicle (COCO)-Udaipur",
    "SCode": "1S7073",
    "State": "Rajasthan",
    "City": "Udaipur",
    "Contact No.": "7781088969,9599497011"
  },
  {
    "Organization": "North-2",
    "Manager Name": "Hitendra Singh Hada",
    "Manager Level": "WM",
    "Dealer Name": "VE Commercial Vehicle (COCO)-Udaipur",
    "SCode": "1S7073",
    "State": "Rajasthan",
    "City": "Udaipur",
    "Contact No.": "7877046444"
  },
  {
    "Organization": "North-2",
    "Manager Name": "Rajkumar Vaishnav",
    "Manager Level": "ASM",
    "Dealer Name": "VE Commercial Vehicle (COCO)-Udaipur",
    "SCode": "1S7073",
    "State": "Rajasthan",
    "City": "Udaipur",
    "Contact No.": "9636756000"
  },
  {
    "Organization": "North-2",
    "Manager Name": "Shivam Bhardwaj / Akeel Mansury",
    "Manager Level": "CSM",
    "Dealer Name": "VE Commercial Vehicle (COCO)-Udaipur",
    "SCode": "1S7073",
    "State": "Rajasthan",
    "City": "Udaipur",
    "Contact No.": "7878175706,8518009611"
  },
  {
    "Organization": "North-2",
    "Manager Name": "Krishnendu Saha",
    "Manager Level": "RSM",
    "Dealer Name": "VE Commercial Vehicle (COCO)-Udaipur",
    "SCode": "1S7073",
    "State": "Rajasthan",
    "City": "Udaipur",
    "Contact No.": "7980433425"
  },
  {
    "Organization": "West-2",
    "Manager Name": "Prateek Rathore / Shailendra",
    "Manager Level": "EOS Site Incharge",
    "Dealer Name": "VE Commercial Vehicle (COCO)-Udwada",
    "SCode": "1S3399",
    "State": "Gujarat",
    "City": "Vapi",
    "Contact No.": "9328965042,8347418187"
  },
  {
    "Organization": "West-2",
    "Manager Name": "Veerendra Jha / Sunoj Nair",
    "Manager Level": "MD",
    "Dealer Name": "VE Commercial Vehicle (COCO)-Udwada",
    "SCode": "1S3399",
    "State": "Gujarat",
    "City": "Vapi",
    "Contact No.": "9973076135,9825329298"
  },
  {
    "Organization": "West-2",
    "Manager Name": "Mayur Pardeshi",
    "Manager Level": "WM",
    "Dealer Name": "VE Commercial Vehicle (COCO)-Udwada",
    "SCode": "1S3399",
    "State": "Gujarat",
    "City": "Vapi",
    "Contact No.": "9227898191"
  },
  {
    "Organization": "West-2",
    "Manager Name": "Divyesh Shah",
    "Manager Level": "ASM",
    "Dealer Name": "VE Commercial Vehicle (COCO)-Udwada",
    "SCode": "1S3399",
    "State": "Gujarat",
    "City": "Vapi",
    "Contact No.": "7600287682"
  },
  {
    "Organization": "West-2",
    "Manager Name": "Prasanna Vishwakarma",
    "Manager Level": "CSM",
    "Dealer Name": "VE Commercial Vehicle (COCO)-Udwada",
    "SCode": "1S3399",
    "State": "Gujarat",
    "City": "Vapi",
    "Contact No.": "8871493195"
  },
  {
    "Organization": "West-2",
    "Manager Name": "Sudhir Kumar",
    "Manager Level": "RSM",
    "Dealer Name": "VE Commercial Vehicle (COCO)-Udwada",
    "SCode": "1S3399",
    "State": "Gujarat",
    "City": "Vapi",
    "Contact No.": "9752542733"
  },
  {
    "Organization": "North-2",
    "Manager Name": "Nitin Gupta",
    "Manager Level": "ASM",
    "Dealer Name": "VE Commercial Vehicle (COCO)-Varanasi",
    "SCode": "1S7048",
    "State": "Uttar Pradesh",
    "City": "Varanasi",
    "Contact No.": "7080811550"
  },
  {
    "Organization": "North-2",
    "Manager Name": "Krishnendu Saha",
    "Manager Level": "RSM",
    "Dealer Name": "VE Commercial Vehicle (COCO)-Varanasi",
    "SCode": "1S7048",
    "State": "Uttar Pradesh",
    "City": "Varanasi",
    "Contact No.": "7980433425"
  },
  {
    "Organization": "North-2",
    "Manager Name": "Abhishek Garg",
    "Manager Level": "WM",
    "Dealer Name": "VE Commercial Vehicle (COCO)-Varanasi",
    "SCode": "1S7048",
    "State": "Uttar Pradesh",
    "City": "Varanasi",
    "Contact No.": "9151006451"
  },
  {
    "Organization": "North-2",
    "Manager Name": "Anil Kumar (D) / Sonu Yadav (N)",
    "Manager Level": "EOS Site Incharge",
    "Dealer Name": "VE Commercial Vehicle (COCO)-Varanasi",
    "SCode": "1S7048",
    "State": "Uttar Pradesh",
    "City": "Varanasi",
    "Contact No.": "9151006453"
  },
  {
    "Organization": "North-2",
    "Manager Name": "Ramakant Singh / Manish Sharma",
    "Manager Level": "MD",
    "Dealer Name": "VE Commercial Vehicle (COCO)-Varanasi",
    "SCode": "1S7048",
    "State": "Uttar Pradesh",
    "City": "Varanasi",
    "Contact No.": "9424945434,8288077524"
  },
  {
    "Organization": "North-2",
    "Manager Name": "Shashank Saran (D) / Saket Singh (N)",
    "Manager Level": "CSM",
    "Dealer Name": "VE Commercial Vehicle (COCO)-Varanasi",
    "SCode": "1S7048",
    "State": "Uttar Pradesh",
    "City": "Varanasi",
    "Contact No.": "9554900557,8709859215"
  },
  {
    "Organization": "West-1",
    "Manager Name": "Rushikesh Kate",
    "Manager Level": "EOS Site Incharge",
    "Dealer Name": "VE Commercial Vehicle (COCO)-Wagholi",
    "SCode": "1S3360",
    "State": "Maharashtra",
    "City": "Pune",
    "Contact No.": "8010163846"
  },
  {
    "Organization": "West-1",
    "Manager Name": "Adil Sheikh / Vivekanand Maske",
    "Manager Level": "CSM",
    "Dealer Name": "VE Commercial Vehicle (COCO)-Wagholi",
    "SCode": "1S3360",
    "State": "Maharashtra",
    "City": "Pune",
    "Contact No.": "9325446342,9021549678"
  },
  {
    "Organization": "West-1",
    "Manager Name": "Sharukh Shaikh",
    "Manager Level": "WM",
    "Dealer Name": "VE Commercial Vehicle (COCO)-Wagholi",
    "SCode": "1S3360",
    "State": "Maharashtra",
    "City": "Pune",
    "Contact No.": "8956457225"
  },
  {
    "Organization": "West-1",
    "Manager Name": "Arvind Patil",
    "Manager Level": "HD Bus SPOC",
    "Dealer Name": "VE Commercial Vehicle (COCO)-Wagholi",
    "SCode": "1S3360",
    "State": "Maharashtra",
    "City": "Pune",
    "Contact No.": "8552856522"
  },
  {
    "Organization": "West-1",
    "Manager Name": "Mrinal Kunwar",
    "Manager Level": "ASM",
    "Dealer Name": "VE Commercial Vehicle (COCO)-Wagholi",
    "SCode": "1S3360",
    "State": "Maharashtra",
    "City": "Pune",
    "Contact No.": "8002023303"
  },
  {
    "Organization": "West-1",
    "Manager Name": "Adil Sheikh",
    "Manager Level": "HD Bus SPOC 2",
    "Dealer Name": "VE Commercial Vehicle (COCO)-Wagholi",
    "SCode": "1S3360",
    "State": "Maharashtra",
    "City": "Pune",
    "Contact No.": "9325446342"
  },
  {
    "Organization": "West-1",
    "Manager Name": "Suhas Ramchandra Mane",
    "Manager Level": "RSM",
    "Dealer Name": "VE Commercial Vehicle (COCO)-Wagholi",
    "SCode": "1S3360",
    "State": "Maharashtra",
    "City": "Pune",
    "Contact No.": "8454812225"
  },
  {
    "Organization": "West-1",
    "Manager Name": "Najeeb K / Swaroop Gartia",
    "Manager Level": "MD",
    "Dealer Name": "VE Commercial Vehicle (COCO)-Wagholi",
    "SCode": "1S3360",
    "State": "Maharashtra",
    "City": "Pune",
    "Contact No.": "8956861665,9987554292"
  },
  {
    "Organization": "West-2",
    "Manager Name": "Divyesh Shah",
    "Manager Level": "ASM",
    "Dealer Name": "VG Automobiles-Anand",
    "SCode": "1S3009",
    "State": "Gujarat",
    "City": "Anand",
    "Contact No.": "7600287682"
  },
  {
    "Organization": "West-2",
    "Manager Name": "Sudhir Kumar",
    "Manager Level": "RSM",
    "Dealer Name": "VG Automobiles-Anand",
    "SCode": "1S3009",
    "State": "Gujarat",
    "City": "Anand",
    "Contact No.": "9752542733"
  },
  {
    "Organization": "West-2",
    "Manager Name": "Dakshesh Patel",
    "Manager Level": "WM",
    "Dealer Name": "VG Automobiles-Anand",
    "SCode": "1S3009",
    "State": "Gujarat",
    "City": "Anand",
    "Contact No.": "9727000412"
  },
  {
    "Organization": "West-2",
    "Manager Name": "Ajay Gamit",
    "Manager Level": "CSM",
    "Dealer Name": "VG Automobiles-Anand",
    "SCode": "1S3009",
    "State": "Gujarat",
    "City": "Anand",
    "Contact No.": "9265850546"
  },
  {
    "Organization": "West-2",
    "Manager Name": "Mayank / Rohan Patel",
    "Manager Level": "MD",
    "Dealer Name": "VG Automobiles-Anand",
    "SCode": "1S3009",
    "State": "Gujarat",
    "City": "Anand",
    "Contact No.": "9898000169,9898000692"
  },
  {
    "Organization": "West-2",
    "Manager Name": "Manohar Zala",
    "Manager Level": "EOS Site Incharge",
    "Dealer Name": "VG Automobiles-Anand",
    "SCode": "1S3009",
    "State": "Gujarat",
    "City": "Anand",
    "Contact No.": "8849315985,9727000176"
  },
  {
    "Organization": "West-2",
    "Manager Name": "Darshita Patel",
    "Manager Level": "EOS Site Incharge",
    "Dealer Name": "VG Automobiles-Vadodara",
    "SCode": "1S3003",
    "State": "Gujarat",
    "City": "Vadodara",
    "Contact No.": "9727000372,9898000735"
  },
  {
    "Organization": "West-2",
    "Manager Name": "Ajay Gamit",
    "Manager Level": "CSM",
    "Dealer Name": "VG Automobiles-Vadodara",
    "SCode": "1S3003",
    "State": "Gujarat",
    "City": "Vadodara",
    "Contact No.": "9265850546"
  },
  {
    "Organization": "West-2",
    "Manager Name": "Divyesh Shah",
    "Manager Level": "ASM",
    "Dealer Name": "VG Automobiles-Vadodara",
    "SCode": "1S3003",
    "State": "Gujarat",
    "City": "Vadodara",
    "Contact No.": "7600287682"
  },
  {
    "Organization": "West-2",
    "Manager Name": "Ajay / Pritesh",
    "Manager Level": "MD",
    "Dealer Name": "VG Automobiles-Vadodara",
    "SCode": "1S3003",
    "State": "Gujarat",
    "City": "Vadodara",
    "Contact No.": "9727000297,9727000290"
  },
  {
    "Organization": "West-2",
    "Manager Name": "Sudhir Kumar",
    "Manager Level": "RSM",
    "Dealer Name": "VG Automobiles-Vadodara",
    "SCode": "1S3003",
    "State": "Gujarat",
    "City": "Vadodara",
    "Contact No.": "9752542733"
  },
  {
    "Organization": "West-2",
    "Manager Name": "Krishna / Krunal",
    "Manager Level": "WM",
    "Dealer Name": "VG Automobiles-Vadodara",
    "SCode": "1S3003",
    "State": "Gujarat",
    "City": "Vadodara",
    "Contact No.": "7486966312,9727000469"
  },
  {
    "Organization": "South-2",
    "Manager Name": "Prajwal Hiremath (D) / Mahamadali T Maniyar (N)",
    "Manager Level": "CSM",
    "Dealer Name": "VSA3B PVT LTD-Baglkot",
    "SCode": "1S6164",
    "State": "Karnataka",
    "City": "Bagalkot",
    "Contact No.": "8296308637,9972619686"
  },
  {
    "Organization": "South-2",
    "Manager Name": "PRABHU S MUGALKHOD",
    "Manager Level": "ASM",
    "Dealer Name": "VSA3B PVT LTD-Baglkot",
    "SCode": "1S6164",
    "State": "Karnataka",
    "City": "Bagalkot",
    "Contact No.": "9980512550"
  },
  {
    "Organization": "South-2",
    "Manager Name": "Parshuram Dalwai",
    "Manager Level": "MD",
    "Dealer Name": "VSA3B PVT LTD-Baglkot",
    "SCode": "1S6164",
    "State": "Karnataka",
    "City": "Bagalkot",
    "Contact No.": "9036035921"
  },
  {
    "Organization": "South-2",
    "Manager Name": "N Narayanan",
    "Manager Level": "RSM",
    "Dealer Name": "VSA3B PVT LTD-Baglkot",
    "SCode": "1S6164",
    "State": "Karnataka",
    "City": "Bagalkot",
    "Contact No.": "8123036700"
  },
  {
    "Organization": "South-2",
    "Manager Name": "Gajanan",
    "Manager Level": "EOS Site Incharge",
    "Dealer Name": "VSA3B PVT LTD-Baglkot",
    "SCode": "1S6164",
    "State": "Karnataka",
    "City": "Bagalkot",
    "Contact No.": "6366371896"
  },
  {
    "Organization": "South-2",
    "Manager Name": "Basavaraj",
    "Manager Level": "WM",
    "Dealer Name": "VSA3B PVT LTD-Baglkot",
    "SCode": "1S6164",
    "State": "Karnataka",
    "City": "Bagalkot",
    "Contact No.": "6366371893"
  },
  {
    "Organization": "South-2",
    "Manager Name": "Praveen",
    "Manager Level": "WM",
    "Dealer Name": "VSA3B PVT LTD-Belgaum",
    "SCode": "1S6163",
    "State": "Karnataka",
    "City": "Belgaum",
    "Contact No.": "6366969374"
  },
  {
    "Organization": "South-2",
    "Manager Name": "N Narayanan",
    "Manager Level": "RSM",
    "Dealer Name": "VSA3B PVT LTD-Belgaum",
    "SCode": "1S6163",
    "State": "Karnataka",
    "City": "Belgaum",
    "Contact No.": "8123036700"
  },
  {
    "Organization": "South-2",
    "Manager Name": "PRABHU S MUGALKHOD",
    "Manager Level": "ASM",
    "Dealer Name": "VSA3B PVT LTD-Belgaum",
    "SCode": "1S6163",
    "State": "Karnataka",
    "City": "Belgaum",
    "Contact No.": "9980512550"
  },
  {
    "Organization": "South-2",
    "Manager Name": "Parshuram Dalwai",
    "Manager Level": "MD",
    "Dealer Name": "VSA3B PVT LTD-Belgaum",
    "SCode": "1S6163",
    "State": "Karnataka",
    "City": "Belgaum",
    "Contact No.": "9036035921"
  },
  {
    "Organization": "South-2",
    "Manager Name": "Manjunath S B (D) / Mahamadali T Maniyar (N)",
    "Manager Level": "CSM",
    "Dealer Name": "VSA3B PVT LTD-Belgaum",
    "SCode": "1S6163",
    "State": "Karnataka",
    "City": "Belgaum",
    "Contact No.": "9972018641,9972619686"
  },
  {
    "Organization": "South-2",
    "Manager Name": "Akshay",
    "Manager Level": "EOS Site Incharge",
    "Dealer Name": "VSA3B PVT LTD-Belgaum",
    "SCode": "1S6163",
    "State": "Karnataka",
    "City": "Belgaum",
    "Contact No.": "9036035926"
  },
  {
    "Organization": "South-2",
    "Manager Name": "Basavaraj  (D) / Mahamadali T Maniyar (N)",
    "Manager Level": "CSM",
    "Dealer Name": "VSA3B PVT LTD-Bijapur",
    "SCode": "1S6176",
    "State": "Karnataka",
    "City": "Bijapur",
    "Contact No.": "8971001188,9972619686"
  },
  {
    "Organization": "South-2",
    "Manager Name": "N Narayanan",
    "Manager Level": "RSM",
    "Dealer Name": "VSA3B PVT LTD-Bijapur",
    "SCode": "1S6176",
    "State": "Karnataka",
    "City": "Bijapur",
    "Contact No.": "8123036700"
  },
  {
    "Organization": "South-2",
    "Manager Name": "Deepak Rajagopal",
    "Manager Level": "MD",
    "Dealer Name": "VSA3B PVT LTD-Bijapur",
    "SCode": "1S6176",
    "State": "Karnataka",
    "City": "Bijapur",
    "Contact No.": "9886477778"
  },
  {
    "Organization": "South-2",
    "Manager Name": "Mohd Paigambar",
    "Manager Level": "EOS Site Incharge",
    "Dealer Name": "VSA3B PVT LTD-Bijapur",
    "SCode": "1S6176",
    "State": "Karnataka",
    "City": "Bijapur",
    "Contact No.": "9035058931"
  },
  {
    "Organization": "South-2",
    "Manager Name": "PRABHU S MUGALKHOD",
    "Manager Level": "ASM",
    "Dealer Name": "VSA3B PVT LTD-Bijapur",
    "SCode": "1S6176",
    "State": "Karnataka",
    "City": "Bijapur",
    "Contact No.": "9980512550"
  },
  {
    "Organization": "South-2",
    "Manager Name": "Parashuram",
    "Manager Level": "WM",
    "Dealer Name": "VSA3B PVT LTD-Bijapur",
    "SCode": "1S6176",
    "State": "Karnataka",
    "City": "Bijapur",
    "Contact No.": "6366969371"
  },
  {
    "Organization": "South-2",
    "Manager Name": "Ikkurthy Srikanth",
    "Manager Level": "ASM",
    "Dealer Name": "VVC Motors-Autonagar",
    "SCode": "1S6154",
    "State": "Telangana",
    "City": "Autonagar",
    "Contact No.": "9550801110"
  },
  {
    "Organization": "South-2",
    "Manager Name": "J Y Sudhakar",
    "Manager Level": "WM",
    "Dealer Name": "VVC Motors-Autonagar",
    "SCode": "1S6154",
    "State": "Telangana",
    "City": "Autonagar",
    "Contact No.": "7032920184"
  },
  {
    "Organization": "South-2",
    "Manager Name": "Thoufick",
    "Manager Level": "MD",
    "Dealer Name": "VVC Motors-Autonagar",
    "SCode": "1S6154",
    "State": "Telangana",
    "City": "Autonagar",
    "Contact No.": "8977867017"
  },
  {
    "Organization": "South-2",
    "Manager Name": "K Balaji Ravi Shankar (D) / Bhashipangu Upendar (N)",
    "Manager Level": "CSM",
    "Dealer Name": "VVC Motors-Autonagar",
    "SCode": "1S6154",
    "State": "Telangana",
    "City": "Autonagar",
    "Contact No.": "9959355562,9154141679"
  },
  {
    "Organization": "South-2",
    "Manager Name": "Mahesh",
    "Manager Level": "EOS Site Incharge",
    "Dealer Name": "VVC Motors-Autonagar",
    "SCode": "1S6154",
    "State": "Telangana",
    "City": "Autonagar",
    "Contact No.": "9154818754"
  },
  {
    "Organization": "South-2",
    "Manager Name": "N Narayanan",
    "Manager Level": "RSM",
    "Dealer Name": "VVC Motors-Autonagar",
    "SCode": "1S6154",
    "State": "Telangana",
    "City": "Autonagar",
    "Contact No.": "8123036700"
  },
  {
    "Organization": "South-2",
    "Manager Name": "G. Suresh Babu",
    "Manager Level": "WM",
    "Dealer Name": "VVC Motors-Khammam",
    "SCode": "1S6172",
    "State": "Telangana",
    "City": "Khammam",
    "Contact No.": "9154850011"
  },
  {
    "Organization": "South-2",
    "Manager Name": "Ikkurthy Srikanth",
    "Manager Level": "ASM",
    "Dealer Name": "VVC Motors-Khammam",
    "SCode": "1S6172",
    "State": "Telangana",
    "City": "Khammam",
    "Contact No.": "9550801110"
  },
  {
    "Organization": "South-2",
    "Manager Name": "Ramarao",
    "Manager Level": "EOS Site Incharge",
    "Dealer Name": "VVC Motors-Khammam",
    "SCode": "1S6172",
    "State": "Telangana",
    "City": "Khammam",
    "Contact No.": "9100775946"
  },
  {
    "Organization": "South-2",
    "Manager Name": "Ayyappan B (D) / Bhashipangu Upendar (N)",
    "Manager Level": "CSM",
    "Dealer Name": "VVC Motors-Khammam",
    "SCode": "1S6172",
    "State": "Telangana",
    "City": "Khammam",
    "Contact No.": "7993174545,9154141679"
  },
  {
    "Organization": "South-2",
    "Manager Name": "N Narayanan",
    "Manager Level": "RSM",
    "Dealer Name": "VVC Motors-Khammam",
    "SCode": "1S6172",
    "State": "Telangana",
    "City": "Khammam",
    "Contact No.": "8123036700"
  },
  {
    "Organization": "South-2",
    "Manager Name": "Thoufick",
    "Manager Level": "MD",
    "Dealer Name": "VVC Motors-Khammam",
    "SCode": "1S6172",
    "State": "Telangana",
    "City": "Khammam",
    "Contact No.": "8977867017"
  },
  {
    "Organization": "South-2",
    "Manager Name": "G. Suresh Babu",
    "Manager Level": "WM",
    "Dealer Name": "VVC Motors-Kodad",
    "SCode": "1S6171",
    "State": "Telangana",
    "City": "Kodad",
    "Contact No.": "9154850011"
  },
  {
    "Organization": "South-2",
    "Manager Name": "Thoufick",
    "Manager Level": "MD",
    "Dealer Name": "VVC Motors-Kodad",
    "SCode": "1S6171",
    "State": "Telangana",
    "City": "Kodad",
    "Contact No.": "8977867017"
  },
  {
    "Organization": "South-2",
    "Manager Name": "Gopi Reddy",
    "Manager Level": "EOS Site Incharge",
    "Dealer Name": "VVC Motors-Kodad",
    "SCode": "1S6171",
    "State": "Telangana",
    "City": "Kodad",
    "Contact No.": "9154775280"
  },
  {
    "Organization": "South-2",
    "Manager Name": "Ikkurthy Srikanth",
    "Manager Level": "ASM",
    "Dealer Name": "VVC Motors-Kodad",
    "SCode": "1S6171",
    "State": "Telangana",
    "City": "Kodad",
    "Contact No.": "9550801110"
  },
  {
    "Organization": "South-2",
    "Manager Name": "Ayyappan B (D) / Bhashipangu Upendar (N)",
    "Manager Level": "CSM",
    "Dealer Name": "VVC Motors-Kodad",
    "SCode": "1S6171",
    "State": "Telangana",
    "City": "Kodad",
    "Contact No.": "7993174545,9154141679"
  },
  {
    "Organization": "South-2",
    "Manager Name": "N Narayanan",
    "Manager Level": "RSM",
    "Dealer Name": "VVC Motors-Kodad",
    "SCode": "1S6171",
    "State": "Telangana",
    "City": "Kodad",
    "Contact No.": "8123036700"
  },
  {
    "Organization": "South-2",
    "Manager Name": "Ikkurthy Srikanth",
    "Manager Level": "ASM",
    "Dealer Name": "VVC Motors-Miryalaguda",
    "SCode": "1S6157",
    "State": "Telangana",
    "City": "Miryalaguda",
    "Contact No.": "9550801110"
  },
  {
    "Organization": "South-2",
    "Manager Name": "N Narayanan",
    "Manager Level": "RSM",
    "Dealer Name": "VVC Motors-Miryalaguda",
    "SCode": "1S6157",
    "State": "Telangana",
    "City": "Miryalaguda",
    "Contact No.": "8123036700"
  },
  {
    "Organization": "South-2",
    "Manager Name": "M Suresh",
    "Manager Level": "EOS Site Incharge",
    "Dealer Name": "VVC Motors-Miryalaguda",
    "SCode": "1S6157",
    "State": "Telangana",
    "City": "Miryalaguda",
    "Contact No.": "9154222733"
  },
  {
    "Organization": "South-2",
    "Manager Name": "G. Suresh Babu",
    "Manager Level": "WM",
    "Dealer Name": "VVC Motors-Miryalaguda",
    "SCode": "1S6157",
    "State": "Telangana",
    "City": "Miryalaguda",
    "Contact No.": "9154850011"
  },
  {
    "Organization": "South-2",
    "Manager Name": "Ayyappan B (D) / Bhashipangu Upendar (N)",
    "Manager Level": "CSM",
    "Dealer Name": "VVC Motors-Miryalaguda",
    "SCode": "1S6157",
    "State": "Telangana",
    "City": "Miryalaguda",
    "Contact No.": "7993174545,9154141679"
  },
  {
    "Organization": "South-2",
    "Manager Name": "Thoufick",
    "Manager Level": "MD",
    "Dealer Name": "VVC Motors-Miryalaguda",
    "SCode": "1S6157",
    "State": "Telangana",
    "City": "Miryalaguda",
    "Contact No.": "8977867017"
  },
  {
    "Organization": "South-2",
    "Manager Name": "N Narayanan",
    "Manager Level": "RSM",
    "Dealer Name": "VVC Motors-Warangal",
    "SCode": "1S6213",
    "State": "Telangana",
    "City": "Warangal",
    "Contact No.": "8123036700"
  },
  {
    "Organization": "South-2",
    "Manager Name": "Ikkurthy Srikanth",
    "Manager Level": "ASM",
    "Dealer Name": "VVC Motors-Warangal",
    "SCode": "1S6213",
    "State": "Telangana",
    "City": "Warangal",
    "Contact No.": "9550801110"
  },
  {
    "Organization": "South-2",
    "Manager Name": "Akhil Gunti",
    "Manager Level": "EOS Site Incharge",
    "Dealer Name": "VVC Motors-Warangal",
    "SCode": "1S6213",
    "State": "Telangana",
    "City": "Warangal",
    "Contact No.": "9154315993"
  },
  {
    "Organization": "South-2",
    "Manager Name": "Thoufick",
    "Manager Level": "MD",
    "Dealer Name": "VVC Motors-Warangal",
    "SCode": "1S6213",
    "State": "Telangana",
    "City": "Warangal",
    "Contact No.": "8977867017"
  },
  {
    "Organization": "South-2",
    "Manager Name": "G. Suresh Babu",
    "Manager Level": "WM",
    "Dealer Name": "VVC Motors-Warangal",
    "SCode": "1S6213",
    "State": "Telangana",
    "City": "Warangal",
    "Contact No.": "9154850011"
  },
  {
    "Organization": "South-2",
    "Manager Name": "Ayyappan B (D) / Bhashipangu Upendar (N)",
    "Manager Level": "CSM",
    "Dealer Name": "VVC Motors-Warangal",
    "SCode": "1S6213",
    "State": "Telangana",
    "City": "Warangal",
    "Contact No.": "7993174545,9154141679"
  },
  {
    "Organization": "North-2",
    "Manager Name": "Gopal Mali",
    "Manager Level": "EOS Site Incharge",
    "Dealer Name": "Vantage Commercial Vehicles-Bhilwara",
    "SCode": "1S7040",
    "State": "Rajasthan",
    "City": "Bhilwara",
    "Contact No.": "7976459563"
  },
  {
    "Organization": "North-2",
    "Manager Name": "Krishnendu Saha",
    "Manager Level": "RSM",
    "Dealer Name": "Vantage Commercial Vehicles-Bhilwara",
    "SCode": "1S7040",
    "State": "Rajasthan",
    "City": "Bhilwara",
    "Contact No.": "7980433425"
  },
  {
    "Organization": "North-2",
    "Manager Name": "Shubham / Ritul",
    "Manager Level": "WM",
    "Dealer Name": "Vantage Commercial Vehicles-Bhilwara",
    "SCode": "1S7040",
    "State": "Rajasthan",
    "City": "Bhilwara",
    "Contact No.": "8619608557,9664318847"
  },
  {
    "Organization": "North-2",
    "Manager Name": "Shivam Bhardwaj / Dhananjay Singh",
    "Manager Level": "CSM",
    "Dealer Name": "Vantage Commercial Vehicles-Bhilwara",
    "SCode": "1S7040",
    "State": "Rajasthan",
    "City": "Bhilwara",
    "Contact No.": "7878175706,7737329353"
  },
  {
    "Organization": "North-2",
    "Manager Name": "Archit Kogta",
    "Manager Level": "MD",
    "Dealer Name": "Vantage Commercial Vehicles-Bhilwara",
    "SCode": "1S7040",
    "State": "Rajasthan",
    "City": "Bhilwara",
    "Contact No.": "9462222005"
  },
  {
    "Organization": "North-2",
    "Manager Name": "Rajkumar Vaishnav",
    "Manager Level": "ASM",
    "Dealer Name": "Vantage Commercial Vehicles-Bhilwara",
    "SCode": "1S7040",
    "State": "Rajasthan",
    "City": "Bhilwara",
    "Contact No.": "9636756000"
  },
  {
    "Organization": "West-2",
    "Manager Name": "Sudhir Kumar",
    "Manager Level": "RSM",
    "Dealer Name": "Velocity Automobiles - Bamore",
    "SCode": "1S5003",
    "State": "Madhya Pradesh",
    "City": "Gwalior",
    "Contact No.": "9752542733"
  },
  {
    "Organization": "West-2",
    "Manager Name": "Saurabh Bajpai",
    "Manager Level": "CSM",
    "Dealer Name": "Velocity Automobiles - Bamore",
    "SCode": "1S5003",
    "State": "Madhya Pradesh",
    "City": "Gwalior",
    "Contact No.": "9630112997"
  },
  {
    "Organization": "West-2",
    "Manager Name": "Satendra Tomar",
    "Manager Level": "EOS Site Incharge",
    "Dealer Name": "Velocity Automobiles - Bamore",
    "SCode": "1S5003",
    "State": "Madhya Pradesh",
    "City": "Gwalior",
    "Contact No.": "8871092506"
  },
  {
    "Organization": "West-2",
    "Manager Name": "Dk Dubey",
    "Manager Level": "MD",
    "Dealer Name": "Velocity Automobiles - Bamore",
    "SCode": "1S5003",
    "State": "Madhya Pradesh",
    "City": "Gwalior",
    "Contact No.": "6262000605"
  },
  {
    "Organization": "West-2",
    "Manager Name": "Vivek Kumar",
    "Manager Level": "ASM",
    "Dealer Name": "Velocity Automobiles - Bamore",
    "SCode": "1S5003",
    "State": "Madhya Pradesh",
    "City": "Gwalior",
    "Contact No.": "8171110903"
  },
  {
    "Organization": "West-2",
    "Manager Name": "Deepak / Sandeep",
    "Manager Level": "WM",
    "Dealer Name": "Velocity Automobiles - Bamore",
    "SCode": "1S5003",
    "State": "Madhya Pradesh",
    "City": "Gwalior",
    "Contact No.": "9826282874,9111555907"
  },
  {
    "Organization": "West-2",
    "Manager Name": "Shubham Upadhyay",
    "Manager Level": "CSM",
    "Dealer Name": "Verma Motors - Sehore",
    "SCode": "1S5068",
    "State": "Madhya Pradesh",
    "City": "Sehore",
    "Contact No.": "8871996966"
  },
  {
    "Organization": "West-2",
    "Manager Name": "Sudhir Kumar",
    "Manager Level": "RSM",
    "Dealer Name": "Verma Motors - Sehore",
    "SCode": "1S5068",
    "State": "Madhya Pradesh",
    "City": "Sehore",
    "Contact No.": "9752542733"
  },
  {
    "Organization": "West-2",
    "Manager Name": "Vivek Kumar",
    "Manager Level": "ASM",
    "Dealer Name": "Verma Motors - Sehore",
    "SCode": "1S5068",
    "State": "Madhya Pradesh",
    "City": "Sehore",
    "Contact No.": "8171110903"
  },
  {
    "Organization": "West-2",
    "Manager Name": "Mukesh Kumar Verma",
    "Manager Level": "MD",
    "Dealer Name": "Verma Motors - Sehore",
    "SCode": "1S5068",
    "State": "Madhya Pradesh",
    "City": "Sehore",
    "Contact No.": "9826074393"
  },
  {
    "Organization": "West-2",
    "Manager Name": "Ankit Verma",
    "Manager Level": "EOS Site Incharge",
    "Dealer Name": "Verma Motors - Sehore",
    "SCode": "1S5068",
    "State": "Madhya Pradesh",
    "City": "Sehore",
    "Contact No.": "9243365460"
  },
  {
    "Organization": "West-2",
    "Manager Name": "Pankaj Verma",
    "Manager Level": "WM",
    "Dealer Name": "Verma Motors - Sehore",
    "SCode": "1S5068",
    "State": "Madhya Pradesh",
    "City": "Sehore",
    "Contact No.": "8827519863"
  },
  {
    "Organization": "South-2",
    "Manager Name": "Manikadan R (D) / Mahamadali T Maniyar (N)",
    "Manager Level": "CSM",
    "Dealer Name": "Vijaya Motors Sales and Service-Chikmangalur",
    "SCode": "1S6095",
    "State": "Karnataka",
    "City": "Chikkamagaluru",
    "Contact No.": "9597257338,9972619686"
  },
  {
    "Organization": "South-2",
    "Manager Name": "PRABHU S MUGALKHOD",
    "Manager Level": "ASM",
    "Dealer Name": "Vijaya Motors Sales and Service-Chikmangalur",
    "SCode": "1S6095",
    "State": "Karnataka",
    "City": "Chikkamagaluru",
    "Contact No.": "9980512550"
  },
  {
    "Organization": "South-2",
    "Manager Name": "Kavan",
    "Manager Level": "WM",
    "Dealer Name": "Vijaya Motors Sales and Service-Chikmangalur",
    "SCode": "1S6095",
    "State": "Karnataka",
    "City": "Chikkamagaluru",
    "Contact No.": "9686197855"
  },
  {
    "Organization": "South-2",
    "Manager Name": "N Narayanan",
    "Manager Level": "RSM",
    "Dealer Name": "Vijaya Motors Sales and Service-Chikmangalur",
    "SCode": "1S6095",
    "State": "Karnataka",
    "City": "Chikkamagaluru",
    "Contact No.": "8123036700"
  },
  {
    "Organization": "South-2",
    "Manager Name": "Ajit Shenoy",
    "Manager Level": "MD",
    "Dealer Name": "Vijaya Motors Sales and Service-Chikmangalur",
    "SCode": "1S6095",
    "State": "Karnataka",
    "City": "Chikkamagaluru",
    "Contact No.": "9972148455"
  },
  {
    "Organization": "South-2",
    "Manager Name": "Lathesh",
    "Manager Level": "EOS Site Incharge",
    "Dealer Name": "Vijaya Motors Sales and Service-Chikmangalur",
    "SCode": "1S6095",
    "State": "Karnataka",
    "City": "Chikkamagaluru",
    "Contact No.": "8050076022"
  },
  {
    "Organization": "South-2",
    "Manager Name": "Manikadan R (D) / Mahamadali T Maniyar (N)",
    "Manager Level": "CSM",
    "Dealer Name": "Vijaya Motors Sales and Service-Chitradurga",
    "SCode": "1S6205",
    "State": "Karnataka",
    "City": "Chitradurga",
    "Contact No.": "9597257338,9972619686"
  },
  {
    "Organization": "South-2",
    "Manager Name": "Siddhesh",
    "Manager Level": "EOS Site Incharge",
    "Dealer Name": "Vijaya Motors Sales and Service-Chitradurga",
    "SCode": "1S6205",
    "State": "Karnataka",
    "City": "Chitradurga",
    "Contact No.": "8050076015"
  },
  {
    "Organization": "South-2",
    "Manager Name": "N Narayanan",
    "Manager Level": "RSM",
    "Dealer Name": "Vijaya Motors Sales and Service-Chitradurga",
    "SCode": "1S6205",
    "State": "Karnataka",
    "City": "Chitradurga",
    "Contact No.": "8123036700"
  },
  {
    "Organization": "South-2",
    "Manager Name": "Prabhu S Mugalkhod",
    "Manager Level": "ASM",
    "Dealer Name": "Vijaya Motors Sales and Service-Chitradurga",
    "SCode": "1S6205",
    "State": "Karnataka",
    "City": "Chitradurga",
    "Contact No.": "9980512550"
  },
  {
    "Organization": "South-2",
    "Manager Name": "Ajith Shenoy",
    "Manager Level": "MD",
    "Dealer Name": "Vijaya Motors Sales and Service-Chitradurga",
    "SCode": "1S6205",
    "State": "Karnataka",
    "City": "Chitradurga",
    "Contact No.": "9972148455"
  },
  {
    "Organization": "South-2",
    "Manager Name": "Harsha Kumar",
    "Manager Level": "WM",
    "Dealer Name": "Vijaya Motors Sales and Service-Chitradurga",
    "SCode": "1S6205",
    "State": "Karnataka",
    "City": "Chitradurga",
    "Contact No.": "8050076021"
  },
  {
    "Organization": "South-2",
    "Manager Name": "Ajith Shenoy",
    "Manager Level": "MD",
    "Dealer Name": "Vijaya Motors Sales and Service-Davanagere",
    "SCode": "1S6122",
    "State": "Karnataka",
    "City": "Davanagere",
    "Contact No.": "9972148455"
  },
  {
    "Organization": "South-2",
    "Manager Name": "PRABHU S MUGALKHOD",
    "Manager Level": "ASM",
    "Dealer Name": "Vijaya Motors Sales and Service-Davanagere",
    "SCode": "1S6122",
    "State": "Karnataka",
    "City": "Davanagere",
    "Contact No.": "9980512550"
  },
  {
    "Organization": "South-2",
    "Manager Name": "N Narayanan",
    "Manager Level": "RSM",
    "Dealer Name": "Vijaya Motors Sales and Service-Davanagere",
    "SCode": "1S6122",
    "State": "Karnataka",
    "City": "Davanagere",
    "Contact No.": "8123036700"
  },
  {
    "Organization": "South-2",
    "Manager Name": "Siddesh",
    "Manager Level": "EOS Site Incharge",
    "Dealer Name": "Vijaya Motors Sales and Service-Davanagere",
    "SCode": "1S6122",
    "State": "Karnataka",
    "City": "Davanagere",
    "Contact No.": "9972971505"
  },
  {
    "Organization": "South-2",
    "Manager Name": "Manikadan R (D) / Mahamadali T Maniyar (N)",
    "Manager Level": "CSM",
    "Dealer Name": "Vijaya Motors Sales and Service-Davanagere",
    "SCode": "1S6122",
    "State": "Karnataka",
    "City": "Davanagere",
    "Contact No.": "9597257338,9972619686"
  },
  {
    "Organization": "South-2",
    "Manager Name": "Parveen",
    "Manager Level": "WM",
    "Dealer Name": "Vijaya Motors Sales and Service-Davanagere",
    "SCode": "1S6122",
    "State": "Karnataka",
    "City": "Davanagere",
    "Contact No.": "8549019244"
  },
  {
    "Organization": "South-2",
    "Manager Name": "Manikadan R (D) / Mahamadali T Maniyar (N)",
    "Manager Level": "CSM",
    "Dealer Name": "Vijaya Motors Sales and Service-Shimoga",
    "SCode": "1S6099",
    "State": "Karnataka",
    "City": "Shimoga",
    "Contact No.": "9597257338,9972619686"
  },
  {
    "Organization": "South-2",
    "Manager Name": "Vishnu",
    "Manager Level": "WM",
    "Dealer Name": "Vijaya Motors Sales and Service-Shimoga",
    "SCode": "1S6099",
    "State": "Karnataka",
    "City": "Shimoga",
    "Contact No.": "9880530652"
  },
  {
    "Organization": "South-2",
    "Manager Name": "Vishnu",
    "Manager Level": "EOS Site Incharge",
    "Dealer Name": "Vijaya Motors Sales and Service-Shimoga",
    "SCode": "1S6099",
    "State": "Karnataka",
    "City": "Shimoga",
    "Contact No.": "9880530652"
  },
  {
    "Organization": "South-2",
    "Manager Name": "N Narayanan",
    "Manager Level": "RSM",
    "Dealer Name": "Vijaya Motors Sales and Service-Shimoga",
    "SCode": "1S6099",
    "State": "Karnataka",
    "City": "Shimoga",
    "Contact No.": "8123036700"
  },
  {
    "Organization": "South-2",
    "Manager Name": "PRABHU S MUGALKHOD",
    "Manager Level": "ASM",
    "Dealer Name": "Vijaya Motors Sales and Service-Shimoga",
    "SCode": "1S6099",
    "State": "Karnataka",
    "City": "Shimoga",
    "Contact No.": "9980512550"
  },
  {
    "Organization": "South-2",
    "Manager Name": "Ajit Shenoy",
    "Manager Level": "MD",
    "Dealer Name": "Vijaya Motors Sales and Service-Shimoga",
    "SCode": "1S6099",
    "State": "Karnataka",
    "City": "Shimoga",
    "Contact No.": "9972148455"
  },
  {
    "Organization": "South-2",
    "Manager Name": "PRABHU S MUGALKHOD",
    "Manager Level": "ASM",
    "Dealer Name": "Vijayshree Motor Works Pvt Ltd-Hospet",
    "SCode": "1S6184",
    "State": "Karnataka",
    "City": "Hospet",
    "Contact No.": "9980512550"
  },
  {
    "Organization": "South-2",
    "Manager Name": "Nandish (D) / David (N)",
    "Manager Level": "EOS Site Incharge",
    "Dealer Name": "Vijayshree Motor Works Pvt Ltd-Hospet",
    "SCode": "1S6184",
    "State": "Karnataka",
    "City": "Hospet",
    "Contact No.": "9164291989,7975966540"
  },
  {
    "Organization": "South-2",
    "Manager Name": "N Narayanan",
    "Manager Level": "RSM",
    "Dealer Name": "Vijayshree Motor Works Pvt Ltd-Hospet",
    "SCode": "1S6184",
    "State": "Karnataka",
    "City": "Hospet",
    "Contact No.": "8123036700"
  },
  {
    "Organization": "South-2",
    "Manager Name": "Vasantha Selvi Rani",
    "Manager Level": "MD",
    "Dealer Name": "Vijayshree Motor Works Pvt Ltd-Hospet",
    "SCode": "1S6184",
    "State": "Karnataka",
    "City": "Hospet",
    "Contact No.": "7338687282"
  },
  {
    "Organization": "South-2",
    "Manager Name": "Thouseef Ahmed",
    "Manager Level": "WM",
    "Dealer Name": "Vijayshree Motor Works Pvt Ltd-Hospet",
    "SCode": "1S6184",
    "State": "Karnataka",
    "City": "Hospet",
    "Contact No.": "7338687284"
  },
  {
    "Organization": "South-2",
    "Manager Name": "Prajwal Hiremath (D) / Mahamadali T Maniyar (N)",
    "Manager Level": "CSM",
    "Dealer Name": "Vijayshree Motor Works Pvt Ltd-Hospet",
    "SCode": "1S6184",
    "State": "Karnataka",
    "City": "Hospet",
    "Contact No.": "8296308637,9972619686"
  },
  {
    "Organization": "South-2",
    "Manager Name": "Venkatesha G",
    "Manager Level": "CSM",
    "Dealer Name": "Vijayshree Motor Works Pvt Ltd-Hospet",
    "SCode": "1S6184",
    "State": "Karnataka",
    "City": "Hospet",
    "Contact No.": "9108361445"
  },
  {
    "Organization": "North-2",
    "Manager Name": "Krishnendu Saha",
    "Manager Level": "RSM",
    "Dealer Name": "Vinayak Motors-Jhunjhunu",
    "SCode": "1S1040",
    "State": "Rajasthan",
    "City": "jhunjhunu",
    "Contact No.": "7980433425"
  },
  {
    "Organization": "North-2",
    "Manager Name": "Amit Pandey",
    "Manager Level": "ASM",
    "Dealer Name": "Vinayak Motors-Jhunjhunu",
    "SCode": "1S1040",
    "State": "Rajasthan",
    "City": "jhunjhunu",
    "Contact No.": "9099979633"
  },
  {
    "Organization": "North-2",
    "Manager Name": "Mr. Alok Chodhary",
    "Manager Level": "WM",
    "Dealer Name": "Vinayak Motors-Jhunjhunu",
    "SCode": "1S1040",
    "State": "Rajasthan",
    "City": "jhunjhunu",
    "Contact No.": "9649735500"
  },
  {
    "Organization": "North-2",
    "Manager Name": "Rinku Kumar (D) / Shivam Bhardwaj (N)",
    "Manager Level": "CSM",
    "Dealer Name": "Vinayak Motors-Jhunjhunu",
    "SCode": "1S1040",
    "State": "Rajasthan",
    "City": "jhunjhunu",
    "Contact No.": "9015965095,7878175708"
  },
  {
    "Organization": "East-1",
    "Manager Name": "Ranjeet Debkokri",
    "Manager Level": "MD",
    "Dealer Name": "Vishal Commercial World-Tinsukia",
    "SCode": "1S2268",
    "State": "Assam",
    "City": "Tinsukia",
    "Contact No.": "8811070727"
  },
  {
    "Organization": "East-1",
    "Manager Name": "ANJANAV CHANGMAI / VISHAL KUMAR",
    "Manager Level": "CSM",
    "Dealer Name": "Vishal Commercial World-Tinsukia",
    "SCode": "1S2268",
    "State": "Assam",
    "City": "Tinsukia",
    "Contact No.": "8822053356,7630027054"
  },
  {
    "Organization": "East-1",
    "Manager Name": "PRANJIT GOGOI / KAMALA KANTA BARUAH",
    "Manager Level": "WM",
    "Dealer Name": "Vishal Commercial World-Tinsukia",
    "SCode": "1S2268",
    "State": "Assam",
    "City": "Tinsukia",
    "Contact No.": "7035135101,7099070722"
  },
  {
    "Organization": "East-1",
    "Manager Name": "Yogeshwar Singh",
    "Manager Level": "RSM",
    "Dealer Name": "Vishal Commercial World-Tinsukia",
    "SCode": "1S2268",
    "State": "Assam",
    "City": "Tinsukia",
    "Contact No.": "9717966997"
  },
  {
    "Organization": "East-1",
    "Manager Name": "Rakesh Ghosh",
    "Manager Level": "ASM",
    "Dealer Name": "Vishal Commercial World-Tinsukia",
    "SCode": "1S2268",
    "State": "Assam",
    "City": "Tinsukia",
    "Contact No.": "9477374098"
  },
  {
    "Organization": "East-1",
    "Manager Name": "Sourav Chetry / Gaurav Gogoi",
    "Manager Level": "EOS Site Incharge",
    "Dealer Name": "Vishal Commercial World-Tinsukia",
    "SCode": "1S2268",
    "State": "Assam",
    "City": "Tinsukia",
    "Contact No.": "9395331688,7896518255"
  },
  {
    "Organization": "North-1",
    "Manager Name": "Adarsh Prasad",
    "Manager Level": "RSM",
    "Dealer Name": "Vishwa Karma Auto Works-Bilaspur",
    "SCode": "1S1190",
    "State": "Himachal Pradesh",
    "City": "Bilaspur",
    "Contact No.": "9717996321"
  },
  {
    "Organization": "North-1",
    "Manager Name": "Lalit Kumar",
    "Manager Level": "CSM",
    "Dealer Name": "Vishwa Karma Auto Works-Bilaspur",
    "SCode": "1S1190",
    "State": "Himachal Pradesh",
    "City": "Bilaspur",
    "Contact No.": "9625070004"
  },
  {
    "Organization": "North-1",
    "Manager Name": "Rakesh Kumar",
    "Manager Level": "EOS Site Incharge",
    "Dealer Name": "Vishwa Karma Auto Works-Bilaspur",
    "SCode": "1S1190",
    "State": "Haryana",
    "City": "Bilaspur",
    "Contact No.": "9418713944"
  },
  {
    "Organization": "North-1",
    "Manager Name": "Saurabh",
    "Manager Level": "WM",
    "Dealer Name": "Vishwa Karma Auto Works-Bilaspur",
    "SCode": "1S1190",
    "State": "Himachal Pradesh",
    "City": "Bilaspur",
    "Contact No.": "9805639583"
  },
  {
    "Organization": "North-1",
    "Manager Name": "Karamchand Sharma",
    "Manager Level": "MD",
    "Dealer Name": "Vishwa Karma Auto Works-Bilaspur",
    "SCode": "1S1190",
    "State": "Himachal Pradesh",
    "City": "Bilaspur",
    "Contact No.": "9816039583"
  },
  {
    "Organization": "North-1",
    "Manager Name": "Vaibhav Katyal",
    "Manager Level": "ASM",
    "Dealer Name": "Vishwa Karma Auto Works-Bilaspur",
    "SCode": "1S1190",
    "State": "Himachal Pradesh",
    "City": "Bilaspur",
    "Contact No.": "9219500351"
  },
  {
    "Organization": "West-1",
    "Manager Name": "LRS Rao / Yogesh Sarode",
    "Manager Level": "WM",
    "Dealer Name": "West - Eicher Power Solutions",
    "SCode": "1S0020",
    "State": "Maharashtra",
    "City": "Ahmednagar",
    "Contact No.": "9826618816,9172996936"
  },
  {
    "Organization": "West-1",
    "Manager Name": "Pramod Mathane",
    "Manager Level": "CSM",
    "Dealer Name": "West - Eicher Power Solutions",
    "SCode": "1S0020",
    "State": "Maharashtra",
    "City": "Ahmednagar",
    "Contact No.": "9755099396"
  },
  {
    "Organization": "West-2",
    "Manager Name": "Yashwant Singh",
    "Manager Level": "EOS Site Incharge",
    "Dealer Name": "Yashodha Motor-Yavatmal",
    "SCode": "1S3466",
    "State": "Vidarbha",
    "City": "Yavatmal",
    "Contact No.": "9175199919"
  },
  {
    "Organization": "West-2",
    "Manager Name": "Vishal Kulkarni",
    "Manager Level": "ASM",
    "Dealer Name": "Yashodha Motor-Yavatmal",
    "SCode": "1S3466",
    "State": "Vidarbha",
    "City": "Yavatmal",
    "Contact No.": "8349997686"
  },
  {
    "Organization": "West-2",
    "Manager Name": "Vaibhao Karanjekar",
    "Manager Level": "CSM",
    "Dealer Name": "Yashodha Motor-Yavatmal",
    "SCode": "1S3466",
    "State": "Vidarbha",
    "City": "Yavatmal",
    "Contact No.": "8698425989"
  },
  {
    "Organization": "West-2",
    "Manager Name": "Akshay Ingle",
    "Manager Level": "WM",
    "Dealer Name": "Yashodha Motor-Yavatmal",
    "SCode": "1S3466",
    "State": "Vidarbha",
    "City": "Yavatmal",
    "Contact No.": "9175199913"
  },
  {
    "Organization": "West-2",
    "Manager Name": "Bharat Lalwani",
    "Manager Level": "MD",
    "Dealer Name": "Yashodha Motor-Yavatmal",
    "SCode": "1S3466",
    "State": "Vidarbha",
    "City": "Yavatmal",
    "Contact No.": "8055321000"
  },
  {
    "Organization": "West-2",
    "Manager Name": "Sudhir Kumar",
    "Manager Level": "RSM",
    "Dealer Name": "Yashodha Motor-Yavatmal",
    "SCode": "1S3466",
    "State": "Vidarbha",
    "City": "Yavatmal",
    "Contact No.": "9752542733"
  }
];

export default function DealerSearchApp() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedState, setSelectedState] = useState('');
  const [selectedCity, setSelectedCity] = useState('');
  const [selectedSCode, setSelectedSCode] = useState('');
  const [showFilters, setShowFilters] = useState(false);

  // Extract unique values for filters
  const { states, cities, sCodes } = useMemo(() => {
    const statesSet = new Set();
    const citiesSet = new Set();
    const sCodesSet = new Set();

    DEALER_DATA.forEach(item => {
      if (item.State) statesSet.add(item.State);
      if (item.City) citiesSet.add(item.City);
      if (item.SCode) sCodesSet.add(item.SCode);
    });

    return {
      states: Array.from(statesSet).sort(),
      cities: Array.from(citiesSet).sort(),
      sCodes: Array.from(sCodesSet).sort()
    };
  }, []);

  // Filter data based on search and filters
  const filteredData = useMemo(() => {
    return DEALER_DATA.filter(item => {
      const matchesSearch = !searchQuery || 
        (item['Dealer Name'] && item['Dealer Name'].toLowerCase().includes(searchQuery.toLowerCase()));
      
      const matchesState = !selectedState || item.State === selectedState;
      const matchesCity = !selectedCity || item.City === selectedCity;
      const matchesSCode = !selectedSCode || item.SCode === selectedSCode;

      return matchesSearch && matchesState && matchesCity && matchesSCode;
    });
  }, [searchQuery, selectedState, selectedCity, selectedSCode]);

  const clearFilters = () => {
    setSelectedState('');
    setSelectedCity('');
    setSelectedSCode('');
    setSearchQuery('');
  };

  const hasActiveFilters = selectedState || selectedCity || selectedSCode || searchQuery;

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-slate-50">
      {/* Header */}
      <div className="bg-white border-b border-slate-200 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex items-center gap-3">
            <div className="bg-gradient-to-br from-blue-600 to-blue-700 p-3 rounded-xl shadow-lg">
              <Building2 className="w-7 h-7 text-white" />
            </div>
            <div>
              <h1 className="text-3xl font-bold bg-gradient-to-r from-slate-800 to-slate-600 bg-clip-text text-transparent">
                Dealer Management System
              </h1>
              <p className="text-sm text-slate-500 mt-1">Search and manage dealer escalation matrix</p>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Search and Filter Section */}
        <div className="bg-white rounded-2xl shadow-xl border border-slate-200 p-6 mb-6">
          {/* Search Bar */}
          <div className="relative mb-4">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
            <input
              type="text"
              placeholder="Search by dealer name..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-12 pr-4 py-3.5 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all text-slate-800 placeholder-slate-400"
            />
          </div>

          {/* Filter Toggle */}
          <div className="flex items-center justify-between">
            <button
              onClick={() => setShowFilters(!showFilters)}
              className="flex items-center gap-2 px-4 py-2 bg-blue-50 text-blue-700 rounded-lg hover:bg-blue-100 transition-colors font-medium"
            >
              <Filter className="w-4 h-4" />
              {showFilters ? 'Hide Filters' : 'Show Filters'}
            </button>

            {hasActiveFilters && (
              <button
                onClick={clearFilters}
                className="flex items-center gap-2 px-4 py-2 text-slate-600 hover:text-slate-800 transition-colors"
              >
                <X className="w-4 h-4" />
                Clear All
              </button>
            )}
          </div>

          {/* Filters */}
          {showFilters && (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4 pt-4 border-t border-slate-200">
              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-2">State</label>
                <select
                  value={selectedState}
                  onChange={(e) => setSelectedState(e.target.value)}
                  className="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-slate-800"
                >
                  <option value="">All States</option>
                  {states.map(state => (
                    <option key={state} value={state}>{state}</option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-2">City</label>
                <select
                  value={selectedCity}
                  onChange={(e) => setSelectedCity(e.target.value)}
                  className="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-slate-800"
                >
                  <option value="">All Cities</option>
                  {cities.map(city => (
                    <option key={city} value={city}>{city}</option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-2">SCode</label>
                <select
                  value={selectedSCode}
                  onChange={(e) => setSelectedSCode(e.target.value)}
                  className="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-slate-800"
                >
                  <option value="">All SCodes</option>
                  {sCodes.map(code => (
                    <option key={code} value={code}>{code}</option>
                  ))}
                </select>
              </div>
            </div>
          )}
        </div>

        {/* Results Summary */}
        <div className="mb-4 flex items-center justify-between">
          <p className="text-slate-600">
            <span className="font-bold text-blue-600">{filteredData.length}</span> 
            {' '}result{filteredData.length !== 1 ? 's' : ''} found
          </p>
        </div>

        {/* Results Table */}
        <div className="bg-white rounded-2xl shadow-xl border border-slate-200 overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="bg-gradient-to-r from-blue-600 to-blue-700 text-white">
                  <th className="px-6 py-4 text-left text-sm font-bold">Dealer Name</th>
                  <th className="px-6 py-4 text-left text-sm font-bold">Manager Name</th>
                  <th className="px-6 py-4 text-left text-sm font-bold">Level</th>
                  <th className="px-6 py-4 text-left text-sm font-bold">Contact No.</th>
                  <th className="px-6 py-4 text-left text-sm font-bold">Location</th>
                  <th className="px-6 py-4 text-left text-sm font-bold">SCode</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200">
                {filteredData.length === 0 ? (
                  <tr>
                    <td colSpan="6" className="px-6 py-12 text-center">
                      <div className="flex flex-col items-center gap-3">
                        <div className="bg-slate-100 p-4 rounded-full">
                          <Search className="w-8 h-8 text-slate-400" />
                        </div>
                        <p className="text-slate-500 font-medium">No dealers found</p>
                        <p className="text-sm text-slate-400">Try adjusting your search or filters</p>
                      </div>
                    </td>
                  </tr>
                ) : (
                  filteredData.map((item, index) => (
                    <tr 
                      key={index} 
                      className="hover:bg-blue-50 transition-colors group"
                    >
                      <td className="px-6 py-4">
                        <div className="flex items-center gap-2">
                          <Building2 className="w-4 h-4 text-blue-600 opacity-0 group-hover:opacity-100 transition-opacity" />
                          <span className="font-medium text-slate-800">{item['Dealer Name']}</span>
                        </div>
                      </td>
                      <td className="px-6 py-4">
                        <div className="flex items-center gap-2">
                          <Briefcase className="w-4 h-4 text-slate-400" />
                          <span className="text-slate-700">{item['Manager Name']}</span>
                        </div>
                      </td>
                      <td className="px-6 py-4">
                        <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-blue-100 text-blue-700">
                          {item['Manager Level']}
                        </span>
                      </td>
                      <td className="px-6 py-4">
                        <div className="flex items-center gap-2">
                          <Phone className="w-4 h-4 text-green-600" />
                          <a 
                            href={`tel:${item['Contact No.']}`}
                            className="text-slate-700 hover:text-blue-600 transition-colors font-mono text-sm"
                          >
                            {item['Contact No.']}
                          </a>
                        </div>
                      </td>
                      <td className="px-6 py-4">
                        <div className="flex items-center gap-2">
                          <MapPin className="w-4 h-4 text-red-500" />
                          <span className="text-slate-600 text-sm">
                            {item.City}, {item.State}
                          </span>
                        </div>
                      </td>
                      <td className="px-6 py-4">
                        <span className="text-slate-600 font-mono text-sm">{item.SCode}</span>
                      </td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>
        </div>

        {/* Footer */}
        <div className="mt-8 text-center text-sm text-slate-500">
          <p>Total Dealers in System: {DEALER_DATA.length}</p>
        </div>
      </div>
    </div>
  );
}
