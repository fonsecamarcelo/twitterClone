import React from 'react'
import ReactDOM from 'react-dom/client'

import {Bell, BookmarkSimple, DotsThreeCircle, Envelope, FileText, Hash, House, Sparkle, User} from 'phosphor-react'
import './global.css';
import twitterlogo from './assets/logo-twitter.svg'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
    <React.StrictMode>
        <div className='layout'>
            <aside className='asidebar'>
                <img className='logo' src={twitterlogo} alt='logo'/>
                <nav className='main-navigation'>
                    <a className='active' href=''>
                        <House wheight='fill'/>
                        Home
                    </a>
                    <a href=''>
                        <Hash />
                        Explore
                    </a>
                    <a href=''>
                        <Bell />
                        Notifications
                    </a>
                    <a href=''>
                        <Envelope />
                        Messages
                    </a>
                    <a href=''>
                        <BookmarkSimple/>
                        Bookmarks
                    </a>
                    <a href=''>
                        <FileText/>
                        Lists
                    </a>
                    <a href=''>
                        <User/>
                        Profile
                    </a>
                    <a href=''>
                        <DotsThreeCircle/>
                        More
                    </a>
                </nav>
                <button className='new-tweet' type='button'>
                    Tweet
                </button>
            </aside>
            <div className='content'>
                <main className='timeline'>
                    <div className='timeline-header'>
                        Home
                        <Sparkle/>
                    </div>
                <form className='new-tweet-form'>
                    <label htmlFor='tweet'>
                        <img src='https://github.com/fonsecamarcelo.png' alt='user'/>
                        <textarea id='tweet' placeholder="What's happeningg?"/>
                    </label>

                    <button type='submit'>Tweet</button>
                </form>
                </main>
            </div>
        </div>
    </React.StrictMode>,
)
