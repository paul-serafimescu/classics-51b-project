import * as React from 'react';
import * as SlideShow from 'react-slideshow-image';
import Paper from '@mui/material/Paper';
import Divider from '@mui/material/Divider'
import Chip from '@mui/material/Chip';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import 'react-slideshow-image/dist/styles.css'

const slideImages = [
    {
        url: '/images/danube_crossing.jpg',
        caption: 'Roman soldiers crossing the Danube River',
        description: `Located near the bottom of the Column of Trajan, this scene depicts Roman soldiers preparing to attack Dacia by first crossing the Danube River using a pontoon bridge. The Dacians were attacking Roman settlements near Moesia in the Balkans, and killed the Roman governor the province (Wheeler).
                      Shown in the background are arch-like structures, which suggest that the area has already been conquered by the Romans. The region's only remaining threat are the Dacians. The war, considered to the the Second Dacian War, comes after Emperor Domitian's failure to subjugate the Dacians.
                      Decebalus breaks the peace treaty, which begins the war (Wheeler). The main defenses of the Dacians, located along the Carpathian Mountains, involve crossing the Danube around modern-day Serbia in the Balkans, where the Romans must have already had military and civilian infrastructure.
                      Extensive engineering skills must be required to transport so many Roman soldiers and equipment. The soldiers can also be seen carrying the Roman eagle standard, along with their shields. Some Roman soldiers also wear head coverings, which could be seen as a sign of priesthood, but also
                      the cuts could be ears and allusions to Hercules and the lion.`,
        citation: 'Lendering, Jona. Rome, Column of Trajan, Bridge across the Danube. 29 July 2020, https://www.livius.org/pictures/italy/rome/rome-column-of-trajan/column-of-trajan-bridge-across-the-danube/. Accessed 4 June 2022. '
    },
    {
        url: '/images/battle_scene.jpg',
        caption: 'Battle between Romans and Dacians',
        description: `Located toward the bottom-middle of the column, this scene depicts a fierce battle between the Romans and Dacians. The weapons have eroded due to weathering of time, but the ideas remain intact. Overall, battle scenes are very popular within the story
                      shown throughout the column. The symbols shown across the relief have two meanings. Firstly, it is to distinguish between Romans and Dacians, but it also reveals that the Dacians may have had organized battalions and army groups (Wheeler). The Romans on
                      horseback, however, show the superiority of Roman cavalry, and the fallen Dacian warrior symbolizes triumph. While acknowledging the fact that the Romans were victorious and immortalizing this battlefield victory, it also paints the Dacians as a formidable enemy,
                      making the triumph achieved by Emperor Trajan more significant. In this panel, the Dacians are "barbarized", such that they have longer hair and wear more ragged clothing than the more civilized Romans, justifying a war of civilizations as well.`,
        citation: 'Zucker, Steven. “Battle between Romans and Dacians.” Smart History, https://smarthistory.org/column-of-trajan/. Accessed 4 June 2022.'
    },
    {
        url: '/images/decebalus_suicide.jpg',
        caption: 'The suicide of the Dacian King Decebal',
        description: `Before the Second Dacian War waged by Trajan, the Roman Emperor also attacked in 101-102 CE. Although this other war did not yield much military conquest, it diminished the power Decebalus had over Dacian territory (Wheeler). By 106 CE, when Trajan finally conquered Dacia, Decebalus was not willing
                      to accept Roman terms of surrender and capture, and chose to kill himself by supposedly dragging a blade along his neck. This scene is depicted in the Column in Rome. It is a powerful symbol of a barbarian leader giving up his life after Roman victory. It could also be interpreted as a sign of respect
                      to the king, from the Roman Emperor. Interestingly, Trajan chooses not to show himself on the same panel as Decebalus during his suicide, so he keeps the focus on the enemy leader and not himself in this final moment of the war. In the aftermath of the war, the Romans struggled to hold control of Dacia
                      during Hadrian's reign, and ceded a bit of territory to deal with unrest. If interested in other related monuments, there is another victory structure built by the Romans in modern day Adamclisi, Romania, called the Tropaeum Traiani.`,
        citation: 'Harpeam. “The Suicide of the Dacian King Decebal on the Trajan Column.” Wikimedia Commons, 3 Oct. 2009, https://commons.wikimedia.org/wiki/File:Decebal_suicide.jpg. Accessed 4 June 2022.'
    },
];

export const Slideshow = () => {
    const ref = React.useRef(null);

    const numSlides = slideImages.length;
    const sources = [
        "Wheeler, Everett L. \"Rome's Dacian Wars: Domitian, Trajan, and Strategy on the Danube, Part I.\" Journal of Military History 74.4 (2010).",
        "Wheeler, Everett L. \"Rome's Dacian Wars: Domitian, Trajan, and Strategy on the Danube, Part II.\" Journal of Military History 75.1 (2011)",
    ];

    const handleClick = event => {
        const clickTarget = event.target;
        const clickTargetWidth = clickTarget.offsetWidth;
        const xCoordInClickTarget = event.clientX - clickTarget.getBoundingClientRect().left;

        if (clickTargetWidth / 10 > xCoordInClickTarget) {
            ref.current.goBack();
        } else if (9 * clickTargetWidth / 10 < xCoordInClickTarget) {
            ref.current.goNext();
        }
    }

    return (
        <Paper onClick={handleClick} style={{ padding: "10px" }} className="slide-container">
            <Typography style={{ padding: "10px" }} variant="h4" component="h1">Column of Trajan (106-113 CE, Rome)</Typography>
            <Typography style={{ padding: "10px" }} variant="h6" component="h1">Fine-grained marble, 38.4m (98 ft) tall atop pedestal, constructed after Dacian Wars</Typography>
            <SlideShow.Slide ref={ref} autoplay={false} transitionDuration={700}>
                {slideImages.map((slideImage, index) => (
                    <div className="each-slide" key={index} sx={{ maxWidth: "40%" }}>
                        <img style={{ borderRadius: "5px" }} width="70%" src={slideImage.url} alt={slideImage.caption} />
                        <Typography variant="h5" component="p">{slideImage.caption}</Typography>
                        <Typography variant="body1">(Slide {index + 1} of {numSlides})</Typography>
                        <Divider style={{ marginTop: "10px", marginBottom: "15px" }}>
                            <Chip label="Analysis" />
                        </Divider>
                        <Box style={{ width: "100%", textAlign: "left" }}>
                            <Typography style={{ lineHeight: "2" }} variant="body2" component="p" marginLeft="10%" marginRight="10%">
                                {slideImage.description}
                            </Typography>
                        </Box>
                        <Divider style={{ marginTop: "10px", marginBottom: "15px" }}>
                            <Chip label="Image Citation" />
                        </Divider>
                        <Typography style={{ paddingTop: "50px" }} variant="subtitle2" component="i">{slideImage.citation}</Typography>
                        <Divider style={{ marginTop: "10px", marginBottom: "15px" }}>
                            <Chip label="Secondary Source(s)" />
                        </Divider>
                        {sources.map((source, index) => (
                            <div key={index}>
                                <Typography style={{ paddingTop: "50px" }} variant="subtitle2" component="i">{source}</Typography>
                            </div>
                        ))}
                    </div>
                ))}
            </SlideShow.Slide>
        </Paper>
    );
}

export default Slideshow;
