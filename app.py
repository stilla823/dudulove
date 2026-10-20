from pathlib import Path

import streamlit as st
import streamlit.components.v1 as components

st.set_page_config(page_title="💕 A surprise for you", page_icon="💕", layout="centered")

# Hide Streamlit's own header/footer/padding so only the surprise shows
st.markdown(
    """
    <style>
      #MainMenu, header, footer {visibility: hidden;}
      .block-container {padding: 0 !important; max-width: 100% !important;}
    </style>
    """,
    unsafe_allow_html=True,
)

base = Path(__file__).parent
html = (base / "index.html").read_text(encoding="utf-8")
css = (base / "style.css").read_text(encoding="utf-8")
js = (base / "script.js").read_text(encoding="utf-8")

# Inline the CSS and JS so everything works inside a single Streamlit component
html = html.replace(
    '<link rel="stylesheet" href="style.css" />', f"<style>{css}</style>"
).replace('<script src="script.js"></script>', f"<script>{js}</script>")

components.html(html, height=700, scrolling=True)
