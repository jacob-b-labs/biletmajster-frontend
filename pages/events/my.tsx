import PageLayout from '@/components/PageLayout'
import {Grid, Typography } from '@mui/material'
import Head from 'next/head'
import { useEffect, useState } from 'react';
import { useRecoilState } from 'recoil';
import { useApiClient } from '../../functions/useApiClient'
import { sessionTokenState } from '../../recoil/sessionTokenState'
import { Event, EventStatus} from 'api/Api';
import { EventCard } from '@/components/events/EventCard';

const sample: Event[] = [
    {
        "id": 2,
        "title": "Bal u krasnali",
        "startTime": 1682930711,
        "endTime": 1684140311,
        "latitude": "52.22216",
        "longitude": "21.00698",
        "name": "To wydarzenie własnie trwa",
        "status": EventStatus.Pending,
        "categories": [
            {
                "id": 1,
                "name": "Sport"
            },
            {
                "id": 3,
                "name": "Science"
            }
        ],
        "freePlace": 10,
        "maxPlace": 10
    },
    {
        "id": 2,
        "title": "Urodzinkii",
        "startTime": 1682930711,
        "endTime": 1684140311,
        "latitude": "52.22216",
        "longitude": "21.00698",
        "name": "To wydarzenie własnie trwa To wydarzenie własnie trwaTo wydarzenie własnie trwaTo wydarzenie własnie trwaTo wydarzenie własnie trwaTo wydarzenie własnie trwaTo wydarzenie własnie trwaTo wydarzenie własnie trwaTo wydarzenie własnie trwaTo wydarzenie własnie trwaTo wydarzenie własnie trwaTo wydarzenie własnie trwa",
        "status": "pending",
        "categories": [
            {
                "id": 1,
                "name": "Sport"
            },
            {
                "id": 3,
                "name": "Science"
            }
        ],
        "freePlace": 13,
        "maxPlace": 56
    }
];

export default function myEvents() {
    const [sessionToken, setSessionToken] = useRecoilState(sessionTokenState);
    const [myEvents, setMyEvents] = useState<Event[]>();
    const [loading, setLoading] = useState(true);
    const apiClient = useApiClient();

    const getMyEvents = async () => {
        console.log("im getting my events");
        if (sessionToken !== undefined) {
            setLoading(false);
            console.log("token ok")
            const response = await apiClient.events.getMyEvents({ headers: { sessionToken: sessionToken } });
            if (response.ok) {
                //console.log(response.data)
                const eventsFromResponse: Event[] = response.data.map((event: Event) => {
                    return {
                        id: event.id,
                        title: event.title,
                        name: event.name,
                        startTime: event.startTime,
                        endTime: event.endTime,
                        latitude: event.latitude,
                        longitude: event.longitude,
                        status: event.status,
                        categories:event.categories,
                        freePlace: event.freePlace,
                        maxPlace: event.maxPlace
                    };
                });
                setMyEvents(eventsFromResponse);
                console.log(eventsFromResponse);
            } else {
                alert(response.statusText);
            }
        }
    }
    useEffect(() => {
        getMyEvents();
    }, []);

    return (
        <>
            <Head>
                <title>My events</title>
            </Head>
            <main>
                <PageLayout/>
                <Grid sx={{marginTop:'60px', mb:3}}>
                    {/*{loading? <h1>loading... </h1> : myEvents === undefined ? <h1>ups</h1> : myEvents.map((event)=><h1>{event.title}</h1>)}*/}
                    {loading? <h1>loading... </h1> : myEvents === undefined ? <h1>ups</h1> : myEvents.map((event)=>
                        <>
                            <EventCard event={event}/>

                        </>
                    )}
                </Grid>
            </main>
        </>
    )
}