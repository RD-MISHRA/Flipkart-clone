
// import { Box, Typography, Table, TableBody, TableRow, TableCell, styled ,Button,Grid} from '@mui/material';
// import { LocalOffer as Badge } from '@mui/icons-material';
// import * as React from 'react';
// import Rating from '@mui/material/Rating';
// import Stack from '@mui/material/Stack';
// const SmallText = styled(Box)`
//     font-size: 14px;
//     vertical-align: baseline;
//     & > p {
//         font-size: 14px;
//         margin-top: 10px;
//     }
// `

// const ColumnText = styled(TableRow)`
//     font-size: 14px;
//     vertical-align: baseline;
//     & > td {
//         font-size: 14px;
//         margin-top: 10px;
//     }
// `

// const StyledBadge = styled(Badge)`
//     margin-right: 10px;
//     color: #00CC00;
//     font-size: 15px;
// `;

// const ProductDetail = ({ product }) => {
//     const adURL = 'https://rukminim1.flixcart.com/lockin/774/185/images/CCO__PP_2019-07-14.png?q=50';
//     const date = new Date(new Date().getTime()+(5*24*60*60*1000));
    
//     return (
//         <>
//             <Typography>Available offers</Typography>
//             <SmallText>
//                 <Typography><StyledBadge />Bank Offer 5% Unlimited Cashback on Flipkart Axis Bank Credit Card</Typography>
//                 <Typography><StyledBadge />Bank Offer 10% Off on Bank of Baroda Mastercard debit card first time transaction, Terms and Condition apply</Typography>
//                 <Typography><StyledBadge />Purchase this Furniture or Appliance and Get Extra ₹500 Off on Select ACs</Typography>
//                 <Typography><StyledBadge />Partner OfferExtra 10% off upto ₹500 on next furniture purchase</Typography>
//             </SmallText>
//             <Table>
//                 <TableBody>
//                     <ColumnText>
//                         <TableCell style={{ color: '#878787' }}>Delivery</TableCell>
//                         <TableCell style={{ fontWeight: 600 }}>Delivery by {date.toDateString()} | ₹40</TableCell>
//                     </ColumnText>
//                     <ColumnText>
//                         <TableCell style={{ color: '#878787' }}>Warranty</TableCell>
//                         <TableCell>No Warranty</TableCell>
//                     </ColumnText>
//                     <ColumnText>
//                         <TableCell style={{ color: '#878787' }}>Seller</TableCell>
//                         <TableCell>
//                             <span style={{ color: '#2874f0' }}>SuperComNet</span>
//                             <Typography>GST invoice available</Typography>
//                             <Typography>View more sellers starting from ₹329</Typography>
//                         </TableCell>
//                     </ColumnText>
//                     <TableRow>
//                         <TableCell colSpan={2}>
//                             <img src={adURL} style={{ width: 390 }} />
//                         </TableCell>
//                     </TableRow>
//                     <ColumnText>
//                         <TableCell style={{ color: '#878787' }}>Description</TableCell>
//                         <TableCell>{product.description}</TableCell>
//                     </ColumnText>
//                 </TableBody>
//             </Table>
//             <Grid container direction="column">
//             <Grid item>
//                 <Typography variant="h4">Ratings & Reviews</Typography>
//             </Grid>
//             <Grid item container justifyContent="flex-start" alignItems="center" spacing={2}>
//                 <Grid item>
//                     <Rating name="size-large" defaultValue={2} size="large" />
//                 </Grid>
//                 <Grid item>
//                     <Button variant="outlined">Outlined</Button>
//                 </Grid>
//             </Grid>
//             <Grid item>
               
//             </Grid>
//         </Grid>

//         </>
//     )
// }

// export default ProductDetail;



// import React, { useState } from 'react';
// import { Box, Typography, Table, TableBody, TableRow, TableCell, styled, Button, Grid, TextField } from '@mui/material';
// import { LocalOffer as Badge } from '@mui/icons-material';
// import Rating from '@mui/material/Rating';
// import Stack from '@mui/material/Stack';

// const SmallText = styled(Box)`
//     font-size: 14px;
//     vertical-align: baseline;
//     & > p {
//         font-size: 14px;
//         margin-top: 10px;
//     }
// `

// const ColumnText = styled(TableRow)`
//     font-size: 14px;
//     vertical-align: baseline;
//     & > td {
//         font-size: 14px;
//         margin-top: 10px;
//     }
// `

// const StyledBadge = styled(Badge)`
//     margin-right: 10px;
//     color: #00CC00;
//     font-size: 15px;
// `;

// const ProductDetail = ({ product }) => {
//     const [rating, setRating] = useState(0);
//     const [review, setReview] = useState("");
//     const [reviews, setReviews] = useState([]);
//     const date = new Date(new Date().getTime() + (5 * 24 * 60 * 60 * 1000));
//     const adURL = 'https://rukminim1.flixcart.com/lockin/774/185/images/CCO__PP_2019-07-14.png?q=50';
    
//     const handleRatingChange = (event, newValue) => {
//         setRating(newValue);
//     }

//     const handleReviewChange = (event) => {
//         setReview(event.target.value);
//     }

//     const handleAddReview = () => {
//         if (rating === 0 || review === "") {
//             alert("Please provide both rating and review before submitting.");
//             return;
//         }
//         const newReview = { rating, review };
//         setReviews([...reviews, newReview]);
//         setRating(0);
//         setReview("");
//     }
    
    



//     return (
//         <>
//             <Typography>Available offers</Typography>
//             <SmallText>
//                 <Typography><StyledBadge />Bank Offer 5% Unlimited Cashback on Flipkart Axis Bank Credit Card</Typography>
//                 <Typography><StyledBadge />Bank Offer 10% Off on Bank of Baroda Mastercard debit card first time transaction, Terms and Condition apply</Typography>
//                 <Typography><StyledBadge />Purchase this Furniture or Appliance and Get Extra ₹500 Off on Select ACs</Typography>
//                 <Typography><StyledBadge />Partner OfferExtra 10% off upto ₹500 on next furniture purchase</Typography>
//             </SmallText>
//             <Table>
//                 <TableBody>
//                     <ColumnText>
//                         <TableCell style={{ color: '#878787' }}>Delivery</TableCell>
//                         <TableCell style={{ fontWeight: 600 }}>Delivery by {date.toDateString()} | ₹40</TableCell>
//                     </ColumnText>
//                     <ColumnText>
//                         <TableCell style={{ color: '#878787' }}>Warranty</TableCell>
//                         <TableCell>No Warranty</TableCell>
//                     </ColumnText>
//                     <ColumnText>
//                         <TableCell style={{ color: '#878787' }}>Seller</TableCell>
//                         <TableCell>
//                             <span style={{ color: '#2874f0' }}>SuperComNet</span>
//                             <Typography>GST invoice available</Typography>
//                             <Typography>View more sellers starting from ₹329</Typography>
//                         </TableCell>
//                     </ColumnText>
//                     <TableRow>
//                         <TableCell colSpan={2}>
//                             <img src={adURL} style={{ width: 390 }} alt="Advertisement" />
//                         </TableCell>
//                     </TableRow>
//                     <ColumnText>
//                         <TableCell style={{ color: '#878787' }}>Description</TableCell>
//                         <TableCell>{product.description}</TableCell>
//                     </ColumnText>
//                 </TableBody>
//             </Table>
//             <React.Fragment>
//     <Typography variant="h5"   style={{ display: 'flex', alignItems: 'center', marginTop: '20px' }}>Ratings & Reviews</Typography>
//     <Typography variant="h10"   style={{ display: 'flex', alignItems: 'center', marginTop: '20px' }}>Average Rating:</Typography>
//     <div style={{ display: 'flex', alignItems: 'center', marginTop: '20px' }}>
//         <Rating name="size-large" value={rating} onChange={handleRatingChange} size="large" />
//         <TextField 
//             label="Add a review"
//             value={review}
//             onChange={handleReviewChange}
//             variant="outlined"
//             style={{ marginLeft: '20px',width:'500px' }}
//         />
//         <Button variant="outlined" onClick={handleAddReview} style={{ marginLeft: '20px',color:'black',borderColor:'black'}}>Add Review</Button>
//     </div>
//     {reviews.map((review, index) => (
//         <React.Fragment key={index}>
//             <Typography>Rating: {review.rating}</Typography>
//             <Typography>{review.review}</Typography>
//         </React.Fragment>
//     ))}
// </React.Fragment>

//         </>
//     )
// }

// export default ProductDetail;



// import React, { useState } from 'react';
// import { Box, Typography, Table, TableBody, TableRow, TableCell, styled, Button, TextField } from '@mui/material';
// import { LocalOffer as Badge } from '@mui/icons-material';
// import Rating from '@mui/material/Rating';
// import { addReview as postReview } from '../../service/api.js'; // Import the service function

// const SmallText = styled(Box)`
//     font-size: 14px;
//     vertical-align: baseline;
//     & > p {
//         font-size: 14px;
//         margin-top: 10px;
//     }
// `;

// const ColumnText = styled(TableRow)`
//     font-size: 14px;
//     vertical-align: baseline;
//     & > td {
//         font-size: 14px;
//         margin-top: 10px;
//     }
// `;

// const StyledBadge = styled(Badge)`
//     margin-right: 10px;
//     color: #00CC00;
//     font-size: 15px;
// `;

// const ProductDetail = ({ product }) => {
//     const [rating, setRating] = useState(0);
//     const [review, setReview] = useState("");
//     const [reviews, setReviews] = useState([]);
//     const date = new Date(new Date().getTime() + (5 * 24 * 60 * 60 * 1000));
//     const adURL = 'https://rukminim1.flixcart.com/lockin/774/185/images/CCO__PP_2019-07-14.png?q=50';
    
//     const handleRatingChange = (event, newValue) => {
//         setRating(newValue);
//     };

//     const handleReviewChange = (event) => {
//         setReview(event.target.value);
//     };

//     const handleAddReview = async () => {
//         if (rating === 0 || review === "") {
//             alert("Please provide both rating and review before submitting.");
//             return;
//         }
    
//         // Get the username from local storage
//         const username = localStorage.getItem('username');
//         if (!username) {
//             alert("User not logged in");
//             return;
//         }
    
//         const newReview = {
//             productId: product.id,
//             username,
//             rating,
//             comment: review,
//         };
    
//         try {
//             const savedReview = await postReview(newReview);
//             console.log('Review posted successfully:', savedReview);
//             setReviews([...reviews, savedReview]);
//             setRating(0);
//             setReview("");
//         } catch (error) {
//             if (error.response && error.response.data) {
//                 if (error.response.data.msg === 'You have already added a comment for this product') {
//                     alert('You have already added a review for this product.');
//                 } else {
//                     alert('Error posting review: ' + error.response.data.msg);
//                 }
//                 console.error('Error posting review:', error.response.data);
//             } else {
//                 alert('Error posting review: ' + error.message);
//                 console.error('Error posting review:', error);
//             }
//         }
//     };

    

//     return (
//         <>
//             <Typography>Available offers</Typography>
//             <SmallText>
//                 <Typography><StyledBadge />Bank Offer 5% Unlimited Cashback on Flipkart Axis Bank Credit Card</Typography>
//                 <Typography><StyledBadge />Bank Offer 10% Off on Bank of Baroda Mastercard debit card first time transaction, Terms and Condition apply</Typography>
//                 <Typography><StyledBadge />Purchase this Furniture or Appliance and Get Extra ₹500 Off on Select ACs</Typography>
//                 <Typography><StyledBadge />Partner OfferExtra 10% off upto ₹500 on next furniture purchase</Typography>
//             </SmallText>
//             <Table>
//                 <TableBody>
//                     <ColumnText>
//                         <TableCell style={{ color: '#878787' }}>Delivery</TableCell>
//                         <TableCell style={{ fontWeight: 600 }}>Delivery by {date.toDateString()} | ₹40</TableCell>
//                     </ColumnText>
//                     <ColumnText>
//                         <TableCell style={{ color: '#878787' }}>Warranty</TableCell>
//                         <TableCell>No Warranty</TableCell>
//                     </ColumnText>
//                     <ColumnText>
//                         <TableCell style={{ color: '#878787' }}>Seller</TableCell>
//                         <TableCell>
//                             <span style={{ color: '#2874f0' }}>SuperComNet</span>
//                             <Typography>GST invoice available</Typography>
//                             <Typography>View more sellers starting from ₹329</Typography>
//                         </TableCell>
//                     </ColumnText>
//                     <TableRow>
//                         <TableCell colSpan={2}>
//                             <img src={adURL} style={{ width: 390 }} alt="Advertisement" />
//                         </TableCell>
//                     </TableRow>
//                     <ColumnText>
//                         <TableCell style={{ color: '#878787' }}>Description</TableCell>
//                         <TableCell>{product.description}</TableCell>
//                     </ColumnText>
//                 </TableBody>
//             </Table>
//             <React.Fragment>
//                 <Typography variant="h5" style={{ display: 'flex', alignItems: 'center', marginTop: '20px' }}>Ratings & Reviews</Typography>
//                 <Typography variant="h10" style={{ display: 'flex', alignItems: 'center', marginTop: '20px' }}>Average Rating:</Typography>
//                 <div style={{ display: 'flex', alignItems: 'center', marginTop: '20px' }}>
//                     <Rating name="size-large" value={rating} onChange={handleRatingChange} size="large" />
//                     <TextField 
//                         label="Add a review"
//                         value={review}
//                         onChange={handleReviewChange}
//                         variant="outlined"
//                         style={{ marginLeft: '20px', width: '500px' }}
//                     />
//                     <Button variant="outlined" onClick={handleAddReview} style={{ marginLeft: '20px', color: 'black', borderColor: 'black' }}>Add Review</Button>
//                 </div>
                
//             </React.Fragment>
//         </>
//     );
// };

// export default ProductDetail;



// import React, { useState, useEffect } from 'react';
// import { Box, Typography, Table, TableBody, TableRow, TableCell, styled, Button, TextField } from '@mui/material';
// import { LocalOffer as Badge } from '@mui/icons-material';
// import Rating from '@mui/material/Rating';
// import { addReview as postReview, getReview as fetchReviews } from '../../service/api.js';
// import StarIcon from '@mui/icons-material/Star';
// const SmallText = styled(Box)`
//     font-size: 14px;
//     vertical-align: baseline;
//     & > p {
//         font-size: 14px;
//         margin-top: 10px;
//     }
// `;

// const ColumnText = styled(TableRow)`
//     font-size: 14px;
//     vertical-align: baseline;
//     & > td {
//         font-size: 14px;
//         margin-top: 10px;
//     }
// `;

// const StyledBadge = styled(Badge)`
//     margin-right: 10px;
//     color: #00CC00;
//     font-size: 15px;
// `;

// const ProductDetail = ({ product }) => {
//     const [rating, setRating] = useState(0);
//     const [review, setReview] = useState("");
//     const [reviews, setReviews] = useState([]);
//     const date = new Date(new Date().getTime() + (5 * 24 * 60 * 60 * 1000));
//     const adURL = 'https://rukminim1.flixcart.com/lockin/774/185/images/CCO__PP_2019-07-14.png?q=50';

//     useEffect(() => {
//         const loadReviews = async () => {
//             try {
//                 const fetchedReviews = await fetchReviews(product.id);
//                 setReviews(fetchedReviews);
//             } catch (error) {
//                 console.error('Error fetching reviews:', error);
//             }
//         };

//         loadReviews();
//     }, [product.id]);

//     const handleRatingChange = (event, newValue) => {
//         setRating(newValue);
//     };

//     const handleReviewChange = (event) => {
//         setReview(event.target.value);
//     };

//     const handleAddReview = async () => {
//         if (rating === 0 || review === "") {
//             alert("Please provide both rating and review before submitting.");
//             return;
//         }

//         const username = localStorage.getItem('username');
//         if (!username) {
//             alert("User not logged in");
//             return;
//         }

//         const newReview = {
//             productId: product.id,
//             username,
//             rating,
//             comment: review,
//         };

//         try {
//             const savedReview = await postReview(newReview);
//             console.log('Review posted successfully:', savedReview);
//             setReviews([...reviews, savedReview]);
//             setRating(0);
//             setReview("");
//         } catch (error) {
//             if (error.response && error.response.data) {
//                 if (error.response.data.msg === 'You have already added a comment for this product') {
//                     alert('You have already added a review for this product.');
//                 } else {
//                     alert('Error posting review: ' + error.response.data.msg);
//                 }
//                 console.error('Error posting review:', error.response.data);
//             } else {
//                 alert('Error posting review: ' + error.message);
//                 console.error('Error posting review:', error);
//             }
//         }
//     };

//     return (
//         <>
//             <Typography>Available offers</Typography>
//             <SmallText>
//                 <Typography><StyledBadge />Bank Offer 5% Unlimited Cashback on Flipkart Axis Bank Credit Card</Typography>
//                 <Typography><StyledBadge />Bank Offer 10% Off on Bank of Baroda Mastercard debit card first time transaction, Terms and Condition apply</Typography>
//                 <Typography><StyledBadge />Purchase this Furniture or Appliance and Get Extra ₹500 Off on Select ACs</Typography>
//                 <Typography><StyledBadge />Partner OfferExtra 10% off upto ₹500 on next furniture purchase</Typography>
//             </SmallText>
//             <Table>
//                 <TableBody>
//                     <ColumnText>
//                         <TableCell style={{ color: '#878787' }}>Delivery</TableCell>
//                         <TableCell style={{ fontWeight: 600 }}>Delivery by {date.toDateString()} | ₹40</TableCell>
//                     </ColumnText>
//                     <ColumnText>
//                         <TableCell style={{ color: '#878787' }}>Warranty</TableCell>
//                         <TableCell>No Warranty</TableCell>
//                     </ColumnText>
//                     <ColumnText>
//                         <TableCell style={{ color: '#878787' }}>Seller</TableCell>
//                         <TableCell>
//                             <span style={{ color: '#2874f0' }}>SuperComNet</span>
//                             <Typography>GST invoice available</Typography>
//                             <Typography>View more sellers starting from ₹329</Typography>
//                         </TableCell>
//                     </ColumnText>
//                     <TableRow>
//                         <TableCell colSpan={2}>
//                             <img src={adURL} style={{ width: 390 }} alt="Advertisement" />
//                         </TableCell>
//                     </TableRow>
//                     <ColumnText>
//                         <TableCell style={{ color: '#878787' }}>Description</TableCell>
//                         <TableCell>{product.description}</TableCell>
//                     </ColumnText>
//                 </TableBody>
//             </Table>
//             <React.Fragment>
//                 <Typography variant="h5" style={{ display: 'flex', alignItems: 'center', marginTop: '20px' }}>Ratings & Reviews</Typography>
//                 <Typography variant="h10" style={{ display: 'flex', alignItems: 'center', marginTop: '20px' }}>Average Rating:</Typography>
//                 <div style={{ display: 'flex', alignItems: 'center', marginTop: '20px' }}>
//                     <Rating name="size-large" value={rating} onChange={handleRatingChange} size="large" />
//                     <TextField 
//                         label="Add a review"
//                         value={review}
//                         onChange={handleReviewChange}
//                         variant="outlined"
//                         style={{ marginLeft: '20px', width: '500px' }}
//                     />
//                     <Button variant="outlined" onClick={handleAddReview} style={{ marginLeft: '20px', color: 'black', borderColor: 'black' }}>Add Review</Button>
//                 </div>
//                 <Box mt={4}>
                    
//                     {reviews.length > 0 ? (
//                         <Table>
//                             <TableBody>
//                                 {reviews.map((rev, index) => (
//                                     <TableRow key={index}>
//                                         <TableCell>
                                          
//                                         <div style={{ display: 'flex', alignItems: 'center' }}>
//   <p style={{ margin: 0, fontSize: '16px' }}>{rev.rating}</p>
//   <StarIcon fontSize="small" style={{ fontSize: '16px' }}/>
// </div>


//                                             <Typography variant="body2">{rev.comment}</Typography>
//                                         </TableCell>
//                                     </TableRow>
//                                 ))}
//                             </TableBody>
//                         </Table>
//                     ) : (
//                         <Typography variant="body2">No reviews yet.</Typography>
//                     )}
//                 </Box>
//             </React.Fragment>
//         </>
//     );
// };

// export default ProductDetail;











import React, { useState, useEffect } from 'react';
import { Box, Typography, Table, TableBody, TableRow, TableCell, styled, Button, TextField } from '@mui/material';
import { LocalOffer as Badge } from '@mui/icons-material';
import Rating from '@mui/material/Rating';
import { addReview as postReview, getReview as fetchReviews } from '../../service/api.js';
import StarIcon from '@mui/icons-material/Star';
import CheckIcon from '@mui/icons-material/Check';
const SmallText = styled(Box)`
    font-size: 14px;
    vertical-align: baseline;
    & > p {
        font-size: 14px;
        margin-top: 10px;
    }
`;

const ColumnText = styled(TableRow)`
    font-size: 14px;
    vertical-align: baseline;
    & > td {
        font-size: 14px;
        margin-top: 10px;
    }
`;

const StyledBadge = styled(Badge)`
    margin-right: 10px;
    color: #00CC00;
    font-size: 15px;
`;

const ProductDetail = ({ product }) => {
    const [rating, setRating] = useState(0);
    const [review, setReview] = useState("");
    const [reviews, setReviews] = useState([]);
    const date = new Date(new Date().getTime() + (5 * 24 * 60 * 60 * 1000));
    const adURL = 'https://rukminim1.flixcart.com/lockin/774/185/images/CCO__PP_2019-07-14.png?q=50';

    useEffect(() => {
        const loadReviews = async () => {
            try {
                const fetchedReviews = await fetchReviews(product.id);
                setReviews(fetchedReviews);
            } catch (error) {
                console.error('Error fetching reviews:', error);
            }
        };

        loadReviews();
    }, [product.id]);

    const handleRatingChange = (event, newValue) => {
        setRating(newValue);
    };

    const handleReviewChange = (event) => {
        setReview(event.target.value);
    };

    const handleAddReview = async () => {
        if (rating === 0 || review === "") {
            alert("Please provide both rating and review before submitting.");
            return;
        }

        const username = localStorage.getItem('username');
        if (!username) {
            alert("User not logged in");
            return;
        }

        const newReview = {
            productId: product.id,
            username,
            rating,
            comment: review,
        };

        try {
            const savedReview = await postReview(newReview);
            console.log('Review posted successfully:', savedReview);
            setReviews([...reviews, savedReview]);
            setRating(0);
            setReview("");
        } catch (error) {
            if (error.response && error.response.data) {
                if (error.response.data.msg === 'You have already added a comment for this product') {
                    alert('You have already added a review for this product.');
                } else {
                    alert('Error posting review: ' + error.response.data.msg);
                }
                console.error('Error posting review:', error.response.data);
            } else {
                alert('Error posting review: ' + error.message);
                console.error('Error posting review:', error);
            }
        }
    };

    const getRatingLabel = (rating) => {
        switch (rating) {
            case 5:
                return "Very Good";
            case 4:
                return "Good";
            case 3:
                return "Average";
            case 2:
                return "Bad";
            case 1:
                return "Very Bad";
            default:
                return "";
        }
    };

    const getDivColor = (rating) => {
        switch (rating) {
            case 5:
            case 4:
            case 3:
                return "green";
            case 2:
                return "rgb(255, 159, 0)";
            case 1:
                return "rgb(255, 97, 97)";
            default:
                return "transparent";
        }
    };

    const calculateAverageRating = () => {
        if (reviews.length === 0) return 0;

        const totalRating = reviews.reduce((acc, cur) => acc + cur.rating, 0);
        return (totalRating / reviews.length).toFixed(1);
    };

    return (
        <>
            <Typography>Available offers</Typography>
            <SmallText>
                <Typography><StyledBadge />Bank Offer 5% Unlimited Cashback on Flipkart Axis Bank Credit Card</Typography>
                <Typography><StyledBadge />Bank Offer 10% Off on Bank of Baroda Mastercard debit card first time transaction, Terms and Condition apply</Typography>
                <Typography><StyledBadge />Purchase this Furniture or Appliance and Get Extra ₹500 Off on Select ACs</Typography>
                <Typography><StyledBadge />Partner OfferExtra 10% off upto ₹500 on next furniture purchase</Typography>
            </SmallText>
            <Table>
                <TableBody>
                    <ColumnText>
                        <TableCell style={{ color: '#878787' }}>Delivery</TableCell>
                        <TableCell style={{ fontWeight: 600 }}>Delivery by {date.toDateString()} | ₹40</TableCell>
                    </ColumnText>
                    <ColumnText>
                        <TableCell style={{ color: '#878787' }}>Warranty</TableCell>
                        <TableCell>No Warranty</TableCell>
                    </ColumnText>
                    <ColumnText>
                        <TableCell style={{ color: '#878787' }}>Seller</TableCell>
                        <TableCell>
                            <span style={{ color: '#2874f0' }}>SuperComNet</span>
                            <Typography>GST invoice available</Typography>
                            <Typography>View more sellers starting from ₹329</Typography>
                        </TableCell>
                    </ColumnText>
                    <TableRow>
                        <TableCell colSpan={2}>
                            <img src={adURL} style={{ width: 390 }} alt="Advertisement" />
                        </TableCell>
                    </TableRow>
                    <ColumnText>
                        <TableCell style={{ color: '#878787' }}>Description</TableCell>
                        <TableCell>{product.description}</TableCell>
                    </ColumnText>
                </TableBody>
            </Table>
            <React.Fragment>
            <Typography variant="h5" style={{ display: 'flex', alignItems: 'center', marginTop: '20px' }}>
  Ratings & Reviews
</Typography>
<Typography variant="h5" style={{ display: 'flex', alignItems: 'center', marginTop: '20px' }}>
  {calculateAverageRating()} <StarIcon style={{ fontSize: 40 }} />
</Typography>
<p style={{ color: '#878787', marginTop: '0' }}>
  {reviews.length} rating and reviews
</p>

                <div style={{ display: 'flex', alignItems: 'center', marginTop: '20px' }}>
                    <Rating name="size-large" value={rating} onChange={handleRatingChange} size="large" />
                    <TextField 
                        label="Add a review"
                        value={review}
                        onChange={handleReviewChange}
                        variant="outlined"
                        style={{ marginLeft: '20px', width: '500px' }}
                    />
                    <Button variant="outlined" onClick={handleAddReview} style={{ marginLeft: '20px', color: 'black', borderColor: 'black' }}>Add Review</Button>
                </div>
                <Box mt={4}>
                    {reviews.length > 0 ? (
                        <Table>
                            <TableBody>
                                {reviews.map((rev, index) => (
                                    <TableRow key={index}>
                                        <TableCell>
                                            <div style={{ display: 'flex', flexDirection: 'column', marginBottom: '10px' }}>
                                                <div style={{ display: 'flex', alignItems: 'center' }}>
                                                    <div style={{ backgroundColor: getDivColor(rev.rating), padding: '2px', borderRadius: '5px', display: 'flex', alignItems: 'center' }}>
                                                        <p style={{ margin: 0, fontSize: '14px', color: 'white' }}>{rev.rating}</p>
                                                        <StarIcon fontSize="small" style={{ fontSize: '14px', color: 'white' }}/>
                                                    </div>
                                                    <Typography variant="body2" style={{ marginLeft: '10px' }}>{getRatingLabel(rev.rating)}</Typography>
                                                </div>
                                                <Typography variant="body2" style={{ marginTop: '5px' }}>{rev.comment}</Typography>
                                            </div>
                                            <p style={{ color: '#878787', fontSize: '12px' }}>
  <b>{rev.username}</b>&nbsp; {/* Adding whitespace after username */}
  <span style={{ display: 'inline-block', verticalAlign: 'middle', borderRadius: '50%', backgroundColor: 'rgb(135, 135, 135)', width: '14px', height: '14px', textAlign: 'center' }}>
    <CheckIcon style={{ fontSize: '14px', color: 'white' }} />&nbsp;
  </span> Certified Buyer; &nbsp;   {`${Math.floor((new Date() - new Date(rev.date)) / (1000 * 60 * 60 * 24))} days ago`}

</p>



                                        </TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    ) : (
                        <Typography variant="body2">No reviews yet.</Typography>
                    )}
                </Box>
            </React.Fragment>
        </>
    );
};

export default ProductDetail;