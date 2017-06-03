<?php 


/* Template Name: Trial Video */ 

 ?>
<?php get_header(); ?>
<section id="videoPlayer" class="playerArrive">
<div id="videoControl">
  <section>
        <div class="closePlayer">
          <svg viewBox="0 0 100 125">
            <g transform="translate(0,-952.36218)">
              <path d="m 10.99999,1002.3622 c 0,21.539 17.4609,39 39,39 21.53912,0 39.00002,-17.461 39.00002,-39 0,-21.53892 -17.4609,-39.00002 -39.00002,-39.00002 -21.5391,0 -39,17.46111 -39,39.00002 z m 13,0 c 0.01,-0.4696 0.092,-0.9139 0.5625,-1.375 l 16,-17.00002 c 0.7356,-0.7842 2.0552,-0.83769 2.8437,-0.062 0.7468,0.7343 0.7825,2.0517 0.062,2.8125 l -12.8437,13.62451 43.37502,0 c 1.10459,0 2,0.8954 2,2 0,1.1046 -0.89541,2 -2,2 l -43.37502,0 12.8437,13.625 c 0.72,0.7609 0.7161,2.1431 -0.062,2.8438 -0.8709,0.7838 -2.0967,0.6785 -2.8437,-0.094 l -16,-17 c -0.284,-0.2982 -0.5625,-0.9122 -0.5625,-1.375 z"/>
            </g>  
          </svg><!-- Created by unlimicon from the Noun Project -->
        </div>
        <div id="reelPlayer" class="reel">
          <?php the_field("vimeo_link"); ?>
        </div>
        <section class="featuredWorks">
        	<div>
        		<h2>Featured Work</h2>
        	</div>
			<?php
			// The Query
			$args = array(
				'post_type' => 'featured_work',
				'posts_per_page' => -1 ,
			);
			$featuredWork_query = new WP_Query( $args );

			// The Loop
			if ( $featuredWork_query->have_posts() ) { ?>
				
				<!-- <div class="featuredWorks-control"> -->
				<div class="boxes">
			<?php while ( $featuredWork_query->have_posts() ) {
				$featuredWork_query->the_post(); ?>
					<div 	id=<?php echo( basename(get_permalink()) ); ?> 
							class="box red" 
							style="background-image: url(<?php the_post_thumbnail_url('full'); ?>"
					>
						<div class="featured-title"><?php the_title(); ?></div>
						<div class="featured-director"> <?php the_field('director') ?> </div>
						<div class="modal">
					        <div class="closeModal">
					        	<svg viewBox="0 0 100 125" enable-background="new 0 0 100 100" xml:space="preserve">
					                <path fill="#221E20" d="M74.042,25.959c-13.28-13.277-34.807-13.277-48.084-0.001C12.68,39.236,12.679,60.764,25.959,74.042   c13.277,13.277,34.804,13.277,48.084-0.002C87.32,60.764,87.318,39.237,74.042,25.959z M32.687,64.008   c-0.007-0.054-0.017-0.108-0.021-0.165c-0.01-0.101-0.015-0.205-0.015-0.313c0-0.003,0-0.008,0-0.011V39.494   c0-2.115,1.712-3.826,3.827-3.827c2.11,0.001,3.823,1.714,3.823,3.824v14.798l20.516-20.518c1.495-1.494,3.918-1.494,5.411,0   c1.493,1.492,1.493,3.915-0.002,5.41L45.71,59.698h14.797c2.111-0.001,3.825,1.713,3.826,3.826   c-0.002,2.111-1.714,3.822-3.824,3.824l-24.03-0.001c-0.116,0.001-0.223-0.004-0.329-0.017c-0.045-0.002-0.09-0.008-0.134-0.013   c-0.035-0.004-0.072-0.009-0.105-0.019c-0.782-0.114-1.534-0.469-2.139-1.07c-0.604-0.606-0.958-1.358-1.075-2.144   C32.691,64.061,32.691,64.034,32.687,64.008z"/>
					              </svg>
					        </div>
					        <div id="vimeoWrap" class="videoWrapper">
					          <?php the_field("vimeo_link"); ?>
					        </div>
					    </div> <!-- end of modal -->
					</div> <!-- end of box --> 
				<?php } ?>
					</div> <!-- end of boxes -->
				<?php 
				/* Restore original Post Data */
				wp_reset_postdata();
			} else {
				// no posts found
			}
			?>
        	</section>
        </div> <!-- end of .videoTrial -->
   	</section>
    

<?php get_footer(); ?>