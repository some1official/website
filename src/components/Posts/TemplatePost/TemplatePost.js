import React from 'react'
import './../../../style/components/Posts/TemplatePost/TemplatePost.css'

export default function TemplatePost() {
    return (
        <>
            <div className="title-TemplatePost">
              
              <h1 className="title-title-TemplatePost">Title</h1>
              <p 
                className="author-title-TemplatePost">
                Written by {' '}
                <a href="/" className="link-author-title-TemplatePost">author</a>.</p>
              <div className="title-tags-TemplatePost">
                <div className="title-tags-line1-TemplatePost">
                  <a href="/" className="tag">#tag1</a>{' '}
                  <a href="/" className="tag">#tag2</a>{' '}
                  <a href="/" className="tag">#tag3</a>{' '}
                  <a href="/" className="tag">#tag4</a>{' '}
                  <a href="/" className="tag">#tag5</a>{' '}
                  <a href="/" className="tag">#tag6</a>{' '}
                  <a href="/" className="tag">#tag7</a>{' '}
                  <a href="/" className="tag">#tag8</a>{' '}
                </div>
                <div className="title-tags-line2-TemplatePost">
                  <a href="/" className="tag">#tag9</a>{' '}
                  <a href="/" className="tag">#tag10</a>{' '}
                  <a href="/" className="tag">#tag11</a>{' '}
                  <a href="/" className="tag">#tag12</a>{' '}
                  <a href="/" className="tag">#tag13</a>{' '}
                  <a href="/" className="tag">#tag14</a>{' '}
                  <a href="/" className="tag">#tag15</a>{' '}
                  <a href="/" className="tag">#tag16</a>{' '}
                </div>
                
              </div>
            </div>

            <div className="content-TemplatePost">
              <div className="section-1-content-TemplatePost">
                <h1 className="title-section-1-content-TemplatePost">Section 1</h1>
                <p className="text-section-1-content-TemplatePost">
                She who arrival end how fertile enabled. Brother she add yet see minuter natural smiling article painted. Themselves at dispatched interested insensible am be prosperous reasonably it. In either so spring wished. Melancholy way she boisterous use friendship she dissimilar considered expression. Sex quick arose mrs lived. Mr things do plenty others an vanity myself waited to. Always parish tastes at as mr father dining at. 
                <br />
                <br />
                Unpleasant astonished an diminution up partiality. Noisy an their of meant. Death means up civil do an offer wound of. Called square an in afraid direct. Resolution diminution conviction so mr at unpleasing simplicity no. No it as breakfast up conveying earnestly immediate principle. Him son disposed produced humoured overcame she bachelor improved. Studied however out wishing but inhabit fortune windows. 
                </p>
              </div>

              <div className="section-2-content-TemplatePost">
                <h1 className="title-section-2-content-TemplatePost">Section 2</h1>
              </div>
            </div>
        </>
    )
}