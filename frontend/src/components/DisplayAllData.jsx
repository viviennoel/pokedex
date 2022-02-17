const DisplayAllData = Component => ({ ...props }) => {
    console.log('this is props', props.dataFilter)
    // Fetch different data and then render the component with this props dataType
    let data = [
        {
            image:"https://res.cloudinary.com/viviennoel07/image/upload/v1617370513/communication_omwwkz.jpg",
            value:"This is the title"
        },
        {
            image:"https://res.cloudinary.com/viviennoel07/image/upload/v1617370513/propre_vzkts4.jpg",
            value:"This is the title 2"
        },
    ]

    return(
        <Component data={data} />
    )
};

export default DisplayAllData;